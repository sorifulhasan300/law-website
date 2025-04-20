import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "../App";
import DataPage from "../Pages/DataPage";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <h1>Error Your Page Please check </h1>,
    Component: App,
    children: [
      {
        index: true,
        Component: DataPage,
      },
      
    ],
  },
]);

export default router;
