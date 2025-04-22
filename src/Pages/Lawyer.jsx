import React, { useEffect, useState } from "react";
import LawyerCard from "./LawyerCard";
import Counter from "./Counter/Counter";
import Spiner from "../Components/Spiner/Spiner";

const Lawyer = ({ data }) => {
  const [lawyerData, setLawyerData] = useState();
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    if (showAll) {
      setLawyerData(data?.slice(0, 6));
    } else {
      setLawyerData(data);
    }
  }, [data, showAll]);

  const handleShowAll = () => {
    setShowAll(!showAll);
  };
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
        {lawyerData?.map((lawyer, index) => (
          <div key={index}>
            <LawyerCard lawyer={lawyer}></LawyerCard>
          </div>
        ))}
      </div>
      {/* show All and Show Less Button */}
      <div className=" flex justify-center mt-8">
        <button
          onClick={() => handleShowAll()}
          className={
            showAll
              ? "btn place-items-center rounded-4xl bg-[#0EA106] text-white"
              : ""
          }
        >
          {showAll ? "Show All Lawyer " : ""}
        </button>
      </div>
      <Counter></Counter>
    </div>
  );
};

export default Lawyer;
