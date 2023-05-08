import React, { useEffect, useState } from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import { useResetRecoilState } from "recoil";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import userState from "../../../../recoil";
import { ContextInterface, HeaderOptinterface } from "../../../../interface";
import { AddPost } from "./interface";

function HeaderAddPost() {
  const { setHeadOpt } = useOutletContext<ContextInterface>();
  const [post, setPost] = useState<AddPost | null>(null);

  const resetUser = useResetRecoilState(userState);

  const headerOption: HeaderOptinterface = {
    menus: [
      { key: "위치", value: "/add-post" },
      { key: "카테고리", value: "/add-post/category" },
      { key: "사진", value: "/add-post/photo" },
      { key: "내용", value: "/add-post/content" },
    ],
    isForward: true,
    icon_R: faTimes,
    fn_R: resetUser,
  };
  useEffect(() => {
    setHeadOpt(headerOption);
  }, []);

  useEffect(() => {
    console.log(post);
  }, [post]);
  return <Outlet context={{ setHeadOpt, setPost }} />;
}

export default HeaderAddPost;
