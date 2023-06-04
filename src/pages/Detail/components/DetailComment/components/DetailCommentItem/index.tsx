import { Box, Typography } from "@mui/material";
import React from "react";
import { CommentInterface } from "../../../../interface";
import { StyledCommentItem } from "./style";
import Avatar from "boring-avatars";
import { avatarColors } from "../../../../../../common";

export default function CommentItem({ value, createAt }: CommentInterface) {
  return (
    <StyledCommentItem>
      <Box>
        <Avatar name="asd" variant="beam" colors={avatarColors} size={36} />
      </Box>
      <Box className="commentContent">
        <Typography variant="body2">{value}</Typography>
        <Typography variant="caption" color="#8e8e8e">
          5분 전
        </Typography>
      </Box>
      <Box className="rightSide">{createAt}</Box>
    </StyledCommentItem>
  );
}
