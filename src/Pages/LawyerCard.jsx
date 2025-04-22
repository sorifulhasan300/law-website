import React from "react";
import { Link } from "react-router";

const LawyerCard = ({ lawyer }) => {
  const { name, experience, status, specialty, license_number, image, id } =
    lawyer;
  return (
    <div>
      <div className=" ">
        <div className=" p-4 shadow rounded-2xl mt-8 ">
          <div className="flex flex-col md:flex-row items-center md:text-start  gap-2 space-y-4">
            <div className="w-40 ">
              <img className="w-full rounded-2xl" src={image} alt="" />
            </div>
            <div className=" gap-4 ml-4 space-y-4 ">
              <div className="flex flex-row gap-4">
                <p className="bg-[#09982F20] text-sm text-[#09982F] rounded-2xl p-2 text-center">
                  {status}
                </p>
                <p className="bg-[#176AE520] text-sm text-[#176AE5] rounded-2xl p-2 text-center">
                  {experience} Experience
                </p>
              </div>
              <div className="">
                <h1 className="text-2xl font-bold mb-1">{name}</h1>
      
                <div className="border-dashed border border-gray-400 mb-2"></div>
                <p className="text-gray-500">{specialty}</p>
                <p className="text-gray-500">®License No: {license_number}</p>
                <div className="mt-2">
                  <Link to={`/details/${id}`}>
                    <button className="border hover:bg-[#176AE5] hover:text-white cursor-pointer rounded-4xl h-10 w-full border-[#176AE520] text-[#176AE5] font-bold">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LawyerCard;
