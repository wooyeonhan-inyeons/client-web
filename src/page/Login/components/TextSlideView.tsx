import { Grid, Typography, useTheme } from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import React from "react";
import SaveBtn from "../../Category/components/SaveBtn";
import { IntroductionProps } from "../types";

const TextSlideView = ({
  introduction,
  activeStep,
  handleStepChange,
}: IntroductionProps) => {
  const theme = useTheme();
  return (
    <>
      {/* 하반부 전체을 감싸는 Grid */}
      <Grid
        container
        sx={{ p: "1rem" }}
        alignItems="center"
        justifyContent="center"
      >
        <Grid item sx={{ p: "1rem" }}>
          {/* 슬라이드 뷰 */}
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {/* 안내 문구 map */}
            {introduction.map((text, index) => (
              <Grid item sx={{ pt: "2rem", pb: "2rem" }} key={index}>
                <Typography
                  variant="h4"
                  align="center"
                  sx={{ fontWeight: 600 }}
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
                  sx={{ color: "#A2A2A2", pt: "0.7rem" }}
                >
                  {text.subText}
                </Typography>
              </Grid>
            ))}
          </SwipeableViews>
        </Grid>

        {/* 시작하기 버튼 */}
        <Grid item sx={{ p: "2rem" }}>
          <SaveBtn text="시작하기" />
        </Grid>
      </Grid>
    </>
  );
};

export default TextSlideView;
