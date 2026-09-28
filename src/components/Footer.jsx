import {FaGithub,FaLinkedin,FaEnvelope,FaInstagram,FaFacebook} from "react-icons/fa";

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const links = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Experience", id: "experience" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <footer className="relative overflow-hidden bg-gray-950 py-10 text-gray-300">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-950/30 via-gray-950 to-pink-950/20"></div>

      <div className="absolute -left-32 bottom-0 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl"></div>

      <div className="absolute -right-32 top-0 h-64 w-64 rounded-full bg-pink-500/10 blur-3xl"></div>

      <div className="relative container mx-auto flex flex-col items-center space-y-8 px-6">
        <div className="flex flex-wrap justify-center gap-14 font-mediu">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent transition duration-300 hover:scale-105"
            >
              {link.name}
            </button>
          ))}
        </div>

        <div className="flex justify-center gap-6 text-3xl">
          <a
            href="https://github.com/mohadkaif122344"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-200 hover:scale-110 hover:text-orange-500"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/mohammad-kaif-9a7aa1327/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-200 hover:scale-110 hover:text-orange-500"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.instagram.com/mohad.kaif4671/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-200 hover:scale-110 hover:text-pink-500"
          >
            <FaInstagram />
          </a>

          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-200 hover:scale-110 hover:text-orange-500"
          >
            <FaFacebook />
          </a>

          <a
            href="mailto:mohammadkaif122344@email.com"
            className="transition duration-200 hover:scale-110 hover:text-pink-500"
          >
            <FaEnvelope />
          </a>
        </div>

        <div className="text-center">
          <h2 className="mb-2 text-3xl font-semibold">
            Mohammad{" "}
            <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              Kaif
            </span>
          </h2>

          <p className="mb-2 text-gray-400">
            © {new Date().getFullYear()} All rights reserved | Built with React
            & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
