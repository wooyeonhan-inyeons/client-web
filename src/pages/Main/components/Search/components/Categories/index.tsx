import React from "react";
import { Box } from "@mui/material";
import { useCategory } from "../../../../../../hook/useCategory";
import { WooyeonsCategory } from "../../../../../../interface";
import { CategoryFilterInterface } from "../../interface";

const wooyeonCategory: Array<{ id: WooyeonsCategory; value: string }> = [
  { id: "DAILY", value: "일상" },
  { id: "GROUP", value: "모임" },
  { id: "INFO", value: "정보" },
  { id: "EVENT", value: "이벤트" },
  { id: "ADS", value: "광고" },
  { id: "PRESENT", value: "선물" },
];

function Categories({ filter, setFilter }: CategoryFilterInterface) {
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
      {wooyeonCategory.map((item) => {
        return (
          <CategoryItem
            key={item.id}
            checked={filter.preferCategory.includes(item.id)}
            setFilter={setFilter}
          >
            {item}
          </CategoryItem>
        );
      })}
    </Box>
  );
}

export default Categories;
