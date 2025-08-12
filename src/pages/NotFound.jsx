import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-800">
      <h1 className="text-6xl font-bold text-gray-800 dark:text-gray-200 mb-4">
        Oops! <span className="text-red-500">404</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 text-center px-4">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link to="/">
        <button className="px-6 py-3 font-medium text-white bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600 transition-colors ease-in-out duration-300 dark:bg-indigo-600 dark:hover:bg-indigo-700">
          Back To Home Page
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
