import React from "react";
import { Puller, StyledBox } from "./common";

interface DrawHeaderProps {
  drawerBleeding: number;
}
const DrawrHandle = ({ drawerBleeding }: DrawHeaderProps) => {
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
      }}
    >
      <Puller />
    </StyledBox>
  );
};

export default DrawrHandle;
