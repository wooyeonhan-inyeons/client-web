import { Button, Typography } from "@mui/material";
import React from "react";
import StyledAvatar from "../../../../component/StyledAvatar";
import { NavigateFunction } from "react-router-dom";

export default function MessageItem({
  index,
  navigate,
}: {
  index: number;
  navigate: NavigateFunction;
}) {
  return (
    <Button
      variant="outlined"
      className="messageItem"
      onClick={() => navigate("/message/1")}
      color="inherit"
      startIcon={<StyledAvatar name="asd" variant="beam" />}
    >
      <Typography className="messageTitle" variant="h5">
        채팅 {index}
      </Typography>
    </Button>
  );
}
