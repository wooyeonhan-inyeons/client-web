import styled from "@emotion/styled";
import { Box, Theme } from "@mui/material";
import { grey } from "@mui/material/colors";
import { colorSet } from "../../common";

interface ThemeProps {
  theme?: Theme;
}

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
  width: 50,
  height: 5,
  backgroundColor: colorSet.light.primary,
  opacity: 0.3,
  borderRadius: 3,
  position: "absolute",
  top: 10,
  left: "calc(50% - 25px)",
}));

export const UnDragBox = styled(Box)`
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
