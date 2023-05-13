import { Box } from "@mui/material";
import React from "react";
import { CommentInterface } from "../../../../interface";
import { StyledCommentItem } from "./style";

export default function CommentItem({ value, createAt }: CommentInterface) {
  return (
    <StyledCommentItem>
      <Box className="value">{value}</Box>
      <Box className="createAt">{createAt}</Box>
    </StyledCommentItem>
  );
}
