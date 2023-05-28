import React, { Suspense, startTransition, useLayoutEffect } from "react";
import { ContextInterface, HeaderOptinterface } from "../../interface";
import { useOutletContext, useParams } from "react-router-dom";
import { Box, Skeleton, Stack, useTheme } from "@mui/material";
import { WrapperOptInterface } from "../../component/MainWrapper/interface";
import { CaretLeft } from "@phosphor-icons/react";
import { useQuery } from "react-query";
import { getDetailWooyeon } from "./api";
import DetailContent from "./components/DetailContent";
import DetailComment from "./components/DetailComment";

const LazyDetailImg = React.lazy(() => import("./components/DetailImg"));

export default function Detail() {
  const { postId } = useParams();
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
    startTransition(() => {
      setHeadOpt(headerOption);
      setWrapperOpt(wrapperOption);
    });
  }, []);

  const { data: wooyeon } = useQuery(
    "getWooyeon",
    () => getDetailWooyeon(postId as string),
    { suspense: true }
  );

  return (
    <Suspense fallback={<div>loading... </div>}>
      <Box
        sx={{
          position: "relative",
          top: 0,
          backgroundColor: theme.palette.background.paper,
        }}
      >
        <Suspense
          fallback={
            <Skeleton variant="rectangular" width="100%" height={400} />
          }
        >
          <LazyDetailImg wooyeon={wooyeon} />
        </Suspense>
        <Stack
          sx={{ top: "-24px", position: "relative", paddingTop: "1rem" }}
          spacing={2}
        >
          <DetailContent />
          <DetailComment />
        </Stack>
      </Box>
    </Suspense>
  );
}
