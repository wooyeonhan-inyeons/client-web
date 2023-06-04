import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import { userState } from "./recoil";
import { useRecoilState } from "recoil";

import MainWrapper from "./component/MainWrapper";
import LoginPage from "./pages/auth/LoginPage";
import CategoryPage from "./pages/CategoryPage";
import Main from "./pages/Main";
import Search from "./pages/Main/components/Search";
import Past from "./pages/Main/components/Past/inedx";
import HeaderAddPost from "./pages/AddPost/components/HeaderAddPost";
import MapAddPost from "./pages/AddPost/components/MapAddPost";
import CategoryAddPost from "./pages/AddPost/components/CategoryAddPost";
import ContentAddPost from "./pages/AddPost/components/ContentAddPost";
import Notification from "./pages/Notifycation";
import Mypage from "./pages/Mypage";
import EditProfile from "./pages/Mypage/components/Edit";
import SettingPage from "./pages/Mypage/components/Setting";
import Detail from "./pages/Detail";
import Auth from "./pages/auth";
import Error from "./pages/Error";

const Router = () => {
  const [user] = useRecoilState(userState);

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
          path: "kakao/redirect/",
          element: <Auth />,
          loader: () => Boolean(user.first) && redirect("/auth/cate"),
        },
        {
          path: "cate",
          element: <CategoryPage />,
        },
      ],
      loader: () => user.role !== "GUEST" && redirect("/"),
    },
    {
      path: "/",
      element: <MainWrapper isHeader />,
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
            { path: "edit", element: <EditProfile /> },
            { path: "setting", element: <SettingPage /> },
          ],
        },
        {
          path: "detail/:postId",
          element: <Detail />,
        },
      ],
      loader: () => user.role === "GUEST" && redirect("/auth"),
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
