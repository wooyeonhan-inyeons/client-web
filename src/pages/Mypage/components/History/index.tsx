import React, { useLayoutEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { useOutletContext } from "react-router-dom";
import { ContextInterface, HeaderOptinterface } from "../../../../interface.d";
import { CaretLeft, X } from "@phosphor-icons/react";

export default function History() {
  const { setHeadOpt, navigate } = useOutletContext<ContextInterface>();

  const headerOption: HeaderOptinterface = {
    menus: [{ key: "내가 발견한 우연들", value: "/mypage/history" }],
    icon_L: CaretLeft,
    fn_L: () => navigate("/mypage"),
    headerType: "V3",
  };

  useLayoutEffect(() => {
    //네비게이션 리스트 업데이트
    setHeadOpt(headerOption);
  }, []);

  return (
    <Stack>
      <Box sx={{ height: "20rem" }}>
        <Typography variant="subtitle2">내가 발견한 우연들</Typography>
      </Box>
    </Stack>
  );
}
