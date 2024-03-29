import React, { useEffect, useRef, useState } from "react";
import { Avatar, Box, useTheme } from "@mui/material";
import { useDrawer } from "../../../../hook/useDrawer";
import { CalendarHeader } from "./components/calendarHeader";
import Calendar from "./components/calendar";
import { Map, MapRef, Marker } from "react-map-gl";
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
import mapboxgl from "mapbox-gl";
import MapboxLanguage from "@mapbox/mapbox-gl-language";

const Past = () => {
  const [user] = useRecoilState(userState);
  const { navigate } = useOutletContext<ContextInterface>();
  const { open, Drawer, toggleDrawer } = useDrawer();
  const theme = useTheme();
  const today = new Date();
  const [displayDate, setDisplayDate] = useState<string>(
    `${today.getFullYear()}.${
      today.getMonth() < 10 ? "0" + today.getMonth() : today.getMonth()
    }`
  );
  const [initPosition, setInitPosition] = useState({
    longitude: 127.9068,
    latitude: 35.6699,
    zoom: 15,
  });
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
  const [viewState, setViewState] = React.useState(initPosition);
  const positionRef = useRef<LocationProps>(initPosition);
  const [preview, setPreview] = useState<WooyeonsType>();
  const [existDays, setExistDays] = useState<Array<number>>([]);

  // 초기화면 : 지도를 현재위치로 고정
  useEffect(() => {
    if (positionRef.current === initPosition) {
      getCurrentLocation({ setViewState });
    }
    mutate();
    preview !== undefined &&
      mapRef.current?.flyTo({
        center: [preview.longitude, preview.latitude],
        duration: 500,
      });

    navigator.geolocation.getCurrentPosition((position) => {
      setPosition({
        longitude: position.coords.longitude,
        latitude: position.coords.latitude,
        zoom: 15,
      });
      console.log("setposi: ", position.coords);
    });
  }, [navigator, searchDate, preview]);

  function setPosition(viewstate: LocationProps) {
    setInitPosition(viewstate);
    console.log("setposition");
    console.log("initpo: ", initPosition);
  }

  useEffect(() => {
    positionRef.current = viewState;
    //지도 언어설정
    if (mapRef.current === null) return;
    const language = new MapboxLanguage({
      defaultLanguage: "ko",
    });
    console.log(language);
    mapRef.current.addControl(language);
  }, [viewState]);

  const { mutate } = useMutation(
    "get",
    () => getPastWooyeon(searchDate.month, searchDate.year, user.access_token),
    {
      onMutate() {
        //기존 우연들 초기화와 함께 시작
        setTodayWooyeons([]);
        console.log("getPastWooyeon onMutate");
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

  // useEffect(() => {
  //   if (mapRef.current === null) return;
  //   const language = new MapboxLanguage({
  //     defaultLanguage: "ko",
  //   });
  //   mapRef.current.addControl(language);
  // }, [mapRef]);

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
            id="map"
            ref={mapRef}
            initialViewState={initPosition}
            mapboxAccessToken={import.meta.env.VITE_MAP_API}
            // {...viewState}
            mapStyle={`mapbox://styles/mapbox/${theme.palette.mode}-v10`}
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
            doubleClickZoom={false}
            touchPitch={false}
            touchZoomRotate={false}
          >
            {preview !== undefined && (
              <Marker
                longitude={preview.longitude}
                latitude={preview.latitude}
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
