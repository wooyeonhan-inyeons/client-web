import React, { useState } from "react";
import { CategoryItemProps } from "./interface";
import { CategoryButton } from "./style";

function CategoryItem({ children, action }: CategoryItemProps) {
  const [checked, setChecked] = useState<boolean>(false);
  const handleChecked = () => {
    setChecked((checked) => !checked);
    action();
  };

  return (
    <CategoryButton
      variant={checked ? "contained" : "outlined"}
      onClick={handleChecked}
      checked={checked}
    >
      {children}
    </CategoryButton>
  );
}

function useCategory() {
  return { CategoryItem };
}

export { useCategory };
