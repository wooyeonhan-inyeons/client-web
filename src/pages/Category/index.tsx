import React from "react";
import CategoryBtn from "./components/CategoryBtnFn";
import SaveBtn from "../../component/SaveBtn";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { Box, Typography } from "@mui/material";
import { userState } from "../../recoil";
import { useRecoilState } from "recoil";
import { Global } from "@emotion/react";
import { categoryArr } from "./components/CategoryArray";

const CategoryPage = () => {
  const [, setUser] = useRecoilState(userState);

  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="space-around"
        alignItems="center"
        maxWidth="414px"
        minHeight="667px"
        margin="0 auto"
        padding="0rem 2rem 0rem 2rem"
        spacing={0}
        height="100vh"
      >
        <Global styles={{ ".globalContainer .MuiBox-root": { padding: 0 } }} />
        {/* 인사 문구 구역 */}
        <Grid
          sx={{
            pt: "6rem",
            pb: "3rem",
            width: "100%",
            "@media (max-width: 375px)": {
              pt: "4.5rem",
              pb: "2rem",
            },
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 600, margin: 0 }}>
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
        <Box>
          <Grid margin="0 auto">
            <Grid container rowSpacing={3} columnSpacing={2} margin="0 auto">
              {categoryArr.map((category) => (
                <Grid
                  xs={6}
                  key={categoryArr.indexOf(category)}
                  sx={{
                    height: "7rem",
                    "@media (max-width: 375px)": {
                      height: "5rem",
                    },
                  }}
                >
                  <CategoryBtn category={category} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Box>

        {/* 선택 완료 버튼 구역 */}
        <Grid
          sx={{
            width: "100%",
            padding: "1.5rem 0rem 1.5rem 0rem",
          }}
        >
          <SaveBtn
            text="선택 완료"
            onClick={() =>
              setUser((prev) => {
                return { ...prev, role: "USER" };
              })
            }
          />
        </Grid>
      </Grid>
    </>
  );
};

export default CategoryPage;
