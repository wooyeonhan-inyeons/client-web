import React, { useState } from "react";
import { SwipeableDrawer } from "@mui/material";
import { Global } from "@emotion/react";
import DrawrHandle from "./components/DrawrHandle";
import { DrawerProps } from "./inderface";
import { StyledBox, StyledDrawBox } from "./style";
import { envState } from "../../recoil";
import { useRecoilState } from "recoil";

const Drawer = ({
  open,
  toggleDrawer,
  children,
  headerChildren, // 짧은 헤더만
  drawerBleeding = 52,
}: DrawerProps) => {
  const [env] = useRecoilState(envState);
  return (
    <>
      <Global
        styles={{
          html: {
            "--brand-color": "#000",
          },
          ".use_drawer > .MuiPaper-root": {
            maxHeight: `calc(50% - ${drawerBleeding - 10}px)`,
            width: "100%",
            overflow: "visible",
            boxShadow: "none",
            // paddingBottom: "6rem",
          },
          ".use_drawer .MuiPaper-root": {
            maxWidth: "444px",
            margin: "0 auto",
          },
          ".use_drawer .MuiBackdrop-root": {
            backgroundColor:
              env.theme === "light"
                ? "rgb(255 255 255 / 30%)"
                : "rgb(0 0 0 / 30%)",
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
        <DrawrHandle drawerBleeding={drawerBleeding}>
          {headerChildren}
        </DrawrHandle>
        <StyledDrawBox
          sx={{
            position: "relative",
            overflow: "scroll",
            zIndex: 10,
            px: 2,
          }}
        >
          {children}
        </StyledDrawBox>
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
