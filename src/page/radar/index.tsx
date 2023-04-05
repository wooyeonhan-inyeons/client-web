import React from "react";
import { useDrawer } from "../../hook/useDrawer";
import { StyledBox } from "../../hook/components/common";
import { Box, Typography } from "@mui/material";

import Category from "./components/Category";
import RangeBar from "./components/RangeBar";
import { SearchItem1 } from "./components/SearchButton";
import { Player } from "@lottiefiles/react-lottie-player";
import RadarLottie from "../../assets/radarLottie.json";

const Radar = () => {
  const { open, Drawer, toggleDrawer } = useDrawer();

  const searchItems = () => {
    if (open) toggleDrawer();
    console.log("우연찾아보기");
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
          "& .lf-player-container": {
            position: "absolute",
            width: "100%",
          },
        }}
      >
        <Player autoplay loop src={RadarLottie} />
        <Typography variant="body1">🍅</Typography>
      </Box>
      <SearchItem1 open={open} searchItems={searchItems} />
      {/* <SearchItem2 open={open} searchItems={searchItems} /> */}
      <Drawer open={open} toggleDrawer={toggleDrawer}>
        <StyledBox>
          <Typography variant="h6">카테고리 선택</Typography>
          <Category />
          <Typography variant="h6">범위 설정</Typography>
          <RangeBar />
        </StyledBox>
      </Drawer>
    </>
  );
};

export default Radar;
