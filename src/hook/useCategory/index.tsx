import React, { useEffect, useState } from "react";
import { CategoryItemProps } from "./interface";
import { CategoryButton } from "./style";
import { FilterState, WooyeonsCategory } from "../../interface";

function CategoryItem({ children, setFilter }: CategoryItemProps) {
  const [checked, setChecked] = useState<boolean>(false);

  const handleChecked = (children_: WooyeonsCategory) => {
    console.log(checked);
    setFilter((prev: FilterState) => {
      const newCategory: Array<WooyeonsCategory> = prev.preferCategory;

      if (!checked) {
        newCategory.push(children_);
      } else {
        newCategory.splice(newCategory.indexOf(children_), 1);
      }

      return {
        ...prev,
        preferCategory: newCategory,
      };
    });

    setChecked((checked) => {
      return !checked;
    });
  };

  return (
    <CategoryButton
      variant={checked ? "contained" : "outlined"}
      onClick={() => handleChecked(children.id as WooyeonsCategory)}
      checked={checked}
    >
      {children.value}
      {checked ? "✅" : "❌"}
    </CategoryButton>
  );
}

function useCategory() {
  return { CategoryItem };
}

export { useCategory };
