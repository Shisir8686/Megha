import React from "react";
import MainAbout from "../AboutComponents/MainAbout";
import BoardSection from "../AboutComponents/BoardMembers";

const About = () => {
  return (
    <div className="dark:bg-black">
      <div className=" container overflow-x-hidden">
        <MainAbout />
        <BoardSection />
      </div>
    </div>
  );
};

export default About;
