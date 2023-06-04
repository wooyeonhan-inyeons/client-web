import styled from "@emotion/styled";
import { ThemeProps } from "../../../../interface";
import { Box } from "@mui/material";
import { mainPrimary } from "../../../../common";

export const StyledDetailContent = styled(Box)(({ theme }: ThemeProps) => ({
  padding: "0 1rem",
  position: "relative",
  // top: "-24px",

  "& .detail_header": {
    width: "100%",
    backgroundColor: theme.palette.background.default,
    padding: "1rem",
    borderRadius: "1rem",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  "& .detail_header .header_user .categoryTag": {
    minWidth: "4.5rem",
    height: "2rem",
    lineHeight: "2rem",
    borderRadius: "1rem",
    backgroundColor: mainPrimary,
    padding: "0rem 0.7rem",
    textAlign: "center",
    color: "#fff",
  },
  "& .detail_header .header_user": {
    display: "flex",
    gap: "1rem",
    alignItems: "center",
  },
  "& .detail_header .header_content": {
    minHeight: "3rem",
  },
  "& .detail_header .footer_content .favorite": {
    display: "flex",
    alignItems: "center",
  },
}));
