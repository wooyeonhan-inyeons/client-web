import { Box, Avatar, Zoom } from "@mui/material";
import React from "react";

// 해당 날짜에 생성된 우연들 제네릭 배열
const Preview = () => {
  const open = true;
  return (
    <Box
      sx={{
        position: "absolute",
        top: "-4rem",
        display: "flex",
      }}
    >
      프리뷰 표시할 부분
      <Zoom in={open}>
        <Avatar></Avatar>
      </Zoom>
    </Box>
  );
};

export default Preview;
