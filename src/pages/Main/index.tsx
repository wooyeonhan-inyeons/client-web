import React, { useLayoutEffect } from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import { ContextInterface, HeaderOptinterface } from "../../interface";
import { WrapperOptInterface } from "../../component/MainWrapper/interface";
import { BellSimple } from "@phosphor-icons/react";
import { useRecoilState } from "recoil";
import { userState } from "../../recoil";
import { avatarColors } from "../../common";
import Map from "react-map-gl";
// import mapboxgl from "mapbox-gl";
import StyledAvatar from "../../component/StyledAvatar";
import { useQuery } from "react-query";
import { getNotificationCount } from "./api";
import { Badge } from "@mui/material";

function Main() {
  const [user] = useRecoilState(userState);
  const { setHeadOpt, navigate, setWrapperOpt, initPosition } =
    useOutletContext<ContextInterface>();
  const headerOption: HeaderOptinterface = {
    menus: [
      { key: "우연 찾기", value: "/" },
      { key: "과거 우연", value: "/previous" },
    ],
    isForward: true,
    icon_L: () => (
      <Badge
        badgeContent={notifyCount?.count ? notifyCount.count : 0}
        color="secondary"
      >
        <BellSimple />
      </Badge>
    ),
    fn_L: () => navigate("/notification"),
    icon_R: () => (
      <StyledAvatar
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

  const { data: notifyCount } = useQuery(
    "getNotifyCount",
    () => getNotificationCount(user.access_token as string),
    {
      onSuccess(data) {
        setHeadOpt((prev: HeaderOptinterface) => ({
          ...prev,
          icon_L: () => (
            <Badge badgeContent={data.count ? data.count : 0} color="secondary">
              <BellSimple />
            </Badge>
          ),
        }));
        // console.log(data);
      },
    }
  );

  return <Outlet context={{ navigate, Map }} />;
}

export default Main;
