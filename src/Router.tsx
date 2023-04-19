import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import userState from "./recoil";
import { useRecoilState } from "recoil";
import Main from "./pages/Main";
import MainWrapper from "./component/MainWrapper";
import LoginPage from "./pages/LoginPage";
import CategoryPage from "./pages/Category";
import Past from "./pages/Past/inedx";
import Wln from "./pages/wls";

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
          loader: () => user.first && redirect("/auth/cate"),
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
      children: [
        {
          path: "/",
          element: <Wln />,
          children: [
            { index: true, element: <Main /> },
            { path: "previous", element: <Past /> },
          ],
        },
      ],
      loader: () => user.role === "GUEST" && redirect("/auth"),
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
