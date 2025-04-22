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
        <NavLink to={"/"}>
          <button className="btn rounded-4xl mt-4 lg:w-xl bg-[#6C63FF] text-white">
            Back to home page
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default ErrorPage;
