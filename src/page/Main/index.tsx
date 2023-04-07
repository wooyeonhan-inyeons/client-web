import React from "react";
import { Box, Button } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import userState from "../../recoil";
import { useRecoilState, useResetRecoilState } from "recoil";

function Main() {
  const [user, setUser] = useRecoilState(userState);
  const resetUser = useResetRecoilState(userState);

  //임시 로그인 로그아웃
  const toggleUser = () => {
    if (user.role === "GUEST") setUser({ role: "USER", id: 1, name: "lee" });
    else resetUser();
  };
  return (
    <>
      <Box
        sx={{
          position: "fixed",
          display: "flex",
          top: 0,
          gap: 1,
          zIndex: 999999,
        }}
      >
        임시네비
        <Link to="/">HOME</Link>
        <Link to="/search">레이더</Link>
        <Link to="/auth/">로그인</Link>
        <Link to="/auth/cate">카테고리</Link>
        <Button onClick={toggleUser}>
          {user.role === "GUEST" ? "로그인" : "로그아웃"}
        </Button>
      </Box>
      <Outlet />
    </>
  );
}

export default Main;
