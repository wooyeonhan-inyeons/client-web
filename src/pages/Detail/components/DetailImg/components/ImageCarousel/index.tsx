import React from "react";
import SwipeableViews from "react-swipeable-views";
import { Box } from "@mui/material";
import { DetailCarousel } from "../../../../interface";

export default function ImageCarousel({
  activeStep,
  handleStepChange,
  tempWooyeons,
}: DetailCarousel) {
  return (
    <SwipeableViews
      axis={"x"}
      index={activeStep}
      onChangeIndex={handleStepChange}
      enableMouseEvents
      style={{ width: "100%" }}
    >
      {tempWooyeons.map((item) => (
        <Box
          key={item.id}
          sx={{
            width: "100%",
            minHeight: "100%",
            maxHeight: "70vh",
            display: "flex",
          }}
        >
          <img
            src={item.img}
            style={{
              width: "100%",
              minHeight: "50vh",
              objectFit: "contain",
            }}
          />
        </Box>
      ))}
    </SwipeableViews>
  );
}
