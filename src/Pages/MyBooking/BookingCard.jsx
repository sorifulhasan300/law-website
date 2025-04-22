import React from "react";
import BookingCart from "../BookingCart/BookingChart";
import BookingChart from "../BookingCart/BookingChart";
import { deleteIdLocalStorage } from "../../Utility/saveData";
import { toast } from "react-toastify";

const BookingCard = ({ filterLowyer, booking, setBooking }) => {
  const { name, id, specialty, consultation_fee } = filterLowyer;
  const handleDeleteBook = (id) => {
    deleteIdLocalStorage(id);
    const bookingData = booking.filter((book) => book.id !== id);
    setBooking(bookingData);
    toast.success("Cencel booking sucsessfuly");
  };
  return (
    <div className="shadow-sm border-1 border-gray-300 p-4 mt-8 rounded-2xl mb-20">
      <div className="">
        <div className=" mt-4 flex justify-between  ">
          <div className="">
            <h1 className="font-bold ">{name}</h1>
            <p className="text-[#14141490]">{specialty}</p>
          </div>
          <p
            className="
          text-[#14141490]"
          >
            Appointment Fee : {consultation_fee}
          </p>
        </div>
      </div>
      <div className="border-b border-dashed border-[#0F0F0F20] mb-8 mt-4"></div>
      <div className="text-center ">
        <button
          onClick={() => handleDeleteBook(id)}
          className="w-full btn  rounded-4xl border-[#FF0000] text-red-600"
        >
          CancelAppointment
        </button>
      </div>
    </div>
  );
};

export default BookingCard;
