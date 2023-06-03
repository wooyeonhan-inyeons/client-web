import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { OneCategoryType } from "../../../AddPost/components/CategoryAddPost/type";
import CategoryBtnUI from "./CategoryBtnUI";
import { mainPrimary } from "../../../../common";

// 유저가 선택한 카테고리 정보 저장하기

// 카테고리 버튼 컴포넌트
const CategoryBtn = ({ category }: { category: OneCategoryType }) => {
  // prop object type 삽질
  const theme = useTheme();
  const [activeColor, setActiveColor] = useState("primary");

  const handleButtonClick = () => {
    setActiveColor(
      activeColor === mainPrimary ? theme.palette.background.paper : mainPrimary
    );
  };

  return (
    <CategoryBtnUI
      activeColor={activeColor} // 전달
      handleButtonClick={handleButtonClick} // 전달
      category={category}
    ></CategoryBtnUI>
  );
};

export default CategoryBtn;
