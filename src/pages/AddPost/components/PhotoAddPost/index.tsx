import React from "react";
import { useNavigate, useOutletContext } from "react-router";
import SaveBtn from "../../../../component/SaveBtn";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { PostStateInterface } from "../HeaderAddPost/interface";

const PhotoAddPost = () => {
  const { post, setPost } = useOutletContext<PostStateInterface>();
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/add-post/content");
  };
  const handleClick = () => {
    console.log("post address: ", post);
  };
  return (
    <Grid container>
      <Grid xs={12}>사진 미리보기 구역</Grid>
      <Grid xs={12}>
        갤러리 구역
        <button onClick={handleClick}>여기까지 post 확인하기</button>
      </Grid>
      <Grid xs={12}>
        <SaveBtn text="다음" onClick={handleNext} />
      </Grid>
    </Grid>
  );
};

export default PhotoAddPost;
