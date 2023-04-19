import React from "react";
import { useNavigate } from "react-router";
import SaveBtn from "../../../../component/SaveBtn";

const CategoryAddPost = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/add-post/photo");
  };
  return (
    <div>
      This is Category in AddPost
      <SaveBtn text="다음" onClick={handleNext} />
    </div>
  );
};

export default CategoryAddPost;
