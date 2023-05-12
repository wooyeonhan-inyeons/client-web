import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { ThemeProps } from "../../interface";

export const useDrawerContentStyle = {
  backgroundColor: "#fff",
  zIndex: 10,
};

export const StyledBox = styled(Box)(({ theme }: ThemeProps) => ({
  backgroundColor: theme?.palette.mode === "light" ? "#fff" : "#262626",
}));

export const StyledDrawBox = styled(Box)(({ theme }: ThemeProps) => ({
  backgroundColor: theme?.palette.mode === "light" ? "#fff" : "#262626",
}));
