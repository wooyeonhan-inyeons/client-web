import React, { useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import {
  ContextInterface,
  HEAD_TYPE,
  HeaderOptinterface,
} from "../../interface.d";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Box } from "@mui/material";
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

  return (
    <Box>
      <NotiItem />
      <NotiItem />
      <NotiItem />
      <NotiItem />
      <NotiItem />
    </Box>
  );
}
