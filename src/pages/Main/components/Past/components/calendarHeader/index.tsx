import { Box, Typography } from "@mui/material";
import React from "react";
import { handleHeaderStyle } from "./style";
import Preview from "../Preview";

const week = ["S", "M", "T", "W", "T", "F", "S"];

export const CalendarHeader = (displayDate: string) => {
  return (
    <Box sx={handleHeaderStyle}>
      <Box className="drawerHeader">
        <Preview />
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
