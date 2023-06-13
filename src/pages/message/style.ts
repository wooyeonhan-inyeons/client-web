import { Theme } from "@mui/material";

export const messageStyle = (theme: Theme) => ({
  padding: "2rem 1rem",
  height: "calc(100vh - 56px - 88px)",
  overflowY: "scroll",

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

export const MessageBoxStyle = (theme: Theme) => ({
  "&": {
    width: "100%",
    maxWidth: "444px",
    position: "fixed",
    bottom: "0",
    backgroundColor: theme.palette.background.default,
    padding: "1rem 1rem 2rem 1rem",
    boxShadow: `${theme.shadows[5]}`,
  },
  "& form": {
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  },
  "& .MuiInputBase-root": {
    backgroundColor: theme.palette.background.paper,
    borderRadius: "1rem",
    padding: 0,
  },
  "& .MuiInputBase-root input": {
    padding: "0.5rem 0rem 0.5rem 1rem",
  },
  "& .MuiInputBase-root fieldset": {
    border: "none",
  },
});

export const MyMessageStyle = (theme: Theme) => ({
  marginTop: "0.5rem",
  marginLeft: "auto",
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "flex-end",
  gap: "0.3rem",

  "& .MuiPaper-root": {
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
    borderRadius: "2rem 2rem 0 2rem",
    // textAlign: "right",
    maxWidth: "70%",
    width: "fit-content",
    minWidth: "5rem",
    padding: "0.5rem 1.5rem",
  },
  "& .MuiBox-root": { display: "flex", justifyContent: "center" },
});

export const ReceivedMessageStyle = (theme: Theme) => ({
  marginTop: "0.5rem",
  marginRight: "auto",
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "flex-start",
  gap: "0.3rem",

  "& .MuiPaper-root": {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    borderRadius: "2rem 2rem 2rem 0",
    // textAlign: "left",
    maxWidth: "70%",
    width: "fit-content",
    minWidth: "5rem",
    padding: "0.5rem 1.5rem",
  },
  "& .MuiBox-root": { display: "flex", justifyContent: "center" },
});
