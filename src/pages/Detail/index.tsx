import React, { useLayoutEffect } from "react";
import { ContextInterface, HeaderOptinterface } from "../../interface";
import { useOutletContext, useParams } from "react-router-dom";
import { Box, Stack, useTheme } from "@mui/material";
import { WrapperOptInterface } from "../../component/MainWrapper/interface";
import { CaretLeft, DotsThreeVertical } from "@phosphor-icons/react";
import { useQuery } from "react-query";
import { getDetailWooyeon } from "./api";
import DetailContent from "./components/DetailContent";
import DetailComment from "./components/DetailComment";
import DetailImg from "./components/DetailImg";

// const LazyDetailImg = React.lazy(() => import("./components/DetailImg"));

export default function Detail() {
  const { post_id } = useParams();
  const theme = useTheme();
  const { setHeadOpt, navigate, setWrapperOpt } =
    useOutletContext<ContextInterface>();

  const headerOption: HeaderOptinterface = {
    menus: [{ key: "", value: "/detail" }],
    icon_L: CaretLeft,
    fn_L: () => navigate(-1),
    icon_R: () => <DotsThreeVertical weight="bold" />,
    fn_R: () => navigate(-1),
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
    setHeadOpt(headerOption);
    setWrapperOpt(wrapperOption);

    console.log(post_id);
  }, []);

  const { data: wooyeon } = useQuery(
    "getWooyeon",
    () => getDetailWooyeon(post_id as unknown as string),
    {
      suspense: true,
      useErrorBoundary: true,
      onSuccess(data) {
        console.log(data);
      },
    }
  );

  return (
    <Box
      sx={{
        position: "relative",
        top: 0,
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <Box sx={{ width: "100%", aspectRatio: "1/1" }}>
        <DetailImg wooyeon={wooyeon} />
      </Box>
      <Stack
        sx={{ top: "-24px", position: "relative", paddingTop: "1rem" }}
        spacing={2}
      >
        <DetailContent wooyeon={wooyeon} />
        <DetailComment wooyeon={wooyeon} />
      </Stack>
    </Box>
  );
}
