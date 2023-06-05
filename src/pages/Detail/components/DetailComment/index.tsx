import React from "react";
import { Stack } from "@mui/material";
import CommentItem from "./components/DetailCommentItem";
import TimeAgo from "javascript-time-ago";
import ko from "javascript-time-ago/locale/ko";
import { StyledComment } from "./style";
import { GetPostInterface } from "../../interface";

export default function DetailComment({
  wooyeon,
}: {
  wooyeon: GetPostInterface | undefined;
}) {
  TimeAgo.addLocale(ko);
  const timeAgo = new TimeAgo("ko");
  const date = new Date();

  // if (wooyeon?.comment_count === 0) {
  //   return (
  //     <StyledComment sx={{ padding: "0 1rem" }}>
  //       <Stack spacing={2} className="comments">
  //         등록된 댓글이 없습니다.
  //       </Stack>
  //     </StyledComment>
  //   );
  // }

  return (
    <StyledComment sx={{ padding: "0 1rem" }}>
      <Stack spacing={2} className="comments">
        <CommentItem value="여기 좋긴하죠?" createAt={timeAgo.format(date)} />
        <CommentItem value="맞아용" createAt={timeAgo.format(date)} />
        <CommentItem
          value="저는 반대편에 고쿠라는 카페도 좋더라구요"
          createAt={timeAgo.format(date)}
        />
      </Stack>
    </StyledComment>
  );
}
