import React, { useEffect } from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { ContextInterface, HeaderOptinterface } from "../../../../interface";

function HeaderAddPost() {
  const { setHeadOpt, navigate } = useOutletContext<ContextInterface>();

  const headerOption: HeaderOptinterface = {
    menus: [
      { key: "위치", value: "/add-post" },
      { key: "카테고리", value: "/add-post/category" },
      { key: "사진", value: "/add-post/photo" },
      { key: "내용", value: "/add-post/content" },
    ],
    isForward: true,
    icon_R: faTimes,
    fn_R: () => navigate("/"),
  };
  useEffect(() => {
    setHeadOpt(headerOption);
  }, []);

  return <Outlet context={{ setHeadOpt }} />;
}

export default HeaderAddPost;
