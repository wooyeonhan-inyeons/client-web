import React, { Suspense } from "react";
import { Box, IconButton, Skeleton, Typography } from "@mui/material";
import { StyledDetailContent } from "./style";
import TimeAgo from "javascript-time-ago";
import ko from "javascript-time-ago/locale/ko";
import { avatarColors, secondary } from "../../../../common";
import { GetPostInterface } from "../../interface";
import { WooyeonsCategory } from "../../../../interface";
import { Heart, MapPin } from "@phosphor-icons/react";
import { postEmotion, removeEmotion } from "../../api";
import {
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
  useMutation,
} from "react-query";
import { useRecoilState } from "recoil";
import { userState } from "../../../../recoil";

const LazyAvatar = React.lazy(
  () => import("../../../../component/StyledAvatar")
);
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
  refetch,
}: {
  wooyeon: GetPostInterface | undefined;
  refetch: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
  ) => Promise<QueryObserverResult<GetPostInterface, unknown>>;
}) {
  // const [ownEmotion, setOwnEmotion] = useState<boolean>(
  //   wooyeon?.own_emotion ? wooyeon.own_emotion : false
  // );
  const [user] = useRecoilState(userState);
  TimeAgo.addLocale(ko);
  const timeAgo = new TimeAgo("ko");

  let date;
  if (wooyeon !== undefined) {
    date = new Date(wooyeon?.created_at);
  }

  // useEffect(() => {
  //   getEmotionMutate();
  // }, [wooyeon]);

  const { mutate: postEmotionMutate, isLoading: postLoading } = useMutation(
    "postEmotion",
    () => postEmotion(wooyeon?.post_id as string, user.access_token),
    {
      onSuccess() {
        // getEmotionMutate();
        refetch();
      },
    }
  );

  const { mutate: removeEmotionMutate, isLoading: removeLoading } = useMutation(
    "deleteEmotion",
    () => removeEmotion(wooyeon?.post_id as string, user.access_token),
    {
      onSuccess() {
        // getEmotionMutate();
        refetch();
      },
    }
  );

  // const { mutate: getEmotionMutate, data } = useMutation(
  //   "getEmotion",
  //   () => getEmotion(wooyeon?.post_id as string, user.access_token),
  //   {
  //     onSuccess(data) {
  //       console.log(data);
  //       setOwnEmotion(data.own_emotion);
  //     },
  //   }
  // );

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
              <LazyTypography variant="body1" className="nickName">
                뜨거운 감자
              </LazyTypography>
              <Box className="detailInfo">
                <Typography variant="caption" className="createAt">
                  {date && timeAgo.format(date?.getTime())}
                </Typography>
                |
                <Box className="location">
                  <MapPin weight="fill" />
                  <Typography variant="caption">신당동</Typography>
                </Box>
              </Box>
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
            <IconButton
              disabled={postLoading || removeLoading}
              onClick={() =>
                wooyeon?.own_emotion
                  ? removeEmotionMutate()
                  : postEmotionMutate()
              }
            >
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
