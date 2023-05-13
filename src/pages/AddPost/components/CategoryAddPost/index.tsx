import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import React, { useEffect, useContext } from "react";
import { useNavigate, useOutletContext } from "react-router";
import SaveBtn from "../../../../component/SaveBtn";
import CategoryBtn from "../../../Category/components/CategoryBtn";
import { PostStateInterface } from "../HeaderAddPost/interface";
import { Category, CategoryArr } from "./type";

// skeleton -> suspense
// build
// 고민: 클릭한 카테고리 상태를 다른 페이지 다녀와도 저장하기

const categoryArr: CategoryArr = [
  {
    id: Category.Daily,
    selected: false,
    fn_print: function print() {
      console.log(this.id);
    },
  },
  {
    id: Category.Metting,
    selected: false,
    fn_print: function print() {
      console.log(this.id);
    },
  },
  {
    id: Category.Commercial,
    selected: false,
    fn_print: function print() {
      console.log(this.id);
    },
  },
  {
    id: Category.Information,
    selected: false,
    fn_print: function print() {
      console.log(this.id);
    },
  },
  {
    id: Category.Event,
    selected: false,
    fn_print: function print() {
      console.log(this.id);
    },
  },
  {
    id: Category.Gift,
    selected: false,
    fn_print: function print() {
      console.log(this.id);
    },
  },
];

const CategoryAddPost = () => {
  const navigate = useNavigate();
  const { post, setPost } = useOutletContext<PostStateInterface>();

  const handleNext = () => {
    navigate("/add-post/photo");
  };

  useEffect(() => {
    console.log("post 중간확인", post);
  }, []);

  return (
    <Box
      sx={{
        height: "100%",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Typography variant="h5" fontWeight={600}>
          추가할 우연의 카테고리를
        </Typography>
        <Typography variant="h5" fontWeight={600} paddingBottom="1rem">
          선택해주세요
        </Typography>
        <Typography
          variant="subtitle1"
          fontWeight={500}
          sx={{ color: "#A2A2A2" }}
        >
          1개의 카테고리를 선택해 주세요.
        </Typography>
      </Box>

      <Box>
        <Grid container rowSpacing={3} columnSpacing={2} margin="0 auto">
          {categoryArr.map((category) => (
            <Grid
              xs={6}
              key={categoryArr.indexOf(category)}
              sx={{
                height: "7rem",
                "@media (max-width: 375px)": {
                  height: "6rem",
                },
              }}
            >
              <CategoryBtn category={category} />
            </Grid>
          ))}

          {/* <Grid
          xs={12}
          sx={{
            pt: "3rem",
            "@media (max-width: 375px)": {
              pt: "2rem",
              pb: "1rem",
            },
          }}
        > */}
          {/* </Grid> */}
        </Grid>
        <Box
          sx={{
            pt: "3rem",
            "@media (max-width: 375px)": {
              pt: "2rem",
              pb: "1rem",
            },
          }}
        >
          <SaveBtn text="다음" onClick={handleNext} />
        </Box>
      </Box>
    </Box>
  );
};

export default CategoryAddPost;
