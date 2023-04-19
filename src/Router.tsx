import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import userState from "./recoil";
import { useRecoilState } from "recoil";

import MainWrapper from "./component/MainWrapper";
import LoginPage from "./pages/LoginPage";
import CategoryPage from "./pages/Category";
import Main from "./pages/Main";
import Search from "./pages/Main/components/Search";
import Past from "./pages/Main/components/Past/inedx";
// import AddPost from "./pages/AddPost";

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
          element: <Main />,
          children: [
            { index: true, element: <Search /> },
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
