import { Slider } from "@mui/material";
import React from "react";
import { UnDragBox } from "./drawBar";

const range = [
  { value: 1, label: "1km" },
  { value: 5, label: "5km" },
  { value: 10, label: "10km" },
];

function valueLabelFormat(value: number) {
  return range.findIndex((mark) => mark.value === value) + 1;
}

function RangeBar() {
  return (
    <UnDragBox sx={{ pt: 1 }}>
      <Slider
        aria-label="RangeBar values"
        defaultValue={1}
        valueLabelFormat={valueLabelFormat}
        step={null}
        valueLabelDisplay="off"
        marks={range}
        min={1}
        max={10}
      />
    </UnDragBox>
  );
}

export default RangeBar;
