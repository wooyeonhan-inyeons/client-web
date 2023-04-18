import React from "react";
import { Puller, StyledBox } from "../../../common";
import { DrawHeaderProps } from "../inderface";

const DrawrHandle = ({ drawerBleeding }: DrawHeaderProps) => {
  return (
    <StyledBox
      sx={{
        position: "absolute",
        top: -drawerBleeding + 0.5,
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
    </StyledBox>
  );
};

export default DrawrHandle;
