import { useRecoilState } from "recoil";
import { userState } from "../../../../recoil";
import { useOutletContext } from "react-router";
import { ContextInterface, HeaderOptinterface } from "../../../../interface";
import { Avatar, Box, useTheme } from "@mui/material";
import { useDrawer } from "../../../../hook/useDrawer";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { LocationProps, SearchDateType, WooyeonsType } from "./interface";
import { MapRef, Marker } from "react-map-gl";
import { getCurrentLocation } from "../../../AddPost/components/MapAddPost/utils";
import { useMutation } from "react-query";
import { getHistory } from "./api";
import { MonthlyWooyeonList, getDaysExist } from "./utils";

import { CaretLeft } from "@phosphor-icons/react";
import { WrapperOptInterface } from "../../../../component/MainWrapper/interface";
import mapboxgl from "mapbox-gl";
import { forUntouchableStyle } from "../../../Main/components/Search/style";
import { CalendarHeader } from "../../../Main/components/Past/components/calendarHeader";
import Calendar from "../../../Main/components/Past/components/calendar";
import Map from "react-map-gl";
import MapboxLanguage from "@mapbox/mapbox-gl-language";

const History = () => {
  const { navigate, initPosition, setHeadOpt, setWrapperOpt } =
    useOutletContext<ContextInterface>();
  const [user] = useRecoilState(userState);
  const { open, Drawer, toggleDrawer } = useDrawer();
  const theme = useTheme();
  const today = new Date();
  const [displayDate, setDisplayDate] = useState<string>(
    `${today.getFullYear()}.${
      today.getMonth() < 10 ? "0" + today.getMonth() : today.getMonth()
    }`
  );

  //drawer를 올릴 떄 터치 이벤트를 사용할 수 없는 환경을 위함
  const isTouchDevice = "ontouchstart" in window;
  // 검색할 날짜 연월일
  const [searchDate, setSearchDate] = useState<SearchDateType>({
    year: today.getFullYear(),
    month: today.getMonth() + 1,
    date: today.getDate(),
  });
  let monthlyList: WooyeonsType[][];
  const [todayWooyeons, setTodayWooyeons] = useState<WooyeonsType[]>([]);
  const mapRef = useRef<MapRef | null>(null);
  const [viewState, setViewState] = React.useState<LocationProps>(initPosition);
  const positionRef = useRef<LocationProps>(initPosition);
  const [preview, setPreview] = useState<WooyeonsType>();
  const [existDays, setExistDays] = useState<Array<number>>([]);

  useEffect(() => {
    if (positionRef.current !== initPosition) {
      getCurrentLocation({ setViewState });
    }
    mutate();
    console.log("preview: ", preview);
    preview !== undefined &&
      mapRef.current?.flyTo({
        center: [preview.longitude, preview.latitude],
        duration: 80,
      });
  }, [searchDate, preview]);

  useEffect(() => {
    positionRef.current = viewState;
    preview !== undefined &&
      mapRef.current?.flyTo({
        center: [preview.longitude, preview.latitude],
        duration: 80,
      });
  }, [viewState]);

  const { mutate } = useMutation(
    "get",
    () => getHistory(searchDate.month, searchDate.year, user.access_token),
    {
      onMutate() {
        //기존 우연들 초기화와 함께 시작
        console.log("onmutate");
      },
      onSuccess: (wooyeons) => {
        console.log("success");
        // 오늘 기준 이번달 우연 리스트 만드는 함수 수행
        monthlyList = MonthlyWooyeonList(
          wooyeons,
          today.getFullYear(),
          today.getMonth() + 1
        );
        setTodayWooyeons(monthlyList[searchDate.date - 1]); // 오늘 생성된 조회한 우연들
        console.log("오늘: ", todayWooyeons);
        setExistDays(getDaysExist(monthlyList));
      },
    }
  );

  useEffect(() => {
    if (mapRef.current === null) return;
    const language = new MapboxLanguage();
    mapRef.current.addControl(language);
  }, [mapRef.current]);

  //// 헤더 설정
  const headerOption: HeaderOptinterface = {
    menus: [{ key: "나의 우연들", value: "/history" }],
    icon_L: CaretLeft,
    fn_L: () => navigate(-1),
    headerType: "V3",
  };
  const wrapperOpt: WrapperOptInterface = {
    isNoneHeadPadding: false,
    isFullWidth: true,
  };

  useLayoutEffect(() => {
    //네비게이션 리스트 업데이트
    setHeadOpt(headerOption);
    setWrapperOpt(wrapperOpt);
  }, []);

  return (
    <>
      <Box
        sx={{
          "& .mapboxgl-map": {
            touchAction: "none",
          },
        }}
      >
        {Map && (
          <Map
            ref={mapRef}
            mapboxAccessToken={import.meta.env.VITE_MAP_API}
            {...viewState}
            // onMove={(evt: ViewStateChangeEvent) => setViewState(evt.viewState)}
            mapStyle={`mapbox://styles/mapbox/${theme.palette.mode}-v9`}
            style={{
              backgroundColor:
                theme.palette.mode === "light" ? "#f6f6f4" : "#343332",
              width: "100%",
              height: "100vh",
            }}
            mapLib={mapboxgl}
            dragPan={false}
            dragRotate={false}
            scrollZoom={false}
          >
            {preview !== undefined && (
              <Marker
                longitude={viewState.longitude}
                latitude={viewState.latitude}
                anchor="center"
              >
                <Avatar
                  alt={preview.image[0].img_url}
                  src={preview.image[0].img_url}
                  sx={{
                    width: 56,
                    height: 56,
                    boxShadow:
                      "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
                    zIndex: 50,
                  }}
                  onClick={() => navigate(`detail/${preview.post_id}`)}
                />
              </Marker>
            )}
          </Map>
        )}
      </Box>
      {
        //터치 이벤트를 사용할 수 없는 환경을 위함
        !isTouchDevice && (
          <Box onClick={toggleDrawer} sx={forUntouchableStyle} />
        )
      }
      <Drawer
        open={open}
        toggleDrawer={toggleDrawer}
        headerChildren={CalendarHeader({
          todayWooyeons,
          setPreview,
        })}
        drawerBleeding={100}
      >
        <Calendar
          setDisplayDate={setDisplayDate}
          setSearchDate={setSearchDate}
          existDays={existDays}
        />
      </Drawer>
    </>
  );
};

export default History;
