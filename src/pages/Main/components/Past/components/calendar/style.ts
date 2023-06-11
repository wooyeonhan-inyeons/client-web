import { useTheme } from "@mui/material";
import { mainPrimary, secondary } from "../../../../../../common";
const theme = useTheme();
export const calendarStyle = {
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
    color: "red",
    // backgroundColor: theme.palette.mode === "light" ? "#EEF1EE" : "#888888",
    backgroundColor: "#EEF1EE",
    borderRadius: "50%",
  },
  "& .weekendItem": { backgroundColor: "#d8dbd8" },
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
