export const handleHeaderStyle = {
  height: "100%",
  paddingBottom: 2,

  "& .drawerHeader": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingBottom: 1,
  },
  "& .calendarHeader": {
    display: "flex",
    alignItems: "center",
    // justifyContent: "space-between",
    width: "100%",
    gap: "7px",
  },
  "& .calendarHeader .MuiTypography-root": {
    width: "calc(100% / 7 - 6px)",
    color: "#444",
    textAlign: "center",
  },
  "& .calendarHeader .MuiTypography-root:nth-child(1)": {
    color: "#FF4141",
  },
  "& .calendarHeader .MuiTypography-root:nth-last-child(1)": {
    color: "#679BFF",
  },
};
