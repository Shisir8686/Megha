import React from 'react';
import proudmoment from "../assets/Images/features/proudmoment.jpg";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const BeQuick = () => {
  return (
    <div
      className="relative w-full h-[350px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex items-end justify-center overflow-hidden rounded-2xl shadow-xl my-10"
      style={{
        backgroundImage: `url(${proudmoment})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="relative z-10 w-full px-4 pb-8 flex flex-col items-center justify-end text-center">
        <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-2 drop-shadow-lg">
          Join us and become a part of Megha Family
        </h1>
        <p className="text-gray-200 text-base sm:text-lg md:text-xl mb-4 max-w-xl drop-shadow mx-auto">
          Experience quality education, vibrant campus life, and endless opportunities. Connect with us today!
        </p>
        <div className="flex items-center justify-center gap-3 mb-4">
          <FaPhoneAlt className="text-blue-400 text-lg sm:text-xl" />
          <span className="text-white text-lg sm:text-xl font-semibold">025-575403</span>
        </div>
        <Link
          to="/contact"
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 hover:from-purple-500 hover:to-blue-600 transition-all duration-300"
        >
          Send us an enquiry mail
        </Link>
      </div>
    </div>
  );
};

export default BeQuick;