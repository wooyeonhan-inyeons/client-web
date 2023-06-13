import { Theme } from "@mui/material";

export const messageStyle = (theme: Theme) => ({
  padding: "1rem",

  "& .no_message": {
    padding: "3rem 0",
    textAlign: "center",
  },
  "& .messageItem": {
    // backgroundColor: alpha(theme.palette.primary.main, 0.1),
    padding: "1.5rem 1rem",
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    borderRadius: "1rem",
    cursor: "pointer",
    border: "none",
  },
  "& .messageTitle": {},
});
