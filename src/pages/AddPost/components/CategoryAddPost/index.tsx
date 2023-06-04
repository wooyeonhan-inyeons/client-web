import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import React, { useEffect } from "react";
import { categoryArr } from "../../../CategoryPage/components/CategoryArray";
import CategoryBtn from "./component/CategoryBtnFn";
import { styled } from "@mui/system";
import { useOutletContext } from "react-router";
import { ShakingProp } from "./type";

// skeleton -> suspense

const CategoryAddPost = () => {
  const { shaking } = useOutletContext<ShakingProp>();

  useEffect(() => {
    console.log("흔들어?", shaking);
  }, []);

  const ShakingTypography = styled(Typography)<{ shaking: boolean }>(
    ({ shaking }) => ({
      animation: shaking ? "shake 1s" : "none",

      "@keyframes shake": {
        "0%": { transform: "translateX(0)" },
        "25%": { transform: "translateX(-5px)" },
        "50%": { transform: "translateX(5px)" },
        "75%": { transform: "translateX(-5px)" },
        "100%": { transform: "translateX(0)" },
      },
    })
  );

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
        <ShakingTypography
          variant="subtitle1"
          fontWeight={500}
          sx={{ color: "#A2A2A2" }}
          shaking={shaking}
        >
          1개의 카테고리를 선택해 주세요.
        </ShakingTypography>
      </Box>

      <Box
        sx={{
          pt: "10rem",
          "@media (max-width: 375px)": {
            pt: "3rem",
          },
        }}
      >
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
      </Box>
    </Box>
  );
};

export default CategoryAddPost;
