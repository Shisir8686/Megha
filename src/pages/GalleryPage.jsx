import React, { useState } from "react";

import hm1 from "../assets/Images/HMgallery/hm.jpg";
import hm2 from "../assets/Images/HMgallery/bartender2.jpg";
import hm3 from "../assets/Images/HMgallery/bartenderinclz.jpg";
import hm4 from "../assets/Images/HMgallery/dragon.jpg";
import hm5 from "../assets/Images/HMgallery/hmcake.jpg";
import hm6 from "../assets/Images/HMgallery/hmflowers.jpg";
import hm7 from "../assets/Images/HMgallery/juggling.jpg";
import hm8 from "../assets/Images/HMgallery/jugling2.jpg";
import hm9 from "../assets/Images/HMgallery/bartendingWorkshop.jpg";

import sci2 from "../assets/Images/scienceLab/sciMain.jpg";
import sci3 from "../assets/Images/scienceLab/sci3.jpg";
import sci4 from "../assets/Images/scienceLab/sciMicroscope.jpg";
import sci5 from "../assets/Images/scienceLab/sciGirl.jpg";
import sci6 from "../assets/Images/scienceLab/mpbhattasir.jpg";
import sci7 from "../assets/Images/scienceLab/sciboys.jpg";
import sci8 from "../assets/Images/scienceLab/scifield2.jpg";
import sci10 from "../assets/Images/scienceLab/scifield4.jpg";

const hotelManagementImages = [hm1, hm2, hm3, hm4, hm5, hm6, hm7, hm8, hm9];
const scienceImages = [ sci2, sci3, sci4, sci5, sci6, sci7, sci8, sci10];
const mgntImages = [];
const extraImages = [];

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("Hotel Management");
  const [modalImg, setModalImg] = useState(null);

  const images = activeTab === "Hotel Management" ? hotelManagementImages : scienceImages;

  return (
    <div className="container mx-auto py-12 dark:bg-gray-800">
      <h1 className="text-3xl sm:text-5xl font-semibold text-center mb-8 text-blue-600 dark:text-indigo-400 dark:bg-gray-800 ">Gallery</h1>
      <div className="grid grid-cols-2 sm:flex sm:justify-center gap-3 sm:gap-6 mb-8">
        <button
          className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
            activeTab === "Hotel Management"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
          }`}
          onClick={() => setActiveTab("Hotel Management")}
        >
          Hotel Management
        </button>
         <button
          className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
            activeTab === "Science"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
          }`}
          onClick={() => setActiveTab("Science")}
        >
          Science
        </button>

        <button
          className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
            activeTab === "Mgnt"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300" 
          }`}
          onClick={() => setActiveTab("Mgnt")}
        >
          Management
        </button>

          <button
          className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${ 
            activeTab === "Extra"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300" 
         }`}
          onClick={() => setActiveTab("Extra")}
        >
          Extra curricular Activities
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
       {images.map((img, idx) => (
          <div
            key={idx}
            className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
            onClick={() => setModalImg(img)}
          >
            <img src={img} alt={`Gallery ${activeTab} ${idx + 1}`} className="w-full h-64 object-cover" />
          </div>
        ))}
      </div>
      {modalImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
          onClick={() => setModalImg(null)}
        >
          <img
            src={modalImg}
            alt="Enlarged"
            className="max-w-full max-h-[80vh] rounded-xl shadow-2xl border-4 border-white"
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
