import { Button, CssBaseline, createTheme } from "@mui/material";
import React from "react";
import CategoryBtn from "./page/Category/components/CategoryBtn";
import SaveBtn from "./page/Category/components/SaveBtn";

function App() {
  return (
    <>
      <CategoryBtn text="프롭스 전달"></CategoryBtn>
      <SaveBtn text="선택 완료"></SaveBtn>
    </>
  );
}

export default App;
