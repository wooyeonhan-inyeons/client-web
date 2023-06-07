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

    backgroundColor: "#EEF1EE",
    borderRadius: "50%",
  },
  "& .weekendItem": { backgroundColor: "#d8dbd8" },
  "& .todayItem": {
    backgroundColor: "#ED6729",
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
    color: "#ED6729",
    fontWeight: "bold",
    fontSize: "large",
  },
  "& .emptyItem": {
    width: "calc((100% / 7) - 8px)",
    margin: "4px",
    visibility: "hidden",
  },
};
