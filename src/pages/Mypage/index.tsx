import React, { useLayoutEffect } from "react";
import { useResetRecoilState } from "recoil";
import { userState } from "../../recoil";
import { Box, Button, Stack, Typography } from "@mui/material";
import { ContextInterface, HeaderOptinterface } from "../../interface.d";
import { useOutletContext } from "react-router-dom";
import { WrapperOptInterface } from "../../component/MainWrapper/interface";
import { CaretLeft, GearSix } from "@phosphor-icons/react";

export default function Mypage() {
  const { setHeadOpt, navigate, setWrapperOpt } =
    useOutletContext<ContextInterface>();
  const resetUser = useResetRecoilState(userState);

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

  return (
    <Stack>
      <Box sx={{ height: "20rem" }}>
        <Typography variant="h3">HELLO</Typography>
      </Box>
      <Button fullWidth onClick={() => navigate("/mypage/edit")}>
        프로필 수정
      </Button>
      <Button fullWidth onClick={resetUser}>
        로그아웃
      </Button>
    </Stack>
  );
}
