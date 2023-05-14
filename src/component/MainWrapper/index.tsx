import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { HeaderOptinterface } from "../../interface";
import { HeaderProp, WrapperOptInterface } from "./interface";
import Header from "../Header";
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
    noneFullHeight: false,
  });
  const navigate = useNavigate();
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
            paddingTop: wrapperOpt.isFullWidth ? 0 : 7,
            minHeight: "100vh",
            overflowX: "scroll",
            height: wrapperOpt.noneFullHeight ? "auto" : "100vh",
            "@media (min-width: 600px)": {
              paddingTop: wrapperOpt.isNoneHeadPadding ? 0 : 8,
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
