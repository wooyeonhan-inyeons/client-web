import React, { useLayoutEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { ContextInterface, HeaderOptinterface } from "../../interface.d";
import { Box, Stack } from "@mui/material";
import NotiItem from "./components/NotiItem";
import { WrapperOptInterface } from "../../component/MainWrapper/interface";
import { X } from "@phosphor-icons/react";
import { useQuery } from "react-query";
import { getNotification } from "./api";
import { NotificationStyle } from "./style";

export default function Notification() {
  const { headOpt, setHeadOpt, navigate, setWrapperOpt, user } =
    useOutletContext<ContextInterface>();

  const headerOption: HeaderOptinterface = {
    menus: [{ key: "알림", value: "/notification" }],
    icon_R: X,
    fn_R: () => navigate(-1),
    headerType: "V3",
  };

  const wrapperOpt: WrapperOptInterface = {
    isNoneHeadPadding: false,
  };

  useLayoutEffect(() => {
    //네비게이션 리스트 업데이트
    setHeadOpt(headerOption);
    setWrapperOpt(wrapperOpt);
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

  const { data: notification } = useQuery(
    "getWooyeon",
    () => getNotification(user.access_token),
    {
      onSuccess(data) {
        console.log(data);
      },
    }
  );

  if (!headOpt) {
    return <Box />;
  }
  return (
    <Stack sx={NotificationStyle}>
      <Box className="notificationBox">
        {notification?.length === 0 ? (
          <Box className="no_notification">알람이 없습니다.</Box>
        ) : (
          <Box>
            {notification?.map((item, index) => (
              <NotiItem
                content={item.content}
                created_at={item.created_at}
                key={item.notification_id}
              />
            ))}
          </Box>
        )}
      </Box>
    </Stack>
  );
}
