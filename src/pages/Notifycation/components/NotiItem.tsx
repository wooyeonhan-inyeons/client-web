import React from "react";
import { Box, Typography } from "@mui/material";
import TimeAgo from "javascript-time-ago";
import ko from "javascript-time-ago/locale/ko";
import { StyledNoti } from "./style";
import { NavigateFunction } from "react-router-dom";
import { NotificationInterface } from "../interface";
import { ChatCircle, Heart, Leaf } from "@phosphor-icons/react";
import { mainPrimary, secondary } from "../../../common";

export default function NotiItem({
  item,
  navigate,
}: {
  item: NotificationInterface;
  navigate: NavigateFunction;
}) {
  TimeAgo.addLocale(ko);
  const timeAgo = new TimeAgo("ko");
  timeAgo.format(new Date());
  const data = new Date(item.created_at);

  return (
    <StyledNoti onClick={() => navigate(`/detail/${item.target_id}`)}>
      <Box className="notiHead">
        <Box className="notiInfo">
          {getNotiIcon(item.type)}
          <Typography variant="subtitle2" className="content">
            {item.content}
          </Typography>
        </Box>
        <Typography variant="body2" className="date">
          {timeAgo.format(data)}
        </Typography>
      </Box>
    </StyledNoti>
  );
}

const getNotiIcon = (value: string) => {
  switch (value) {
    case "EMOTION":
      return <Heart weight="fill" color={secondary} />;
    case "COMMENT":
      return <ChatCircle weight="fill" />;
    case "WOOYEON":
      return <Leaf weight="fill" color={mainPrimary} />;
    default:
      return;
  }
};
