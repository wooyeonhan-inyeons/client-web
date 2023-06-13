import React, { useLayoutEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { ContextInterface, HeaderOptinterface } from "../../interface";
import { CaretLeft } from "@phosphor-icons/react";
import { WrapperOptInterface } from "../../component/MainWrapper/interface";
import { Box, Divider, Stack } from "@mui/material";
import { useQuery } from "react-query";
import { getMessageList } from "./api";
import { useRecoilState } from "recoil";
import { userState } from "../../recoil";
import { messageStyle } from "./style";
import MessageItem from "./components/messageItem";

export default function Message() {
  const [user] = useRecoilState(userState);
  const { setHeadOpt, navigate, setWrapperOpt } =
    useOutletContext<ContextInterface>();

  const headerOption: HeaderOptinterface = {
    menus: [{ key: "채팅 목록", value: "/message" }],
    icon_L: CaretLeft,
    fn_L: () => navigate(-1),
    headerType: "V3",
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

  const { data: messages } = useQuery(
    "getMessages",
    () => getMessageList(user.access_token as string),
    {
      onSuccess(data) {
        console.log(data);
      },
    }
  );

  return (
    <Stack
      sx={messageStyle}
      divider={<Divider orientation="horizontal" flexItem />}
      spacing={2}
    >
      {messages === undefined || messages.length === 0 ? (
        <Box className="no_message">읽을 메세지가 없습니다.</Box>
      ) : (
        messages.map((item, index) => (
          <MessageItem key={item.group_id} index={index} navigate={navigate} />
        ))
      )}
    </Stack>
  );
}
