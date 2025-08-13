import React from "react";
import CountUp from "react-countup";
import HMdream from "../assets/Course/HMdream.jpg";

const MainAbout = () => {
  return (
    <div className="container mx-auto p-6 bg-white dark:bg-gray-900 text-black dark:text-white">
      <div className="flex flex-col md:flex-row-reverse items-center md:justify-between gap-8 py-24">
        <div className="w-full md:w-1/2">
          <img
            src={HMdream}
            alt="About Dharan Megha College"
            className="object-cover rounded-2xl shadow-xl w-full h-80 md:h-full transition-transform transform hover:scale-105"
          />
          <div className="grid grid-cols-2 gap-6 mt-6">
            <StatItem label="Total Teachers" value={40} suffix="+" />
            <StatItem label="Total Students" value={1400} suffix="+" />
            <StatItem label="Total Classrooms" value={35} suffix="+" />
            <StatItem label="Total Buses" value={4} suffix="+" />
          </div>
        </div>

        <div className="w-full md:w-1/2 space-y-6 pb-10">
          <h1
            data-aos="fade-up"
            className="text-3xl md:text-4xl font-semibold text-center md:text-left text-blue-500 border-b-4 border-blue-500 pb-4 mb-6 md:mb-12"
          >
            About Megha College
          </h1>
          <p
            data-aos="fade-right"
            className="text-justify md:text-left text-lg leading-relaxed"
          >
            Dharan Megha College is becoming the pioneer of global education and
            a reputed learning center of academic excellence, benchmarking with
            teaching and learning framed on innovative pedagogy of research and
            self-explorative education.
          </p>
          <p
            data-aos="zoom-in"
            className="text-justify md:text-left text-lg leading-relaxed"
          >
            We aim to develop academically and professionally skilled
            scientists, entrepreneurs, leaders, and socially valuable sound
            citizens who can seize local, national, and international
            opportunities and contribute to serving the nation and beyond.
          </p>
        </div>
      </div>
    </div>
  );
};

const StatItem = ({ label, value, suffix = "" }) => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
      <h3 className="text-3xl font-bold text-blue-500 dark:text-sky-300">
        <CountUp end={value} duration={8} separator="," suffix={suffix} />
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mt-2">{label}</p>
    </div>
  );
};

export default MainAbout;
