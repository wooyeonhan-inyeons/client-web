import React, { useEffect, useRef } from "react";
import { Box } from "@mui/material";
import { calendarStyle } from "./style";

function Calendar() {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // 시간, 분, 초, 밀리초를 0으로 설정
  const datesRef = useRef<HTMLElement | null>(null);

  //현재일 기준으로 앞 뒤로 100일의 데이터 배열 반환
  function get200Dates(date: Date): Date[] {
    const millisecsInDay = 86400000; // 1일의 밀리초 수

    const currDate = date;

    const output: Date[] = [];
    const startDate = new Date(currDate.getTime() - millisecsInDay * 100);
    const endDate = new Date(currDate.getTime() + millisecsInDay * 30);
    let pointDate = startDate;

    while (pointDate <= endDate) {
      output.push(pointDate);
      pointDate = new Date(pointDate.getTime() + millisecsInDay);
    }
    return output;
  }

  const rangedDate = get200Dates(today);

  useEffect(() => {
    if (datesRef.current) {
      console.log(datesRef.current?.parentElement);
      datesRef.current?.parentElement?.scrollTo(0, 700);
    }
  }, [datesRef.current]);

  return (
    <Box sx={calendarStyle} ref={datesRef}>
      <Box sx={{ width: `calc((100% / 7) * ${rangedDate[0].getDay()})` }}></Box>
      {rangedDate.map((item: Date) => {
        let classNames = "calendarItem";
        if (item.getTime() === today.getTime()) classNames += " todayItem";
        if (item.getDay() % 6 === 0) classNames += " weekendItem";
        if (item.getDate() === 1) classNames += " monthItem";

        return (
          <div className={classNames} key={item.toString()}>
            {item.getDate()}
          </div>
        );
      })}
    </Box>
  );
}

export default Calendar;
