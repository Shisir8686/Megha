import React from "react";


import AboutMegha from "../Components/AboutMegha";
import CourseCard from "../Components/CourseCard";
import Features from "../2ndComponents/Features";
import TestimonialSlider from "../2ndComponents/testimonial";
import VideoComponent from "../Components/Video";
import BgImage from "../Components/BgImage";
import Gallery from "../AboutComponents/Gallery";
import BeQuick from "../AboutComponents/bequick";

const Home = () => {
  return (
    <div className="dark:bg-gray-800">
      <div className="lg:container overflow-x-hidden ">
        <BgImage/>
        <VideoComponent /> 
     
        <AboutMegha />
        <CourseCard />
        <Features />
        <Gallery/>
        <TestimonialSlider />
      </div>
        <BeQuick/>
    </div>
  );
};

export default Home;