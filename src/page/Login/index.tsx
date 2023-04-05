import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import SwipeableViews from "react-swipeable-views";
import { Container, CssBaseline, Grid, Typography } from "@mui/material";
import SaveBtn from "../Category/components/SaveBtn";
import { Global } from "@emotion/react";
import "./style.css";
import TextSlideView from "./components/TextSlideView";
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
        <TextSlideView
          introduction={introduction}
          activeStep={activeStep}
          handleStepChange={handleStepChange}
        />
      </Grid>
    </Grid>
  );
}

export default SwipeableTextMobileStepper;
