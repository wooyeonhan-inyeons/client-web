import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { OneCategoryType } from "../../../AddPost/components/CategoryAddPost/type";
import CategoryBtnUI from "./CategoryBtnUI";
import { mainPrimary } from "../../../../common";
import { useRecoilState } from "recoil";
import { filterState } from "../../../../recoil";
import { FilterState, WooyeonsCategory } from "../../../../interface";

// 유저가 선택한 카테고리 정보 저장하기

// 카테고리 버튼 컴포넌트
const CategoryBtn = ({ category }: { category: OneCategoryType }) => {
  // prop object type 삽질
  const theme = useTheme();
  const [activeColor, setActiveColor] = useState(
    theme.palette.background.paper
  );
  const [filter, setFilter] = useRecoilState(filterState);

  const handleButtonClick = () => {
    setActiveColor(
      activeColor === mainPrimary ? theme.palette.background.paper : mainPrimary
    );
    setFilter((prev: FilterState) => {
      let newCategory = prev.preferCategory;
      const index = newCategory.indexOf(category.value as WooyeonsCategory);

      if (index === -1) {
        newCategory = [...newCategory, category.value as WooyeonsCategory];
      } else if (index !== -1) {
        if (prev.preferCategory.length === 1)
          return {
            ...prev,
            preferCategory: newCategory,
          };
        newCategory = prev.preferCategory.filter(
          (item) => item !== (category.value as WooyeonsCategory)
        );
      }
      return {
        ...prev,
        preferCategory: newCategory,
      };
    });
  };

  return (
    <CategoryBtnUI
      activeColor={
        filter.preferCategory.includes(category.value as WooyeonsCategory)
          ? mainPrimary
          : theme.palette.background.paper
      } // 전달
      handleButtonClick={handleButtonClick} // 전달
      category={category}
    ></CategoryBtnUI>
  );
};

export default CategoryBtn;
