import React from "react";
import { Puller, mainPrimary } from "../../../common";
import { DrawHeaderProps } from "../inderface";
import { Box, alpha, useTheme } from "@mui/material";

const DrawrHandle = ({
  drawerBleeding,
  children,
  onClick,
}: DrawHeaderProps) => {
  const theme = useTheme();
  return (
    <Box
      onClick={onClick}
      sx={{
        position: "absolute",
        top: -drawerBleeding + 1,
        height: drawerBleeding,
        borderTopLeftRadius: "1rem",
        borderTopRightRadius: "1rem",
        visibility: "visible",
        right: 0,
        left: 0,
        boxShadow: `0px -7px 7px ${alpha(mainPrimary, 0.1)}`,
        backgroundColor: theme.palette.background.default,
        cursor: "pointer",
        zIndex: 99,
      }}
    >
      <Puller />
      <Box sx={{ position: "absolute", bottom: 0, px: "1rem", width: "100%" }}>
        {children}
      </Box>
    </Box>
  );
};

export default DrawrHandle;
