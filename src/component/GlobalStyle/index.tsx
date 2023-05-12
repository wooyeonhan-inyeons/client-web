import styled from "@emotion/styled";

import { ThemeProps } from "../../interface.d";
import { grey } from "@mui/material/colors";

const GlobalStyle = styled("div")(({ theme }: ThemeProps) => ({
  height: "100%",
  backgroundColor: theme?.palette.mode === "dark" ? "#262626" : grey[100],
  // : theme?.palette.background.default,
}));

export default GlobalStyle;
