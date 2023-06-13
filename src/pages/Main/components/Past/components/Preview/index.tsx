import { Box, Avatar, Zoom, Button } from "@mui/material";
import React from "react";
import { TodayWooyeonProp, WooyeonsType } from "../../interface";
import "../../style.css";
// 해당 날짜에 생성된 우연들 제네릭 배열
const Preview = ({ todayWooyeons, setPreview }: TodayWooyeonProp) => {
  // console.log("프리뷰 오늘의 우연: ", todayWooyeons);
  const open = true;

  const moveMap = (item: WooyeonsType) => {
    setPreview(item);
    console.log("item: ", item);
  };

  return (
    <Box className="previewBar">
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
