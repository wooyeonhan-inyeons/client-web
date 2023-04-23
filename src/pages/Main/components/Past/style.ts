export const handleHeaderStyle = {
  height: "100%",
  paddingBottom: 4,

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
    justifyContent: "space-between",
    width: "100%",
  },
  "& .calendarHeader .MuiTypography-root": {
    px: 1,
    color: "#444",
  },
  "& .calendarHeader .MuiTypography-root:nth-child(1)": {
    color: "#FF4141",
  },

  "& .calendarHeader .MuiTypography-root:nth-last-child(1)": {
    color: "#679BFF",
  },
};
