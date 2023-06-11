import React, { useEffect, useRef, useState } from "react";
import { Avatar, Box, useTheme } from "@mui/material";
import { useDrawer } from "../../../../hook/useDrawer";
import { CalendarHeader } from "./components/calendarHeader";
import Calendar from "./components/calendar";
import { MapRef, Marker, ViewStateChangeEvent } from "react-map-gl";
import { forUntouchableStyle } from "../Search/style";
import { getCurrentLocation } from "../../../AddPost/components/MapAddPost/utils";
import { ContextInterface, LocationProps } from "../../../../interface";
import { getPastWooyeon } from "./api";
import { SearchDateType, WooyeonsType } from "./interface";
import { useMutation } from "react-query";
import { MonthlyWooyeonList, getDaysExist } from "./utils";
import { useOutletContext } from "react-router";
import { userState } from "../../../../recoil";
import { useRecoilState } from "recoil";

// 가끔 우연 정보가 안받아와짐

const Past = () => {
  const [user] = useRecoilState(userState);
  const { navigate, Map, mapboxgl } = useOutletContext<ContextInterface>();
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
  const initPosition = {
    longitude: 127.9068,
    latitude: 35.6699,
    zoom: 15,
  };
  const mapRef = useRef<MapRef | null>(null);
  const [viewState, setViewState] = React.useState(initPosition);
  const positionRef = useRef<LocationProps | undefined>(initPosition);
  const [preview, setPreview] = useState<WooyeonsType>();
  const [existDays, setExistDays] = useState<Array<number>>([]);
  // 초기화면 : 지도를 현재위치로 고정
  useEffect(() => {
    if (positionRef.current == initPosition) {
      getCurrentLocation({ setViewState });
    }
    mutate();
    console.log("preview: ", preview);
    preview !== undefined &&
      mapRef.current?.flyTo({
        center: [preview.longitude, preview.latitude],
        duration: 80,
      });
    console.log("user token", user.access_token);
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
    () => getPastWooyeon(searchDate.month, searchDate.year, user.access_token),
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
        setExistDays(getDaysExist(monthlyList));
      },
    }
  );

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
            dragPan={false}
            mapboxAccessToken={import.meta.env.VITE_MAP_API}
            {...viewState}
            onMove={(evt: ViewStateChangeEvent) => setViewState(evt.viewState)}
            mapStyle={`mapbox://styles/mapbox/${theme.palette.mode}-v9`}
            style={{
              backgroundColor:
                theme.palette.mode === "light" ? "#f6f6f4" : "#343332",
              width: "100%",
              height: "100vh",
            }}
            mapLib={mapboxgl}
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
          displayDate,
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

export default Past;
