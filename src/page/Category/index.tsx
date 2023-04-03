import React from "react";
import CategoryBtn from "./components/CategoryBtn";
import SaveBtn from "./components/SaveBtn";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";

const CategoryPage = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Container sx={{ pt: "6rem", pb: "6rem" }}>
          <Typography variant="h5">안녕하세요 👋</Typography>
          <Typography variant="h5">반복되는 일상속에서</Typography>
          <Typography variant="h5">어떤 우연을 발견하고 싶으신가요?</Typography>
          <Typography variant="subtitle1" sx={{ color: "#A2A2A2", bold: "" }}>
            발견하고 싶은 카테고리를 1개 이상 선택해 주세요.
          </Typography>
        </Container>

        <Grid container>
          <Grid item>
            <Grid
              container
              spacing={2}
              alignItems="center"
              justifyContent="center"
            >
              <Grid item>
                <CategoryBtn text="일상" />
              </Grid>
              <Grid item>
                <CategoryBtn text="일상" />
              </Grid>
              <Grid item>
                <CategoryBtn text="일상" />
              </Grid>
              <Grid item>
                <CategoryBtn text="일상" />
              </Grid>
              <Grid item>
                <CategoryBtn text="일상" />
              </Grid>
              <Grid item>
                <CategoryBtn text="일상" />
              </Grid>
            </Grid>
          </Grid>

          <Grid container alignItems="center" justifyContent="center">
            <Grid item sx={{ p: "3rem" }}>
              <SaveBtn text="선택 완료" />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default CategoryPage;
