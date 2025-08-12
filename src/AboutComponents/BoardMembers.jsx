import React from "react";
import boardMembers from "../constants/boardMembers";
import { FaFacebook } from "react-icons/fa";

const BoardSection = () => {
  return (
    <>
      <div className="container px-6 py-10">
        <h1 className="text-4xl mx-auto text-center font-semibold mb-14 text-blue-500 dark:text-sky-300 border-b-4 pb-6">
          Message from the Board
        </h1>
      </div>

      <div className="container mx-auto p-6 grid gap-8 md:grid-cols-2 lg:grid-cols-3 pb-24">
        {boardMembers.map((member) => (
          <div
            key={member.key}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300 flex flex-col items-center text-center"
          >
            <img
              src={member.img}
              alt={`${member.name}`}
              className="rounded-full w-32 h-32 mb-6 object-cover shadow-lg border-4 border-blue-600 dark:border-sky-300"
            />

            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
              {member.name}
            </h2>
            <p className="text-md font-medium text-gray-600 dark:text-gray-400 mb-4">
              {member.post}
            </p>

            {member.Message && (
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-6">
                {member.Message}
              </p>
            )}

            {member.fb && (
              <a
                href={member.fb}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 transition-colors text-xl"
                aria-label={`Facebook profile of ${member.name}`}
              >
                <FaFacebook size={24} />
              </a>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default BoardSection;
