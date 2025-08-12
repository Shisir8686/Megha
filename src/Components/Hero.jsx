import React, { useState } from "react";
import Slider from "react-slick";
import AC from "../assets/Images/AC.jpg";
import HMcook from "../assets/Images/HMcook.jpg";
import missSee from "../assets/Images/missSee.jpg";
import dhm from "../assets/Images/dhm.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const Hero = () => {
  const images = [HMcook, missSee, AC, dhm];

  const [currentSlide, setCurrentSlide] = useState(0); // Track the current slide

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: true,
    beforeChange: (current, next) => setCurrentSlide(next),
    appendDots: (dots) => (
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          borderRadius: "10px",
          padding: "10px",
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "15px",
          height: "15px",
          borderRadius: "50%",
          backgroundColor: i === currentSlide ? "#fff" : "#bbb",
          margin: "0 8px",
        }}
      />
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
          arrows: true,
        },
      },
    ],
  };

  return (
    <div className="w-full p-6  relative z-0 flex flex-col md:gap-10 md:flex-row sm:flex-col container mx-auto">
      <div className="relative w-full h-[300px] pt-24 sm:h-[400px] md:h-[450px] xl:h-[550px] overflow-hidden rounded-lg">
        <Slider {...sliderSettings}>
          {images.map((image, index) => (
            <div key={index} className="w-full h-full flex-shrink-0">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
          ))}
        </Slider>
      </div>

      <div className="flex flex-col text-center lg:w-1/2 lg:mt-[60px] md:mt-[62px]  sm:w-full h-full items-center justify-center my-auto sm:mx-0 dark:text-white">
        <h1 className="w-full lg:text-3xl md:text-2xl pt-5 text-2xl lg:pt-24 font-semibold text-black dark:text-white">
          Welcome to the official web page of Megha College.
        </h1>
        <p className="w-full mt-3 text-[] text-gray-500 dark:text-gray-400">
          Get details about Megha family by clicking the button below.
        </p>
        <div className="flex justify-center w-full gap-4 mt-6">
          <Link
            to={{
              pathname: "/course",
              hash: "#ScholarshipScheme",
            }}
          >
            <button className="px-2 py-2 lg:px-2 lg:py-3 text-white transition duration-300 ease-in-out bg-blue-500 rounded-md hover:bg-blue-700">
              Scholarship scheme
            </button>
          </Link>
          <Link to="/course">
            <button className="px-2 py-2 lg:px-2 lg:py-3 text-white transition-all duration-300 ease-in-out bg-blue-500 rounded-lg hover:bg-blue-700 ">
              Our Courses
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
