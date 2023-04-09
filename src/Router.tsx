import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import userState from "./recoil";
import { useRecoilState } from "recoil";
import Radar from "./page/Radar";
import Main from "./page/Main";
import LoginPage from "./page/LoginPage";
import CategoryPage from "./page/Category";

const Router = () => {
  const [user] = useRecoilState(userState);

  const router = createBrowserRouter([
    {
      path: "auth/",
      element: <Main />,
      children: [
        { index: true, element: <LoginPage /> },
        { path: "cate", element: <CategoryPage /> },
      ],
      loader: () => user.role !== "GUEST" && redirect("/"),
      // role에 first를 설정하여 초기 유저는 category에 진입 가능하게 하는거 어떰
    },
    {
      path: "/",
      element: <Main />,
      children: [
        { index: true, element: <h1>home</h1> },
        { path: "search", element: <Radar /> },
      ],
      loader: () => user.role === "GUEST" && redirect("/auth"),
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
