import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { ThemeProps } from "../../../../interface";

export const StyledComment = styled(Box)(({ theme }: ThemeProps) => ({
  "& .comments": {
    padding: "1rem",
    backgroundColor: theme.palette.background.default,
    borderRadius: "1rem",
  },
  // display: "flex",
  // flexDirection: "column",
  // gap: "1rem",
  "& .comments .skeletonComment": {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  },
}));
