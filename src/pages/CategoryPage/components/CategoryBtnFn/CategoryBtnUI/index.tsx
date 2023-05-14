import React from "react";
import { Button } from "@mui/material";
import { OneCategoryType } from "../../../../AddPost/components/CategoryAddPost/type";

// activeColor useState 전달 (CategoryBtnFn -> CategoryBtnUI)
// CategoryBtn 컴포넌트 분리(UI와 onClick 함수) => CategoryBtnFn, CategoryBtnUI

const CategoryBtnUI = ({
  activeColor,
  handleButtonClick,
  category,
}: {
  activeColor: ColorType;
  handleButtonClick: () => void;
  category: OneCategoryType;
}) => {
  return (
    <Button
      variant="contained"
      color={activeColor as ColorType} // 전달
      href="#contained-buttons"
      sx={{
        width: "100%",
        height: "100%",
        borderRadius: 4,
        fontWeight: 600,
      }}
      onClick={handleButtonClick} // 전달
      style={{
        boxShadow: "0 1px 3px rgba(0,0,0,0.12)",
        fontSize: 20,
      }}
    >
      {category.id}
    </Button>
  );
};

export default CategoryBtnUI;
