import React from "react";
import { Grid, Typography, useTheme } from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import { IntroductionProps } from "../../types";
import kakaoIcon from "../../img/kakaoIcon.png";
import SnsButton from "../SnsButton";

const TextSlideView = ({
  introduction,
  activeStep,
  handleStepChange,
}: IntroductionProps) => {
  const theme = useTheme();
  return (
    <>
      {/* 하반부 전체을 감싸는 Grid */}
      <Grid container alignItems="center" justifyContent="center">
        <Grid item>
          {/* 슬라이드 뷰 */}
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {/* 안내 문구 map */}
            {introduction.map((text, index) => (
              <Grid
                item
                sx={{
                  py: "2rem",
                  "@media (max-width: 375px)": {
                    py: "1rem",
                  },
                }}
                key={index}
              >
                <Typography
                  // variant="h4"
                  align="center"
                  sx={{
                    fontSize: "2rem",
                    fontWeight: 600,
                    lineHeight: 1.2,
                    "@media (max-width: 375px)": {
                      fontSize: "1.5rem",
                      fontWeight: 500,
                    },
                  }}
                >
                  <span
                    dangerouslySetInnerHTML={{ __html: text.mainTextLine1 }}
                  ></span>
                  <br />
                  <span
                    dangerouslySetInnerHTML={{ __html: text.mainTextLine2 }}
                  ></span>
                </Typography>
                <Typography
                  variant="subtitle1"
                  align="center"
                  sx={{
                    color: "#A2A2A2",
                    pt: "0.7rem",
                    "@media (max-width: 375px)": {
                      pt: "0.5rem",
                    },
                  }}
                >
                  {text.subText}
                </Typography>
              </Grid>
            ))}
          </SwipeableViews>
        </Grid>

        {/* 시작하기 버튼 */}
        <Grid item>
          {/* <SaveBtn text="시작하기" /> */}
          {/* <SnsButton
            sns="GOOGLE"
            text="Google 계정으로 로그인"
            imgSrc={googleIcon}
          ></SnsButton> */}
          <SnsButton
            sns="KAKAO"
            text="Kakao 계정으로 로그인"
            imgSrc={kakaoIcon}
          ></SnsButton>
        </Grid>
      </Grid>
    </>
  );
};
export default TextSlideView;
