import { aboutInfo } from "../assets/assets";

const About = () => {
  return (
    <div
      id="about"
      className="relative overflow-hidden bg-gray-950 py-20 text-white"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-orange-950/30 via-gray-950 to-pink-950/20"></div>
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl"></div>
      <div className="absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-pink-500/10 blur-3xl"></div>
      <div className="relative container mx-auto px-6 -mt-10">
        <h2 className="text-5xl font-bold text-center mb-4 text-white">
          About{" "}
          <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
            Me
          </span>
        </h2>
        <p className="text-gray-400 text-center max-w-xl mx-auto  font-semibold text-xl">
          A brief introduction to my background, skills, and passion for
          building modern web applications.
        </p>
        <div className="max-w-4xl mx-auto text-center">
          <div className="rounded-2xl p-6">
            <p className="text-gray-300  mb-6 leading-relaxed">
              I am an aspiring MERN Stack Developer passionate about building
              responsive and user-friendly web applications. I enjoy working
              with React, HTML, CSS, and Tailwind CSS to create clean, modern,
              and interactive user experiences.
            </p>
            <p className="text-gray-300  mb-10 leading-relaxed">
              I also work with Node.js, Express, and MongoDB to build backend
              applications and REST APIs. I am continuously learning new
              technologies and improving my skills by working on real-world
              projects and practical applications.
            </p>
            <h2 className="relative mb-12 inline-block text-3xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent group">
              <span>My Core Strengths</span>
              <span className="absolute left-0 -bottom-3 h-0.5 w-0 bg-gradient-to-r from-orange-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {aboutInfo.map((data, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  <div className="text-orange-400 text-3xl mb-3">
                    <data.icon />
                  </div>
                  <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent font-semibold text-lg">
                    {data.title}
                  </span>
                  <p className="mt-2 text-gray-400 text-sm leading-6">
                    {data.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
