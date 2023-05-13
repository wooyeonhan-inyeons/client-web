import styled from "@emotion/styled";
import { ThemeProps } from "../../interface";
import { colorSet } from "../../common";
import { Button } from "@mui/material";

export const StyledButton = styled(Button)(({ theme }: ThemeProps) => ({
  color: theme.palette.text.primary,
}));

export const CategoryButton = styled(StyledButton)(
  ({ checked }: { checked: boolean }) => ({
    borderRadius: "1.25rem",
    height: "2rem",
    padding: "0 1.6rem",
    border: `1px solid ${checked ? "#0000" : colorSet.light.primary}`,
    flex: "0 0 auto",
  })
);
