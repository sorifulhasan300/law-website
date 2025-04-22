import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";

const Blog = () => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    fetch("/blog.json")
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, []);
  console.log(blog);

  return (
    <div className="">
      <div className="text-center space-y-8 mt-16">
        <h1 className="text-3xl font-bold">Blogs</h1>
        <p className="text-sm text-gray-500">
          Lets explore some basic concept that will make you a good developer
        </p>
      </div>
      {blog.length < 1 ? (
        <h1 className="h-dvh text-center"></h1>
      ) : (
        blog?.map((b, index) => <BlogCard key={index} b={b}></BlogCard>)
      )}
    </div>
  );
};

export default Blog;
