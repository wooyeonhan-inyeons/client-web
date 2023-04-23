import React from "react";
import { Box } from "@mui/material";
import { useDrawer } from "../../../../hook/useDrawer";
import { CalendarHeader } from "./components/calendarHeader";

const Past = () => {
  const { open, Drawer, toggleDrawer } = useDrawer();

  const month = "2023.04";
  const toDay = new Date();

  return (
    <Box sx={{ overflow: "hidden" }}>
      <Box>나의 우연 확인하기</Box>
      <Drawer
        open={open}
        toggleDrawer={toggleDrawer}
        headerChildren={CalendarHeader(month)}
        drawerBleeding={128}
      >
        <h1>{toDay.getTime()}</h1>
      </Drawer>
    </Box>
  );
};

export default Past;
