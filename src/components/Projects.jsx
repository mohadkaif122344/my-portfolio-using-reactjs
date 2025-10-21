import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { projects } from "../assets/assets";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const projectsToShow = showAll ? projects : projects.slice(0, 6);
  return (
    <div
      id="projects"
      className="py-20 bg-gradient-to-r from-slate-700 via-black to-black"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-4">
          My{" "}
          <span
            className="bg-gradient-to-r from-orange-500 to-pink-500 
           bg-clip-text text-transparent"
          >
            Projects
          </span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl text-xl font-semibold mx-auto mb-16">
          A showcase of my recent and featured work.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projectsToShow.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-black bg-inherit font-light rounded-2xl overflow-hidden hover:-translate-y-2 transition duration-300 cursor-default border shadow-md hover:shadow-red-700"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-800 rounded-full text-sm cursor-pointer hover:scale-125 transition-transform duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 rounded-lg font-medium transition duration-300 cursor-pointer 
               bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg hover:from-orange-600 hover:to-pink-700"
                  >
                    View Code
                  </a>
                  <a
                    href={project.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 border border-orange-600 rounded-lg font-medium transition duration-300 cursor-pointer 
               hover:bg-gradient-to-r from-orange-500 to-pink-500"
                  >
                    View Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center px-6 py-3 border border-orange-600 rounded-lg font-medium hover:bg-orange-800 transition duration-300  hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 shadow-md hover:shadow-red-700"
          >
            {showAll ? "View Less Projects" : "View More Projects"}
            <FaArrowRight className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
