import React from "react";
import { Box, Typography } from "@mui/material";
import { NotiItemType } from "./interface";
import TimeAgo from "javascript-time-ago";
import ko from "javascript-time-ago/locale/ko";
import { StyledNoti } from "./style";
import { AlertData } from "../interface";

export default function NotiItem({
  content,
  created_at,
}: {
  content: string;
  created_at: string;
}) {
  TimeAgo.addLocale(ko);
  const timeAgo = new TimeAgo("ko");
  timeAgo.format(new Date());

  const data = new Date(created_at);

  return (
    <StyledNoti onClick={() => console.log("hello")}>
      <Box className="notiHead">
        <Typography variant="subtitle2">🍀 {content}</Typography>
        <Typography variant="body2" className="date">
          {timeAgo.format(data)}
        </Typography>
      </Box>
      <Typography variant="body2" className="description">
        {content}
      </Typography>
    </StyledNoti>
  );
}
