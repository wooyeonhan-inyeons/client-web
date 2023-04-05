import React from "react";
import CategoryBtn from "./components/CategoryBtn";
import SaveBtn from "./components/SaveBtn";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";

const CategoryPage = () => {
  const category = ["일상", "모임", "광고", "정보", "이벤트", "선물"];
  return (
    <>
      <Container maxWidth="lg">
        {/* 인사 문구 구역 */}
        <Container sx={{ pt: "6rem", pb: "6rem" }}>
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            안녕하세요 👋 <br />
            반복되는 일상속에서 <br />
            어떤 우연을 발견하고 싶으신가요?
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ color: "#A2A2A2", pt: "0.7rem" }}
          >
            발견하고 싶은 카테고리를 1개 이상 선택해 주세요.
          </Typography>
        </Container>

        {/* 카테고리 버튼 구역 */}
        <Grid container>
          <Grid item>
            <Grid
              container
              spacing={2}
              alignItems="center"
              justifyContent="center"
            >
              {category.map((text: string, index: number) => (
                <Grid item key={index}>
                  <CategoryBtn text={text} />
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* 선택 완료 버튼 구역 */}
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
