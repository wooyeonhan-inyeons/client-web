import React from "react";
import { useDrawer } from "../../hook/useDrawer";
import { StyledBox } from "../../hook/components/common";
import { Typography } from "@mui/material";

import RangeBar from "./components/rangeBar";
import Category from "./components/Category";

const Radar = () => {
  const { open, Drawer, toggleDrawer } = useDrawer();

  return (
    <>
      <h1>레이다 페이지</h1>
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
