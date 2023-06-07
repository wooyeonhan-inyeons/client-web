import { Box, Avatar, Zoom } from "@mui/material";
import React from "react";
import { TodayWooyeonProp } from "../../interface";
import { useEffect } from "react";

// 해당 날짜에 생성된 우연들 제네릭 배열
const Preview = ({ todayWooyeons }: TodayWooyeonProp) => {
  console.log("프리뷰 오늘의 우연: ", todayWooyeons);
  const open = true;
  return (
    <Box
      sx={{
        position: "absolute",
        top: "-4rem",
        display: "flex",
      }}
    >
      {todayWooyeons !== undefined &&
        todayWooyeons.map((item, index) => (
          <Zoom in={open} key={index}>
            <Box>
              <Box>
                <Avatar
                  alt={item.image[0].img_url}
                  src={item.image[0].img_url}
                  sx={{ border: "none" }}
                />
              </Box>
            </Box>
          </Zoom>
        ))}
    </Box>
  );
};

export default Preview;
