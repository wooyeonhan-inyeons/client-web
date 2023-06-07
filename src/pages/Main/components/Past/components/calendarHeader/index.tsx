import { Box, Typography } from "@mui/material";
import React from "react";
import { handleHeaderStyle } from "./style";
import Preview from "../Preview";
import { CalendarHeaderProp } from "../../interface";

const week = ["S", "M", "T", "W", "T", "F", "S"];

export const CalendarHeader = ({
  displayDate,
  todayWooyeons,
  setViewState,
  setPreview,
}: CalendarHeaderProp) => {
  return (
    <Box sx={handleHeaderStyle}>
      <Box className="drawerHeader">
        <Preview
          todayWooyeons={todayWooyeons}
          setViewState={setViewState}
          setPreview={setPreview}
        />
        <Typography variant="h6">Calendar</Typography>
        <Typography variant="body2">{displayDate}</Typography>
      </Box>
      <Box className="calendarHeader">
        {week.map((item, index) => (
          <Typography variant="caption" key={item + index}>
            {item}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};
