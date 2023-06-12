import React, { useLayoutEffect } from "react";
import {
  Box,
  ImageList,
  ImageListItem,
  Stack,
  Typography,
} from "@mui/material";
import { useOutletContext } from "react-router-dom";
import { ContextInterface, HeaderOptinterface } from "../../../../interface.d";
import { CaretLeft } from "@phosphor-icons/react";
import { historyStyle } from "./style";
import { WrapperOptInterface } from "../../../../component/MainWrapper/interface";

export default function History() {
  const { setHeadOpt, setWrapperOpt, navigate } =
    useOutletContext<ContextInterface>();

  const headerOption: HeaderOptinterface = {
    menus: [{ key: "나의 우연들", value: "/mypage/history" }],
    icon_L: CaretLeft,
    fn_L: () => navigate("/mypage"),
    headerType: "V3",
    bgColor: "#fff",
  };
  const wrapperOpt: WrapperOptInterface = {
    isNoneHeadPadding: false,
    isFullWidth: true,
  };

  useLayoutEffect(() => {
    //네비게이션 리스트 업데이트
    setHeadOpt(headerOption);
    setWrapperOpt(wrapperOpt);
  }, []);

  const images = [
    { url: "https://picsum.photos/seed/hi//200/300" },
    { url: "https://picsum.photos/seed/asd/200/300" },
    { url: "https://picsum.photos/seed/123//200/300" },
    { url: "https://picsum.photos/seed/gdf//300/200" },
    { url: "https://picsum.photos/seed/sd2f//300/200" },
    { url: "https://picsum.photos/seed/23//200/300" },
    { url: "https://picsum.photos/seed/sdf//300/200" },
    { url: "https://picsum.photos/seed/gsfg//200/300" },
    { url: "https://picsum.photos/seed/agsd//300/200" },
    { url: "https://picsum.photos/seed/sd//200/300" },
    { url: "https://picsum.photos/seed/fds//300/200" },
  ];

  return (
    <Box sx={historyStyle}>
      {images.map((image) => (
        <img
          className="imgItem"
          key={image.url}
          src={image.url}
          alt={image.url}
        />
      ))}
    </Box>
  );
}
