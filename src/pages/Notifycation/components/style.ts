export const NotiItemStyle = {
  display: "flex",
  flexDirection: "column",
  padding: "0.5rem",
  gap: 1,
  color: "#222",
  backgroundColor: "#fff",

  "& .description": {
    width: "100%",
  },
  "& .notiHead": {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 0.5,
  },

  "& .notiHead .date": { fontSize: "0.8rem" },
  "&:hover": {
    backgroundColor: "#fbfbfb",
  },
};
