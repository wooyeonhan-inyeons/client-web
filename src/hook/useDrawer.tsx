import React, { ReactElement, useState } from "react";
import { Box, SwipeableDrawer } from "@mui/material";
import { Global } from "@emotion/react";
import DrawrHandle from "./components/DrawrHandle";

const drawerBleeding = 32;

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
          ".MuiDrawer-root > .MuiPaper-root": {
            height: `calc(50% - ${drawerBleeding}px)`,
            overflow: "visible",
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
      >
        <DrawrHandle drawerBleeding={drawerBleeding} />
        <Box sx={{ zIndex: 10 }}>
          <Box sx={{ px: 2 }}>{children}</Box>
        </Box>
      </SwipeableDrawer>
    </>
  );
};

function useDrawer() {
  const [open, setOpen] = useState<boolean>(true);

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
