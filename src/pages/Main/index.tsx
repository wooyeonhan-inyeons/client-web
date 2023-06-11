import React, { useLayoutEffect } from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import { ContextInterface, HeaderOptinterface } from "../../interface";
import { WrapperOptInterface } from "../../component/MainWrapper/interface";
import { BellSimple } from "@phosphor-icons/react";
import { useRecoilState } from "recoil";
import { userState } from "../../recoil";
import { avatarColors } from "../../common";
import Map from "react-map-gl";
import mapboxgl from "mapbox-gl";
import Avatar from "boring-avatars";

function Main() {
  const [user] = useRecoilState(userState);
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
    icon_R: () => (
      <Avatar
        name={user.user_id}
        variant="beam"
        size={28}
        colors={avatarColors}
      />
    ),
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

  return <Outlet context={{ navigate, Map, mapboxgl }} />;
}

export default Main;
