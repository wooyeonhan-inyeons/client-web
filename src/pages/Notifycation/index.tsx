import React, { useLayoutEffect } from "react";
import { useOutletContext } from "react-router-dom";
import {
  ContextInterface,
  HEAD_TYPE,
  HeaderOptinterface,
} from "../../interface.d";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Box } from "@mui/material";
import NotiItem from "./components/NotiItem";

export default function Notification() {
  const { headOpt, setHeadOpt, navigate } =
    useOutletContext<ContextInterface>();

  const headerOption: HeaderOptinterface = {
    menus: [{ key: "알림", value: "/notification" }],
    icon_R: faXmark,
    fn_R: () => navigate(-1),
    headerType: HEAD_TYPE.v3,
  };

  useLayoutEffect(() => {
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
    alertAt: new Date(2023, 4, 3, 23, 55),
  };

  if (!headOpt) {
    return <Box />;
  }
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        padding: 0,
        maxHeight: "calc(100vh - 56px)",
        overflow: "hidden",
        "@media (min-width: 600px)": {
          maxHeight: "calc(100vh - 64px)",
        },
      }}
    >
      <Box
        sx={{
          maxHeight: "calc(100vh - 56px)",
          overflow: "scroll",
          paddingBottom: 10,
          "&::-webkit-scrollbar": {
            width: "4px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#ddd",
            borderRadius: "5px",
          },
          "&::-webkit-scrollbar-button:vertical:end:decrement": {
            display: "block",
            height: "20px",
          },
          "@media (min-width: 600px)": {
            maxHeight: "calc(100vh - 64px)",
          },
        }}
      >
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
        <NotiItem prop={testData} />
        <NotiItem prop={testData2} />
        <NotiItem prop={testData} />
        <NotiItem prop={testData} />
      </Box>
    </Box>
  );
}
