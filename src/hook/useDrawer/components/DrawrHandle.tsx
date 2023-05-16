import React from "react";
import { Puller, mainPrimary } from "../../../common";
import { DrawHeaderProps } from "../inderface";
import { Box, alpha, useTheme } from "@mui/material";

const DrawrHandle = ({ drawerBleeding, children }: DrawHeaderProps) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: "absolute",
        top: -drawerBleeding + 1,
        height: drawerBleeding,
        borderTopLeftRadius: "1rem",
        borderTopRightRadius: "1rem",
        visibility: "visible",
        right: 0,
        left: 0,
        boxShadow: `0px -2px 10px ${alpha(mainPrimary, 0.2)}`,
        backgroundColor: theme.palette.background.default,
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
