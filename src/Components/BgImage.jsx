import React from 'react';
import bg from '../assets/Images/threeGirls.jpg';
import { Link } from 'react-router-dom';

const BgImage = () => {
  return (
    <div
      className="relative w-full h-[45vh] sm:h-[55vh] md:h-[70vh] lg:h-[80vh] flex items-center justify-center overflow-hidden mt-10 sm:mt-14 md:mt-16 rounded-2xl md:rounded-3xl shadow-xl"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div
        className="relative z-10 flex flex-col items-center justify-center text-center px-3 sm:px-6 md:px-10 w-full"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <h1 className="text-white text-lg sm:text-2xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 drop-shadow-lg leading-tight">
          Experience Campus Life at Megha Himalayan College
        </h1>
        <p className="text-gray-100 text-sm sm:text-lg md:text-2xl mb-6 sm:mb-8 max-w-lg md:max-w-2xl drop-shadow mx-auto">
          Discover a vibrant community, modern facilities, and a nurturing environment for your academic journey.
        </p>
        <Link
          to="/contact"
          data-aos="zoom-in"
          data-aos-delay="400"
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold shadow-lg hover:scale-105 hover:from-purple-500 hover:to-blue-600 transition-all duration-300 text-base sm:text-lg"
        >
          Schedule a Visit
        </Link>
      </div>
    </div>
  );
};

export default BgImage;
