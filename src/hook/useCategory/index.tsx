import React, { useState } from "react";
import { Button, styled } from "@mui/material";
import { colorSet } from "../../common";
import { CategoryItemProps } from "./interface";

const CategoryButton = styled(Button)(({ checked }: { checked: boolean }) => ({
  borderRadius: "1.25rem",
  height: "2.5rem",
  color: checked ? "#fff" : "#222",
  padding: "0 1.6rem",
  border: `1px solid ${checked ? "#0000" : colorSet.light.primary}`,
  flex: "0 0 auto",
}));

function CategoryItem({ children, action }: CategoryItemProps) {
  const [checked, setChecked] = useState<boolean>(false);
  const handleChecked = () => {
    setChecked(!checked);
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
