import React, { useState } from "react";
import { createTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { CircularProgress } from "@mui/material";
import { MagnifyingGlass } from "@phosphor-icons/react";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#00A651",
    },
    secondary: {
      main: "#EEF1EE",
    },
  },
});

type ColorType =
  | "primary"
  | "inherit"
  | "secondary"
  | "success"
  | "error"
  | "info"
  | "warning"
  | undefined;
export interface SaveTextProps {
  text: string;
  onClick: () => void;
  isLoading?: boolean;
}

const SaveBtn = (props: SaveTextProps) => {
  const [activeColor] = useState("primary");

  return (
    <Button
      variant="contained"
      color={activeColor as ColorType}
      onClick={props.onClick}
      startIcon={
        props.isLoading && <CircularProgress sx={{ color: "#fff" }} size={16} />
      }
      sx={{
        width: "100%",
        height: "3rem",
        borderRadius: 4,
        fontWeight: 600,
        boxShadow: "0 1px 3px rgba(0,0,0,0.12)",
        fontSize: 20,
        zIndex: 10,
      }}
    >
      {props.text}
    </Button>
  );
};

export default SaveBtn;
