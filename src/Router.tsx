import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import userState from "./recoil";
import { useRecoilState } from "recoil";
import Radar from "./pages/Radar";
import Main from "./component/Main";
import LoginPage from "./pages/LoginPage";
import CategoryPage from "./pages/Category";

const Router = () => {
  const [user] = useRecoilState(userState);

  const router = createBrowserRouter([
    {
      path: "auth/",
      element: <Main isHeader={false} />,
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
      element: <Main isHeader />,
      children: [
        // { index: true, element: <h1>home</h1> },
        { index: true, element: <Radar /> },
      ],
      loader: () => user.role === "GUEST" && redirect("/auth"),
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
