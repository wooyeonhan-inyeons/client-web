import React, { createElement, useEffect, useRef } from "react";
import { Box } from "@mui/material";
import { calendarStyle } from "./style";
import useIntersectionObserver from "../../../../../../hook/useIntersectionObserver";
import { CalenderInterface, SetSearchDateType } from "./interface";
import { SearchDateType } from "../../interface";
import { getDaysInMonth } from "../../utils";
import { week } from "../calendarHeader";

//현재일 기준으로 앞 뒤로 특정 범위의 데이터 배열 반환
function get200Dates(date: Date): Date[] {
  const millisecsInDay = 86400000; // 1일의 밀리초 수

  const currDate = date;

  const output: Date[] = [];
  const startDate = new Date(currDate.getTime() - millisecsInDay * 100);
  const endDate = new Date(currDate.getTime() + millisecsInDay * 14);
  let pointDate = startDate;

  while (pointDate <= endDate) {
    output.push(pointDate);
    pointDate = new Date(pointDate.getTime() + millisecsInDay);
  }
  return output;
}

function Calendar({
  setDisplayDate,
  setSearchDate,
}: CalenderInterface & SetSearchDateType) {
  const today = new Date();
  // console.log(today.getMonth() + 1, today.getFullYear(), today.getDate());
  today.setHours(0, 0, 0, 0); // 시간, 분, 초, 밀리초를 0으로 설정
  const datesRef = useRef<HTMLElement | null>(null);
  const rangedDate = get200Dates(today);

  useEffect(() => {
    if (datesRef.current) {
      datesRef.current
        ?.querySelector(".todayItem")
        ?.scrollIntoView({ block: "center" }); // 해당 객체 스크롤 뷰 중간으로
    }
  }, []);

  const onIntersect: IntersectionObserverCallback = ([{ isIntersecting }]) => {
    // console.log(`감지결과 : ${isIntersecting}`);
    setDisplayDate(
      `${today.getFullYear()}.${(today.getMonth() + 1)
        .toString()
        .padStart(2, "0")}`
    );
  };

  const onClickDate = (e: React.MouseEvent<HTMLDivElement>) => {
    const date = e.currentTarget.innerText;
    // console.log(date);
    setSearchDate((prevDate: SearchDateType) => ({
      ...prevDate,
      date: parseInt(date),
    }));
  };

  const { setTarget } = useIntersectionObserver({ onIntersect });

  return (
    <Box sx={calendarStyle} ref={datesRef}>
      <Box sx={{ width: `calc((100% / 7) * ${rangedDate[0].getDay()})` }} />
      {rangedDate.map((item: Date, index: number) => {
        let classNames = "calendarItem";
        if (item.getTime() === today.getTime()) {
          classNames += " todayItem";
        } else {
          if (item.getDay() % 6 === 0) classNames += " weekendItem";
          if (item.getDate() === 1) classNames += " monthItem";
          if (item.getTime() > today.getTime()) classNames += " disableItem";
          // 마지막 일자면 month 컴포넌트 className 추가
          // 이전 월과 현재 월이 다른 경우, 새로운 월을 나타내는 컴포넌트 생성
          if (
            index > 0 &&
            item.getMonth() !== rangedDate[index - 1].getMonth()
          ) {
            // 월별 컴포넌트를 생성하고, 월 정보를 전달
            const monthComponent = (
              <Box className="monthIcon" key={`month-${item.getMonth()}`}>
                {item.toLocaleString("en-US", { month: "short" })}
              </Box>
            );
            return (
              <>
                {Array.from({ length: 12 }).map((_, index) => (
                  <Box
                    className="emptyItem"
                    key={index.toString()}
                    ref={item.getTime() === today.getTime() ? setTarget : null}
                    onClick={onClickDate}
                  >
                    00
                  </Box>
                ))}

                {monthComponent}
                <Box
                  className={classNames}
                  key={item.toString()}
                  ref={item.getTime() === today.getTime() ? setTarget : null}
                  onClick={onClickDate}
                >
                  {item.getDate()}
                </Box>
              </>
            );
          }
          // 조회한 우연데이터에 해당하는 일자일 경우 테두리 className 추가
        }

        return (
          <div
            className={classNames}
            key={item.toString()}
            ref={item.getTime() === today.getTime() ? setTarget : null}
            onClick={onClickDate}
          >
            {item.getDate()}
          </div>
        );
      })}
    </Box>
  );
}

export default Calendar;
