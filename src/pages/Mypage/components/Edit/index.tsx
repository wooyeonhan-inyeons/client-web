import React, { useLayoutEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useOutletContext } from "react-router-dom";
import {
  ContextInterface,
  HEAD_TYPE,
  HeaderOptinterface,
} from "../../../../interface.d";

export default function EditProfile() {
  const { setHeadOpt, navigate } = useOutletContext<ContextInterface>();

  const headerOption: HeaderOptinterface = {
    menus: [{ key: "프로필 수정", value: "/mypage/edit" }],
    icon_L: faXmark,
    fn_L: () => navigate(-1),
    headerType: HEAD_TYPE.v3,
  };

  useLayoutEffect(() => {
    //네비게이션 리스트 업데이트
    setHeadOpt(headerOption);
  }, []);

  return (
    <Stack>
      <Box sx={{ height: "20rem" }}>
        <Typography variant="h3">프로필 수정</Typography>
      </Box>
    </Stack>
  );
}
