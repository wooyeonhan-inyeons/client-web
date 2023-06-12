import { Box, Typography } from "@mui/material";
import React from "react";
import { CommentInterface } from "../../../../interface";
import { StyledCommentItem } from "./style";
import { avatarColors } from "../../../../../../common";
import StyledAvatar from "../../../../../../component/StyledAvatar";

export default function CommentItem({
  value,
  createAt,
  user_id,
}: CommentInterface) {
  return (
    <StyledCommentItem>
      <Box>
        <StyledAvatar
          name={user_id}
          variant="beam"
          colors={avatarColors}
          size={36}
        />
      </Box>
      <Box className="commentContent">
        <Typography variant="body2">{value}</Typography>
        <Typography variant="caption" color="#8e8e8e">
          {createAt}
        </Typography>
      </Box>
      <Box className="rightSide"></Box>
    </StyledCommentItem>
  );
}
