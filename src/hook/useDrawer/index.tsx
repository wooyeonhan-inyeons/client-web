import React, { useState } from "react";
import { SwipeableDrawer, alpha, useTheme } from "@mui/material";
import { Global } from "@emotion/react";
import DrawrHandle from "./components/DrawrHandle";
import { DrawerProps } from "./inderface";
import { StyledBox, mainPrimary } from "../../common";

const Drawer = ({
  open,
  toggleDrawer,
  children,
  headerChildren, // 짧은 헤더만
  drawerBleeding = 52,
}: DrawerProps) => {
  const theme = useTheme();
  return (
    <>
      <Global
        styles={{
          html: {
            "--brand-color": "#000",
          },
          ".use_drawer > .MuiPaper-root": {
            maxHeight: `340px`,
            width: "100%",
            overflow: "visible",
            boxShadow: "none",
            // paddingBottom: "6rem",
          },
          ".use_drawer .MuiPaper-root": {
            maxWidth: "444px",
            margin: "0 auto",
            background: theme.palette.background.default,
          },
          ".use_drawer .MuiBackdrop-root": {
            background: "none",
            backdropFilter: "blur(2px)",
            maxWidth: "444px",
            margin: "0 auto",
          },
        }}
      />
      <SwipeableDrawer
        anchor="bottom"
        open={open}
        onClose={toggleDrawer}
        onOpen={toggleDrawer}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
        className="use_drawer"
      >
        <DrawrHandle
          drawerBleeding={drawerBleeding}
          open={open}
          onClick={toggleDrawer}
        >
          {headerChildren}
        </DrawrHandle>
        <StyledBox
          sx={{
            position: "relative",
            overflow: "scroll",
            zIndex: 10,
            px: 2,
            boxShadow: `0px -4px 4px ${alpha(mainPrimary, 0.1)}`,
          }}
        >
          {children}
        </StyledBox>
      </SwipeableDrawer>
    </>
  );
};

function useDrawer() {
  const [open, setOpen] = useState<boolean>(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return {
    open,
    toggleDrawer,
    Drawer,
  };
}

export { useDrawer };
