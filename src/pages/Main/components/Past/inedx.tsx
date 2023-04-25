import React from "react";
import { Box } from "@mui/material";
import { useDrawer } from "../../../../hook/useDrawer";
import { CalendarHeader } from "./components/calendarHeader";
import Calendar from "./components/calendar";

const Past = () => {
  const { open, Drawer, toggleDrawer } = useDrawer();

  const month = "2023.04";

  return (
    <>
      <Box>내가 발견한 우연 확인하기</Box>
      <Drawer
        open={open}
        toggleDrawer={toggleDrawer}
        headerChildren={CalendarHeader(month)}
        drawerBleeding={100}
      >
        <Calendar />
      </Drawer>
    </>
  );
};

export default Past;
