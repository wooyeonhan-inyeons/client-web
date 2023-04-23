import { Box, Typography } from "@mui/material";
import React from "react";
import { handleHeaderStyle } from "../../style";

const week = ["S", "M", "T", "W", "T", "F", "S"];

export const CalendarHeader = (month: string) => {
  return (
    <Box sx={handleHeaderStyle}>
      <Box className="drawerHeader">
        <Typography variant="h6">Calendar</Typography>
        <Typography variant="body2">{month}</Typography>
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
