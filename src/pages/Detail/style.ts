import { Theme } from "@mui/material";

export const DetailBoxStyle = {
  height: "calc(100vh - 87px)",
  overflow: "scroll",
};

export const DetailStyle = (theme: Theme) => {
  return {
    "&": {
      position: "relative",
      top: 0,
      backgroundColor: theme.palette.background.paper,
    },
    "& .DetailImg": {
      width: "100%",
      aspectRatio: "1/1",
    },
    "& .DetailSection": {
      top: "-24px",
      position: "relative",
      paddingTop: "1rem",
    },
    "& .CommentBox": {
      width: "100%",
      position: "fixed",
      bottom: "0",
      backgroundColor: theme.palette.background.default,
      padding: "1rem 1rem 2rem 1rem",
      boxShadow: `${theme.shadows[20]}`,
    },
  };
};

export const CommentBoxStyle = (theme: Theme) => {
  return {
    "&": {
      width: "100%",
      position: "fixed",
      bottom: "0",
      backgroundColor: theme.palette.background.default,
      padding: "1rem 1rem 2rem 1rem",
      boxShadow: `${theme.shadows[5]}`,
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
  };
};
