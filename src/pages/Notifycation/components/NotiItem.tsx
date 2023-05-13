import React from "react";
import { Box, Typography } from "@mui/material";
import { NotiItemType } from "./interface";
import TimeAgo from "javascript-time-ago";
import ko from "javascript-time-ago/locale/ko";
import { StyledNoti } from "./style";

export default function NotiItem({ prop }: NotiItemType) {
  TimeAgo.addLocale(ko);
  const timeAgo = new TimeAgo("ko");
  timeAgo.format(new Date());

  return (
    <StyledNoti onClick={() => console.log("hello")}>
      <Box className="notiHead">
        <Typography variant="subtitle2">🍀 {prop.title}</Typography>
        <Typography variant="body2" className="date">
          {timeAgo.format(prop.alertAt)}
        </Typography>
      </Box>
      <Typography variant="body2" className="description">
        {prop.data}
      </Typography>
    </StyledNoti>
  );
}
