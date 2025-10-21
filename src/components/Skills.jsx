import React from "react";
import { SkillsInfo } from "../assets/assets";

const Skills = () => {
  return (
    <div
      id="skills"
      className="py-20 bg-gradient-to-r from-slate-700 via-black to-black"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-4">
          My{" "}
          <span
            className="bg-gradient-to-r from-orange-500 to-pink-500 
           bg-clip-text text-transparent"
          >
            Skills
          </span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl font-semibold text-xl mx-auto mb-16">
          Technologies I work with to bring ideas to life.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8 py-10">
        {SkillsInfo.map((category) => (
          <div
            key={category.title}
            className="bg-gray-900  
                 px-6 sm:px-10 py-8 sm:py-6 
                 w-[80%] sm:w-[45%] lg:w-[33%] 
                 rounded-2xl border    
                 hover:shadow-lg 
                 transition-all duration-300 shadow-md hover:shadow-red-700"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center">
              {category.title}
            </h3>
            <h2>{category.desc}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-center 
                       rounded-3xl py-4 px-2 
                       transition-transform duration-300 hover:scale-110"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-6 h-6 sm:w-8 sm:h-8 cursor-pointer   transition-transform duration-200 hover:rotate-[70deg]"
                  />
                  <span className="text-xl sm:text-xl text-gray-300 ml-2 cursor-pointer">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
