import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getIdLocalStorage } from "../../Utility/saveData";
import BookingCard from "./BookingCard";
import BookingChart from "../BookingCart/BookingChart";
import NoBookingFound from "../../Components/NoBookingFound/NoBookingFound";

const MyBooking = () => {
  const [booking, setBooking] = useState([]);
  const data = useLoaderData().lawyer;
  useEffect(() => {
    const storageId = getIdLocalStorage();
    const filterId = data.filter((lowId) => storageId.includes(lowId.id));
    setBooking(filterId);
  }, [data]);

  return (
    <div className="">
      {booking.length < 1 ? (
        <div className="h-dvh">
         <NoBookingFound></NoBookingFound>
        </div>
      ) : (
        <div className="">
          <BookingChart booking={booking}></BookingChart>
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
            {booking.map((filterLowyer) => (
              <BookingCard
                filterLowyer={filterLowyer}
                booking={booking}
                setBooking={setBooking}
              ></BookingCard>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyBooking;
