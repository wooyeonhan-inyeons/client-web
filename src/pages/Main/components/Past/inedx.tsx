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
  }, [navigator]);

  const [geocode, setGeocode] = useState<string | undefined>(undefined);
  const positionRef = useRef<LocationProps | undefined>(initPosition);

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
        <Calendar setDisplayDate={setDisplayDate} />
      </Drawer>
    </>
  );
};

export default Past;
