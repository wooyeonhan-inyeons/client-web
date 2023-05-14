import React, { useLayoutEffect } from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import { ContextInterface, HeaderOptinterface } from "../../interface";
import { faBell, faUser } from "@fortawesome/free-regular-svg-icons";
import { WrapperOptInterface } from "../../component/MainWrapper/interface";

function Main() {
  const { setHeadOpt, navigate, setWrapperOpt } =
    useOutletContext<ContextInterface>();

  const headerOption: HeaderOptinterface = {
    menus: [
      { key: "우연 찾기", value: "/" },
      { key: "과거 우연", value: "/previous" },
    ],
    isForward: true,
    icon_L: faBell,
    fn_L: () => navigate("/notification"),
    icon_R: faUser,
    fn_R: () => navigate("/mypage"),
  };
  const wrapperOption: WrapperOptInterface = {
    isNoneHeadPadding: true,
    scrollable: false,
  };

  useLayoutEffect(() => {
    //네비게이션 리스트 업데이트
    setHeadOpt(headerOption);
    setWrapperOpt(wrapperOption);
  }, []);

  return <Outlet context={{ navigate }} />;
}

export default Main;
