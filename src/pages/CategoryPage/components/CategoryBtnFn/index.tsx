import React, { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { OneCategoryType } from "../../../AddPost/components/CategoryAddPost/type";
import { PostStateInterface } from "../../../AddPost/components/HeaderAddPost/interface";
import { useOutletContext } from "react-router";
import CategoryBtnUI from "./CategoryBtnUI";

// 유저가 선택한 카테고리 정보 저장하기

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

// 카테고리 버튼 컴포넌트
const CategoryBtn = ({ category }: { category: OneCategoryType }) => {
  // prop object type 삽질

  const [activeColor, setActiveColor] = useState("primary");

  const handleButtonClick = () => {
    setActiveColor(activeColor === "primary" ? "secondary" : "primary");
  };

  return (
    <ThemeProvider theme={theme}>
      <CategoryBtnUI
        activeColor={activeColor as ColorType} // 전달
        handleButtonClick={handleButtonClick} // 전달
        category={category}
      ></CategoryBtnUI>
    </ThemeProvider>
  );
};

export default CategoryBtn;
