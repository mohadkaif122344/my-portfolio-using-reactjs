import { useParams, Link } from "react-router-dom";
import { projects } from "../assets/assets";

const ProjectDetails = () => {
  const { id } = useParams();

 const project = projects.find(
    (item) => String(item.id) === String(id)
  );
  if (!project) {
    return (
      <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">
          Project Not Found
        </h1>

        <Link
          to="/"
          className="text-orange-400 hover:text-orange-300"
        >
          ← Back to Projects
        </Link>
      </div>
    );
  }
  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-950 py-20 text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-950/30 via-gray-950 to-pink-950/20" />
      <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl" />
      <div className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-pink-500/10 blur-3xl" />
      <div className="relative container mx-auto max-w-6xl px-6">
        <div className="mt-10 mb-6">
          <Link
            to="/"
            className="text-gray-400 hover:text-orange-400 transition"
          >
            ← Back to Projects
          </Link>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-6 lg:p-8 flex items-center">
              <div className="w-full overflow-hidden rounded-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[300px] lg:h-[390px] object-cover hover:scale-95 transition duration-500"
                />
              </div>
            </div>
            <div className="p-6 lg:p-8 flex flex-col justify-center">
              <h1 className="text-3xl lg:text-4xl font-bold mb-6">
                {project.title}
              </h1>
              <p className="text-gray-400 leading-8 mb-6 line-clamp-2">
                {project.description}
              </p>
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 rounded-full border border-gray-700 bg-gray-800/70 text-gray-300 hover:border-orange-500 hover:text-orange-400 transition"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 transition duration-300 shadow-lg"
                >
                  View Code
                </a>
                <a
                  href={project.webapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-6 py-3 rounded-xl font-semibold border border-orange-500 hover:bg-orange-500/10 hover:text-orange-400 text-white transition duration-300"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 px-6 lg:px-10 py-8">

  <h2 className="text-2xl font-semibold mb-6">
    About This Project
  </h2>

  <p className="text-gray-400 leading-7 max-w-4xl mb-8">
    {project.description}
  </p>

  <h2 className="text-2xl font-semibold mb-6">
    Features
  </h2>

  <ul className="space-y-4">
    {project.features?.map((feature, index) => (
      <li
        key={index}
        className="text-gray-400 leading-7 list-disc list-inside"
      >
        {feature}
      </li>
    ))}
  </ul>

</div>
        </div>
      </div>
    </div>
  );
};
export default ProjectDetails;