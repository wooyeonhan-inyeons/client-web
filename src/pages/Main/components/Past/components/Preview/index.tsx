import { Box, Avatar, Zoom, Button } from "@mui/material";
import React from "react";
import { TodayWooyeonProp, WooyeonsType } from "../../interface";

// 해당 날짜에 생성된 우연들 제네릭 배열
const Preview = ({
  todayWooyeons,
  setViewState,
  setPreview,
}: TodayWooyeonProp) => {
  // console.log("프리뷰 오늘의 우연: ", todayWooyeons);
  const open = true;

  const moveMap = (item: WooyeonsType) => {
    console.log("클릭됨");
    setViewState({
      longitude: item.longitude,
      latitude: item.latitude,
      zoom: 15,
    });
    // console.log(item.longitude, item.latitude);
    setPreview(item);
  };

  return (
    <Box
      sx={{
        position: "absolute",
        top: "-6rem",
        display: "flex",
        zIndex: 200,
      }}
    >
      {todayWooyeons !== undefined &&
        todayWooyeons.map((item, index) => (
          <Zoom in={open} key={index}>
            <Button onClick={() => moveMap(item)}>
              <Box sx={{ pr: "1rem" }}>
                <Avatar
                  alt={item.image[0].img_url}
                  src={item.image[0].img_url}
                  sx={{
                    width: 56,
                    height: 56,
                    boxShadow:
                      "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
                  }}
                />
              </Box>
            </Button>
          </Zoom>
        ))}
    </Box>
  );
};

export default Preview;
