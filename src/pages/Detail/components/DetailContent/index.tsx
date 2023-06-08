import React, { Suspense } from "react";
import { Box, IconButton, Skeleton, Typography } from "@mui/material";
import { StyledDetailContent } from "./style";
import TimeAgo from "javascript-time-ago";
import ko from "javascript-time-ago/locale/ko";
import { avatarColors, secondary } from "../../../../common";
import { GetPostInterface } from "../../interface";
import { WooyeonsCategory } from "../../../../interface";
import { Heart } from "@phosphor-icons/react";
import { postEmotion } from "../../api";
import { useMutation } from "react-query";

const LazyAvatar = React.lazy(() => import("boring-avatars"));
const LazyTypography = React.lazy(() => import("@mui/material/Typography"));

const wooyeonCategory: Array<{ id: WooyeonsCategory; value: string }> = [
  { id: "DAILY", value: "일상" },
  { id: "GROUP", value: "모임" },
  { id: "INFO", value: "정보" },
  { id: "EVENT", value: "이벤트" },
  { id: "ADS", value: "광고" },
  { id: "PRESENT", value: "선물" },
];

function getWooyeonCategory(key: string) {
  const result = wooyeonCategory.find((p) => p.id === key);
  return result?.value;
}

export default function DetailContent({
  wooyeon,
}: {
  wooyeon: GetPostInterface | undefined;
}) {
  TimeAgo.addLocale(ko);
  const timeAgo = new TimeAgo("ko");

  let date;
  if (wooyeon !== undefined) {
    date = new Date(wooyeon?.created_at);
  }

  const { mutate } = useMutation("deletePost", () =>
    postEmotion(wooyeon?.post_id as string)
  );

  return (
    <StyledDetailContent>
      <Box className="detail_header">
        <Box className="header_user">
          <Suspense
            fallback={
              <Skeleton
                variant="circular"
                sx={{ width: "48px", height: "48px", aspectRatio: "1/1" }}
              />
            }
          >
            <Box>
              <LazyAvatar
                colors={avatarColors}
                variant="beam"
                size={48}
                name={wooyeon?.post_id}
              />
            </Box>
          </Suspense>
          <Box sx={{ width: "100%" }}>
            <Suspense
              fallback={
                <>
                  <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                  <Skeleton
                    variant="text"
                    sx={{ fontSize: "1rem", width: "50%" }}
                  />
                </>
              }
            >
              <LazyTypography variant="body1">뜨거운 감자</LazyTypography>
              <Typography variant="body2">
                {date && timeAgo.format(date?.getTime())}
              </Typography>
            </Suspense>
          </Box>
          <Box className="categoryTag">
            <Typography variant="button">
              #{getWooyeonCategory(wooyeon?.category as string)}
            </Typography>
          </Box>
        </Box>
        <Box className="header_content">{wooyeon?.content}</Box>
        <Box className="footer_content">
          <Box className="favorite">
            <IconButton onClick={() => mutate()}>
              <Heart
                color={secondary}
                weight={wooyeon?.own_emotion ? "fill" : "regular"}
              />
            </IconButton>
            <Typography variant="body2">{wooyeon?.emotion_count}</Typography>
          </Box>
        </Box>
      </Box>
    </StyledDetailContent>
  );
}
