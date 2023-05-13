import styled from "@emotion/styled";
import { ThemeProps } from "../../../../../../interface";

export const HeadBlinder = styled("div")(({ theme }: ThemeProps) => ({
  width: "100%",
  height: 54,
  position: "absolute",
  top: 0,
  backgroundColor: theme.palette.background.default,
  zIndex: 1,
  // background: "rgb(255,255,255)",
  background: `linear-gradient(0deg, rgba(0,0,0,0) 10%, #22222250 90%)`,
}));
