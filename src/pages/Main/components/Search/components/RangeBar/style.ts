import { mainPrimary } from "../../../../../../common";

export const RangeBarStyle = {
  px: 2,
  touchAction: "auto",

  ".MuiSlider-root": {
    height: "1px",
    padding: "20px 0",
  },
  ".MuiSlider-root > .MuiSlider-mark": {
    width: "10px",
    height: "10px",
    color: "#fff",
    backgroundColor: "#fff",
    border: `1px solid ${mainPrimary}`,
    borderRadius: "50%",
    opacity: 1,
  },
  ".MuiSlider-root .MuiSlider-markLabel": {
    fontSize: "10px !important",
    top: "40px",
  },
};
