import { Box, Typography } from "@mui/material";
import React from "react";
import { handleHeaderStyle } from "./style";
import Preview from "../Preview";
import { CalendarHeaderProp } from "../../interface";
import { mainPrimary, secondary } from "../../../../../../common";

const week = ["S", "M", "T", "W", "T", "F", "S"];

export const CalendarHeader = ({
  displayDate,
  todayWooyeons,
  setPreview,
}: CalendarHeaderProp) => {
  return (
    <Box sx={handleHeaderStyle}>
      <Box className="drawerHeader">
        <Preview todayWooyeons={todayWooyeons} setPreview={setPreview} />
        <Typography variant="h6">Calendar</Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
          }}
        >
          <div
            style={{
              width: "0.7rem",
              height: "0.7rem",
              backgroundColor: mainPrimary,
              borderRadius: "50%",
              display: "inline-block",
            }}
          ></div>
          <Typography variant="body2">우연을 본 날</Typography>
          <div
            style={{
              width: "0.7rem",
              height: "0.7rem",
              backgroundColor: secondary,
              borderRadius: "50%",
              display: "inline-block",
            }}
          ></div>
          <Typography variant="body2">오늘</Typography>
        </Box>
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
