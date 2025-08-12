import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "../assets/Images/Logo.jpg";
import navMenu from "../constants/navMenu";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import DarkMode from "./DarkMode";
import ResponsiveMenu from "./MobileMenu";
import Megha from "../assets/Images/MeghaLogoFinal.svg";

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    setShowMenu(false);
  }, [location.pathname]);

  const linkClass = (props) => {
    return props.isActive
      ? "hover-underline underline-static rounded-md  dark:text-white text-black px-4 py-1"
      : "hover-underline px-4 py-1 transition ease-in-out duration-400";
  };

  return (
    <div className="sm:container py-5 px-2 sm:px-0 dark:bg-black dark:text-white z-30">
      <div className="flex flex-wrap justify-between items-center sm:container">
        <div className="flex items-center md:gap-5">
          <Link to="/">
            <img
              src={Logo}
              alt="Logo"
              className="sm:w-14 sm:h-14 w-11 h-11 mx-2 border-gray-500 border rounded-full dark:border-gray-300 dark:border-2"
            />
          </Link>

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
        </div>

        <div className="hidden lg:flex space-x-2">
          {navMenu.map((menu) => (
            <NavLink key={menu.label} to={menu.rout} className={linkClass}>
              {menu.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-5 mt-4 md:mt-0">
          <DarkMode />
        </div>

        <div className="flex items-center gap-1 sm:flex lg:hidden dark-mode-toggle">
          <DarkMode />
          {showMenu ? (
            <HiMenuAlt1
              onClick={toggleMenu}
              className="cursor-pointer transition-all ease-in-out duration-300"
              size={30}
            />
          ) : (
            <HiMenuAlt3
              onClick={toggleMenu}
              className="cursor-pointer transition-all ease-in-out duration-300"
              size={30}
            />
          )}
        </div>
      </div>

      <ResponsiveMenu showMenu={showMenu} toggleMenu={toggleMenu} />
    </div>
  );
};

export default Navigation;
