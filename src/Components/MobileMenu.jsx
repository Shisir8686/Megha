import React from "react";
import navMenu from "../constants/navMenu";
import { NavLink } from "react-router-dom";

const ResponsiveMenu = ({ showMenu, toggleMenu }) => {
  const linkClass = (props) => {
    return props.isActive
      ? "rounded-md bg-black dark:bg-white dark:text-black text-white px-4 py-1"
      : "px-4 py-1 hover:border-b-2 hover:border-black dark:hover:border-white";
  };

  return (
    <div
      className={`fixed top-0 bottom-0 left-0 w-[75%] lg:w-[350px] flex flex-col justify-between 
      bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 text-black 
      transition-transform ease-in-out duration-300 rounded-r-xl shadow-md z-50
      ${showMenu ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}
    >
      {/* Header */}
      <div>
        <div className="text-xl font-semibold">
          Welcome to Megha Himalayan College
        </div>

        {/* Navigation Links */}
        <nav className="mt-12">
          <ul className="space-y-4 text-lg">
            {navMenu.map((data) => (
              <li key={data.key}>
                <NavLink
                  to={data.rout}
                  className={linkClass}
                  onClick={toggleMenu}
                >
                  {data.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Footer */}
      <div className="text-center text-sm opacity-70">
        Dharan Megha Himalayan
      </div>
    </div>
  );
};

export default ResponsiveMenu;