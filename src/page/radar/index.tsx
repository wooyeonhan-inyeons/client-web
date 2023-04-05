import React, { useState } from "react";
import { Skeleton, SwipeableDrawer, Typography } from "@mui/material";
import { Global } from "@emotion/react";
import { Puller, Root, StyledBox } from "./components/drawBar";
import RangeBar from "./components/rangeBar";

const drawerBleeding = 50;

function useDrawer() {
  const [open, setOpen] = useState<boolean>(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const Drawer = () => {
    return (
      <Root>
        <Global
          styles={{
            ".MuiDrawer-root > .MuiPaper-root": {
              height: `calc(50% - ${drawerBleeding - 8}px)`,
              overflow: "visible",
            },
          }}
        />
        <SwipeableDrawer
          open={open}
          anchor="bottom"
          disableSwipeToOpen={false}
          swipeAreaWidth={drawerBleeding}
          onClose={toggleDrawer}
          onOpen={toggleDrawer}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <StyledBox
            sx={{
              position: "absolute",
              top: -drawerBleeding,
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              visibility: "visible",
              right: 0,
              left: 0,
            }}
          >
            <Puller />
            <Typography variant="subtitle1" sx={{ px: 2, pt: 2, pb: 1 }}>
              범위 설정
            </Typography>
          </StyledBox>
          <StyledBox
            sx={{
              px: 4,
              pt: 0,
              height: "100%",
              overflow: "hidden",
            }}
          >
            <RangeBar />
            <Skeleton variant="rectangular" height="100%" />
          </StyledBox>
        </SwipeableDrawer>
      </Root>
    );
  };
  return { Drawer, toggleDrawer };
}

export { useDrawer };
