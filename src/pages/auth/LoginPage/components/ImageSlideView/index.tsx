import React from "react";
import { Box } from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import { IntroductionProps } from "../../types";
import { useTheme } from "@mui/material/styles";
import { images } from "../ImageArray";

const ImageSlideView = ({
  // eslint-disable-next-line no-unused-vars
  activeStep,
  handleStepChange,
}: IntroductionProps) => {
  const theme = useTheme();
  return (
    <>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        style={{ width: "100%" }}
      >
        {images.map((step, index) => (
          <div
            key={index}
            style={{
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                src={step.src}
                height="calc( 100% )"
                overflow="hidden"
                sx={{
                  position: "relative",
                  top: step.css,
                  // left: "2rem",
                }}
              />
            ) : null}
          </div>
        ))}
      </SwipeableViews>
    </>
  );
};

export default ImageSlideView;
