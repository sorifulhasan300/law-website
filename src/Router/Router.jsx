import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "../App";
import DataPage from "../Pages/Lawyers";
import Lawyers from "../Pages/Lawyers";
import LawyerDetails from "../Pages/LawyerDetails";
import Hero from "../Components/Hero";
import MyBooking from "../Pages/MyBooking/MyBooking";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Blog from "../Pages/Blog/Blog";
import NoLawyerFound from "../Components/NoLawyerFound/NoLawyerFound";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch("/data.json"),
        Component: Lawyers,
      },

      {
        path: "/details/:Id",
        errorElement: <NoLawyerFound></NoLawyerFound>,
        Component: LawyerDetails,
        loader: async ({ params }) => {
          const nid = Number(params.Id);
          if (isNaN(nid) || !Number.isInteger(nid)) {
            throw new Response("Invalid Lawyer ID", {
              status: 404,
              statusText: <NoLawyerFound></NoLawyerFound>,
            });
          }
          const id = parseInt(params.Id);
          const res = await fetch("/data.json");
          const data = await res.json();
          const lawyerList = data.lawyer;
          const lawyer = lawyerList.find((item) => item.id === id);
          if (!lawyer) {
            throw new Response("Lawyer Data not found", { status: 404 });
          }
          return { lawyer };
        },
      },
      {
        path: "/myBooking",
        loader: () => fetch("/data.json"),
        Component: MyBooking,
      },
      {
        path: "/blog",
        loader: () => fetch("/blog.json"),
        Component: Blog,
      },
    ],
  },
]);

export default router;
