import React from "react";
import { NavLink } from "react-router";
import NavBar from "../NavBar";

const ErrorPage = () => {
  return (
    <div className="w-full h-dvh place-items-center ">
      <NavBar></NavBar>
      <div className="w-full flex flex-col justify-center mt-32 items-center">
        <div className="w-sm lg:w-xl">
          <img className="" src="/public/pagenotfound.svg" alt="" />
        </div>
        <div className="">
          <h1 className="text-4xl font-bold text-red-400 mt-4">
            404-Page not found
          </h1>
          <p className="font-bold mt-2">
            Oops! The page you're looking for doesn't exist.
          </p>
        </div>
        <NavLink to={"/"}>
          <button className="btn  mt-4  bg-[#6C63FF] text-white">
            Back to home page
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default ErrorPage;
