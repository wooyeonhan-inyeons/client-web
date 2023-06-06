import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material";

import { useOutletContext } from "react-router";
import { Category, OneCategoryType, ShakingProp } from "../../type";
import { PostStateInterface } from "../../../HeaderAddPost/interface";
import CategoryBtnUI from "../../../../../CategoryPage/components/CategoryBtnFn/CategoryBtnUI";
import { mainPrimary } from "../../../../../../common";

// 카테고리 버튼 컴포넌트
const CategoryBtn = ({ category }: { category: OneCategoryType }) => {
  const theme = useTheme();
  const [activeColor, setActiveColor] = useState(
    theme.palette.background.paper
  );
  const setCate = (id: Category) => {
    switch (id) {
      case "일상":
        return "DAILY";
      case "모임":
        return "GROUP";
      case "광고":
        return "ADS";
      case "정보":
        return "INFO";
      case "이벤트":
        return "EVENT";
      case "선물":
        return "PRESENT";
    }
  };

  const { post, setPost } = useOutletContext<PostStateInterface>();
  const { setShaking } = useOutletContext<ShakingProp>();
  const handleButtonClick = () => {
    if (post?.category) {
      if (post.category === setCate(category.id)) {
        setPost((prevState) => ({ ...prevState, category: null }));
        setActiveColor(
          activeColor === mainPrimary
            ? theme.palette.background.paper
            : mainPrimary
        );
        setShaking(false);
      } else {
        console.log("님 이미 선택함");
        setShaking(true);
      }
    } else {
      setPost((prevState) => ({
        ...prevState,
        category: setCate(category.id),
      }));
      setActiveColor(
        activeColor === mainPrimary
          ? theme.palette.background.paper
          : mainPrimary
      );
    }
  };

  useEffect(() => {
    if (post?.category === setCate(category.id)) {
      setActiveColor(mainPrimary);
    }
  }, []);

  return (
    <CategoryBtnUI
      activeColor={activeColor} // 전달
      handleButtonClick={handleButtonClick} // 전달
      category={category}
    ></CategoryBtnUI>
  );
};

export default CategoryBtn;
