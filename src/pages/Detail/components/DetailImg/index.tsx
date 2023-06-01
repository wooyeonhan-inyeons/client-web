import React, { useState } from "react";
import { HeadBlinder } from "./components/headBlinder";
import { Box, MobileStepper } from "@mui/material";
import { GetDetailWooyeonType } from "../../../Main/components/Search/interface";
import ImageCarousel from "./components/ImageCarousel";

// const ImageCarousel = React.lazy(() => import("./components/ImageCarousel"));

export default function DetailImg({
  wooyeon,
}: {
  wooyeon: GetDetailWooyeonType | undefined;
}) {
  const [activeStep, setActiveStep] = useState(0);
  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <HeadBlinder />
      <ImageCarousel
        activeStep={activeStep}
        handleStepChange={handleStepChange}
        images={wooyeon?.image}
      />
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
    </Box>
  );
}
