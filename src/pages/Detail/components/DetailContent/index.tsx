import React from "react";
import { Box, Typography } from "@mui/material";
import Avatar from "boring-avatars";
import { StyledDetailContent } from "./style";
import TimeAgo from "javascript-time-ago";
import ko from "javascript-time-ago/locale/ko";
import { mainPrimary } from "../../../../common";

export default function DetailContent() {
  TimeAgo.addLocale(ko);
  const timeAgo = new TimeAgo("ko");
  const date = new Date();

  return (
    <StyledDetailContent>
      <Box className="detail_header">
        <Box className="header_user">
          <Avatar />
          <Box sx={{ width: "100%" }}>
            <Typography variant="body1">우연한 발견</Typography>
            <Typography variant="body2">{timeAgo.format(date)}</Typography>
          </Box>
          <Box
            sx={{
              minWidth: "4rem",
              height: "2rem",
              lineHeight: "2rem",
              borderRadius: "1rem",
              backgroundColor: mainPrimary,
              padding: "0rem 1rem",
              textAlign: "center",
              color: "#fff",
            }}
          >
            <Typography variant="button">일상</Typography>
          </Box>
        </Box>
        <Box className="header_content">
          삼덕 인더매스,, 갬성 미쳤씁니다!!!
          <br /> 드립커피 잘해여 👍👍
        </Box>
      </Box>
    </StyledDetailContent>
  );
}
