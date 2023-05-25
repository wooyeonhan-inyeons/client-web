import React, { useState } from "react";
import { Box, useTheme } from "@mui/material";
import { useDrawer } from "../../../../hook/useDrawer";
import { CalendarHeader } from "./components/calendarHeader";
import Calendar from "./components/calendar";
import { Map } from "react-map-gl";
import mapboxgl from "mapbox-gl";

const Past = () => {
  const { open, Drawer, toggleDrawer } = useDrawer();
  const theme = useTheme();
  const today = new Date();
  const [displayDate, setDisplayDate] = useState<string>(
    `${today.getFullYear()}.${
      today.getMonth() < 10 ? "0" + today.getMonth() : today.getMonth()
    }`
  );

  return (
    <>
      <Box>내가 발견한 우연 확인하기</Box>
      <Map
        initialViewState={{
          latitude: 35.8555,
          longitude: 128.4936,
          zoom: 14,
          bearing: 0,
          pitch: 0,
        }}
        // {...viewport}
        mapboxAccessToken={import.meta.env.VITE_MAP_API}
        mapStyle={`mapbox://styles/mapbox/${theme.palette.mode}-v9`}
        style={{
          width: "100%",
          height: "100vh",
          // overflow: "hidden",
          backgroundColor:
            theme.palette.mode === "light" ? "#f6f6f4" : "#343332",
        }}
        mapLib={mapboxgl}
      ></Map>
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
