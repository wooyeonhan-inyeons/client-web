import React, { useState } from "react";
import { Box } from "@mui/material";
import { useDrawer } from "../../../../hook/useDrawer";
import { CalendarHeader } from "./components/calendarHeader";
import Calendar from "./components/calendar";

const Past = () => {
  const { open, Drawer, toggleDrawer } = useDrawer();

  const today = new Date();
  const [displayDate, setDisplayDate] = useState<string>(
    `${today.getFullYear()}.${
      today.getMonth() < 10 ? "0" + today.getMonth() : today.getMonth()
    }`
  );

  return (
    <>
      <Box>내가 발견한 우연 확인하기</Box>
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
