import React from "react";
import CountUp, { useCountUp } from "react-countup";

const Counter = () => {
  useCountUp({
    ref: "counter",
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });
  return (
    <div className="mt-25 ">
      <div className="text-center">
        <h1 className="text-2xl font-bold">We Provide Best Law Services</h1>
        <p>
          Our platform connects you with verified, experienced Lawyers across
          various specialities — all at your convenience.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 place-items-center mt-8 gap-8">
        <div className="content w-full   place-items-center shadow rounded-xl bg-gray-100 my-4 py-4">
          <img src="/lawyer.png" alt="" />
          <CountUp
            className="text-4xl font-bold mt-4"
            end={199}
            enableScrollSpy
          />
          <span className="text-4xl font-bold mt-4">+</span>

          <p className="text-gray-500">Total Lawyer</p>
        </div>
        <div className="content w-full   place-items-center shadow rounded-xl bg-gray-100 my-4 py-4">
          <img src="/star.png" alt="" />
          <CountUp
            className="text-4xl font-bold mt-4"
            end={467}
            enableScrollSpy
          />
          <span className="text-4xl font-bold mt-4">+</span>

          <p className="text-gray-500">Total Reviews</p>
        </div>
        <div className="content w-full   place-items-center shadow rounded-xl bg-gray-100 my-4 py-4">
          <img src="/hammer.png" alt="" />

          <CountUp
            className="text-4xl font-bold mt-4"
            end={1900}
            enableScrollSpy
          />
          <span className="text-4xl font-bold mt-4">+</span>

          <p className="text-gray-500">Cases Initiated</p>
        </div>
        <div className="content w-full   place-items-center shadow rounded-xl bg-gray-100 my-4 py-4">
          <img src="/group.png" alt="" />
          <CountUp
            className="text-4xl font-bold mt-4"
            end={300}
            enableScrollSpy
          />
          <span className="text-4xl font-bold mt-4">+</span>

          <p className="text-gray-500">total stuffs</p>
        </div>
      </div>

      <br />
      {/* <span id="counter" /> */}
    </div>
  );
};

export default Counter;
