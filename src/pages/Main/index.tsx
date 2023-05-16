import React, { useLayoutEffect } from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import { ContextInterface, HeaderOptinterface } from "../../interface";
import { WrapperOptInterface } from "../../component/MainWrapper/interface";
import { BellSimple, User } from "@phosphor-icons/react";

function Main() {
  const { setHeadOpt, navigate, setWrapperOpt } =
    useOutletContext<ContextInterface>();

  const headerOption: HeaderOptinterface = {
    menus: [
      { key: "우연 찾기", value: "/" },
      { key: "과거 우연", value: "/previous" },
    ],
    isForward: true,
    icon_L: BellSimple,
    fn_L: () => navigate("/notification"),
    icon_R: User,
    fn_R: () => navigate("/mypage"),
  };
  const wrapperOption: WrapperOptInterface = {
    isNoneHeadPadding: true,
    scrollable: false,
    isFullWidth: true,
  };

  useLayoutEffect(() => {
    //네비게이션 리스트 업데이트
    setHeadOpt(headerOption);
    setWrapperOpt(wrapperOption);
  }, []);

  return <Outlet context={{ navigate }} />;
}

export default Main;
