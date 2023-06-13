import { Button, Typography } from "@mui/material";
import React from "react";
import StyledAvatar from "../../../../component/StyledAvatar";
import { NavigateFunction } from "react-router-dom";

export default function MessageItem({
  index,
  navigate,
  message_id,
}: {
  index: number;
  navigate: NavigateFunction;
  message_id: string;
}) {
  return (
    <Button
      variant="outlined"
      className="messageItem"
      onClick={() => navigate(`/message/${message_id}`)}
      color="inherit"
      startIcon={<StyledAvatar name="asd" variant="beam" />}
    >
      <Typography className="messageTitle" variant="h5">
        채팅 {index + 1}
      </Typography>
    </Button>
  );
}
