import React from "react";
import { Slider } from "@mui/material";
import { UnDragBox } from "../../../../../../common";
import { RangeBarStyle } from "./style";

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
    <UnDragBox sx={RangeBarStyle}>
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
