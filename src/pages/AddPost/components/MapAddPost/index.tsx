import React from "react";
import { useNavigate } from "react-router";
import SaveBtn from "../../../../component/SaveBtn";

// X 아이콘 바꾸기

const MapAddPost = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/add-post/category");
  };
  return (
    <div>
      This is Map in AddPost
      <SaveBtn text="다음" onClick={handleNext} />
    </div>
  );
};

export default MapAddPost;
