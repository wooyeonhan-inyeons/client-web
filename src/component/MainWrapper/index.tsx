import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import { Box, Container } from "@mui/material";
import { useResetRecoilState } from "recoil";
import userState from "../../recoil";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { menuProps } from "../../interface";
import { HeaderProp } from "./interface";

function MainWrapper({ isHeader }: HeaderProp) {
  const [menus, setMenus] = useState<menuProps[]>([{ key: "", value: "" }]);
  const resetUser = useResetRecoilState(userState);

  return (
    <>
      {isHeader && <Header menu={menus} mainFn={resetUser} icon={faUser} />}
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
          <Outlet context={{ menus, setMenus }} />
        </Box>
      </Container>
    </>
  );
}

export default MainWrapper;
