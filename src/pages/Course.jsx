import React, { useEffect } from "react";
import CourseMain from "../CourseComponents/CourseMain";
import Admission from "../CourseComponents/Admission";
import Scholarship from "../CourseComponents/Scholarship";
import { useLocation } from "react-router-dom";

const Course = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#ScholarshipScheme") {
      const element = document.getElementById("ScholarshipScheme");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="dark:bg-black">
      <div className="container overflow-x-hidden">
        <CourseMain />
        <Admission />
        <div id="ScholarshipScheme">
          <Scholarship />
        </div>
      </div>
    </div>
  );
};

export default Course;
