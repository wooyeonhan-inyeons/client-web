import React, { useState } from "react";
import { HeadBlinder } from "./components/headBlinder";
import ImageCarousel from "./components/ImageCarousel";
import { MobileStepper } from "@mui/material";
import { tempWooyeons } from "../../../Main/components/Search/utils";

export default function DetailImg() {
  const [activeStep, setActiveStep] = useState(0);
  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <>
      <HeadBlinder />
      <ImageCarousel
        activeStep={activeStep}
        handleStepChange={handleStepChange}
        tempWooyeons={tempWooyeons}
      />
      <MobileStepper
        steps={tempWooyeons.length}
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
}
