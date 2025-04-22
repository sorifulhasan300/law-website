import Lawyer from "./Lawyer";
import { useLoaderData } from "react-router";
import Hero from "../Components/Hero";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Lawyers = () => {
  const data = useLoaderData().lawyer;
 
  
  return (
    <div className="w-11/12 mx-auto mt-8">
      <Hero></Hero>
      {/*  Lawyers  titles*/}
      <div className="text-center place-items-center mb-4">
        <h1 className="text-3xl font-bold ">Our Best Lawyers</h1>
        <p className="text-gray-600 lg:w-6xl">
          Our platform connects you with verified, experienced Lawyers across
          various specialties — all at your convenience. Whether it's a routine
          checkup or urgent consultation, book appointments in minutes and
          receive quality care you can trust.
        </p>
      </div>
      <Lawyer data={data}></Lawyer>
    </div>
  );
};

export default Lawyers;
