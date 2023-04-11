import React from "react";
import { AppBar, Box, Button, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import { useRecoilState, useResetRecoilState } from "recoil";
import userState from "../../recoil";
import { Global } from "@emotion/react";

function Header() {
  const [user, setUser] = useRecoilState(userState);
  const resetUser = useResetRecoilState(userState);

  //임시 로그인 로그아웃
  const toggleUser = () => {
    if (user.role === "GUEST") setUser({ role: "USER", id: 1, name: "lee" });
    else resetUser();
  };

  return (
    <>
      <Global
        styles={{
          ".header_root": {
            position: "fixed",
            zIndex: 9999,
          },
          ".header_root > header": {
            backgroundColor: "#fff",
            boxShadow: "none",
            color: "#222",
          },
        }}
      />
      <Box sx={{ flexGrow: 1 }} className="header_root">
        <AppBar position="static">
          <Toolbar sx={{ gap: "1rem", fontSize: "0.5rem" }}>
            임시네비
            <Link to="/">HOME</Link>
            <Link to="/search">레이더</Link>
            <Link to="/auth/">로그인</Link>
            <Link to="/auth/cate">카테고리</Link>
            <Button onClick={toggleUser}>
              {user.role === "GUEST" ? "로그인" : "로그아웃"}
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default Header;
