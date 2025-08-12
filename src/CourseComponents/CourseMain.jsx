import React from "react";
import course from "../constants/Course";

const CourseMain = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-12">
      <div className="text-center mx-auto text-black dark:text-white container py-10 font-poppins border-b-4 border-blue-500 dark:border-indigo-500">
        <h1 className="text-3xl sm:text-4xl font-bold">Our Courses</h1>
      </div>
      <div className="container mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-14">
        {course.map((c) => (
          <div
            key={c.key}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all ease-in-out duration-300 hover:scale-105 transform"
          >
            <img
              src={c.img}
              alt={c.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-6 flex flex-col">
              <h2 className="text-xl font-bold mb-4 text-center text-gray-800 dark:text-gray-100 border-b-2 border-gray-300 dark:border-gray-700 pb-2">
                {c.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">{c.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseMain;
