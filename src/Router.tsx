import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import { envState, filterState, userState } from "./recoil";
import { useRecoilState, useResetRecoilState } from "recoil";
import { jwtDecode } from "jwt-js-decode";

import MainWrapper from "./component/MainWrapper";
import LoginPage from "./pages/auth/LoginPage";
import CategoryPage from "./pages/CategoryPage";
import Main from "./pages/Main";
import Search from "./pages/Main/components/Search";
import Past from "./pages/Main/components/Past/inedx";
import Notification from "./pages/Notifycation";
import Mypage from "./pages/Mypage";
import SettingPage from "./pages/Mypage/components/Setting";
import Detail from "./pages/Detail";
import Auth from "./pages/auth";
import Error from "./pages/Error";
import { useQuery } from "react-query";
import { getUser } from "./pages/auth/api";
import { UserState, roleType } from "./interface";
import { UserInfo } from "./pages/auth/interface";
import Loading from "./component/LoadingPage";
import { enqueueSnackbar } from "notistack";
import HeaderAddPost from "./pages/AddPost";
import MapAddPost from "./pages/AddPost/components/MapAddPost";
import CategoryAddPost from "./pages/AddPost/components/CategoryAddPost";
import ContentAddPost from "./pages/AddPost/components/ContentAddPost";
import History from "./pages/Mypage/components/History";

const Router = () => {
  const [user, setUser] = useRecoilState(userState);
  const resetUser = useResetRecoilState(userState);
  const resetEnv = useResetRecoilState(envState);
  const resetFilter = useResetRecoilState(filterState);

  const { data: userData } = useQuery(
    "getUser",
    () => getUser(user.access_token),
    {
      // suspense: true,
      // useErrorBoundary: true,
      //매 접속 때 마다 api로 토큰 검증
      refetchOnWindowFocus: "always",
      refetchOnMount: "always",
      refetchOnReconnect: "always",
      onSuccess(userData: UserInfo) {
        // console.log(userData);
        if (user.access_token) {
          const decodeed_token = jwtDecode(user.access_token);
          const exp = Number(decodeed_token.payload.exp) * 1000;

          if (exp > Date.now()) {
            // console.log("vailed token", userData);
            //localstorage에 저장되어야 flutter에서 읽을 수 있기에 업데이트
            setUser((prev: UserState) => {
              return {
                ...prev,
                user_id: userData.user_id,
                name: userData.name,
                create_at: userData.create_at,
                role: userData.role.toUpperCase() as roleType,
                email: userData.email,
              };
            });
          }
          return;
        }
        enqueueSnackbar({
          message: "로그인 정보가 옳바르지 않습니다..",
          variant: "error",
        });
        // console.log("not valid token");
        resetFilter();
        resetEnv();
        resetUser();
      },
    }
  );

  const router = createBrowserRouter([
    {
      path: "auth/",
      element: <MainWrapper isHeader={false} />,
      children: [
        {
          index: true,
          element: <LoginPage />,
          loader: () => Boolean(user.first) && redirect("/auth/cate"),
        },
        {
          path: "kakao/redirect",
          element: <Auth />,
          loader: () => Boolean(user.first) && redirect("/auth/cate"),
        },
        {
          path: "cate",
          element: <CategoryPage />,
        },
      ],
      loader: () => user.role === "USER" && redirect("/"),
    },
    {
      path: "/",
      element: userData ? <MainWrapper isHeader /> : <Loading />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Main />,
          children: [
            { index: true, element: <Search /> },
            { path: "previous", element: <Past /> },
          ],
        },
        {
          path: "add-post/",
          element: <HeaderAddPost />,
          children: [
            { index: true, element: <MapAddPost /> },
            { path: "category", element: <CategoryAddPost /> },
            { path: "content", element: <ContentAddPost /> },
          ],
        },
        {
          path: "notification",
          element: <Notification />,
        },
        {
          path: "mypage/",
          children: [
            { index: true, element: <Mypage /> },
            { path: "history", element: <History /> },
            { path: "setting", element: <SettingPage /> },
            // { path: "edit", element: <EditProfile /> },
          ],
        },
        {
          path: "detail/:post_id",
          element: <Detail />,
        },
      ],
      loader: () => user.role !== "USER" && redirect("/auth"),
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
