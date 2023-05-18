import React from "react";

import { Avatar, Box, Zoom } from "@mui/material";
import { WooyeonItemProps } from "../../interface";
import { wooyeonItemStyle } from "./style";

const WooyeonItem = ({ image, pos, onClick }: WooyeonItemProps) => {
  const rand = Math.random();
  const iconSize = 40;
  const open = true;
  return (
    <Zoom in={open}>
      <Box
        sx={{
          position: "absolute",
          left: `${50 + pos.x}%`,
          bottom: `${50 + pos.y}%`,
        }}
        onClick={onClick}
      >
        <Box sx={wooyeonItemStyle({ iconSize, rand, pos })}>
          <Avatar alt={image} src={image} sx={{ border: "none" }} />
        </Box>
      </Box>
    </Zoom>
  );
};

export default React.memo(WooyeonItem);
