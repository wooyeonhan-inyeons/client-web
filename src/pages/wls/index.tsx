import React, { useEffect } from "react";
import { ContextInterface } from "../Main/interface";
import { Outlet, useOutletContext } from "react-router-dom";
import { HeaderOptinterface } from "../../interface";
import { useResetRecoilState } from "recoil";
import userState from "../../recoil";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function Wln() {
  const { setHeadOpt } = useOutletContext<ContextInterface>();
  const resetUser = useResetRecoilState(userState);

  const headerOption: HeaderOptinterface = {
    menus: [
      { key: "우연 찾기", value: "/" },
      { key: "과거 우연", value: "/previous" },
    ],
    isForward: true,
    icon: faUser,
    mainFn: resetUser,
  };
  useEffect(() => {
    //네비게이션 리스트 업데이트
    setHeadOpt(headerOption);
  }, []);

  return <Outlet context={{ setHeadOpt }} />;
}

export default Wln;
