import { Box } from "@mui/material";
import React from "react";
import { calendarStyle } from "./style";

function Calendar() {
  const toDay = new Date();

  //현재일 기준으로 앞 뒤로 100일의 데이터 배열 반환
  function get200Dates(date: Date): Date[] {
    const millisecsInDay = 86400000; // 1일의 밀리초 수
    const currDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate()
    );
    const output: Date[] = [];
    const startDate = new Date(currDate.getTime() - millisecsInDay * 100);
    const endDate = new Date(currDate.getTime() + millisecsInDay * 100);
    let pointDate = startDate;

    while (pointDate <= endDate) {
      output.push(pointDate);
      pointDate = new Date(pointDate.getTime() + millisecsInDay);
    }

    return output;
  }

  const rangedDate = get200Dates(toDay);

  return (
    <Box sx={calendarStyle}>
      {rangedDate.map((item: Date) => (
        <div className="calendarItem" key={item.toString()}>
          {item.getDate()}
        </div>
      ))}
    </Box>
  );
}

export default Calendar;
