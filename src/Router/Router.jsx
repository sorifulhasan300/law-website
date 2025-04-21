import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "../App";
import DataPage from "../Pages/Lawyers";
import Lawyers from "../Pages/Lawyers";
import LawyerDetails from "../Pages/LawyerDetails";
import Hero from "../Components/Hero";
import MyBooking from "../Pages/MyBooking/MyBooking";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <h1>Error Your Page Please check </h1>,
    Component: App,
    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch("/data.json"),
        Component: Lawyers,
      },

      {
        path: "/details/:Id",
        loader: () => fetch("/data.json"),
        Component: LawyerDetails,
      },
      {
        path: "/myBooking",
        loader: () => fetch("/data.json"),
        Component: MyBooking,
      },
    ],
  },
]);

export default router;
