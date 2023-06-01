import React, { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useOutletContext } from "react-router";
import { OneCategoryType, ShakingProp } from "../../type";
import { PostStateInterface } from "../../../HeaderAddPost/interface";
import CategoryBtnUI from "../../../../../CategoryPage/components/CategoryBtnFn/CategoryBtnUI";

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
  const [activeColor, setActiveColor] = useState("primary");
  const { post, setPost } = useOutletContext<PostStateInterface>();
  const { shaking, setShaking } = useOutletContext<ShakingProp>();
  const handleButtonClick = () => {
    if (post?.category) {
      if (post.category === category.id) {
        setPost((prevState) => ({ ...prevState, category: null }));
        setActiveColor(activeColor === "primary" ? "secondary" : "primary");
        setShaking(false);
        // console.log("setShaking: false", shaking);
        // console.log("type2: ", typeof shaking);
      } else {
        console.log("님 이미 선택함");
        setShaking(true);
      }
    } else {
      setPost((prevState) => ({ ...prevState, category: category.id }));
      setActiveColor(activeColor === "primary" ? "secondary" : "primary");
    }
  };

  useEffect(() => {
    if (post?.category === category.id) {
      setActiveColor("secondary");
    }
  }, []);

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
