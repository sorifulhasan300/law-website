import React from "react";
import { useLoaderData } from "react-router";
import { getIdLocalStorage } from "../../Utility/saveData";
import BookingCard from "./BookingCard";
import BookingChart from "../BookingCart/BookingChart";

const MyBooking = () => {
  const data = useLoaderData().lawyer;
  const storageId = getIdLocalStorage();
  const filterId = data.filter((lowId) => storageId.includes(lowId.id));
  console.log(filterId);

  return (
    <div className="">
      {filterId.length < 1 ? (
        <div className="h-dvh">
          <h1>No Data Avail Availe</h1>
        </div>
      ) : (
        <div className="">
          <BookingChart filterId={filterId}></BookingChart>
          <div className=" text-center p-2 mt-8">
            <h1 className="text-xl lg:text-3xl  font-bold p-2">
              My Today Appointments
            </h1>
            <p className="text-[#0F0F0F] text-sm ">
              Our platform connects you with verified, experienced Lawyers
              across various specialties — all at your convenience.
            </p>
          </div>
          <div className="">
            {filterId.map((filterLowyer) => (
              <BookingCard filterLowyer={filterLowyer}></BookingCard>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyBooking;
