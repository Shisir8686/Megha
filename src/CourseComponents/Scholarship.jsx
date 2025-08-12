import React from "react";
import scholarshipData from "../constants/scholarship";

const Scholarship = () => {
  return (
    <>
      <div className="container mx-auto px-6 pt-2 pb-20 bg-white dark:bg-black text-black dark:text-white ">
        <h2 className="text-3xl font-semibold text-center text-blue-500 dark:text-blue-400 mb-8">
          Scholarship Scheme (For +2)
        </h2>
        <div className="overflow-x-auto rounded-lg shadow-lg border-2 border-gray-200 dark:border-gray-700">
          <table className="w-full table-auto text-sm md:text-base">
            <thead>
              <tr className="bg-blue-500 text-white dark:bg-blue-700 dark:text-white">
                <th className="px-6 py-4 text-left font-medium">
                  Criteria/Achievement
                </th>
                <th className="px-6 py-4 text-left font-medium">
                  Scholarship (Admission/Tuition Fees)
                </th>
              </tr>
            </thead>
            <tbody>
              {scholarshipData.map((row, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  } hover:bg-blue-50 dark:hover:bg-gray-200 transition-colors`}
                >
                  <td className="px-6 py-4 text-gray-800 dark:text-gray-600">
                    {row.criteria}
                  </td>
                  <td className="px-6 py-4 text-gray-800 dark:text-gray-600">
                    {row.scholarship}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Scholarship;
