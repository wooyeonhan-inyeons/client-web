import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import React, { useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router";
import SaveBtn from "../../../../component/SaveBtn";
import { categoryArr } from "../../../CategoryPage/components/CategoryArray";
import { PostStateInterface } from "../HeaderAddPost/interface";
import CategoryBtn from "./component/CategoryBtnFn";

// skeleton -> suspense
// build

const CategoryAddPost = () => {
  const navigate = useNavigate();
  const { post } = useOutletContext<PostStateInterface>();

  const handleNext = () => {
    navigate("/add-post/content");
  };

  useEffect(() => {
    console.log("post 중간확인", post);
  }, []);

  return (
    <Box
      sx={{
        maxHeight: "100vh",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ padding: "1rem 0.5rem" }}>
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
        </Grid>
        {/* <Box sx={{ p: "5rem" }}></Box> */}
        {/* <Box
          sx={{
            p: "3rem 0rem 1.5rem 0rem",
            "@media (max-width: 375px)": {
              pt: "2rem",
              pb: "1rem",
            },
          }}
        >
          <SaveBtn text="다음" onClick={handleNext} />
        </Box> */}
      </Box>
    </Box>
  );
};

export default CategoryAddPost;
