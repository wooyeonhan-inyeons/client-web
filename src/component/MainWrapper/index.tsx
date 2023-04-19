import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import { Box, Container } from "@mui/material";
import { HeaderOptinterface } from "../../interface";
import { HeaderProp } from "./interface";

const initOption: HeaderOptinterface = {
  menus: [{ key: "", value: "" }],
  isForward: true,
};

function MainWrapper({ isHeader }: HeaderProp) {
  const [headOpt, setHeadOpt] = useState<HeaderOptinterface>(initOption);

  return (
    <>
      {isHeader && <Header headProp={headOpt} />}
      <Container
        className="globalContainer"
        maxWidth="xs"
        sx={{ backgroundColor: "#fff", touchAction: "pan-y" }}
      >
        <Box
          sx={{
            paddingTop: 7,
            height: "100vh",
          }}
        >
          <Outlet context={{ headOpt, setHeadOpt }} />
        </Box>
      </Container>
    </>
  );
}

export default MainWrapper;
