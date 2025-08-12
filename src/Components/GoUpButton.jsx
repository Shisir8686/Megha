// GoUpButton.jsx
import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const GoUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to handle scrolling
  const toggleVisibility = () => {
    if (window.scrollY > window.innerHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-5 right-5 p-3 rounded-full bg-blue-500 text-white hover:text-black hover:bg-indigo-500 hover:scale-110 dark:text-black dark:hover:text-white dark:hover:bg-indigo-500 dark:bg-blue-500 shadow-lg transition-all duration-300"
      >
        <FaArrowUp size={20} />
      </button>
    )
  );
};

export default GoUpButton;
