import { education } from "../assets/assets";

const Education = () => {
  return (
    <div
      id="education"
      className="relative overflow-hidden bg-gray-950 py-24 text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-950/30 via-gray-950 to-pink-950/20"></div>
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl"></div>
      <div className="absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-pink-500/10 blur-3xl"></div>
      <div className="relative container mx-auto px-6 -m-10">
        <h2 className="text-5xl font-bold text-center mb-4">
          My{" "}
          <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
            Education
          </span>
        </h2>
        <p className="text-gray-400 text-center max-w-xl font-semibold text-base md:text-xl mx-auto mb-12 md:mb-10">
          Building a strong foundation in computer science and full-stack
          development.
        </p>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {education.map((item, index) => (
            <div 
              key={index}
              className="p-6 md:p-8 rounded-2xl transition transform duration-300 cursor-pointer border overflow-hidden hover:-translate-y-1 shadow-md hover:shadow-red-700"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                {item.title}
              </h3>
              <p className="text-sm md:text-sm text-gray-300 mb-3">
                {item.college}
              </p>
              <p className="text-sm md:text-sm text-gray-400 mb-4">
                {item.year}
              </p>
              <p className="text-gray-300 text-base md:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Education;
