import React from "react";
import developerGif from "../assets/kaif2.jpg";

const Hero = () => {
  return (
    <div
      id="home"
      className="min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-r from-gray-600 via-black to-black"
    >
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm
            <span
              className="text-orange-600 bg-transparent shadow-transparent bg-gradient-to-r from-orange-500 to-pink-500 
           bg-clip-text text-transparent"
            >
              Mohammad kaif
            </span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-8 typewriter">
            MERN Stack Developer
          </h2>
          <p className="flex space-x-4 text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl">
            I build modern, scalable, and responsive web applications using
            MongoDB, Express, React, and Node.js to deliver fast, secure, and
            user-friendly digital solutions.
          </p>
          <div className="mt-6 flex flex-row sm:flex-wrap gap-4 sm:gap-6 justify-center md:justify-start">
            <a
              href="#resume"
              download="Mohad_Kaif_Resume.pdf"
              className="bg-gradient-to-r from-orange-500 to-pink-500 
                   text-white font-semibold py-3 px-5 rounded-2xl shadow-lg 
                   transition duration-300 
                   hover:from-orange-600 hover:to-pink-700"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="border border-orange-500 text-white hover:bg-orange-900 hover:text-white font-semibold py-3  text- px-8 rounded-2xl shadow-lg transition hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 "
            >
              Contact Us
            </a>
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <div className="w-80 h-80 md:w-[550px] md:h-[550px] overflow-hidden rounded-full drop-shadow-2xl animate-float bg-gradient-to-tr from-orange-600 to-indigo-600 p-1">
            <img
              src={developerGif}
              alt="Developer Animation"
              className="w-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
