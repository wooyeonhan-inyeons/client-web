import { Box, Button, Typography } from "@mui/material";
import React from "react";
import StyledAvatar from "../../../../component/StyledAvatar";
import { NavigateFunction } from "react-router-dom";

export default function MessageItem({
  index,
  navigate,
  message_id,
  recent_chat,
}: {
  index: number;
  navigate: NavigateFunction;
  message_id: string;
  recent_chat: string;
}) {
  return (
    <Button
      variant="outlined"
      className="messageItem"
      onClick={() => navigate(`/message/${message_id}`)}
      color="inherit"
      startIcon={<StyledAvatar name="asd" variant="beam" />}
    >
      <Box sx={{ textAlign: "left" }}>
        <Typography className="messageTitle" variant="h6">
          대화 {index + 1}
        </Typography>
        <Typography variant="body2">{recent_chat}</Typography>
      </Box>
    </Button>
  );
}
