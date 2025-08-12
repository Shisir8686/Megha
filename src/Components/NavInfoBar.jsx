import React, { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const NavInfoBar = () => {
  const [visible, setVisible] = useState(true);
  const [dismissed, setDismissed] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 60 && !dismissed) {
        setVisible(false);
        setDismissed(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dismissed]);

  // Do not show again after dismissed, even on route change
  if (!visible && dismissed) return null;

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-opacity duration-700 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      } bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 text-white py-2 px-2 sm:px-4 shadow-md`}
    >
      <div className="container mx-auto flex flex-col gap-2 sm:gap-0 sm:flex-row items-center justify-between text-xs sm:text-sm">
        <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-4 mb-1 sm:mb-0">
          <span className="flex items-center gap-1 sm:gap-2">
            <FaPhoneAlt className="text-blue-300 text-base sm:text-lg" />
            <span className="whitespace-nowrap">025-575403, 538970</span>
          </span>
          <span className="flex items-center gap-1 sm:gap-2">
            <FaEnvelope className="text-blue-300 text-base sm:text-lg" />
            <span className="whitespace-nowrap">meghahimalayan@gmail.com</span>
          </span>
        </div>
        <div className="flex items-center gap-3 sm:gap-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
            <FaFacebookF size={18} className="text-base sm:text-lg" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition">
            <FaInstagram size={18} className="text-base sm:text-lg" />
          </a>
          <a href="https://wa.me/97725512345" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">
            <FaWhatsapp size={18} className="text-base sm:text-lg" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavInfoBar;
