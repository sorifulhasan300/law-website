import React from "react";

const BlogCard = ({ b }) => {
  const { question, answer, date } = b;

  return (
    <div className="shadow p-4 mt-8 rounded h-full">
      <h1 className="text-xl font-bold">{question}</h1>
      <div className="border-dashed border border-gray-300 mt-4"></div>
      <p className="mt-4 ">
        <span className="text-green-500 font-bold">Answer:</span>
        {answer}
      </p>
      <div className="border-dashed border border-gray-300 mt-4"></div>
      <p className="mt-4">Added at {date}</p>
    </div>
  );
};

export default BlogCard;
