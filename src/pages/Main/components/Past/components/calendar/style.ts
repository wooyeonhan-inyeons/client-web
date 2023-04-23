export const calendarStyle = {
  width: "100%",
  display: "flex",
  flexWrap: "wrap",
  gap: "7px",

  "& .calendarItem": {
    width: "calc((100% / 7) - 6px)",
    aspectRatio: "1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#EEF1EE",
    borderRadius: "50%",
  },
};
