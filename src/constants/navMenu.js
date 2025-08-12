const navMenu = [
  { key: 1, label: "Home", rout: "/" },
  { key: 2, label: "About", rout: "/about" },
  {
    key: 3,
    label: "Course",
    rout: "/course",
    children: [
      { key: 31, label: "Science", rout: "/course/science" },
      { key: 32, label: "Hotel Management", rout: "/course/hotel-management" },
      { key: 33, label: "Computer Science", rout: "/course/computer-science" },
      { key: 34, label: "Management", rout: "/course/management" },
      { key: 35, label: "Law", rout: "/course/law" },
      {
        key: 36,
        label: "Food Nutrition and Dietetics",
        rout: "/course/food-nutrition-and-dietetics",
      },
      { key: 37, label: "Diploma in HM", rout: "/course/diploma-in-hm" },
    ],
  },
  { key: 4, label: "Gallery", rout: "/gallery" },
  { key: 5, label: "Notice", rout: "/notice" },
  { key: 6, label: "Contact", rout: "/contact" },
];

export default navMenu;