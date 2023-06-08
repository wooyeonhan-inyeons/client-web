import React, { useLayoutEffect, useState } from "react";
import { ContextInterface, HeaderOptinterface } from "../../interface";
import { useOutletContext, useParams } from "react-router-dom";
import { Box, Button, Stack, TextField, useTheme } from "@mui/material";
import { WrapperOptInterface } from "../../component/MainWrapper/interface";
import { CaretLeft, DotsThreeVertical } from "@phosphor-icons/react";
import { useMutation, useQuery } from "react-query";
import {
  deletePost,
  getComment,
  getDetailWooyeon,
  getEmotion,
  postComment,
} from "./api";
import DetailContent from "./components/DetailContent";
import DetailComment from "./components/DetailComment";
import DetailImg from "./components/DetailImg";
import { useRecoilState } from "recoil";
import { userState } from "../../recoil";

// const LazyDetailImg = React.lazy(() => import("./components/DetailImg"));

export default function Detail() {
  const { post_id } = useParams();
  const theme = useTheme();
  const [user] = useRecoilState(userState);
  const [comment, setComment] = useState("");
  const { setHeadOpt, navigate, setWrapperOpt } =
    useOutletContext<ContextInterface>();

  const headerOption: HeaderOptinterface = {
    menus: [{ key: "", value: "/detail" }],
    icon_L: CaretLeft,
    fn_L: () => navigate(-1),
    icon_R: () =>
      wooyeon?.user_id === user.user_id ? (
        <DotsThreeVertical weight="bold" />
      ) : (
        ""
      ),
    fn_R: () =>
      wooyeon?.user_id === user.user_id ? deletePostMutation() : undefined,
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

  const handleComment = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault;
    setComment(e.target.value);
    console.log(comment);
  };

  const { data: wooyeon } = useQuery(
    "getWooyeon",
    () => getDetailWooyeon(post_id as unknown as string, user.access_token),
    {
      // suspense: true,
      // useErrorBoundary: true,
      onSuccess(data) {
        console.log(data);
      },
    }
  );

  const { mutate: deletePostMutation } = useMutation(
    "deletePost",
    () => deletePost(wooyeon?.post_id as string, user.access_token),
    { onSuccess: () => navigate(-1) }
  );

  const { mutate: commentPostMutation } = useMutation(
    "postComment",
    () => postComment(wooyeon?.post_id as string, comment, user.access_token),
    { onSuccess: () => setComment("") }
  );

  const { data: wooyeon_comment } = useQuery(
    "getWooyeon_emotion",
    () => getComment(post_id!, user.access_token),
    {
      // suspense: true,
      // useErrorBoundary: true,
      onSuccess(data) {
        console.log("comment", data);
      },
    }
  );

  return (
    <>
      <Box
        sx={{
          position: "relative",
          top: 0,
          backgroundColor: theme.palette.background.paper,
          paddingBottom: "5rem",
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
      <Box
        sx={{
          width: "100%",
          position: "fixed",
          bottom: "0",
          backgroundColor: theme.palette.background.default,
          padding: "1rem 1rem 2rem 1rem",
          boxShadow: `${theme.shadows[20]}`,
        }}
      >
        <TextField
          fullWidth
          placeholder="댓글을 입력하세요."
          value={comment}
          onChange={handleComment}
          sx={{
            "& .MuiInputBase-root": {
              backgroundColor: theme.palette.background.paper,
              borderRadius: "1rem",
              padding: 0,
            },
            "& .MuiInputBase-root input": {
              padding: "0.5rem 0rem 0.5rem 1rem",
            },
            "& .MuiInputBase-root fieldset": {
              border: "none",
            },
          }}
          InputProps={{
            endAdornment: (
              <Button onClick={() => commentPostMutation()}>작성</Button>
            ),
          }}
        />
      </Box>
    </>
  );
}
