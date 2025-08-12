import React, { useState, useEffect } from "react";
import features from "../constants/features";

const Features = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="text-center text-3xl text-blue-500 sm:text-6xl font-semibold border-b dark:border-gray-500 container pt-14 pb-8">
        Our Features
      </div>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-2 sm:px-6 py-14 container mx-auto">
        {features.map((f, index) => {
          if (isLargeScreen && index >= 6) return null;

          return (
            <div
              key={f.id}
              className="relative rounded-xl shadow-lg overflow-hidden min-h-[300px] sm:min-h-[350px] lg:min-h-[400px] bg-gray-900 dark:bg-slate-800 hover:scale-105 transition-transform duration-300"
              style={{
                backgroundImage: `url(${f.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <div className="absolute bottom-0 left-0 w-full z-10 p-6 sm:p-8 flex flex-col items-center justify-end text-center">
                <h3 className="text-lg sm:text-2xl lg:text-3xl font-bold text-white mb-2 drop-shadow-lg">
                  {f.label}
                </h3>
                <p className="text-xs sm:text-base lg:text-lg text-gray-100 drop-shadow">
                  {f.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Features;
