import React from "react";
import { useNavigate } from "react-router";
import SaveBtn from "../../../../component/SaveBtn";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

const PhotoAddPost = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/add-post/content");
  };
  return (
    <Grid container>
      <Grid xs={12}>사진 미리보기 구역</Grid>
      <Grid xs={12}>갤러리 구역</Grid>
      <Grid xs={12}>
        <SaveBtn text="다음" onClick={handleNext} />
      </Grid>
    </Grid>
  );
};

export default PhotoAddPost;
