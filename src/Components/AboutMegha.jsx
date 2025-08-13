import React from "react";
import AboutMH from "../assets/Images/aboutMH.jpg";

const AboutMegha = () => {
  return (
    <div className="container mx-auto p-6 md:p-10 my-10 mt-24 flex justify-center items-center ">
      <div className="flex  md:flex-row md:items-center gap-8 md:gap-12 flex-col-reverse">
        <div className="w-full md:w-1/2 md:pr-10"> 
          <h1
            data-aos="fade-up"
            data-aos-delay="200"
            className="font-semibold lg:text-6xl md:text-4xl text-3xl text-red-500 mb-12 tracking-tight leading-tight" 
          >
            About Megha Himalayan College
          </h1>
          <p
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-offset="200"
            className="text-gray-500 dark:text-gray-300 text-base lg:text-2xl leading-relaxed" 
          >
            Dharan Megha College/School was established in 2067 by a group of professional lecturers and educationists with the aim of providing quality education. Quality education, a positive academic environment, ample extracurricular activities, and outstanding facilities are the central attractions of the college. Managed by an innovative team of experienced and dedicated staff, the college plays a pivotal role in developing quality human resources to serve the nation in the future.
          </p>
         
        </div>
        <div className="w-full md:w-10/12 md:h-full">
          <img
            data-aos="fade-up"
            data-aos-delay="500"
            src={AboutMH}
            alt="Megha Himalayan College"
            className="w-full h-auto rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300" // Adjusted border-radius to rounded-xl
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMegha;