import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material";

import { useOutletContext } from "react-router";
import { OneCategoryType, ShakingProp } from "../../type";
import { PostStateInterface } from "../../../HeaderAddPost/interface";
import CategoryBtnUI from "../../../../../CategoryPage/components/CategoryBtnFn/CategoryBtnUI";
import { mainPrimary } from "../../../../../../common";

// 카테고리 버튼 컴포넌트
const CategoryBtn = ({ category }: { category: OneCategoryType }) => {
  const theme = useTheme();
  const [activeColor, setActiveColor] = useState(
    theme.palette.background.paper
  );
  const { post, setPost } = useOutletContext<PostStateInterface>();
  const { setShaking } = useOutletContext<ShakingProp>();
  const handleButtonClick = () => {
    if (post?.category) {
      if (post.category === category.id) {
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
      setPost((prevState) => ({ ...prevState, category: category.id }));
      setActiveColor(
        activeColor === mainPrimary
          ? theme.palette.background.paper
          : mainPrimary
      );
    }
  };

  useEffect(() => {
    if (post?.category === category.id) {
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
