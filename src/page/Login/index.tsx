import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import SwipeableViews from "react-swipeable-views";
import { Container, CssBaseline, Grid, Typography } from "@mui/material";
import SaveBtn from "../Category/components/SaveBtn";
import { Global } from "@emotion/react";

// import loginImg1 from "./img/loginImg1.png";
// import loginImg2 from "./img/loginImg1.png";
// import loginImg3 from "./img/loginImg1.png";

const images = [
  {
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
  },
];

const introduction = [
  {
    mainTextLine1: "레이더를 통해",
    mainTextLine2: "내 주변의 우연을 찾기",
    subText: "원하는 카테고리와 범위 설정하기!",
  },
  {
    mainTextLine1: "발견한 우연을",
    mainTextLine2: "확인하고 댓글 입력하기",
    subText: "소통과 재미를 동시에!",
  },
  {
    mainTextLine1: "지도에서 발견한 우연을",
    mainTextLine2: "볼 수 있어요",
    subText: "발견했던 우연을 확인 가능!",
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Grid container alignItems="center" justifyContent="center">
      <CssBaseline />
      <Global
        styles={{
          body: {
            backgroundColor: "#EFF0F2",
          },
        }}
      />
      {/* 이미지 영역(상단) */}
      <Grid item>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={index}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    display: "block",
                    overflow: "hidden",
                    width: "100%",
                    pt: "5rem",
                    pb: "5rem",
                  }}
                  src={step.imgPath}
                />
              ) : null}
            </div>
          ))}
        </SwipeableViews>
      </Grid>

      <Grid item sx={{ backgroundColor: "white", pt: "1rem" }}>
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
        <Grid
          container
          sx={{ p: "1rem" }}
          alignItems="center"
          justifyContent="center"
        >
          <Grid item sx={{ p: "1rem" }}>
            <SwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
            >
              {introduction.map((text, index) => (
                <Grid item sx={{ pt: "2rem", pb: "2rem" }} key={index}>
                  <Typography variant="h5" sx={{ fontWeight: 600 }}>
                    {text.mainTextLine1} <br />
                    {text.mainTextLine2}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ color: "#A2A2A2", pt: "0.7rem" }}
                  >
                    {text.subText}
                  </Typography>
                </Grid>
              ))}
            </SwipeableViews>
          </Grid>
          <Grid item sx={{ p: "2rem" }}>
            <SaveBtn text="시작하기" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default SwipeableTextMobileStepper;
