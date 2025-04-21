import React from "react";
import { Link } from "react-router";

const LawyerCard = ({ lawyer }) => {
    const { name, experience, status, specialty, license_number, image, id } =
      lawyer;
  return (
    <div>
      <div className=" ">
        <div className=" p-4 shadow rounded-2xl mt-8">
          <div className="flex">
            <div className="w-40 ">
              <img className="w-full rounded-2xl" src={image} alt="" />
            </div>
            <div className=" gap-4 ml-4">
              <div className="flex flex-row gap-4">
                <p className="bg-[#09982F20] text-sm text-[#09982F] rounded-2xl p-2 text-center">
                  {status}
                </p>
                <p className="bg-[#176AE520] text-sm text-[#176AE5] rounded-2xl p-2 text-center">
                  {experience} Experience
                </p>
              </div>
              <div className="">
                <h1 className="text-3xl font-bold">{name}</h1>
                <p>{specialty}</p>
                <p>{license_number}</p>
                <Link to={`/details/${id}`}>
                  <button className="border rounded-4xl w-full border-[#176AE520] text-[#176AE5] font-bold">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default LawyerCard;
