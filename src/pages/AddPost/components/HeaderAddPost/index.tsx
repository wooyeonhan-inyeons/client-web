import React, { useEffect, useState } from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import { ContextInterface, HeaderOptinterface } from "../../../../interface";
import { UploadPostType } from "./interface";
import { WrapperOptInterface } from "../../../../component/MainWrapper/interface";
import { X } from "@phosphor-icons/react";
import { useMutation } from "react-query";
import { Post } from "../ContentAddPost/api";

function HeaderAddPost() {
  const {
    setHeadOpt,
    navigate,
    setWrapperOpt,
    setCategory,
    shaking,
    setShaking,
    post,
    setPost,
  } = useOutletContext<ContextInterface>();

  // 컴포넌트에서 사용할 기본 상태
  // const initialPostState: UploadPostType = {
  //   latitude: undefined,
  //   longitude: undefined,
  //   address: null,
  //   category: null,
  //   photo: [],
  //   content: "",
  // };
  // const [post, setPost] = useState<UploadPostType | null>(initialPostState);

  const headerOption: HeaderOptinterface = {
    menus: [
      { key: "위치", value: "/add-post" },
      { key: "카테고리", value: "/add-post/category" },
      { key: "내용", value: "/add-post/content" },
    ],
    isForward: false,
    icon_R: X,
    fn_R: () => navigate("/"),
  };

  const wrapperOption: WrapperOptInterface = {
    // noneFullHeight: true,
    isFullWidth: true,
    isNoneHeadPadding: false,
    isBtn: true,
  };

  useEffect(() => {
    setHeadOpt(headerOption);
    setWrapperOpt(wrapperOption);
  }, []);

  useEffect(() => {
    console.log("[header]업로드할 우연 정보: ", post); // 이것도 엄청 많이 리렌더링 됨 -> post가 자주 업데이트 된다는 뜻
    // console.log("shaking: ", shaking);
    setCategory(post?.category);
  }, [post]);

  return (
    <Outlet context={{ setHeadOpt, post, setPost, shaking, setShaking }} />
  );
}

export default HeaderAddPost;
