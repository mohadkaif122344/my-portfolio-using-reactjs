import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-to-r from-black via-gray-800 to-black text-gray-300 py-10 ">
      <div className="container mx-auto px-6 flex flex-col items-center space-y-8">
        <div
          className="flex flex-wrap justify-center gap-6 text-xl font-medium  bg-gradient-to-r from-orange-500 to-pink-500 
           bg-clip-text text-transparent"
        >
          {[
            { name: "Home", id: "home" },
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Projects", id: "projects" },
            { name: "Experience", id: "experience" },
            { name: "Contact", id: "contact" },
          ].map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="hover:text-orange-500 transition duration-300"
            >
              {link.name}
            </button>
          ))}
        </div>

        <div className="flex justify-center space-x-6 text-3xl  ">
          <a
            href="https://github.com/mohadkaif122344"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-gradient-to-b hover:from-orange-500 hover:to-pink-500 transition hover:rotate-[0deg] cursor-pointer hover:scale-110 duration-200     
            "
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/mohammad-kaif-9a7aa1327/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-gradient-to-br hover:from-orange-500 hover:to-pink-500 transition  hover:rotate-[0deg] cursor-pointer hover:scale-110 duration-200"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/mohad.kaif4671/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 transition  hover:rotate-[0deg] cursor-pointer hover:scale-110 duration-200"
          >
            <FaInstagram />
          </a>
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 transition  hover:rotate-[0deg] cursor-pointer hover:scale-110 duration-200 "
          >
            <FaFacebook />
          </a>
          <a
            href="mailto:mohammadkaif122344@email.com"
            className="hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 transition  hover:rotate-[0deg] cursor-pointer hover:scale-110 duration-200  "
          >
            <FaEnvelope />
          </a>
        </div>

        <div className="text-center ">
          <h2 className="text-3xl font-semibold mb-2 ">
            Mohammad
            <span
              className="bg-gradient-to-r from-orange-500 to-pink-500 
           bg-clip-text text-transparent"
            >
              Kaif
            </span>
          </h2>
          <p className=" text-gray-400 text-1xl mb-2">
            © {new Date().getFullYear()} All rights reserved | Built with React
            & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
