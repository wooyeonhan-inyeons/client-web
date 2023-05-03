import { WooPos } from "../../interface";

interface wooyeonItemStyleType {
  iconSize: number;
  rand: number;
  pos: WooPos;
}

export function wooyeonItem({ iconSize, rand, pos }: wooyeonItemStyleType) {
  return {
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
    boxShadow: "inset -5px -4px 7px 3px #000",

    "&>svg": {
      opacity: 0.85,
      width: "10vw",
      height: "10vw",
      maxHeight: iconSize,
      maxWidth: iconSize,
    },

    "@keyframes wooFlow": {
      from: {
        transform: "translate(-50%, 50%)",
      },
      to: {
        transform: "translate(-50%, 60%)",
      },
    },
  };
}
