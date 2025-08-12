import React from "react";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import navMenu from "../constants/navMenu";

const Footer = () => {
  return (
    <footer className="border-t border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300">
      <div className="container mx-auto px-6 py-10">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {/* Left Section */}
          <div className="text-center sm:text-left">
            <Link to="/">
              <h1 className="text-2xl font-bold hover:shadow-sm hover:scale-105 transition-transform text-blue-600 dark:text-indigo-400">
                Dharan Megha Himalayan
              </h1>
            </Link>
            <p className="mt-2 text-gray-500 dark:text-gray-400">
              Dharan-12, Chatraline
            </p>
          </div>

          {/* Middle Section */}
          <div className="text-center sm:text-left">
            <p className="flex items-center justify-center sm:justify-start mt-4 sm:mt-0">
              <FaPhoneAlt className="mr-2 text-lg text-blue-600 dark:text-indigo-400" />
              025-575403, 538970
            </p>
            <p className="flex items-center justify-center sm:justify-start mt-2">
              <MdEmail className="mr-2 text-lg text-blue-600 dark:text-indigo-400" />
              meghahimalayan@gmail.com
            </p>
            <div className="flex justify-center mt-4 space-x-6 sm:justify-start">
              <a
                href="https://www.facebook.com/profile.php?id=100063675259182"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-500 transition-colors"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="text-2xl text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-500 transition-colors"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-2xl text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-500 transition-colors"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex justify-center sm:justify-end">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56973.81579655734!2d87.29396053164649!3d26.81247502622459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef414ba5eeb0d1%3A0x21bc4218a6309b9d!2sDharan%20Megha%20College!5e0!3m2!1sen!2snp!4v1722780700715!5m2!1sen!2snp"
              width="300"
              height="250"
              className="rounded-lg shadow-lg border border-gray-300 dark:border-gray-600"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-300 dark:border-gray-600 pt-6">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <span className="text-center text-sm md:text-left">
              © 2025{" "}
              <Link
                to="/"
                className="hover:underline text-gradient-to-r from-blue-500 to-purple-600 dark:text-indigo-400"
              >
                Dharan Megha Himalayan
              </Link>
              . All Rights Reserved.
            </span>
            <ul className="flex flex-wrap gap-4 items-center justify-center mt-4 md:mt-0 text-sm font-medium">
              {navMenu.map((m, index) => (
                <li key={index}>
                  <Link
                    to={m.rout}
                    className="hover:underline text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    {m.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
