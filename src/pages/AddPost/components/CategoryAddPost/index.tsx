import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import React from "react";
import { useNavigate } from "react-router";
import SaveBtn from "../../../../component/SaveBtn";
import CategoryBtn from "../../../Category/components/CategoryBtn";

const CategoryAddPost = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/add-post/photo");
  };
  const category = ["일상", "모임", "광고", "정보", "이벤트", "선물"];
  return (
    <Grid
      container
      spacing={6}
      sx={{
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
      height="calc(100vh - 1rem)"
    >
      <Grid xs={12} paddingTop="3rem">
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
      </Grid>

      <Grid container rowSpacing={3} columnSpacing={2} margin="0 auto">
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
            // pb: "3rem",
            "@media (max-width: 375px)": {
              pt: "2rem",
              pb: "1rem",
            },
          }}
        >
          <SaveBtn text="다음" onClick={handleNext} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CategoryAddPost;
