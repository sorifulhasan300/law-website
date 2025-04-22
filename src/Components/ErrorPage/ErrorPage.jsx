import React from "react";
import { NavLink } from "react-router";
import NavBar from "../NavBar";

const ErrorPage = () => {
  return (
    <div className="w-full h-dvh place-items-center">
      <NavBar></NavBar>
      <div className="w-4xl flex justify-center">
        <img className="w-full" src="/public/error.jpg" alt="" />
      </div>

      <NavLink to={"/"}>
        <button className="btn rounded-4xl w-3xl bg-[#57ad3c] text-white">
          Back to home page
        </button>
      </NavLink>
    </div>
  );
};

export default ErrorPage;
