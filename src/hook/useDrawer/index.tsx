import React, { ReactElement, useState } from "react";
import { Box, SwipeableDrawer } from "@mui/material";
import { Global } from "@emotion/react";
import DrawrHandle from "./components/DrawrHandle";
import { useDrawerContentStyle } from "./style";

const drawerBleeding = 52;

interface DrawerProps {
  children: ReactElement;
  open: boolean;
  toggleDrawer: () => void;
}

const Drawer = ({ open, toggleDrawer, children }: DrawerProps) => {
  return (
    <>
      <Global
        styles={{
          ".use_drawer > .MuiPaper-root": {
            height: `calc(50% - ${drawerBleeding}px)`,
            width: "100%",
            overflow: "visible",
          },
          ".use_drawer .MuiPaper-root": {
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
        <DrawrHandle drawerBleeding={drawerBleeding} />
        <Box sx={useDrawerContentStyle}>
          <Box sx={{ px: 2 }}>{children}</Box>
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
