import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
import sci9 from "../assets/Images/scienceLab/scifield3.jpg";
import sci10 from "../assets/Images/scienceLab/scifield4.jpg";

const hotelManagementImages = [hm1, hm2, hm3, hm4, hm5, hm6, hm7, hm8, hm9];
const scienceImages = [sci2, sci3, sci4, sci5, sci6, sci7, sci8, sci9, sci10];
const mgntImages = [];
const extraImages = [];

const TABS_CONFIG = [
  { id: "Science", label: "Science", images: scienceImages },
  { id: "Mgnt", label: "Management", images: mgntImages },
  { id: "Hotel Management", label: "Hotel Management", images: hotelManagementImages },
  { id: "Extra", label: "Extra Activities", images: extraImages },
];

const Gallery = () => {
  const [activeTab, setActiveTab] = useState(TABS_CONFIG[0].id);
  const [modalImg, setModalImg] = useState(null);

  const images = TABS_CONFIG.find(tab => tab.id === activeTab)?.images || [];

  const sliderSettings = {
    dots: true,
    infinite: images.length > 3,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: images.length > 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: images.length > 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl sm:text-5xl font-semibold text-center mb-8 text-blue-600 dark:text-indigo-400">Gallery</h1>
      <div className="grid grid-cols-2 gap-4 sm:flex sm:flex-row items-center justify-center sm:gap-6 mb-8 px-4 sm:px-0">
        {TABS_CONFIG.map((tab) => (
          <button
            key={tab.id}
            className={`px-6 py-1 sm:py-2 text-sm sm:text-base rounded-lg font-semibold transition-all duration-300 w-full sm:w-auto text-center flex-grow ${
              activeTab === tab.id
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="px-4 sm:px-0">
        {images.length > 0 ? (
          <Slider {...sliderSettings}>
            {images.map((img, idx) => (
              <div key={idx} className="px-2">
                <div
                  className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
                  onClick={() => setModalImg(img)}
                >
                  <img src={img} alt={`Gallery ${activeTab} ${idx + 1}`} className="w-full h-64 object-cover" />
                </div>
              </div>
            ))}
          </Slider>
        ) : (
          <p className="text-center text-gray-500">No images to display for this category.</p>
        )}
      </div>
      <div className="text-center mt-8">
        <Link
          to="/gallery"
          className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 inline-block"
        >
          View all images
        </Link>
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