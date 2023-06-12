import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { Box, MobileStepper } from "@mui/material";
import { DetailCarousel } from "../../../../interface";

const ImageCarousel = ({ images }: DetailCarousel) => {
  const [activeStep, setActiveStep] = useState(0);
  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <>
      <SwipeableViews
        axis={"x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        style={{ width: "100%", aspectRatio: "1/1" }}
      >
        <div>
          {images?.map((item) => (
            <Box
              key={item.img_id}
              sx={{
                width: "100%",
                height: "100%",
                minHeight: "100%",
                display: "flex",
              }}
            >
              <img
                src={item.img_url}
                style={{
                  width: "100%",
                  aspectRatio: "1/1",
                  minHeight: "50vh",
                  objectFit: "cover",
                }}
              />
            </Box>
          ))}
        </div>
      </SwipeableViews>
      <MobileStepper
        steps={1}
        position="static"
        activeStep={activeStep}
        backButton={null}
        nextButton={null}
        sx={{
          alignItems: "center",
          justifyContent: "center",
          dotStyle: { mx: 1 }, // dot 간격 조정하기
          position: "relative",
          top: "-30px",
          background: "none",
        }}
      />
    </>
  );
};

export default ImageCarousel;
