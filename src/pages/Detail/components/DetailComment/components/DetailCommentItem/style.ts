import styled from "@emotion/styled";

import { Box } from "@mui/material";
import { ThemeProps } from "../../../../../../interface";

export const StyledCommentItem = styled(Box)(({ theme }: ThemeProps) => ({
  display: "flex",
  alignItems: "row",
  justifyContent: "space-between",
}));
