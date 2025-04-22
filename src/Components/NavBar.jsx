import React from "react";
import { NavLink } from "react-router";

const NavBar = () => {
  const navItem = (
    <div className="flex lg:flex-row  flex-col gap-4  lg:gap-8">
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive ? "border-b-2 font-bold" : "font-semibold"
        }
      >
        Home
      </NavLink>
      <NavLink
        to={"myBooking"}
        className={({ isActive }) =>
          isActive ? "border-b-2 font-bold" : "font-semibold"
        }
      >
        My-Bookings
      </NavLink>
      <NavLink
        to={"/blog"}
        className={({ isActive }) =>
          isActive ? "border-b-2 font-bold" : "font-semibold"
        }
      >
        Blogs
      </NavLink>
      <NavLink
        to={"/contact"}
        className={({ isActive }) =>
          isActive ? "border-b-2 font-bold" : "font-semibold"
        }
      >
        Contact Us
      </NavLink>
    </div>
  );
  return (
    <div className="navbar shadow mx-auto fixed top-0 left-0 w-full bg-white shadow z-50 top-0">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navItem}
          </ul>
        </div>
        <div className="hidden lg:block w-2/12">
          <img className="" src="/logo.png" alt="" />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItem}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn rounded-2xl   bg-[#0EA106] text-white">Contact Now</a>
      </div>
    </div>
  );
};

export default NavBar;
