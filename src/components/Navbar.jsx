import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-gray-900/500 backdrop-blue-sm py-4 px-8  shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <a href="/" className="text-3xl font-bold text-white">
            Mohammad
            <span
              className="bg-gradient-to-r from-orange-500 to-pink-500 
           bg-clip-text text-transparent"
            >
              Kaif
            </span>
            <div className="w-3 h-3 bg-red-300 rounded-full"></div>
          </a>
        </div>
        <div className="hidden md:flex text-xl mx-auto -translate-x-12 space-x-10">
          <a
            href="#"
            className="relative text-white/80 transition duration-300  hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 
           hover:bg-clip-text hover:text-transparent group"
          >
            <span>Home</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5  bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#about"
            className="relative text-white/80 transition duration-300  hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 
           hover:bg-clip-text hover:text-transparent group"
          >
            <span>About</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5  bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#skills"
            className="relative text-white/80 transition duration-300  hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 
           hover:bg-clip-text hover:text-transparent group"
          >
            <span>Skills</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5  bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="#education"
            className="relative text-white/80 transition duration-300  hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 
           hover:bg-clip-text hover:text-transparent group"
          >
            <span>Education</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5  hover:bg-gradient-to-r bg-orange-500  transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#projects"
            className="relative text-white/80 transition duration-300  hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 
           hover:bg-clip-text hover:text-transparent group"
          >
            <span>Projects</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5  bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="/#contact"
            className="relative text-white/80 transition duration-300 hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 
           hover:bg-clip-text hover:text-transparent group "
          >
            <span>Contact</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>

        <div className=" justify-center space-x-6 text-3xl hidden md:flex ">
          <a
            href="https://github.com/mohadkaif122344"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition hover:rotate-[30deg] cursor-pointer hover:scale-125 duration-200"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/mohammad-kaif-9a7aa1327/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500  transition  hover:rotate-[30deg] cursor-pointer hover:scale-125 duration-200"
          >
            <FaLinkedin />
          </a>
        </div>

        <div className="md:hidden">
          {showMenu ? (
            <FaXmark
              onClick={() => setShowMenu(!showMenu)}
              className="text-2xl cursor-pointer"
            />
          ) : (
            <FaBars
              onClick={() => setShowMenu(!showMenu)}
              className="text-2xl cursor-pointer"
            />
          )}
        </div>
      </div>

      {showMenu && (
        <div className="md:hidden bg-inherit font-light rounded-lg p-20 flex flex-col space-y-8 text-center justify-center bg-gradient-to-r from-black -mt-20">
          <a
            href="#"
            className="relative text-xl text-white transition duration-300  hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 
           hover:bg-clip-text hover:text-transparent"
          >
            <span>Home</span>
          </a>

          <a
            href="#about"
            className="relative text-xl text-white transition duration-300  hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 
           hover:bg-clip-text hover:text-transparent"
          >
            <span>About</span>
          </a>

          <a
            href="#skills"
            className="relative text-xl text-white transition duration-300  hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 
           hover:bg-clip-text hover:text-transparent"
          >
            <span>Skills</span>
          </a>
          <a
            href="#education"
            className="relative text-white text-xl transition duration-300  hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 
           hover:bg-clip-text hover:text-transparent"
          >
            <span>Education</span>
          </a>
          <a
            href="#projects"
            className="relative text-xl text-orange transition duration-300  hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 
           hover:bg-clip-text hover:text-transparent"
          >
            <span>Projects</span>
          </a>

          <a
            href="#contact"
            className="relative text-xl text-white transition duration-300  hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 
           hover:bg-clip-text hover:text-transparent "
          >
            <span>Contact</span>
          </a>

          <div className=" justify-center space-x-6 text-3xl flex ">
            <a
              href="https://github.com/mohadkaif122344"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500 transition hover:rotate-[50deg] cursor-pointer hover:scale-125 duration-200"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/mohammad-kaif-9a7aa1327/"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-orange-500 transition  hover:rotate-[50deg] cursor-pointer hover:scale-125 duration-200"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
