import { Theme, alpha } from "@mui/material";
import { mainPrimary, secondary } from "../../../../../../common";

export const calendarStyle = (theme: Theme) => {
  return {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    rowGap: "5px",
    paddingBottom: 5,
    // gap: "7px",
    // overflow: "scroll",

    "& .calendarItem": {
      width: "calc((100% / 7) - 8px)",
      margin: "4px",
      aspectRatio: "1",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",

      backgroundColor: theme.palette.mode === "light" ? "#EEF1EE" : "#888988",
      borderRadius: "50%",
    },
    "& .weekendItem": {
      backgroundColor: theme.palette.mode === "light" ? "#D9DBD8" : "#393939",
    },
    "& .todayItem": {
      backgroundColor: secondary,
      color: "#fff",
    },
    "& .focusItem": {
      backgroundColor: mainPrimary,
      color: "#fff",
    },
    "& .disableItem": { opacity: 0.3 },

    "& .calendarItem:hover": {
      opacity: 0.8,
    },
    "& .disableItem:hover": { opacity: 0.3 },
    "& .monthIcon": {
      width: "calc((100% / 7) * 2 - 8px)",
      margin: "4px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",

      backgroundColor: "#FAECE4",
      borderRadius: "50px",
      color: secondary,
      fontWeight: "bold",
      fontSize: "large",
    },
    "& .emptyItem": {
      width: "calc((100% / 7) - 8px)",
      margin: "4px",
      aspectRatio: "1",
      visibility: "hidden",
    },
    "& .hasWooyeon": {
      border: "2px solid rgba(0, 166, 81, 0.21);",
    },
  };
};
