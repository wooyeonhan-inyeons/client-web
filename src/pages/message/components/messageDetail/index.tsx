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

  const { data: messages, refetch } = useQuery(
    "getMessages",
    () => getMessage(user.access_token as string, message_id as string),
    {
      onSuccess(data) {
        console.log(data);
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
      // console.log(comment);
      postMutateMessage();
    }
  };

  return (
    <>
      <Stack sx={messageStyle}>
        {messages ? (
          messages.map((item, index) => {
            return (
              <>
                {index !== 0 ? (
                  testData[index - 1].createAt.getDate() !==
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
              </>
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

const testData = [
  { content: "Hello", createAt: new Date(2023, 6, 12, 14, 25), is_own: true },
  { content: "Hi", createAt: new Date(2023, 6, 13, 16, 25), is_own: false },
  {
    content:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit velit euismod, ultrices eros eget, vulputate urna. Nullam velit erat , commodo sed dui quis, ultricies sodales nisi. Nullam euismod, nisl at fermentum ultrices, eros ipsum aliquam nisi, a viverra nunc nisi id nisl. Sed sed lacinia nibh, nec fa",
    createAt: new Date(2023, 6, 13, 16, 27),
    is_own: false,
  },
  { content: "Good", createAt: new Date(2023, 6, 16, 18, 25), is_own: true },
];
