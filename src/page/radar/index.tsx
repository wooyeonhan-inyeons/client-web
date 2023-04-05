import React from "react";
import { useDrawer } from "../../hook/useDrawer";
import { StyledBox } from "../../hook/components/common";
import { Typography } from "@mui/material";

import Category from "./components/Category";
import RangeBar from "./components/RangeBar";
import { SearchItem1 } from "./components/SearchButton";

const Radar = () => {
  const { open, Drawer, toggleDrawer } = useDrawer();

  const searchItems = () => {
    if (open) toggleDrawer();
  };

  return (
    <>
      <h1>레이다 페이지</h1>
      <SearchItem1 open={open} searchItems={searchItems} />
      {/* <SearchItem2 open={open} searchItems={searchItems} /> */}
      <Drawer open={open} toggleDrawer={toggleDrawer}>
        <StyledBox sx={{ px: 2 }}>
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
