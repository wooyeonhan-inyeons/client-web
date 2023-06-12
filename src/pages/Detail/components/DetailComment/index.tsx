import React from "react";
import { Stack } from "@mui/material";
import CommentItem from "./components/DetailCommentItem";
import TimeAgo from "javascript-time-ago";
import ko from "javascript-time-ago/locale/ko";
import { StyledComment } from "./style";
import { GetCommentInterface } from "../../interface";

export default function DetailComment({
  comment,
}: {
  comment: GetCommentInterface[] | undefined;
}) {
  TimeAgo.addLocale(ko);
  const timeAgo = new TimeAgo("ko");

  if (comment === undefined || comment.length === 0) {
    return (
      <StyledComment sx={{ padding: "0 1rem" }}>
        <Stack spacing={2} className="comments">
          등록된 댓글이 없습니다.
        </Stack>
      </StyledComment>
    );
  }

  return (
    <StyledComment sx={{ padding: "0 1rem" }}>
      <Stack spacing={2} className="comments">
        {comment.map((item: GetCommentInterface) => (
          <CommentItem
            key={item.comment_id}
            value={item.content}
            createAt={timeAgo.format(new Date(item.created_at))}
          />
        ))}
      </Stack>
    </StyledComment>
  );
}
