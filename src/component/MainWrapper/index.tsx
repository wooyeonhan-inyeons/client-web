import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { HeaderOptinterface } from "../../interface";
import { HeaderProp, WrapperOptInterface } from "./interface";
import Header from "../Header";
import { useRecoilState } from "recoil";
import { envState } from "../../recoil";
import { colorSet } from "../../common";
import { StyledContainer } from "./style";
const initOption: HeaderOptinterface = {
  menus: [{ key: "", value: "" }],
  isForward: true,
};

function MainWrapper({ isHeader }: HeaderProp) {
  const [headOpt, setHeadOpt] = useState<HeaderOptinterface>(initOption);
  const [wrapperOpt, setWrapperOpt] = useState<WrapperOptInterface>({
    isFullWidth: false,
    isNoneHeadPadding: false,
  });
  const navigate = useNavigate();
  const [env] = useRecoilState(envState);
  return (
    <>
      {isHeader && <Header headProp={headOpt} navigate={navigate} />}
      <StyledContainer
        className="globalContainer"
        maxWidth="xs"
        sx={{
          backgroundColor:
            env.theme == "light"
              ? colorSet.light.background
              : colorSet.dark.background,
          touchAction: "pan-x",
          paddingLeft: wrapperOpt.isNoneHeadPadding ? 0 : 2,
          paddingRight: wrapperOpt.isNoneHeadPadding ? 0 : 2,
          "@media (min-width: 600px)": {
            paddingLeft: wrapperOpt.isNoneHeadPadding ? 0 : 2,
            paddingRight: wrapperOpt.isNoneHeadPadding ? 0 : 2,
          },
        }}
      >
        <Box
          sx={{
            paddingTop: wrapperOpt.isFullWidth ? 0 : 7,
            minHeight: "100vh",
            height: "100vh",
            "@media (min-width: 600px)": {
              paddingTop: wrapperOpt.isFullWidth ? 0 : 8,
            },
          }}
        >
          <Outlet context={{ headOpt, setHeadOpt, navigate, setWrapperOpt }} />
        </Box>
      </StyledContainer>
    </>
  );
}

export default MainWrapper;
