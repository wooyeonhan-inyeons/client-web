import React from "react";
import { Slider } from "@mui/material";
import { UnDragBox } from "../../../../../../common";
import { RangeBarStyle } from "./style";
import { useRecoilState } from "recoil";
import { filterState } from "../../../../../../recoil";
import { FilterState, RangeType } from "../../../../../../interface";

const ranges = [
  { value: 1, label: "10m" },
  { value: 50, label: "50m" },
  { value: 100, label: "100m" },
];

function RangeBar() {
  const [filter, setFilter] = useRecoilState(filterState);

  const onChange = (value: number) => {
    setFilter((prev: FilterState) => {
      return {
        ...prev,
        searchRange: value as RangeType,
      };
    });
  };

  function valueLabelFormat(value: number) {
    return ranges.findIndex((mark) => mark.value === value) + 1;
  }

  return (
    <UnDragBox sx={RangeBarStyle}>
      <Slider
        onChange={(_, value) => onChange(value as number)}
        value={filter.searchRange}
        valueLabelFormat={valueLabelFormat}
        step={null}
        valueLabelDisplay="off"
        marks={ranges}
        min={1}
        max={100}
      />
    </UnDragBox>
  );
}

export default RangeBar;
