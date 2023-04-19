import React from "react";
import { useNavigate } from "react-router";
import SaveBtn from "../../../../component/SaveBtn";

const PhotoAddPost = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/add-post/content");
  };
  return (
    <div>
      This is Photo in AddPost
      <SaveBtn text="다음" onClick={handleNext} />
    </div>
  );
};

export default PhotoAddPost;
