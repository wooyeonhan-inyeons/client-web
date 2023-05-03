import React, { useState } from "react";
import { Box, SwipeableDrawer } from "@mui/material";
import { Global } from "@emotion/react";
import DrawrHandle from "./components/DrawrHandle";
import { DrawerProps } from "./inderface";

const Drawer = ({
  open,
  toggleDrawer,
  children,
  headerChildren, // 짧은 헤더만
  drawerBleeding = 52,
}: DrawerProps) => {
  return (
    <>
      <Global
        styles={{
          ".use_drawer > .MuiPaper-root": {
            // height: `calc(50% - ${drawerBleeding}px)`,
            width: "100%",
            overflow: "visible",
            boxShadow: "none",
            paddingBottom: "6rem",
          },
          ".use_drawer .MuiPaper-root": {
            maxWidth: "444px",
            margin: "0 auto",
          },
          ".use_drawer .MuiBackdrop-root": {
            backgroundColor: "rgb(0 0 0 / 30%)",
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
        <DrawrHandle drawerBleeding={drawerBleeding}>
          {headerChildren}
        </DrawrHandle>

        <Box
          sx={{
            position: "relative",
            overflow: "scroll",
            backgroundColor: "#fff",
            zIndex: 10,
            px: 2,
          }}
        >
          {children}
        </Box>
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
