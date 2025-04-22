import React from "react";
import { NavLink } from "react-router";

const NoBookingFound = () => {
  return (
    <div className="w-full h-dvh place-items-center">
      <h1>You Have not Booked any appointment yet</h1>
      <p>
        Our platform connects you with verified experienced Lawyers across
        various specialties -All at your convenience
      </p>
      <NavLink to={"/"}>
        <button className="btn">Book an Appointment</button>
      </NavLink>
    </div>
  );
};

export default NoBookingFound;
