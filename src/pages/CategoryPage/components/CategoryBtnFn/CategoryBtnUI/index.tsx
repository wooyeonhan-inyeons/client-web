import React from "react";
import { Button, useTheme } from "@mui/material";
import { OneCategoryType } from "../../../../AddPost/components/CategoryAddPost/type";
import { mainPrimary } from "../../../../../common";

// activeColor useState 전달 (CategoryBtnFn -> CategoryBtnUI)
// CategoryBtn 컴포넌트 분리(UI와 onClick 함수) => CategoryBtnFn, CategoryBtnUI

const CategoryBtnUI = ({
  activeColor,
  handleButtonClick,
  category,
}: {
  activeColor: string;
  handleButtonClick: () => void;
  category: OneCategoryType;
}) => {
  const theme = useTheme();
  return (
    <Button
      variant="contained"
      // color={activeColor as ColorType} // 전달
      // href="#contained-buttons"
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
        backgroundColor: activeColor,
        color:
          theme.palette.mode === "light"
            ? activeColor === mainPrimary
              ? "#ffffff"
              : "#222222"
            : "#FFFFFF",
      }}
    >
      {category.id}
    </Button>
  );
};

export default CategoryBtnUI;
