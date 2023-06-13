import React, { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import { calendarStyle } from "./style";
import useIntersectionObserver from "../../../../../../hook/useIntersectionObserver";
import { CalendarProps } from "./interface";
import { SearchDateType } from "../../interface";
import DayWooyenItem from "./components/DayWooyenItem";

// key값 고유성 warning 뜸

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

function Calendar({ setDisplayDate, setSearchDate, existDays }: CalendarProps) {
  const today = new Date();

  today.setHours(0, 0, 0, 0); // 시간, 분, 초, 밀리초를 0으로 설정
  const datesRef = useRef<HTMLElement | null>(null);
  const rangedDate = get200Dates(today);
  const [selectDay, setSelectDay] = useState<number>();
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

  /**
   *
   * @time dom에 포함되어 있는 문자타입의 Date
   * @newDate `time`의 타입을 Date로 변경한 것
   * @returns
   */
  const getWooyeon = (e: React.MouseEvent<HTMLDivElement>) => {
    const time = e.currentTarget.querySelector(".hiddenValue")?.innerHTML;
    let newDate: Date;
    if (time !== undefined) {
      newDate = new Date(time);

      // 미래의 날짜는 선택 불가능 하도록
      if (Number(time) > today.getTime()) {
        return;
      }
      setSelectDay(Number(time));
      setSearchDate((prevDate: SearchDateType) => ({
        ...prevDate,
        // month: newDate.getMonth() + 1,
        date: newDate.getDate(),
      }));
    }
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
          if (existDays.includes(item.getDate())) classNames += " hasWooyeon";
          if (item.getTime() > today.getTime()) classNames += " disableItem";
          if (item.getTime() === selectDay) classNames += " focusItem";

          if (
            index > 0 &&
            item.getMonth() !== rangedDate[index - 1].getMonth()
          ) {
            let term = 12;
            if (item.getDay() === 1) term = 11;

            return (
              <div style={{ display: "contents" }} key={item.getTime()}>
                {Array.from({ length: term }).map((_, idx) => (
                  <Box className="emptyItem" key={idx.toString()} />
                ))}
                <Box className="monthIcon" key={`month-${item.getMonth()}`}>
                  {item.toLocaleString("en-US", { month: "short" })}
                </Box>
                {item.getDay() === 1 && (
                  <Box className="emptyItem" key={index.toString()} />
                )}
                <DayWooyenItem
                  classNames={classNames}
                  item={item}
                  key={item.getTime()}
                  getWooyeon={getWooyeon}
                  setTarget={setTarget}
                  today={today}
                />
              </div>
            );
          }
          // 조회한 우연데이터에 해당하는 일자일 경우 테두리 className 추가
        }

        return (
          <DayWooyenItem
            classNames={classNames}
            item={item}
            key={item.getTime()}
            getWooyeon={getWooyeon}
            setTarget={setTarget}
            today={today}
          />
        );
      })}
    </Box>
  );
}

export default Calendar;
