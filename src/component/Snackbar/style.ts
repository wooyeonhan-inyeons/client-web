import { alpha, styled, useTheme } from "@mui/material";
import { MaterialDesignContent } from "notistack";

export const StyledMaterialDesignContent = styled(MaterialDesignContent)(() => {
  const theme = useTheme();
  return {
    "&.notistack-MuiContent": {
      backgroundColor: alpha(theme.palette.background.default, 0.3),
      backdropFilter: "blur(5px)",
      color: theme.palette.text.primary,
      borderRadius: "1rem",
    },

    "&.notistack-MuiContent-success svg": {
      color: "#44a047",
    },
    "&.notistack-MuiContent-warning svg": {
      color: "#ff9800",
    },
    "&.notistack-MuiContent-error svg": {
      color: "#d3302f",
    },
    "&.notistack-MuiContent-info svg": {
      color: "#2196f3",
    },
  };
});
