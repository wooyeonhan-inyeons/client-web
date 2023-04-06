// 카테고리 버튼 컴포넌트

import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";

const theme = createTheme({
  palette: {
    primary: {
      main: "#EEF1EE",
    },
    secondary: {
      main: "#00A651",
    },
  },
});

type CategoryTextProps = {
  text: string;
};

const CategoryBtn = (props: CategoryTextProps) => {
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
          width: "11rem",
          height: "6rem",
          borderRadius: 4,
          fontWeight: 600,
        }}
        onClick={handleButtonClick}
        style={{
          boxShadow: "0 1px 3px rgba(0,0,0,0.12)",
          fontSize: 20,
        }}
      >
        {props.text}
      </Button>
    </ThemeProvider>
  );
};

export default CategoryBtn;