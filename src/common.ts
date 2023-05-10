import { Box, createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";
import { ThemeProps } from "./interface.d";
import styled from "@emotion/styled";

const mainPrimary = "#00A651";
export const colorSet = {
  light: { primary: mainPrimary, background: "#fff" },
  dark: { primary: mainPrimary, background: "#424242" },
};

export const Root = styled("div")(({ theme }: ThemeProps) => ({
  height: "100%",
  backgroundColor:
    theme?.palette.mode === "light"
      ? grey[100]
      : theme?.palette.background.default,
}));

export const StyledBox = styled(Box)(({ theme }: ThemeProps) => ({
  backgroundColor: theme?.palette?.mode === "light" ? "#fff" : grey[800],
}));

export const Puller = styled(Box)(() => ({
  backgroundColor: colorSet.light.primary,
  width: 50,
  height: 5,
  opacity: 0.3,
  borderRadius: 3,
  position: "absolute",
  left: "calc(50% - 25px)",
  top: 10,
}));

export const UnDragBox = styled(Box)`
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#00A651",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#00A651",
    },
  },
});
