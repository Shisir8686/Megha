import React from 'react';
import meghaVideo from '../assets/video/meghaFullvideo.mp4';

const VideoComponent = () => {
  return (
    <section className="py-14 bg-gray-900 md:mt-20 mt-16 rounded-lg shadow-lg">
      <div className=" mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-8">
        <div
          className="relative w-full max-w-md md:max-w-lg lg:max-w-xl"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          {/* Blue border background boxes */}
          <div className="absolute -top-6 -left-6 w-full h-full rounded-xl border-4 border-blue-500 z-0"></div>
          <div className="absolute -bottom-6 -right-6 w-full h-full rounded-xl border-4 border-blue-500 z-0"></div>
          {/* Video box */}
          <div className="relative z-10 rounded-xl overflow-hidden shadow-xl bg-white">
            <div className="relative" style={{ paddingBottom: '56.25%' }}>
              <video
                className="absolute top-0 left-0 w-full h-full"
                controls
                loop
                muted
                autoPlay
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                <source src={meghaVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
        <div
          className="w-full md:w-1/2 flex items-center justify-center"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <blockquote
          data-aos="fade-left"
          data-aos-delay="300" className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold text-center leading-snug">
            <span className="text-5xl font-serif align-top">“</span>
            A brief description of Megha College from board members.
            <span className="text-5xl font-serif align-bottom">”</span>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default VideoComponent;