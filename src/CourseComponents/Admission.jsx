import React from "react";

const Admission = () => {
  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-left font-bold text-4xl  pb-6 text-blue-500 dark:text-indigo-400 border-b-4 border-blue-500 mb-8">
          Admission Procedure
        </h1>
      </div>
      <div className="container mx-auto pb-10 mb-24 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <div className="space-y-8">
          <section>
            <h2 className="uppercase pb-3 text-2xl font-semibold text-center md:text-left bg-blue-300 dark:bg-indigo-600 rounded-md text-black dark:text-white px-3 py-2">
              Admission Form
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 pt-4">
              The admission form is available from the school/college office
              between 7:00 AM and 4:00 PM upon payment of Rs. 250/-, including
              the entrance test.
            </p>
          </section>

          <section>
            <h2 className="uppercase pb-3 text-2xl font-semibold text-center md:text-left bg-blue-300 dark:bg-indigo-600 rounded-md text-black dark:text-white px-3 py-2">
              Eligibility
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 pt-4">
              Candidates applying for admission must have passed the +2 or
              equivalent examination recognized by NEB, Nepal.
            </p>
          </section>

          <section>
            <h2 className="uppercase pb-3 text-2xl font-semibold text-center md:text-left bg-blue-300 dark:bg-indigo-600 rounded-md text-black dark:text-white px-3 py-2">
              Entrance Test
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 pt-4">
              The entrance test will be conducted to evaluate the ability of
              students for admission.
            </p>
          </section>

          <section>
            <h2 className="uppercase pb-3 text-2xl font-semibold text-center md:text-left bg-blue-300 dark:bg-indigo-600 rounded-md text-black dark:text-white px-3 py-2">
              Admission Criteria
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 pt-4">
              Candidates who pass the entrance test will be eligible for
              admission.
            </p>
          </section>

          <section>
            <h2 className="uppercase pb-3 text-2xl font-semibold text-center md:text-left bg-blue-300 dark:bg-indigo-600 rounded-md text-black dark:text-white px-3 py-2">
              Required Documents
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 pt-4">
              Xerox copies of the following documents must be submitted within
              the specified date:
            </p>
            <ul className="list-disc ml-6 text-lg text-gray-600 dark:text-gray-300 mt-2">
              <li>Marksheet</li>
              <li>Character Certificate</li>
              <li>4 Passport-size Photographs</li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
};

export default Admission;
