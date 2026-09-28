import { Link } from "react-router-dom";
import { projects } from "../assets/assets";

const Projects = () => {
  return (
    <div
      id="projects"
      className="relative overflow-hidden bg-gray-950 py-20 text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-950/30 via-gray-950 to-pink-950/20"></div>
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl"></div>
      <div className="absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-pink-500/10 blur-3xl"></div>
      <div className="relative container mx-auto px-6 -m-10">
        <h2 className="text-5xl font-bold text-center mb-4">
          My{" "}
          <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl text-xl font-semibold mx-auto mb-16">
          A showcase of my recent and featured work.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 max-w-6xl mx-auto">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className="block ">
              <div className="h-full rounded-2xl overflow-hidden hover:-translate-y-1 transition duration-300 border shadow-md hover:shadow-red-700 cursor-pointer">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"/>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.skills?.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1  rounded-full text-sm cursor-pointer border duration-300 hover:border-orange-500 hover:text-orange-400 transition">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Projects;
