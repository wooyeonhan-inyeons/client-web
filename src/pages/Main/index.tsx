import React, { useLayoutEffect } from "react";
import { Outlet, useNavigate, useOutletContext } from "react-router-dom";
import { ContextInterface, HeaderOptinterface } from "../../interface";
import { useResetRecoilState } from "recoil";
import userState from "../../recoil";
import { faBell, faUser } from "@fortawesome/free-regular-svg-icons";

function Main() {
  const { setHeadOpt } = useOutletContext<ContextInterface>();
  const resetUser = useResetRecoilState(userState);
  const navigate = useNavigate();

  const headerOption: HeaderOptinterface = {
    menus: [
      { key: "우연 찾기", value: "/" },
      { key: "과거 우연", value: "/previous" },
    ],
    isForward: true,
    icon_L: faBell,
    fn_L: () => navigate("/notification"),
    icon_R: faUser,
    fn_R: resetUser,
  };

  useLayoutEffect(() => {
    //네비게이션 리스트 업데이트
    setHeadOpt(headerOption);
  }, []);

  return <Outlet context={{ setHeadOpt }} />;
}

export default Main;
