import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import { Box, Container } from "@mui/material";
import { useResetRecoilState } from "recoil";
import userState from "../../recoil";
import { faUser } from "@fortawesome/free-regular-svg-icons";
interface HeaderProp {
  isHeader: boolean;
}

interface menuProps {
  key: string;
  value: string;
}

const menu: menuProps[] = [
  { key: "우연 찾기", value: "/search" },
  { key: "과거 우연", value: "/previous" },
];

function Main({ isHeader }: HeaderProp) {
  const resetUser = useResetRecoilState(userState);
  return (
    <>
      {isHeader && <Header menu={menu} mainFn={resetUser} icon={faUser} />}
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
          <Outlet />
        </Box>
      </Container>
    </>
  );
}

export default Main;
