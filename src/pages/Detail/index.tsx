import React, {
  ChangeEvent,
  FormEvent,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { ContextInterface, SetHeadType } from "../../interface";
import { useOutletContext, useParams } from "react-router-dom";
import {
  Box,
  Button,
  GlobalStyles,
  IconButton,
  Stack,
  TextField,
  useTheme,
} from "@mui/material";
import { WrapperOptInterface } from "../../component/MainWrapper/interface";
import { CaretLeft, ChatCircle, Trash } from "@phosphor-icons/react";
import { useMutation, useQuery } from "react-query";
import { deletePost, getComment, getDetailWooyeon, postComment } from "./api";
import DetailContent from "./components/DetailContent";
import DetailComment from "./components/DetailComment";
import DetailImg from "./components/DetailImg";
import { useRecoilState } from "recoil";
import { userState } from "../../recoil";
import { CommentBoxStyle, DetailBoxStyle, DetailStyle } from "./style";
import DetailMenu from "./components/DetailMenu";
import { enqueueSnackbar } from "notistack";
import { throttle } from "lodash";

// const LazyDetailImg = React.lazy(() => import("./components/DetailImg"));

export default function Detail() {
  const { post_id } = useParams();
  const [user] = useRecoilState(userState);
  const [comment, setComment] = useState("");
  const { setHeadOpt, navigate, setWrapperOpt } =
    useOutletContext<ContextInterface>();
  const theme = useTheme();

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

  /////

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
      refetchOnWindowFocus: false,
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
          bgColor: "#ffffff00",
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

  useEffect(() => {
    getMutateComment();
  }, [wooyeon]);

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

  //////

  const [switchView, setSwitchView] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);
  //window.scroll 값을 가져왔으면 하나만 써도 되지만 오브젝트 내의 스크롤을 감지해야해서 두 개 사용
  const parentRef = useRef<HTMLInputElement>(null);
  const targetRef = useRef<HTMLInputElement>(null);
  let prevScroll = 0;

  const throttledScroll = useMemo(
    () =>
      throttle(() => {
        if (targetRef.current === null || parentRef.current === null) return;
        if (parentRef.current.scrollTop < 100) {
          setHideHeader(false);
          setHeadOpt((prev: SetHeadType) => ({
            ...prev,
            bgColor: "#ffffff00",
            contentColor: "#fff",
          }));
          return;
        }
        const nextTabnavOn =
          parentRef.current.scrollTop > targetRef.current.offsetTop / 2;

        if (prevScroll < parentRef.current.scrollTop) {
          if (prevScroll - parentRef.current.scrollTop < 30) {
            setHideHeader(false);
            setHeadOpt((prev: SetHeadType) => ({
              ...prev,
              bgColor: theme.palette.background.default,
              contentColor: theme.palette.text.primary,
            }));
          }
        } else {
          setHideHeader(true);
          setHeadOpt((prev: SetHeadType) => ({
            ...prev,
            bgColor: "#ffffff00",
            contentColor: "#fff",
          }));
        }
        prevScroll = parentRef.current.scrollTop;
        if (nextTabnavOn !== switchView) {
          setSwitchView(nextTabnavOn);
        }
      }, 100),
    [switchView]
  );

  useEffect(() => {
    if (parentRef.current === null) return;
    parentRef.current.addEventListener("scroll", throttledScroll);
    return () => {
      if (parentRef.current === null) return;
      parentRef.current.removeEventListener("scroll", throttledScroll);
    };
  }, [throttledScroll]); // 여기에 throttledScroll 대신 switchView을 넣어줘도 정상작동한다

  //스크롤 이벤트
  //스크롤 다운 시 헤더 보이고 이미지 사이즈의 /2 미만에서는 항상 보이게
  return (
    <>
      <GlobalStyles
        styles={{
          ".HeaderWrapper": {
            transition: "all 0.2s ease-in-out",
          },
        }}
      />
      {hideHeader && switchView && (
        <GlobalStyles
          styles={{
            ".HeaderWrapper": {
              top: "-70px !important",
            },
          }}
        />
      )}
      <Box sx={DetailBoxStyle} ref={parentRef}>
        <DetailMenu
          open={open}
          handleClose={handleClose}
          deletePost={deletePostMutation}
        />
        <Box sx={DetailStyle}>
          <Box className="DetailImg">
            <DetailImg wooyeon={wooyeon} />
          </Box>
          <Stack className="DetailSection" spacing={2} ref={targetRef}>
            <DetailContent wooyeon={wooyeon} />
            <DetailComment
              comment={wooyeon_comment}
              isLoading={isGetCommentLoading}
            />
          </Stack>
        </Box>
        <Box sx={CommentBoxStyle}>
          {wooyeon?.category === "GROUP" && (
            //채팅
            <IconButton onClick={() => navigate("/")}>
              <ChatCircle weight="fill" />
            </IconButton>
          )}
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
      </Box>
    </>
  );
}
