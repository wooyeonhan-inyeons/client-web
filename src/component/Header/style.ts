import styled from "@emotion/styled";
import { ThemeProps } from "../../interface";
import { grey } from "@mui/material/colors";

export const HeaderWrapper = styled("div")(({ theme }: ThemeProps) => ({
  width: "calc(100% - 2rem)",
  maxWidth: "444px",
  margin: "0 auto",
  position: "fixed",
  top: 0,
  left: "50%",
  transform: "translate(-50%)",
  zIndex: 10,
  color: theme.palette.text.primary,

  "@media (max-width: 475px)": {
    width: "100%",
  },
  "& .MuiButton-text *": {
    color: `${grey[500]}`,
  },
  "& .MuiButton-text.active *": {
    color: theme.palette.primary.main,
  },
  "& > header": {
    boxShadow: "none",
    backgroundImage: "none",
  },
  "& .MuiToolbar-root": {
    justifyContent: "space-between",
    alignItems: "flex-end",
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
  },
  "& .MuiToolbar-root.centerToolbar": {
    alignItems: "center",
  },
  "& .MuiToolbar-root .header_nav_btn": { borderRadius: 0 },
  "& .MuiToolbar-root .right_section": {
    display: "flex",
    gap: 1,
  },
  "& .MuiToolbar-root .avatarIcon svg": {
    border: "1px solid #000",
  },
  "& .MuiToolbar-root .right_section .mainFn svg, & .MuiToolbar-root .mainFn.avatarIcon svg":
    {
      aspectRatio: "1",
    },
}));
