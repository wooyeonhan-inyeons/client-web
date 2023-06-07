import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { useDrawer } from "../../../../hook/useDrawer";
import { CalendarHeader } from "./components/calendarHeader";
import Calendar from "./components/calendar";
import { Map, MapRef, Marker } from "react-map-gl";
import mapboxgl from "mapbox-gl";
import { forUntouchableStyle } from "../Search/style";
import {
  getCurrentGeocode,
  getCurrentLocation,
} from "../../../AddPost/components/MapAddPost/utils";
import { LocationProps } from "../../../../interface";
import { getPastWooyeon } from "./api";
import { number } from "prop-types";
import { SearchDateType } from "./interface";
import { useMutation } from "react-query";

// 달별 우연 조회 : 달력의 날짜 클릭 -> 클릭한 날짜와 연도를 param로 넣고 getPastWooyeon
// 클릭한 날짜에 created_at 우연을 달력 위 컴포넌트로 띄움
// 컴포넌트 클릭시 post lat,log 위치로 지도 이동

const Past = () => {
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

  const initPosition = {
    longitude: 127.9068,
    latitude: 35.6699,
    zoom: 6,
  };
  const mapRef = useRef<MapRef | null>(null);
  const [viewState, setViewState] = React.useState(initPosition);

  // 사용자의 위치정보 가져와서 viewport에 저장
  useEffect(() => {
    if (positionRef.current == initPosition) {
      getCurrentLocation({ setViewState });
    }
    console.log("searchDate: ", searchDate);
    mutate(); // 일단 이번달 우연 조회 시작
  }, [navigator, searchDate]);

  const [geocode, setGeocode] = useState<string | undefined>(undefined);
  const positionRef = useRef<LocationProps | undefined>(initPosition);

  const { mutate } = useMutation(
    "get",
    () => getPastWooyeon(searchDate.month, searchDate.year),
    {
      onMutate() {
        //기존 우연들 초기화와 함께 시작
      },
      onSuccess: (data) => {
        console.log("조회된 우연들: ", data);
        console.log("searchDate: ", searchDate);
      },
    }
  );

  // 받아온 위치 정보를 한글주소체계로 변환 후 post에 저장
  useEffect(() => {
    positionRef.current = viewState;
    if (positionRef.current !== undefined) {
      getCurrentGeocode(positionRef.current).then((e) => {
        setGeocode(e.reverse().join(" "));
      });
    }
  }, [viewState]);

  return (
    <>
      <Box
        sx={{
          "& .mapboxgl-map": {
            touchAction: "none",
          },
        }}
      >
        <Map
          ref={mapRef}
          mapboxAccessToken={import.meta.env.VITE_MAP_API}
          {...viewState}
          onMove={(evt) => setViewState(evt.viewState)}
          mapStyle={`mapbox://styles/mapbox/${theme.palette.mode}-v9`}
          style={{
            backgroundColor:
              theme.palette.mode === "light" ? "#f6f6f4" : "#343332",
            width: "100%",
            height: "100vh",
          }}
          mapLib={mapboxgl}
        >
          <Marker
            longitude={viewState.longitude}
            latitude={viewState.latitude}
            anchor="center"
          >
            {/* <img src={markerImg} alt="marker" /> */}
            <Typography variant="h5" sx={{ marginBottom: "40px" }}>
              🍀
            </Typography>
          </Marker>
        </Map>
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
        headerChildren={CalendarHeader(displayDate)}
        drawerBleeding={100}
      >
        <Calendar
          setDisplayDate={setDisplayDate}
          setSearchDate={setSearchDate}
        />
      </Drawer>
    </>
  );
};

export default Past;
