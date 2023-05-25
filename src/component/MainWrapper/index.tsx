import React, { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Box, menuClasses } from "@mui/material";
import { HeaderOptinterface } from "../../interface";
import { HeaderProp, WrapperOptInterface } from "./interface";
import Header from "../Header";
import { StyledContainer } from "./style";
import SaveBtn from "../SaveBtn";

function MainWrapper({ isHeader }: HeaderProp) {
  const [headOpt, setHeadOpt] = useState<HeaderOptinterface>({
    menus: [{ key: "", value: "" }],
    isForward: true,
  });
  const location = useLocation();
  const navigate = useNavigate();

  const [wrapperOpt, setWrapperOpt] = useState<WrapperOptInterface>({
    isFullWidth: false,
    isNoneHeadPadding: false,
    noneFullHeight: false,
    scrollable: false,
    isBtn: false,
  });

  // header에서 현재 태그를 부모에서 받아온 state에 저장
  // state 상태에 따라 버튼 text와 클릭함수 설정

  const [btnText, setBtnText] = useState("다음");
  const handleBtnNavigate = () => {
    if (location.pathname === "/add-post") {
      setBtnText("다음");
      navigate("/add-post/category");
    } else if (location.pathname === "/add-post/category") {
      setBtnText("우연 등록하기");
      navigate("/add-post/content");
    } else {
      setBtnText("다음");
      navigate("/add-post/category"); // 우연 등록 시 라우팅 수정하기
    }
  };

  return (
    <>
      {isHeader && <Header headProp={headOpt} navigate={navigate} />}
      <StyledContainer
        className="globalContainer"
        maxWidth="xs"
        sx={{
          paddingLeft: wrapperOpt.isFullWidth ? 0 : 2,
          paddingRight: wrapperOpt.isFullWidth ? 0 : 2,
          "@media (min-width: 600px)": {
            paddingLeft: wrapperOpt.isFullWidth ? 0 : 2,
            paddingRight: wrapperOpt.isFullWidth ? 0 : 2,
          },
        }}
      >
        <Box
          sx={{
            minHeight: "100vh",
            overflowX: wrapperOpt.scrollable ? "scroll" : "hidden",
            height: wrapperOpt.noneFullHeight ? "auto" : "100vh",
            paddingTop: wrapperOpt.isNoneHeadPadding ? 0 : 7,
            "@media (min-width: 600px)": {
              paddingTop: wrapperOpt.isNoneHeadPadding ? 0 : 8,
            },
          }}
        >
          <Outlet context={{ headOpt, setHeadOpt, navigate, setWrapperOpt }} />
        </Box>
        <Box position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
          <SaveBtn text={btnText} onClick={handleBtnNavigate} />
        </Box>
      </StyledContainer>
    </>
  );
}

export default MainWrapper;
