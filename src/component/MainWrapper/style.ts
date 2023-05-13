import styled from "@emotion/styled";
import { Container } from "@mui/material";
import { ThemeProps } from "../../interface";

export const StyledContainer = styled(Container)(({ theme }: ThemeProps) => ({
  backgroundColor: theme.palette.background.default,
  touchAction: "pan-x",
  "@media (min-width: 600px)": {
    paddingLeft: 2,
    paddingRight: 2,
  },
}));
