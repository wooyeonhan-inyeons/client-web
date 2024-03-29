import React, { useLayoutEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { ContextInterface, HeaderOptinterface } from "../../interface.d";
import { Box, CircularProgress, Stack } from "@mui/material";
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
    console.log("notification", notification);
  }, []);

  const {
    data: notification,
    isLoading,
    isSuccess,
  } = useQuery("getWooyeon", () => getNotification(user.access_token), {
    onError(data) {
      console.log(data);
    },
  });

  if (notification === undefined) {
    return (
      <Box sx={NotificationStyle}>
        <Box className="notificationBox" sx={{ textAlign: "center" }}>
          <CircularProgress />
        </Box>
      </Box>
    );
  }
  return (
    <Box sx={NotificationStyle}>
      <Box className="notificationBox">
        {notification?.length === 0 ? (
          !isLoading ? (
            <Box className="no_notification">알람이 없습니다.</Box>
          ) : (
            <CircularProgress />
          )
        ) : (
          <Stack spacing={2}>
            {notification.length &&
              notification.map((item) => (
                <NotiItem
                  key={item.notification_id}
                  navigate={navigate}
                  item={item}
                />
              ))}
          </Stack>
        )}
      </Box>
    </Box>
  );
}
