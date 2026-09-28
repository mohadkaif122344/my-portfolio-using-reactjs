import kaif2 from "../assets/kaif0.jpeg";
import reactjs from "../assets/tech_logo/reactjs.png";
import node from "../assets/tech_logo/nodejs.png";
import mongodb from "../assets/tech_logo/mongodb.png";
import express from "../assets/tech_logo/express.png";


const Hero = () => {
  
  return (
    <div
      id="home"
      className="relative min-h-screen overflow-hidden bg-gray-950 pt-20 pb-16 text-white"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-orange-950/30 via-gray-950 to-pink-950/20"></div>
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl"></div>
      <div className="absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-pink-500/10 blur-3xl"></div>
      <div className="relative mx-auto flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <div className="mb-9">
          <div className="relative mx-auto h-44 w-44 md:h-[250px] md:w-[250px]">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-orange-500 opacity-70 blur-md"></div>

            <div className="relative h-full w-full rounded-full border border-white/10 bg-gray-950 p-1 duration-300 shadow-md hover:shadow-red-700 cursor-pointer">
              <img
                src={kaif2}
                alt="Mohammad Kaif"
                className="h-full w-full rounded-full object-cover "
              />
            </div>
          </div>
        </div>
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-pink-500 bg-clip-text text-transparent">
              Mohammad Kaif
            </span>
          </h1>
          <div className="flex justify-center">
            <h2 className="mt-5 text-2xl font-semibold text-gray-200 sm:text-3xl md:text-4xl typewriter">
              MERN Stack Developer
            </h2>
          </div>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
            I am an aspiring MERN Stack Developer who enjoys building modern and
            responsive web applications. I work with MongoDB, Express, React,
            and Node.js, and I am always learning and improving my skills
            through practical projects.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 px-6 py-3 font-semibold shadow-lg shadow-orange-500/20 transition duration-300 hover:-translate-y-0.5"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="rounded-xl border border-gray-700 bg-white/5 px-7 py-3 font-semibold text-gray-200 backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-orange-500 hover:bg-orange-500/10 hover:text-white"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-500 ">
            <img
              src={mongodb}
              alt=""
              className="h-7 w-7 object-contain cursor-pointer hover:scale-110 hover:rotate-[20deg]"
            />
            <img
              src={express}
              alt=""
              className="h-7 w-7 object-contain cursor-pointer hover:scale-110 hover:rotate-[20deg]"
            />
            <img
              src={reactjs}
              alt=""
              className="h-7 w-7 object-contain cursor-pointer hover:scale-110 hover:rotate-[20deg]"
            />
            <img
              src={node}
              alt=""
              className="h-7 w-7 object-contain cursor-pointer hover:scale-110 hover:rotate-[20deg]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
