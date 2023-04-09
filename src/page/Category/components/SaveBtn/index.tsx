import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00A651",
    },
    secondary: {
      main: "#EEF1EE",
    },
  },
});

export interface SaveTextProps {
  text: string;
}

const SaveBtn = (props: SaveTextProps) => {
  // 클릭시 버튼 색상 변경
  const [activeColor, setActiveColor] = useState("primary");

  const handleButtonClick = () => {
    setActiveColor(activeColor === "primary" ? "secondary" : "primary");
  };

  return (
    <ThemeProvider theme={theme}>
      <Button
        variant="contained"
        color={activeColor}
        sx={{
          width: "100%",
          height: "3.5rem",
          borderRadius: 4,
          fontWeight: 600,
          boxShadow: "0 1px 3px rgba(0,0,0,0.12)",
          fontSize: 20,
        }}
        onClick={handleButtonClick}
      >
        {props.text}
      </Button>
    </ThemeProvider>
  );
};

export default SaveBtn;
