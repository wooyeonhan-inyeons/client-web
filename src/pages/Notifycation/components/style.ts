import styled from "@emotion/styled";
import { Box, alpha } from "@mui/material";
import { ThemeProps } from "../../../interface";
import { grey } from "@mui/material/colors";

export const StyledNoti = styled(Box)(({ theme }: ThemeProps) => ({
  display: "flex",
  flexDirection: "column",
  padding: "0.5rem",
  gap: 1,
  color: theme.palette.text.primary,

  "& .description": {
    width: "100%",
  },
  "& .notiHead": {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 0.5,
  },

  "& .notiHead .date": { fontSize: "0.8rem" },
  "&:hover": {
    backgroundColor: alpha(grey[800], 0.2),
  },
}));
