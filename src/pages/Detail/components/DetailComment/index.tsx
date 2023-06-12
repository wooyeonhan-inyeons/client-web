import React from "react";
import { Box, Skeleton, Stack } from "@mui/material";
import CommentItem from "./components/DetailCommentItem";
import TimeAgo from "javascript-time-ago";
import ko from "javascript-time-ago/locale/ko";
import { StyledComment } from "./style";
import { GetCommentInterface } from "../../interface";

export default function DetailComment({
  comment,
  isLoading,
}: {
  comment: GetCommentInterface[] | undefined;
  isLoading: boolean;
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
  if (isLoading) {
    return (
      <StyledComment sx={{ padding: "0 1rem" }}>
        <Stack spacing={2} className="comments">
          <Box className="skeletonComment">
            <Skeleton variant="circular" width={36} height={36} />
            <Box>
              <Skeleton
                variant="text"
                sx={{ fontSize: "1rem", width: "10rem" }}
              />
              <Skeleton
                variant="text"
                sx={{ fontSize: "0.7rem", width: "6rem" }}
              />
            </Box>
          </Box>
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
            user_id={item.comment_id}
            value={item.content}
            createAt={timeAgo.format(new Date(item.created_at))}
          />
        ))}
      </Stack>
    </StyledComment>
  );
}
