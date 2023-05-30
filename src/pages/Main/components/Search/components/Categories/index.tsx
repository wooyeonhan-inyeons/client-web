import React from "react";
import { Box } from "@mui/material";
import { useCategory } from "../../../../../../hook/useCategory";
import { SetterOrUpdater } from "recoil";
import { FilterState } from "../../../../../../interface";

const wooyeonCategory = [
  { id: "DAILY", value: "일상" },
  { id: "METTING", value: "모임" },
  { id: "INFORMATION", value: "정보" },
  { id: "EVENT", value: "이벤트" },
  { id: "COMMERCIAL", value: "광고" },
  { id: "GIFT", value: "선물" },
];

function Categories({
  setFilter,
}: {
  setFilter: SetterOrUpdater<FilterState>;
}) {
  const { CategoryItem } = useCategory();

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexWrap: "nowrap",
        overflow: "auto",
        gap: "0.5rem",
        padding: "1rem 0",

        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      {wooyeonCategory.map((item) => (
        <CategoryItem key={item.id} setFilter={setFilter}>
          {item}
        </CategoryItem>
      ))}
    </Box>
  );
}

export default Categories;
