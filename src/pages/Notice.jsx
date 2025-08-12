import React from "react";

const notices = [
  {
    id: 1,
    title: "Summer Vacation Holiday Notice",
    date: "2024-08-10",
    category: "Holiday",
    content:
      "The college will remain closed from August 15th to August 25th on account of summer vacation. We wish all students a happy and safe holiday.",
  },
  {
    id: 2,
    title: "Annual Sports Day Event",
    date: "2024-08-05",
    category: "Activity",
    content:
      "The annual sports day will be held on September 5th, 2024. All students are encouraged to participate in various events. Registration starts on August 12th.",
  },
  {
    id: 3,
    title: "Mid-Term Examination Schedule",
    date: "2024-08-01",
    category: "Exam",
    content:
      "The schedule for the upcoming mid-term examinations has been published. Please check the examination section on the college website for details.",
  },
  {
    id: 4,
    title: "Guest Lecture on Artificial Intelligence",
    date: "2024-07-28",
    category: "Academic",
    content:
      'A guest lecture on "The Future of AI" by Dr. Jane Doe will be held on August 20th, 2024, in the main auditorium. Attendance is mandatory for all computer science students.',
  },
  {
    id: 5,
    title: "Library Books Due Date Extension",
    date: "2024-07-25",
    category: "General",
    content:
      "The due date for all borrowed library books has been extended to September 1st, 2024. No late fees will be charged until this date.",
  },
];

// Helper to get category color
const getCategoryColor = (category) => {
  switch (category) {
    case "Holiday":
      return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
    case "Activity":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
    case "Exam":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
    case "Academic":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200";
  }
};

const Notice = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-12 font-poppins">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 dark:text-white">
            Notice Board
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">
            Stay updated with the latest announcements and events.
          </p>
        </div>

        <div className="space-y-8">
          {notices.map((notice) => (
            <div key={notice.id} data-aos="fade-up" className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4 flex-wrap gap-y-2">
                  <div>
                    <span className={`inline-block rounded-full px-3 py-1 text-sm font-semibold ${getCategoryColor(notice.category)}`}>
                      {notice.category}
                    </span>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-2">
                      {notice.title}
                    </h2>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
                    {notice.date}
                  </p>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {notice.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notice;

