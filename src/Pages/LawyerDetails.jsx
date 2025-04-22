import React from "react";
import { Navigate, NavLink, useLoaderData, useNavigate } from "react-router";
import { saveIdLocalStorage } from "../Utility/saveData";

const LawyerDetails = () => {
  const navigate = useNavigate();
  const {
    name,
    id,
    experience,
    status,
    specialty,
    license_number,
    image,
    availability,
    consultation_fee,
    appointment,
  } = useLoaderData().lawyer;

  console.log(name);

  const handleBookDoctor = (id, name) => {
    const isOkay = saveIdLocalStorage(id, name);
    if (isOkay) {
      navigate("/myBooking");
    }
  };
  return (
    <div className="w-11/12 mx-auto ">
      <div className="h-46 bg-[#0F0F0F15] rounded-2xl mt-8 flex justify-center items-center">
        <div className="p-4 text-center ">
          <h1 className="md:text-3xl text-2xl font-bold ">
            Lawyer’s Profile Details
          </h1>
          <p className="text-sm mt-2">
            A lawyer's profile details typically include information about their
            legal experience, areas of expertise, educational background, and
            contact information.
          </p>
        </div>
      </div>
      {/* lawyer details card */}
      <div className="mt-8 shadow p-4 rounded-2xl">
        <div className="flex flex-col md:flex-row   gap-4 items-center">
          <div className="w-60 ">
            <img className="w-full rounded-2xl" src={image} alt="" />
          </div>
          <div className="space-y-2 ">
            <p className="bg-[#09982F20]  text-sm text-[#09982F] rounded-2xl p-1 text-center">
              {experience} Experience
            </p>
            <h1 className="text-2xl  font-bold">{name}</h1>
            <div className="flex gap-2 text-sm text-gray-500 ">
              <p>{specialty}</p>
              <p>® License No: {license_number}</p>
            </div>
            <div className="flex gap-2">
              <p className="font-bold text-gray-500 ">{status}</p>
              {availability.map((avl) => (
                <p className="bg-[#FFA00020] text-[#FFA000] p-1 rounded-2xl text-sm">
                  {avl}
                </p>
              ))}
            </div>
            <p className="font-bold text-gray-500 ">
              Consultation Fee:{" "}
              <span className="font-bold text-[#0EA106]">
                Taka: {consultation_fee}
              </span>
            </p>
          </div>
        </div>
      </div>
      {/* lawyer book card */}
      <div className="rounded-2xl mt-8 shadow">
        <h1 className="text-2xl text-center font-bold m-4">
          Book an Appointment
        </h1>
        <div className=" border-b border-dashed border-[#14141420]  m-4"></div>
        <div className="flex justify-between m-4">
          <h3 className="font-bold">Availability</h3>
          <p className="bg-[#09982F20] text-sm text-[#09982F] rounded-2xl p-2 text-center">
            {appointment.can_book_today
              ? "Lawyer  Available Today"
              : "Lawyer Not Available Today"}
          </p>
        </div>
        <div className=" border-b border-dashed border-[#14141420]  m-4"></div>
        <div className=" mt-4 mb-4 m-4 ">
          <span className="bg-[#FFA00020] text-[#FFA000] p-1   rounded-4xl">
            {appointment.can_book_today
              ? appointment.message
              : appointment.message}
          </span>
        </div>
        <div className="p-4 m-4">
          <button
            onClick={() => handleBookDoctor(id, name)}
            className="w-full btn rounded-4xl bg-[#0EA106] text-white"
          >
            Book Appointment Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default LawyerDetails;
