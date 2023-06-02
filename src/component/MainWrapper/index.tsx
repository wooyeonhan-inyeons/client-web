import React, { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
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

  const [category, setCategory] = useState<string>();
  const [shaking, setShaking] = useState<boolean>(false);
  const [btnText, setBtnText] = useState("다음");
  const handleBtnNavigate = () => {
    if (location.pathname === "/add-post") {
      setBtnText("다음");
      navigate("/add-post/category");
    } else if (location.pathname === "/add-post/category") {
      category && setBtnText("우연 등록하기");
      category && navigate("/add-post/content");
      if (!category) {
        setShaking(true);
        // console.log("흔들흔들 setShaking", shaking);
        // 이후에 바로 false로 설정해야 되는데 일단 미루겠음
      }
    } else {
      setBtnText("다음");
      navigate("/add-post/category"); // 우연 등록 시 라우팅 수정하기
    }
  };

  return (
    <>
      {isHeader && (
        <Header
          headProp={headOpt}
          navigate={navigate}
          setBtnText={setBtnText}
        />
      )}
      <StyledContainer
        className="globalContainer"
        maxWidth="xs"
        sx={{
          pl: wrapperOpt.isFullWidth ? 0 : 2,
          pr: wrapperOpt.isFullWidth ? 0 : 2,
          "@media (min-width: 600px)": {
            pl: wrapperOpt.isFullWidth ? 0 : 2,
            pr: wrapperOpt.isFullWidth ? 0 : 2,
          },
        }}
      >
        <Box
          sx={{
            maxHeight: "100vh",
            touchAction: "none",
            overflowX: wrapperOpt.scrollable ? "scroll" : "hidden",
            height: wrapperOpt.noneFullHeight ? "auto" : "100vh",
            pt: wrapperOpt.isNoneHeadPadding ? 0 : 7,
            "@media (min-width: 600px)": {
              pt: wrapperOpt.isNoneHeadPadding ? 0 : 8,
            },
            pb: wrapperOpt.isBtn ? 8 : 0,
          }}
        >
          <Outlet
            context={{
              headOpt,
              setHeadOpt,
              navigate,
              setWrapperOpt,
              setCategory,
              shaking,
              setShaking,
            }}
          />
          {wrapperOpt.isBtn && (
            <Box
              sx={{
                width: "100%",
                maxWidth: "444px",
                margin: "auto",
                position: "fixed",
                bottom: 0,
                px: 3,
                pb: 4,
              }}
            >
              <SaveBtn text={btnText} onClick={handleBtnNavigate} />
            </Box>
          )}
        </Box>
      </StyledContainer>
    </>
  );
}

export default MainWrapper;
