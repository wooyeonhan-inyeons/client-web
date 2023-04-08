import React from "react";
import Avatar from "boring-avatars";
import { Box } from "@mui/material";

interface WooyeonItemProps {
  name: string;
  pos: { x: number; y: number };
}

const WooyeonItem = ({ name, pos }: WooyeonItemProps) => {
  const rand = Math.random();
  console.log(pos);
  return (
    <Box
      sx={{
        boxShadow: "inset -5px -4px 7px 3px #000",
        width: "10vw",
        height: "10vw",
        minHeight: 40,
        minWidth: 40,
        borderRadius: "50%",
        overflow: "hidden",
        position: "absolute",
        bottom: "50%",
        left: "50%",
        transform: `translate(${-50 + pos.x}%, ${50 + pos.y}%)`,
        animation: `1.5s ${rand}s ease-in-out infinite alternate wooFlow`,

        "&>svg": {
          opacity: 0.85,
        },

        "@keyframes wooFlow": {
          from: {
            bottom: "50%",
          },
          to: {
            bottom: "51%",
          },
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
