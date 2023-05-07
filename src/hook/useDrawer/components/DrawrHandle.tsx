import React from "react";
import { Puller, StyledBox } from "../../../common";
import { DrawHeaderProps } from "../inderface";
import { Box } from "@mui/material";

const DrawrHandle = ({ drawerBleeding, children }: DrawHeaderProps) => {
  return (
    <StyledBox
      sx={{
        position: "absolute",
        top: -drawerBleeding,
        height: drawerBleeding,
        borderTopLeftRadius: "1rem",
        borderTopRightRadius: "1rem",
        visibility: "visible",
        right: 0,
        left: 0,
        boxShadow: "0px -2px 10px rgba(0, 166, 81, 0.2)",
      }}
    >
      <Puller />
      <Box sx={{ position: "absolute", bottom: 0, px: "1rem", width: "100%" }}>
        {children}
      </Box>
    </StyledBox>
  );
};

export default DrawrHandle;
