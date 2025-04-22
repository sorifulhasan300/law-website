import React from "react";

const Hero = () => {
  return (
    <div
      className="hero min-h-screen rounded-2xl  mx-auto mb-8"
      style={{
        backgroundImage: "url(https://i.ibb.co.com/XkX6Q691/hero.png)",
      }}
    >
      <div className="hero-overlay rounded-2xl"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="text-center place-items-center">
          <h1 className="mb-5 text-2xl  md:text-6xl font-bold max-w-4xl">
            Our best Lower
          </h1>
          <div className="">
            <p className="mb-5 line-clamp-8 text-sm text-shadow-white">
              Our platform connects you with verified, experienced doctors
              across various specialties — all at your convenience. Whether it's
              a <br /> routine checkup or urgent consultation, book appointments
              in minutes and receive quality care you can trust.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
