import React from "react";
import Slider from "react-slick";
import testimonialData from "../constants/testemonials";

const TestimonialSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "0",
    focusOnSelect: true,
    dots: true,
    arrows: false,
    autoplaySpeed: 2000,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="text-3xl sm:text-6xl font-poppins pt-10 text-blue-600 text-center mx-auto container border-b dark:border-gray-400 pb-10">
        <h1 data-aos="fade-up" data-aos-delay="400">
          Testimonials from our students
        </h1>
      </div>
      <div className="testimonial-slider-wrapper pt-10 pb-20 px-4 sm:px-6 lg:px-12">
        <Slider {...settings}>
          {testimonialData.map((testimonial) => (
            <div
              key={testimonial.id}
              className="testimonial-card p-6 bg-white shadow-lg rounded-lg flex flex-col items-center transition-transform duration-500 ease-in-out transform hover:scale-105 hover:rotate-3d"
            >
              <img
                src={testimonial.img}
                alt={testimonial.name}
                className="testimonial-img w-24 h-24 md:w-30 md:h-30 rounded-full mb-4 object-cover shadow-lg text-center mx-auto"
              />
              <h3 className="testimonial-name text-xl font-semibold mb-2  text-center mx-auto">
                {testimonial.name}
              </h3>
              <p className="testimonial-label text-sm text-gray-500 mb-3 text-center mx-auto">
                {testimonial.label}
              </p>
              <p className="testimonial-text text-sm text-gray-700 text-center mx-auto">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default TestimonialSlider;
