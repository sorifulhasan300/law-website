import React from "react";
import { useLoaderData, useParams } from "react-router";

const LawyerDetails = () => {
  const { id } = useParams();
  console.log(id);

  const lawyerData = useLoaderData().lawyer;
  console.log(lawyerData);
  const layerDetails = lawyerData.find((lawyer) => {
    return lawyer.id === parseInt(id);
  });
  const {
    name,
    experience,
    status,
    specialty,
    license_number,
    image,
    availability,
    consultation_fee,
  } = layerDetails;

  return (
    <div className="w-11/12 mx-auto h-dvw">
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
              <p>License No: {license_number}</p>
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
    </div>
  );
};

export default LawyerDetails;
