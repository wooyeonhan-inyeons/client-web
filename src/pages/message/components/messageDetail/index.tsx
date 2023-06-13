import React, {
  ChangeEvent,
  FormEvent,
  useLayoutEffect,
  useState,
} from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { ContextInterface, HeaderOptinterface } from "../../../../interface";
import { CaretLeft, PaperPlaneTilt } from "@phosphor-icons/react";
import { WrapperOptInterface } from "../../../../component/MainWrapper/interface";
import { useMutation, useQuery } from "react-query";
import { getMessage, postMessage } from "../../api";
import { userState } from "../../../../recoil";
import {
  Box,
  CircularProgress,
  IconButton,
  Stack,
  TextField,
} from "@mui/material";
import { MessageBoxStyle, messageStyle } from "../../style";
import { mainPrimary } from "../../../../common";
import MyMessage from "../MyMessage";
import ReceivedMessage from "../ReceivedMessage";
import { DateItem } from "../MessageUtil";

export default function MessageDetail() {
  const { message_id } = useParams();
  const [user] = useRecoilState(userState);
  const { setHeadOpt, navigate, setWrapperOpt } =
    useOutletContext<ContextInterface>();

  const headerOption: HeaderOptinterface = {
    menus: [{ key: "채팅", value: "/message" }],
    icon_L: CaretLeft,
    fn_L: () => navigate(-1),
    headerType: "V3",
    // bgColor: theme.palette.background.default,
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

  const {
    data: messagesItems,
    refetch,
    isSuccess,
  } = useQuery(
    "getMessagesDetail",
    () => getMessage(user.access_token as string, message_id as string),
    {
      retry: true,
      refetchInterval: 3000,
      onSuccess(data) {
        console.log("message item ", data);
      },
    }
  );

  const { mutate: postMutateMessage } = useMutation(
    "postMessage",
    () =>
      postMessage(user.access_token as string, message_id as string, message),
    {
      onSuccess(data) {
        console.log(data);
        setMessage("");
        refetch();
      },
    }
  );

  const [message, setMessage] = useState("");
  const handleMessage = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmitMessage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (message !== "") {
      postMutateMessage();
    }
  };

  return (
    <>
      <Stack sx={messageStyle}>
        {isSuccess && messagesItems !== undefined ? (
          messagesItems.length &&
          messagesItems.map((item, index) => {
            return (
              <div key={item.chat_id + index}>
                {index !== 0 ? (
                  new Date(messagesItems[index - 1].created_at).getDate() !==
                    new Date(item.created_at).getDate() && (
                    <DateItem createAt={item.created_at} />
                  )
                ) : (
                  <DateItem createAt={item.created_at} />
                )}
                {item.is_own ? (
                  <MyMessage
                    content={item.content}
                    createAt={item.created_at}
                  />
                ) : (
                  <ReceivedMessage
                    content={item.content}
                    createAt={item.created_at}
                  />
                )}
              </div>
            );
          })
        ) : (
          <CircularProgress />
        )}
      </Stack>
      <Box sx={MessageBoxStyle}>
        <form onSubmit={handleSubmitMessage}>
          <TextField
            fullWidth
            placeholder="메세지를 입력하세요."
            value={message}
            onChange={handleMessage}
          />
          <IconButton>
            <PaperPlaneTilt color={mainPrimary} weight="fill" />
          </IconButton>
        </form>
      </Box>
    </>
  );
}
