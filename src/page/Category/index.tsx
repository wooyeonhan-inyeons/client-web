import React from "react";
import CategoryBtn from "./components/CategoryBtn";
import SaveBtn from "./components/SaveBtn";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { Calculate } from "@mui/icons-material";

const CategoryPage = () => {
  const category = ["일상", "모임", "광고", "정보", "이벤트", "선물"];
  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        {/* 인사 문구 구역 */}
        <Grid item sx={{ pt: "6rem", pb: "3rem" }}>
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
        </Grid>

        {/* 카테고리 버튼 구역 */}
        <Grid item xs={6}>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            sx={{
              pt: "calc(100% - 17rem)",
              pb: "calc(100% - 19rem)",
              pl: "calc(100% - 24rem)",
            }}
          >
            {category.map((text: string, index: number) => (
              <Grid
                item
                key={index}
                sx={{
                  width: "calc(100% - 13rem)",
                  height: "6rem",
                  margin: 0,
                  padding: 0,
                }}
              >
                <CategoryBtn text={text} />
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* 선택 완료 버튼 구역 */}
        <Grid
          item
          sx={{
            width: "93%",
          }}
        >
          <SaveBtn text="선택 완료" />
        </Grid>
      </Grid>
    </>
  );
};

export default CategoryPage;
