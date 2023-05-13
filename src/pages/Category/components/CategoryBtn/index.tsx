import React, { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { OneCategoryType } from "../../../AddPost/components/CategoryAddPost/type";
import { PostStateInterface } from "../../../AddPost/components/HeaderAddPost/interface";
import { useOutletContext } from "react-router";

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

  // post 불러와서 post.category가 null일 경우에만 카테고리 클릭할 수 있도록ㅇㅇ!
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
    console.log(post);
  };

  useEffect(() => {
    if (post?.category === category.id) {
      setActiveColor("secondary");
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Button
        variant="contained"
        color={activeColor as ColorType}
        href="#contained-buttons"
        sx={{
          width: "100%",
          height: "100%",
          borderRadius: 4,
          fontWeight: 600,
        }}
        onClick={handleButtonClick}
        style={{
          boxShadow: "0 1px 3px rgba(0,0,0,0.12)",
          fontSize: 20,
        }}
      >
        {category.id}
      </Button>
    </ThemeProvider>
  );
};

export default CategoryBtn;
