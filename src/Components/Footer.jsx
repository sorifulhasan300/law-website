import React from "react";
import { NavLink } from "react-router";

const Footer = () => {
  const navItem = (
    <div className="flex lg:flex-row  flex-col gap-4   lg:gap-8">
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive ? "border-b-2 font-bold " : "font-semibold"
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
    <footer className="footer  place-items-center flex flex-col text-center sm:footer-horizontal bg-neutral text-neutral-content p-10 mt-8">
      <div className=" place-items-center space-y-6 ">
        <img className="" src="/footerLogo.png" alt="" />
        <div className="">{navItem}</div>
        <div className="border w-full"></div>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <a href="https://www.facebook.com/sorifulhasan300" target="_blank">
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/color/48/facebook-new.png"
              alt="facebook"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/md-soriful-hasan-53a9b52b3/"
            target="_blank"
          >
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/fluency/48/linkedin.png"
              alt="linkedin"
            />
          </a>
          <a href="https://www.youtube.com/@codingwithhasan300" target="_blank">
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/color/48/youtube-play.png"
              alt="Youtube"
            />
          </a>
          <a href="https://www.instagram.com/hasibhasan1642/" target="_blank">
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/3d-fluency/94/instagram-new.png"
              alt="instagram-new"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
