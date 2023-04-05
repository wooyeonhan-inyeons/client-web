import React from "react";
import { useCategory } from "../../../hook/useCategory";
import { Box } from "@mui/material";
import { Global } from "@emotion/react";

const wooyeonCategory = [
  { id: "life", value: "일상" },
  { id: "meet", value: "모임" },
  { id: "info", value: "정보" },
  { id: "event", value: "이벤트" },
  { id: "ad", value: "광고" },
  { id: "gift", value: "선물" },
];

function Category() {
  const { CategoryItem } = useCategory();
  return (
    <>
      <Global
        styles={{
          ".MuiBox-root::-webkit-scrollbar": {
            display: "none",
          },
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexWrap: "nowrap",
          overflowX: "auto",
          gap: "0.5rem",
          padding: "1rem 0",
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
    </>
  );
}

export default Category;
