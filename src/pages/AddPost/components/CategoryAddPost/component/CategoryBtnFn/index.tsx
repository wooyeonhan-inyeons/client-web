import React, { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useOutletContext } from "react-router";
import { OneCategoryType } from "../../type";
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
  // prop object type 삽질

  const [activeColor, setActiveColor] = useState("primary");
  // const [selected, setSelected] = useState(true);
  const { post, setPost } = useOutletContext<PostStateInterface>();

  const handleButtonClick = () => {
    if (post?.category) {
      if (post.category === category.id) {
        setPost((prevState) => ({ ...prevState, category: null }));
        setActiveColor(activeColor === "primary" ? "secondary" : "primary");
      } else {
        console.log("님 이미 선택함");
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
