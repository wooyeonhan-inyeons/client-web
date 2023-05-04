import React, { useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import {
  ContextInterface,
  HEAD_TYPE,
  HeaderOptinterface,
} from "../../interface.d";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Box, Container, Stack } from "@mui/material";
import NotiItem from "./components/NotiItem";

export default function Notification() {
  const { setHeadOpt } = useOutletContext<ContextInterface>();
  const navigate = useNavigate();

  const headerOption: HeaderOptinterface = {
    menus: [{ key: "알림", value: "/notification" }],
    icon_R: faXmark,
    fn_R: () => navigate(-1),
    headerType: HEAD_TYPE.v3,
  };

  useEffect(() => {
    //네비게이션 리스트 업데이트
    setHeadOpt(headerOption);
  }, []);

  const testData = {
    title: "근처의 우연 발견!!",
    data: "신당동 주변의 우연을 사라지기 전에 확인해봐요!",
    alertAt: new Date(),
  };

  const testData2 = {
    title: "근처의 우연 발견!!",
    data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisi a egestas ultrices , nisl urna viverra diam, a ultricies ante nunc sit amet nisl. Sed euismod, nisi a egestas ultrices , nisl urna viverra diam, a ultricies ante nunc sit amet nisl. (장문 테스트)",
    alertAt: new Date(),
  };

  return (
    <Container
      className="globalContainer"
      maxWidth="xs"
      sx={{
        backgroundColor: "#fff",
        padding: 0,
      }}
    >
      <Box sx={{ overflow: "scroll" }}>
        <NotiItem prop={testData} />
        <NotiItem prop={testData} />
        <NotiItem prop={testData} />
        <NotiItem prop={testData} />
        <NotiItem prop={testData2} />
        <NotiItem prop={testData} />
        <NotiItem prop={testData} />
        <NotiItem prop={testData} />
        <NotiItem prop={testData2} />
        <NotiItem prop={testData} />
        <NotiItem prop={testData} />
      </Box>
    </Container>
  );
}
