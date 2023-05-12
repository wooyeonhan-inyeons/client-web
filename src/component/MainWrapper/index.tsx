import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Box, Container } from "@mui/material";
import { HeaderOptinterface } from "../../interface";
import { HeaderProp } from "./interface";
import Header from "../Header";
import { useRecoilState } from "recoil";
import { envState } from "../../recoil";
import { colorSet } from "../../common";
const initOption: HeaderOptinterface = {
  menus: [{ key: "", value: "" }],
  isForward: true,
};

function MainWrapper({ isHeader }: HeaderProp) {
  const [headOpt, setHeadOpt] = useState<HeaderOptinterface>(initOption);
  const navigate = useNavigate();
  const [env] = useRecoilState(envState);
  return (
    <>
      {isHeader && <Header headProp={headOpt} navigate={navigate} />}
      <Container
        className="globalContainer"
        maxWidth="xs"
        sx={{
          backgroundColor:
            env.theme == "light"
              ? colorSet.light.background
              : colorSet.dark.background,
          touchAction: "pan-x",
          "@media (min-width: 600px)": {
            paddingLeft: 2,
            paddingRight: 2,
          },
        }}
      >
        <Box
          sx={{
            paddingTop: 7,
            minHeight: "100vh",
            height: "100vh",
            "@media (min-width: 600px)": {
              paddingTop: 8,
            },
          }}
        >
          <Outlet context={{ headOpt, setHeadOpt, navigate }} />
        </Box>
      </Container>
    </>
  );
}

export default MainWrapper;
