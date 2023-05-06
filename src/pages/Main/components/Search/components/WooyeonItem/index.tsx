import React from "react";

import { Avatar, Box } from "@mui/material";
import { WooyeonItemProps } from "../../interface";

const WooyeonItem = ({ name, pos }: WooyeonItemProps) => {
  const rand = Math.random();
  const iconSize = 40;

  return (
    <Box
      sx={{
        width: "10vw",
        height: "10vw",
        maxHeight: iconSize,
        maxWidth: iconSize,
        borderRadius: "50%",
        overflow: "hidden",
        position: "absolute",
        left: `${50 + pos.x}%`,
        bottom: `${50 + pos.y}%`,
        // transform: `translate(${-50 + pos.x}%, ${50 + pos.y}%)`,
        transform: "translate(-50%, 50%)",
        animation: `1.5s ${rand}s ease-in-out infinite alternate wooFlow`,
        // boxShadow: "inset -5px -4px 7px 3px #000",
        boxShadow: "0px 4px 4px #0000003b",
        backgroundColor: "#ffffff",

        // "&>svg": {
        //   opacity: 0.85,
        //   width: "10vw",
        //   height: "10vw",
        //   maxHeight: iconSize,
        //   maxWidth: iconSize,
        // },
        "& .MuiAvatar-img": {
          filter: "blur(1.5px)",
        },

        "@keyframes wooFlow": {
          from: {
            transform: "translate(-50%, 50%)",
          },
          to: {
            transform: "translate(-50%, 60%)",
          },
        },
      }}
    >
      <Avatar alt={name} src={name} />
      {/* <Avatar
        name={name + Date.now().toString()}
        variant="beam"
        colors={["#FFAD08", "#EDD75A", "#73B06F", "#0C8F8F", "#405059"]}
      /> */}
    </Box>
  );
};

export default WooyeonItem;
