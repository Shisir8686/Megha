import React, { useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./Layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import Course from "./pages/Course";
import Notice from "./pages/Notice";
import AOS from "aos";
import "aos/dist/aos.css";
import Gallery from "./pages/GalleryPage";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      delay: 100,
      easing: "ease-in",
      once: true,
    });
  }, []);

  return (
    <HashRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/course" element={<Course />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;