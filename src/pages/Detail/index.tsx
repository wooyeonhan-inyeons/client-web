import React, { useLayoutEffect } from "react";
import { ContextInterface, HeaderOptinterface } from "../../interface";
import { useOutletContext, useParams } from "react-router-dom";
import { Box, Stack, alpha, useTheme } from "@mui/material";
import { WrapperOptInterface } from "../../component/MainWrapper/interface";
import DetailImg from "./components/DetailImg";
import DetailContent from "./components/DetailContent";
import DetailComment from "./components/DetailComment";
import { CaretLeft } from "@phosphor-icons/react";

export default function Detail() {
  //const postId = useParams();
  const { setHeadOpt, navigate, setWrapperOpt } =
    useOutletContext<ContextInterface>();
  const theme = useTheme();

  const headerOption: HeaderOptinterface = {
    menus: [{ key: "", value: "/detail" }],
    icon_L: CaretLeft,
    fn_L: () => navigate(-1),
    headerType: "V3",
    bgColor: "#ffffff00 !important",
    contentColor: "#fff",
  };

  const wrapperOption: WrapperOptInterface = {
    isFullWidth: true,
    isNoneHeadPadding: true,
    noneFullHeight: true,
  };

  useLayoutEffect(() => {
    //네비게이션 리스트 업데이트
    setHeadOpt(headerOption);
    setWrapperOpt(wrapperOption);
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        top: 0,
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <DetailImg />
      <Stack
        sx={{ top: "-24px", position: "relative", paddingTop: "1rem" }}
        spacing={2}
      >
        <DetailContent />
        <DetailComment />
      </Stack>
    </Box>
  );
}
