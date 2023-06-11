import React, { useEffect } from "react";
import MobileStepper from "@mui/material/MobileStepper";
import { CssBaseline, Grid } from "@mui/material";
import { Global } from "@emotion/react";
import "./style.css";
import TextSlideView from "./components/TextSlideView";
import ImageSlideView from "./components/ImageSlideView";
import { images } from "./components/ImageArray";
import { enqueueSnackbar } from "notistack";

const introduction = [
  {
    mainTextLine1: "<span class='pointText'>레이더</span>를 통해",
    mainTextLine2: "내 주변의 우연을 찾기",
    subText: "원하는 카테고리와 범위 설정하기!",
  },
  {
    mainTextLine1: "발견한 우연을",
    mainTextLine2: "확인하고 <span class='pointText'>댓글 입력</span>하기",
    subText: "소통과 재미를 동시에!",
  },
  {
    mainTextLine1: "<span class='pointText'>지도</span>에서 발견한 우연을",
    mainTextLine2: "볼 수 있어요",
    subText: "발견했던 우연을 확인 가능!",
  },
];

function LoginPage() {
  // 슬라이드 딜레이 발생 현상 => useLayouteffect 써보기
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Grid
      container
      // direction="column"
      alignItems="center"
      justifyContent="center"
      maxWidth="414px"
      margin="0 auto"
      height="100vh"
      padding="0rem 2rem 1rem 2rem"
    >
      <CssBaseline />
      <Global
        styles={{
          body: {
            backgroundColor: "#EFF0F2",
          },
          ".globalContainer .MuiBox-root": { padding: 0 },
        }}
      />

      {/* 이미지 영역(상단) */}
      <Grid
        item
        width="100%"
        sx={{
          margin: "0 auto",
        }}
      >
        <ImageSlideView
          introduction={introduction}
          activeStep={activeStep}
          handleStepChange={handleStepChange}
        ></ImageSlideView>
      </Grid>

      <Grid item sx={{ pt: "1rem", margin: 0 }}>
        {/* 스와이프 Dot (•••) */}
        <Grid item>
          <MobileStepper
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            backButton={null}
            nextButton={null}
            sx={{
              alignItems: "center",
              justifyContent: "center",
              dotActiveStyle: { backgroundColor: "#1976d2" },
              dotStyle: { mx: 1 }, // dot 간격 조정하기
            }}
          />
        </Grid>

        {/* 텍스트 영역(하단) */}
        <Grid item>
          <TextSlideView
            introduction={introduction}
            activeStep={activeStep}
            handleStepChange={handleStepChange}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default LoginPage;
