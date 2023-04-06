import React from "react";
import Avatar from "boring-avatars";
import { Box } from "@mui/material";

interface WooyeonItemProps {
  name: string;
  pos: { x: number; y: number };
}

const WooyeonItem = ({ name, pos }: WooyeonItemProps) => {
  return (
    <Box
      sx={{
        boxShadow: "inset -5px -4px 7px 3px #000",
        width: 40,
        height: 40,
        borderRadius: "50%",
        overflow: "hidden",
        position: "absolute",
        bottom: `50%`,
        left: `50%`,
        transform: `translate(${-50 + pos.x}%, ${50 + pos.y}%)`,
        // transform: "translate(-50%, 50%)",
        "&>svg": {
          opacity: 0.85,
        },
      }}
    >
      <Avatar
        name={name + Date.now().toString()}
        variant="beam"
        colors={["#FFAD08", "#EDD75A", "#73B06F", "#0C8F8F", "#405059"]}
      />
    </Box>
  );
};

export default WooyeonItem;
