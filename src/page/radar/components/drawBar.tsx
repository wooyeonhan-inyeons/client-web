import styled from "@emotion/styled";
import { Box, Theme } from "@mui/material";
import { grey } from "@mui/material/colors";

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

export const Puller = styled(Box)(({ theme }: ThemeProps) => ({
  width: 30,
  height: 6,
  backgroundColor: theme?.palette?.mode === "light" ? grey[300] : grey[900],
  borderRadius: 3,
  position: "absolute",
  top: 8,
  left: "calc(50% - 15px)",
}));

export const UnDragBox = styled(Box)`
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
