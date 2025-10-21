import React from "react";
import { aboutInfo, assets } from "../assets/assets";

const About = () => {
  return (
    <div
      id="about"
      className="py-20 bg-gradient-to-r from-black via-black to-gray-700"
    >
      <div className="container max-0 px-6">
       <h2 className="text-5xl font-bold text-center mb-4">
          About{" "}
          <span
            className="bg-gradient-to-r from-orange-500 to-pink-500 
           bg-clip-text text-transparent"
          >
            Me
          </span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16 font-semibold text-xl">
          Get to know more about my background, skills, and passion for
          development.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 rounded-2xl overflow-hidden">
            <img
              className="w-full h-full object-cover   overflow-hidden animate-float rounded-2xl"
              src={assets.kaif2}
              alt="Profile"
            />
          </div>
          <div className="md:w-1/2">
            <div className="rounded-2xl p-8">
              <h3
                className="text-5xl font-semibold mb-8   hover:bg-gradient-to-t hover:from-orange-500 hover:to-pink-700 
           hover:bg-clip-text hover:text-transparent"
              >
                My Journey
              </h3>
              <p className="text-gray-300 text-xl mb-6">
                I am a passionate MERN Stack developer specializing in frontend
                development using React, HTML, CSS, and Tailwind CSS. I love
                creating responsive, user-friendly web interfaces and turning
                design ideas into interactive experiences. My goal is to craft
                clean, modern, and efficient digital products.
              </p>
              <p className="text-gray-300 text-xl mb-6">
                Alongside frontend, I have experience with Node.js, Express, and
                MongoDB for backend development. I am eager to learn, grow, and
                contribute to real-world projects through internships. My
                journey as a fresher is focused on building scalable
                applications while gaining hands-on experience and industry
                knowledge.
              </p>

              <h2
                className="font-bold text-3xl relative mb-12  bg-gradient-to-br from-orange-500 to-pink-500 
           bg-clip-text text-transparent group "
              >
                <span>My Core Strengths</span>
                <span
                  className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-500 transition-all 
  duration-300 group-hover:w-72"
                ></span>
              </h2>
              <ul className=" list-inside space-y-3">
                {aboutInfo.map((data, index) => (
                  <li key={index} className="text-gray-300">
                    <div
                      className="  text-orange-400 
          text-2xl mb-2"
                    >
                      <data.icon />
                    </div>
                    <span
                      className="bg-gradient-to-r from-orange-500 to-pink-500 
           bg-clip-text text-transparent font-semibold"
                    >
                      {data.title}:
                    </span>{" "}
                    {data.description}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
