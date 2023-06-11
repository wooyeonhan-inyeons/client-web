import React, { useLayoutEffect } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import { envState, filterState, userState } from "../../recoil";
import { Box, Button, Typography } from "@mui/material";
import { ContextInterface, HeaderOptinterface } from "../../interface.d";
import { useOutletContext } from "react-router-dom";
import { WrapperOptInterface } from "../../component/MainWrapper/interface";
import { CaretLeft, GearSix } from "@phosphor-icons/react";
import Header from "../../component/Header";
import Avatar from "boring-avatars";
import { avatarColors } from "../../common";

export default function Mypage() {
  const { setHeadOpt, navigate, setWrapperOpt } =
    useOutletContext<ContextInterface>();
  const resetUser = useResetRecoilState(userState);
  const resetFilter = useResetRecoilState(filterState);
  const resetEnv = useResetRecoilState(envState);

  const headerOption: HeaderOptinterface = {
    menus: [{ key: "마이페이지", value: "/mypage" }],
    icon_L: CaretLeft,
    fn_L: () => navigate(-1),
    icon_R: GearSix,
    fn_R: () => navigate("/mypage/setting"),
    headerType: "V3",
  };
  const wrapperOpt: WrapperOptInterface = {
    isNoneHeadPadding: false,
  };

  useLayoutEffect(() => {
    //네비게이션 리스트 업데이트
    setHeadOpt(headerOption);
    setWrapperOpt(wrapperOpt);
  }, []);

  const handleLogout = () => {
    resetUser();
    resetFilter();
    resetEnv();
  };
  const [user] = useRecoilState(userState);

  return (
    <>
      <Header headProp={headerOption} navigate={navigate} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          py: "5rem",
        }}
      >
        <Avatar
          name={user.user_id}
          variant="beam"
          size={120}
          colors={avatarColors}
        />

        {/* <Typography variant="h3">{user.name}</Typography> */}
        <Typography variant="h5" sx={{ fontWeight: "bold", pt: "2rem" }}>
          초록초록 매실님
        </Typography>
        {/* <Typography variant="h3">{user.email}</Typography> */}
        <Typography variant="body1" sx={{ color: "#B3B3B3" }}>
          {user.email ? user.email : "anon42@gmail.com"}
        </Typography>
        {/* <Button fullWidth onClick={() => navigate("/mypage/edit")}>
            프로필 수정
          </Button> */}
        <Button
          sx={{ width: "80%", borderRadius: "10px", my: "3rem" }}
          variant="contained"
          onClick={handleLogout}
        >
          로그아웃
        </Button>
      </Box>
    </>
  );
}
