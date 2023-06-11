import { Theme } from "@mui/material";
import { secondary } from "../../common";
export const buttonStyle = (theme: Theme) => {
  return {
    width: "100%",
    py: "0.8rem",
    px: "1.4rem",
    mb: "0.5rem",
    borderRadius: "10px",
    backgroundColor: theme.palette.mode === "light" ? "#EDF1EE" : "#444444",
    color: theme.palette.mode === "light" ? "black" : "white",
    display: "flex",
    justifyContent: "space-between",
    boxShadow: `1px 2px 5px ${
      theme.palette.mode == "light" ? "#ababab85" : "#222222"
    }`,
  };
};

export const logoutStyle = () => {
  return {
    width: "100%",
    borderRadius: "10px",
    my: "1rem",
    backgroundColor: secondary,
    color: "white",
  };
};
