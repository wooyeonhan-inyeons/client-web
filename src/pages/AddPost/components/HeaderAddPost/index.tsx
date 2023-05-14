import React, { useEffect, useState } from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { ContextInterface, HeaderOptinterface } from "../../../../interface";
import { UploadPostType } from "./interface";
import { WrapperOptInterface } from "../../../../component/MainWrapper/interface";

function HeaderAddPost() {
  const { setHeadOpt, navigate, setWrapperOpt } =
    useOutletContext<ContextInterface>();

  // 컴포넌트에서 사용할 기본 상태
  const initialPostState: UploadPostType = {
    latitude: undefined,
    longitude: undefined,
    address: null,
    category: null,
    photo: [],
    title: "",
    content: "",
  };
  const [post, setPost] = useState<UploadPostType | null>(initialPostState);

  const headerOption: HeaderOptinterface = {
    menus: [
      { key: "위치", value: "/add-post" },
      { key: "카테고리", value: "/add-post/category" },
      { key: "사진", value: "/add-post/photo" },
      { key: "내용", value: "/add-post/content" },
    ],
    isForward: false,
    icon_R: faTimes,
    fn_R: () => navigate("/"),
  };

  const wrapperOption: WrapperOptInterface = {
    // noneFullHeight: true,
    isFullWidth: true,
    isNoneHeadPadding: false,
  };

  useEffect(() => {
    setHeadOpt(headerOption);
    setWrapperOpt(wrapperOption);
  }, []);

  useEffect(() => {
    console.log("[header]업로드할 우연 정보: ", post);
  }, [post]);
  return <Outlet context={{ setHeadOpt, post, setPost }} />;
}

export default HeaderAddPost;
