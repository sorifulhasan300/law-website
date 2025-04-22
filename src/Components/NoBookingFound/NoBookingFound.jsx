import React from "react";
import { NavLink } from "react-router";

const NoBookingFound = () => {
  return (
    <div className="w-full h-dvh place-items-center justify-center   flex ">
      <div className="text-center place-items-center space-y-4">
        <div className="w-sm ">
          <img src="/public/bookingnotfound.svg" alt="" />
        </div>
        <h1 className="text-3xl font-bold">
          You Have not Booked any appointment yet
        </h1>
        <p>
          Our platform connects you with verified experienced Lawyers across
          various specialties -All at your convenience
        </p>
        <NavLink to={"/"}>
          <button className="mt-4 btn w-sm rounded-4xl bg-[#6C63FF] text-white">
            Book an Appointment
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default NoBookingFound;
