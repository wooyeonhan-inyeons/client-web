import React, { useLayoutEffect } from "react";
import { useResetRecoilState } from "recoil";
import { userState } from "../../recoil";
import { Box, Button, Stack, Typography } from "@mui/material";
import {
  ContextInterface,
  HEAD_TYPE,
  HeaderOptinterface,
} from "../../interface.d";
import { faAngleLeft, faGear } from "@fortawesome/free-solid-svg-icons";
import { useOutletContext } from "react-router-dom";

export default function Mypage() {
  const { setHeadOpt, navigate } = useOutletContext<ContextInterface>();
  const resetUser = useResetRecoilState(userState);

  const headerOption: HeaderOptinterface = {
    menus: [{ key: "마이페이지", value: "/mypage" }],
    icon_L: faAngleLeft,
    fn_L: () => navigate(-1),
    icon_R: faGear,
    fn_R: () => navigate("/mypage/setting"),
    headerType: HEAD_TYPE.v3,
  };

  useLayoutEffect(() => {
    //네비게이션 리스트 업데이트
    setHeadOpt(headerOption);
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
