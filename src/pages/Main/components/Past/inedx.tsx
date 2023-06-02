import React, { useState } from "react";
import { Box, useTheme } from "@mui/material";
import { useDrawer } from "../../../../hook/useDrawer";
import { CalendarHeader } from "./components/calendarHeader";
import Calendar from "./components/calendar";
import { Map } from "react-map-gl";
import mapboxgl from "mapbox-gl";
import { forUntouchableStyle } from "../Search/style";

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
            backgroundColor:
              theme.palette.mode === "light" ? "#f6f6f4" : "#343332",
          }}
          mapLib={mapboxgl}
        />
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
