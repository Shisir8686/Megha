import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/Images/MLogo.png";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import DarkMode from "./DarkMode";
import ResponsiveMenu from "./MobileMenu";

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setShowMenu(!showMenu);

  useEffect(() => {
    setShowMenu(false);
  }, [location.pathname]);

  return (
    <div className="w-full bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-sm z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo + Text */}
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={Logo}
              alt="Logo"
              className="sm:h-20 h-10 w-auto object-contain"
            />
            <div className="flex-1">
                        <div className="flex flex-col items-center">
                          <Link to="/">
                            <h1 className="text-sm sm:text-md md:text-xl lg:text-2xl font-semibold dark:text-indigo-400 text-blue-500 ">
                              Dharan Megha Himalayan
                            </h1>
                          </Link>
            
                          <p className="text-xs sm:text-sm md:text-md dark:text-gray-300 text-gray-500">
                            Dharan-12, Chatraline
                          </p>
                        </div>
                      </div>
          </Link>
        </div>

        {/* Right Section: Dark Mode + Menu */}
        <div className="flex items-center gap-3 dark:text-white">
          <DarkMode />
          {showMenu ? (
            <HiMenuAlt1
              onClick={toggleMenu}
              className="cursor-pointer transition-all duration-300"
              size={32}
            />
          ) : (
            <HiMenuAlt3
              onClick={toggleMenu}
              className="cursor-pointer transition-all duration-300"
              size={32}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <ResponsiveMenu showMenu={showMenu} toggleMenu={toggleMenu} />
    </div>
  );
};

export default Navigation;
