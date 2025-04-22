import React from "react";

const NoLawyerFound = () => {
  return (
    <div className="h-dvh flex flex-col justify-center items-center space-y-4">
      <div className="w-sm ">
        <img src="/public/datanotfound.svg" alt="" />
      </div>
      <h1 className="text-3xl font-bold ">Lawyer Not Found</h1>
      <button className="btn rounded-4xl mt-4 lg:w-xl bg-[#6C63FF] text-white">
        back to home page
      </button>
    </div>
  );
};

export default NoLawyerFound;
