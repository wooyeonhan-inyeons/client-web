import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { useEffect } from "@storybook/addons";
import React from "react";
import { useNavigate, useOutletContext } from "react-router";
import SaveBtn from "../../../../component/SaveBtn";
import CategoryBtn from "../../../Category/components/CategoryBtn";
import { AddPost, PostInterface } from "../HeaderAddPost/interface";
const CategoryAddPost = () => {
  const navigate = useNavigate();

  const { setPost } = useOutletContext<PostInterface>();

  const setCategory: AddPost = {
    category: "안녕",
  };

  useEffect(() => {
    setPost(setCategory);
  }, []);

  const handleNext = () => {
    navigate("/add-post/photo");
  };
  const category = ["일상", "모임", "광고", "정보", "이벤트", "선물"];
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
      <Grid
        container
        rowSpacing={3}
        columnSpacing={2}
        margin="0 auto"
        // flexGrow={5}
        // position="fixed"
        // bottom="0"
        // left="0"
        // width="100%"
      >
        {category.map((text: string, index: number) => (
          <Grid
            xs={6}
            key={index}
            sx={{
              height: "7rem",
              "@media (max-width: 375px)": {
                height: "6rem",
              },
            }}
          >
            <CategoryBtn text={text} />
          </Grid>
        ))}
        <Grid
          xs={12}
          sx={{
            pt: "3rem",
            "@media (max-width: 375px)": {
              pt: "2rem",
              pb: "1rem",
            },
          }}
        >
          <SaveBtn text="다음" onClick={handleNext} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CategoryAddPost;
