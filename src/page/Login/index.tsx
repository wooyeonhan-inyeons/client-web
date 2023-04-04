import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import SwipeableViews from "react-swipeable-views";
import { Container, Grid, Typography } from "@mui/material";
import SaveBtn from "../Category/components/SaveBtn";
import loginImg1 from "./img/loginImg1.png";
import loginImg2 from "./img/loginImg1.png";
import loginImg3 from "./img/loginImg1.png";

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
    mainText: "레이더를 통해 내 주변의 우연을 찾기",
    subText: "원하는 카테고리와 범위 설정하기!",
  },
  {
    mainText: "발견한 우연을 확인하고 댓글 입력하기",
    subText: "소통과 재미를 동시에!",
  },
  {
    mainText: "지도에서 발견한 우연을 볼 수 있어요",
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
                    position: "relative",
                    bottom: "3rem",
                  }}
                  src={step.imgPath}
                />
              ) : null}
            </div>
          ))}
        </SwipeableViews>
      </Grid>

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
      <Grid>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {introduction.map((text, index) => (
            <Container sx={{ pt: "3rem", pb: "3rem" }} key={index}>
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                {text.mainText}
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ color: "#A2A2A2", pt: "0.7rem" }}
              >
                {text.subText}
              </Typography>
            </Container>
          ))}
        </SwipeableViews>
      </Grid>
      <Grid item>
        <SaveBtn text="시작하기" />
      </Grid>
    </Grid>
  );
}

export default SwipeableTextMobileStepper;
