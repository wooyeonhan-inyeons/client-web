import React from "react";
import { Box } from "@mui/material";
import { useCategory } from "../../../../../../hook/useCategory";

const wooyeonCategory = [
  { id: "life", value: "일상" },
  { id: "meet", value: "모임" },
  { id: "info", value: "정보" },
  { id: "event", value: "이벤트" },
  { id: "ad", value: "광고" },
  { id: "gift", value: "선물" },
];

function Categories() {
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
        <CategoryItem
          key={item.id}
          action={() => console.log(`Category, ${item.value}`)}
        >
          {item.value}
        </CategoryItem>
      ))}
    </Box>
  );
}

export default Categories;
