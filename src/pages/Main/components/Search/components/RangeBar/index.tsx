import React from "react";
import { Slider } from "@mui/material";
import { UnDragBox, colorSet } from "../../../../../../common";
import Global from "@mui/styled-engine-sc/GlobalStyles/GlobalStyles";

const range = [
  { value: 10, label: "10m" },
  { value: 50, label: "50m" },
  { value: 100, label: "100m" },
];

function RangeBar() {
  function valueLabelFormat(value: number) {
    return range.findIndex((mark) => mark.value === value) + 1;
  }

  return (
    <UnDragBox sx={{ px: 2, touchAction: "auto" }}>
      <Global
        styles={{
          ".MuiSlider-root": {
            height: "1px",
          },
          ".MuiSlider-root > .MuiSlider-mark": {
            width: "10px",
            height: "10px",
            color: "#fff",
            border: `1px solid ${colorSet.light.primary}`,
            borderRadius: "50%",
            opacity: 1,
          },
          ".MuiSlider-root .MuiSlider-markLabel": {
            fontSize: "10px !important",
          },
        }}
      />
      <Slider
        aria-label="RangeBar values"
        defaultValue={10}
        valueLabelFormat={valueLabelFormat}
        step={null}
        valueLabelDisplay="off"
        marks={range}
        min={10}
        max={100}
      />
    </UnDragBox>
  );
}

export default RangeBar;
