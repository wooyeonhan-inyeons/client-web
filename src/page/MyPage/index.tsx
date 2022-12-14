import React, { useEffect, useState } from "react";
import { useInfiniteQuery, useQuery } from "react-query";
import { Outlet, useNavigate } from "react-router-dom";
import { useResetRecoilState } from "recoil";
import { recoil_ } from "../../recoil";

import { StyledContainer } from "../../components/StyledContainer";
import { Header } from "../../components/Header";
import { MyProfile } from "./components/MyProfile";
import { MyPost } from "./components/MyPost";
import { LogoutButton } from "./components/LogoutButton";
import { LoadingBox } from "../../components/LoadingContainer";
import { GetTest } from "./Postes/components/TabBox/GetTest";
import { GetPostMine, GetPostMineViewed } from "./api/GetPostMine";
import ScrollToTop from "../../components/Scroll";

const Mypage = () => {
  const resetUser = useResetRecoilState(recoil_.userState);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  //15장 불러오면 9장이 최대인 여기에선 불필요해서 useQuery로 변경
  const { data: postData, isSuccess: postSuccess } = useQuery(
    ["mypage"],
    () => GetPostMine({ idx: 0 }),
    {
      retry: 3,
      onSuccess: (res) => {
        // console.log(res);
        setLoading(false);
      },
    }
  );
  const { data: viewedData, isSuccess: viewedSuccess } = useQuery(
    ["viewed"],
    () => GetPostMineViewed({ idx: 0 }),
    {
      retry: 3,
      onSuccess: (res) => {
        // console.log(res);
        setLoading(false);
      },
    }
  );

  return (
    <>
      <ScrollToTop />

      <Header title="마이페이지" />
      {postSuccess ? (
        <StyledContainer>
          <MyProfile userPost={viewedData} />
          <MyPost data={postData} />

          <LogoutButton
            onClick={() => {
              localStorage.removeItem("key");
              resetUser();
            }}
          >
            로그아웃
          </LogoutButton>
        </StyledContainer>
      ) : (
        <LoadingBox />
      )}
      <Outlet />
    </>
  );
};

export default Mypage;
