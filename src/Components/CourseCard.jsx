import React from "react";
import course from "../constants/Course";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CourseCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    slidesToShow: 2, 
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, 
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <>
      <div className="border-b container dark:border-b-gray-400">
        <h1
          data-aos="fade-up"
          data-aos-offset="50"
          data-aos-once="true"
          className="text-3xl sm:text-6xl font-semibold pb-8 text-center mt-10 text-blue-600 dark:text-indigo-600"
        >
          Our Courses
        </h1>
      </div>
      <div className="container mt-16 pb-6">
        <Slider {...settings}>
          {course.map((c, index) => (
            <div key={c.key} className="px-2">
              <div
                className="relative w-full h-80 sm:h-96 max-w-2xl mx-auto rounded-xl shadow-lg overflow-hidden flex items-center justify-center bg-gray-900 dark:bg-gray-800 hover:scale-105 transition-transform duration-300 ease-in-out"
                style={{
                  backgroundImage: `url(${c.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <div className="relative z-10 p-4 sm:p-8 w-full flex flex-col items-center justify-center text-center">
                  <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-4 text-white drop-shadow-lg">
                    {c.name}
                  </h2>
                  <p className="text-xs sm:text-base lg:text-lg text-gray-100 mb-4 sm:mb-6 drop-shadow">
                    {c.text}
                  </p>
                  <Link
                    to={`/contact`}
                    className="px-4 sm:px-6 py-2 bg-indigo-500 text-white rounded-lg shadow-md hover:scale-110 transition-all ease-in-out duration-300 hover:bg-blue-500 hover:shadow-xl font-semibold text-xs sm:text-base"
                  >
                    Enroll Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div data-aos="fade-up" className="flex justify-center pb-10 mt-10">
        <Link
          to="/course"
          className="px-6 sm:px-8 py-3 bg-indigo-500 text-white rounded-lg shadow-md hover:bg-blue-600 hover:scale-110 hover:shadow-xl transition-all duration-300 text-xs sm:text-base"
        >
          View All Courses & Admission Procedure
        </Link>
      </div>
    </>
  );
};



export default CourseCard;
