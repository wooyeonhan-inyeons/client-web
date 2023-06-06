import React from "react";
import { CategoryItemProps } from "./interface";
import { CategoryButton } from "./style";
import { FilterState, WooyeonsCategory } from "../../interface";

function CategoryItem({ children, setFilter, checked }: CategoryItemProps) {
  const handleChecked = (id: WooyeonsCategory) => {
    //카테고리 배열 값 세팅
    setFilter((prev: FilterState) => {
      let newCategory = prev.preferCategory;
      const index = newCategory.indexOf(id);

      if (!checked && index === -1) {
        newCategory = [...newCategory, id];
      } else if (index !== -1) {
        if (prev.preferCategory.length === 1)
          return {
            ...prev,
            preferCategory: newCategory,
          };
        newCategory = prev.preferCategory.filter((item) => item !== id);
      }
      return {
        ...prev,
        preferCategory: newCategory,
      };
    });
  };

  return (
    <CategoryButton
      variant={checked ? "contained" : "outlined"}
      onClick={() => handleChecked(children.id as WooyeonsCategory)}
      checked={checked}
    >
      {children.value}
    </CategoryButton>
  );
}

function useCategory() {
  return { CategoryItem };
}

export { useCategory };
