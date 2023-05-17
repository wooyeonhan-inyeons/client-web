import { WooPos } from "../../interface";

interface wooyeonItemStyleType {
  iconSize: number;
  rand: number;
  pos: WooPos;
}

export function wooyeonItemStyle({
  iconSize,
  rand,
  pos,
}: wooyeonItemStyleType) {
  return {
    width: "10vw",
    height: "10vw",
    maxHeight: iconSize,
    maxWidth: iconSize,
    borderRadius: "50%",
    position: "absolute",
    left: `${50 + pos.x}%`,
    bottom: `${50 + pos.y}%`,
    // transform: `translate(${-50 + pos.x}%, ${50 + pos.y}%)`,
    transform: "translate(-50%, 50%)",
    // animation: `0.5s ease-in-out mount 0s, 1.5s ${rand}s ease-in-out infinite alternate wooFlow`,
    animation: `1.5s ${rand}s ease-in-out infinite alternate wooFlow`,
    // boxShadow: "inset -5px -4px 7px 3px #000",
    boxShadow: "0px 4px 4px #0000003b",
    backgroundColor: "#222",
    color: "#fff",
    textAlign: "center",
    lineHeight: "2rem",

    "& .MuiAvatar-img": {
      filter: "blur(1.5px)",
      border: "none",
    },

    "@keyframes wooFlow": {
      from: {
        transform: "translate(-50%, 50%)",
      },
      to: {
        transform: "translate(-50%, 60%)",
      },
    },

    "@keyframes mount": {
      from: {
        transform: "translate(-50%, 50%)scale(0)",
      },
      to: {
        transform: "translate(-50%, 50%)scale(1)",
      },
    },
  };
}
