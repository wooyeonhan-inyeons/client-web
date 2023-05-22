import React from "react";
import { useNavigate, useOutletContext } from "react-router";
import SaveBtn from "../../../../component/SaveBtn";
import { PostStateInterface } from "../HeaderAddPost/interface";
import { Box } from "@mui/material";

const PhotoAddPost = () => {
  const { post } = useOutletContext<PostStateInterface>();
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/add-post/content");
  };
  const handleClick = () => {
    console.log("post address: ", post);
  };
  return (
    <Box
      sx={{
        height: "100%",
        padding: "1rem 1.5rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box>사진 미리보기 구역</Box>
      <Box>갤러리 구역</Box>
      <button onClick={handleClick}>여기까지 post 확인하기</button>
      <Box
        sx={{
          pt: "3rem",
          "@media (max-width: 375px)": {
            pt: "2rem",
            pb: "1rem",
          },
        }}
      >
        <SaveBtn text="다음" onClick={handleNext} />
      </Box>
    </Box>
  );
};

export default PhotoAddPost;
