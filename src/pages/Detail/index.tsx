import React, {
  ChangeEvent,
  FormEvent,
  useLayoutEffect,
  useState,
} from "react";
import { ContextInterface } from "../../interface";
import { useOutletContext, useParams } from "react-router-dom";
import { Box, Button, Stack, TextField } from "@mui/material";
import { WrapperOptInterface } from "../../component/MainWrapper/interface";
import { CaretLeft, Trash } from "@phosphor-icons/react";
import { useMutation, useQuery } from "react-query";
import { deletePost, getComment, getDetailWooyeon, postComment } from "./api";
import DetailContent from "./components/DetailContent";
import DetailComment from "./components/DetailComment";
import DetailImg from "./components/DetailImg";
import { useRecoilState } from "recoil";
import { userState } from "../../recoil";
import { CommentBoxStyle, DetailStyle } from "./style";
import DetailMenu from "./components/DetailMenu";
import { enqueueSnackbar } from "notistack";

// const LazyDetailImg = React.lazy(() => import("./components/DetailImg"));

export default function Detail() {
  const { post_id } = useParams();
  const [user] = useRecoilState(userState);
  const [comment, setComment] = useState("");
  const { setHeadOpt, navigate, setWrapperOpt } =
    useOutletContext<ContextInterface>();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const wrapperOption: WrapperOptInterface = {
    isFullWidth: true,
    isNoneHeadPadding: true,
    noneFullHeight: true,
  };

  useLayoutEffect(() => {
    // setHeadOpt(headerOption);
    setWrapperOpt(wrapperOption);
  }, []);

  const handleComment = (e: ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const handleSubmitComment = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (comment !== "") {
      // console.log(comment);
      commentPostMutation();
    } else {
      enqueueSnackbar({
        message: "댓글을 입력하여 주세요.",
        variant: "warning",
      });
    }
  };

  const { data: wooyeon } = useQuery(
    "getWooyeon",
    () => getDetailWooyeon(post_id as unknown as string, user.access_token),
    {
      onSettled() {
        getMutateComment();
      },
      onSuccess(data) {
        getMutateComment();
        console.log(data);
        //init option을 따로 두니 조건연산자에서 동기처리 되어서 직접 넣음
        setHeadOpt({
          menus: [{ key: "", value: "/detail" }],
          icon_L: CaretLeft,
          fn_L: () => navigate(-1),
          icon_R: () => (data.user_id === user.user_id ? <Trash /> : <></>),
          fn_R: handleOpen,
          headerType: "V3",
          bgColor: "#ffffff00 !important",
          contentColor: "#fff",
        });
      },
    }
  );

  const { mutate: deletePostMutation } = useMutation(
    "deletePost",
    () => deletePost(post_id as string, user.access_token),
    { onSuccess: () => navigate(-1) }
  );

  const { mutate: commentPostMutation } = useMutation(
    "postComment",
    () => postComment(wooyeon?.post_id as string, comment, user.access_token),
    {
      onSuccess: (res) => {
        console.log("post comment", res);
        setComment("");
        getMutateComment();
      },
    }
  );

  const {
    mutate: getMutateComment,
    data: wooyeon_comment,
    isLoading: isGetCommentLoading,
  } = useMutation(
    "getWooyeon_emotion",
    () => getComment(wooyeon?.post_id as string, user.access_token),
    {
      onSuccess(data) {
        console.log("comment", data);
      },
    }
  );

  return (
    <>
      <DetailMenu
        open={open}
        handleClose={handleClose}
        deletePost={deletePostMutation}
      />
      <Box sx={DetailStyle}>
        <Box className="DetailImg">
          <DetailImg wooyeon={wooyeon} />
        </Box>
        <Stack className="DetailSection" spacing={2}>
          <DetailContent wooyeon={wooyeon} />
          <DetailComment
            comment={wooyeon_comment}
            isLoading={isGetCommentLoading}
          />
        </Stack>
      </Box>
      <Box sx={CommentBoxStyle}>
        <form onSubmit={handleSubmitComment}>
          <TextField
            fullWidth
            placeholder="댓글을 입력하세요."
            value={comment}
            onChange={handleComment}
            InputProps={{
              endAdornment: <Button type="submit">작성</Button>,
            }}
          />
        </form>
      </Box>
    </>
  );
}
