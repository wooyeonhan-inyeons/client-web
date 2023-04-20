import React from "react";
import { useNavigate } from "react-router";
import SaveBtn from "../../../../component/SaveBtn";

const ContentAddPost = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/add-post/photo");
  };
  return (
    <div>
      This is Content in AddPost
      <SaveBtn text="우연 등록하기" onClick={handleNext} />
    </div>
  );
};

export default ContentAddPost;
