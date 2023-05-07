import React, { useEffect } from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import { useResetRecoilState } from "recoil";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import userState from "../../../../recoil";
import { ContextInterface } from "../../../Main/components/Search/interface";
import { HeaderOptinterface } from "../../../../interface";

function HeaderAddPost() {
  const { setHeadOpt } = useOutletContext<ContextInterface>();
  const resetUser = useResetRecoilState(userState);

  const headerOption: HeaderOptinterface = {
    menus: [
      { key: "위치", value: "/add-post" },
      { key: "카테고리", value: "/add-post/category" },
      { key: "사진", value: "/add-post/photo" },
      { key: "내용", value: "/add-post/content" },
    ],
    isForward: true,
    icon: faTimes,
    mainFn: resetUser,
  };
  useEffect(() => {
    setHeadOpt(headerOption);
  }, []);

  return <Outlet context={{ setHeadOpt }} />;
}

export default HeaderAddPost;
