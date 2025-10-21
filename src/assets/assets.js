import { FaLightbulb, FaPaintBrush, FaCode } from "react-icons/fa";
import kaif2 from "../assets/kaif2.jpg";
import htmlLogo from "../assets/tech_logo/html.png";
import cssLogo from "../assets/tech_logo/css.png";
import javascriptLogo from "../assets/tech_logo/javascript.png";
import reactjsLogo from "../assets/tech_logo/reactjs.png";
import tailwindcssLogo from "../assets/tech_logo/tailwindcss.png";
import nodejsLogo from "../assets/tech_logo/nodejs.png";
import expressjsLogo from "../assets/tech_logo/express.png";
import mongodbLogo from "../assets/tech_logo/mongodb.png";
import cLogo from "../assets/tech_logo/c.png";
import cppLogo from "../assets/tech_logo/cpp.png";
// import javaLogo from '../assets/tech_logo/java.png';
import pythonLogo from "../assets/tech_logo/python.png";
import githubLogo from "../assets/tech_logo/github.png";
import vscodeLogo from "../assets/tech_logo/vscode.png";
import postmanLogo from "../assets/tech_logo/postman.png";
import netlifyLogo from "../assets/tech_logo/netlify.png";
import vercelLogo from "../assets/tech_logo/vercel.png";


import Shopcart from "../assets/work_logo/Shopcart.png";
import Criptoprice from "../assets/work_logo/Cripto price.png";
import Techshop from "../assets/work_logo/Techshop.png";
import food from "../assets/work_logo/food deli.png";
import Realestate from "../assets/work_logo/Realestate.png";
import login from "../assets/work_logo/Signup page.png";
import sliderimage from "../assets/work_logo/slider image.png";
import Cakeshop from "../assets/work_logo/Cake shop.png";
import Tipcalculator from "../assets/work_logo/Tipcalculator.png";

export const assets = {
  kaif2,
};

export const aboutInfo = [
  {
    icon: FaLightbulb,
    title: "Innovative",
    description:
      "I enjoy building creative solutions for both frontend and backend challenges, using modern technologies like React, Node.js, and MongoDB.",
  },
  {
    icon: FaPaintBrush,
    title: "Design Oriented",
    description:
      "II focus on creating visually appealing, responsive, and user-friendly web applications that combine clean aesthetics with seamless functionality and smooth interactions.",
  },
  {
    icon: FaCode,
    title: "Clean Code",
    description:
      "I write efficient, maintainable, and scalable code that follows modern best practices and ensures long-term readability and performance.",
  },
];

export const education = [
  {
    title: "Bachelor of Computer Applications (BCA)",
    college: " College: Mangalmay Institute of Management and Technology, Greater Noida",
    year: "2024 – 2027 (Ongoing)",
    description:
      "Pursuing BCA with a focus on computer science fundamentals, data structures, and software development. Building a strong foundation in programming, databases, and modern web technologies.",
  },
  {
    title: "MERN Stack Development",
    college: "Online Learning & Real-World Practice",
    year: "2025 – Present",
    description:
      "Gaining practical experience in full-stack web development using MongoDB, Express.js, React, and Node.js. Building responsive and user-friendly projects following modern UI/UX and clean coding standards.",
  },
];

export const SkillsInfo = [
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MongoDB", logo: mongodbLogo },
    ],
  },
  {
    title: "Additional Languages",   
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      // { name: 'Java', logo: javaLogo },
      { name: "Python", logo: pythonLogo },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
    ],
  },
];

export const projects = [
  {
    id: 0,
    title: "React E-Commerce ShopCart Website",
    description:
      "A modern, responsive React E-Commerce app built while learning from YouTube tutorials. It features product listings, user authentication, routing, and reusable components. Developed with the latest React ecosystem, it’s fully responsive and styled using Bootstrap with custom CSS.",
    image: Shopcart,
    tags: ["HTML", "CSS", "JS", "React JS", "Boostrap"],
    github:
      "https://github.com/mohadkaif122344/E-Commerce-ShopCart-website-using-reactjs-boostrap",
    webapp: " https://ecommerce-web-using-react-bootstrap.netlify.app",
  },
  {
    id: 1,
    title: "Crypto-price-tracker-using-reactjs",
    description:
      "A modern Crypto Price Tracker built with React + Vite that shows live cryptocurrency prices, charts, and detailed information. The app includes multi-currency support (USD, EUR, INR), responsive design, and smooth animations.",
    image: Criptoprice,
    tags: ["React JS", "Tailwind CSS", "Framer Motion", "React-Icons", "API"],
    github:
      "https://github.com/mohadkaif122344/Crypto-price-tracker-using-reactjs",
    webapp: "https://crypto-price-tracker-web.vercel.app/",
  },
  {
    id: 2,
    title: "E-Commerce Shop Now React Project",
    description:
      "A modern E-commerce website built with React.js, Vite, and Tailwind CSS. This project features a sleek design, smooth animations, responsive layouts, dark/light mode, and interactive components like sliders and icons.",
    image: Techshop,
    tags: ["React JS", "Tailwind CSS", "HTML", "JavaScript"],
    github:
      "https://github.com/mohadkaif122344/E-commerce-Shop-Now-Website-using-Reactjs-Tailwindcss",
    webapp: "https://electronics-shop-now-using-reactjs.netlify.app/",
  },
  {
    id: 3,
    title: "Food Delivery Website",
    description:
      "A responsive Food Delivery Website built using React, Vite, and Plain CSS.It includes a dynamic Navbar, Home, Menu, Contact Us, and Login/Signup pages, search functionality, with Add to Cart functionality inside the Order Details page.",
    image: food,
    tags: ["React JS", "HTML", "CSS", "Javascript"],
    github:
      "https://github.com/mohadkaif122344/Food-Delivery-website-using-reactjs-plane-css",
    webapp: "https://food-delivery-web-using-reactjs.netlify.app",
  },
  {
    id: 4,
    title: "Real-Estate-Website-in-react-js",
    description:
      "A responsive real estate frontend built with Vite and React, styled using Tailwind CSS and enhanced with Framer Motion.It includes dark&light modes,pages like Home,About Properties,Contact Us,& Login/Signup UI-all without react-router-dom.",
    image: Realestate,
    tags: ["React JS", "JS", "HTML", "Tailwind CSS"],
    github:
      "https://github.com/mohadkaif122344/Real-Estate-Website-in-react-js",
    webapp: "https://my-real-estate-web.vercel.app",
  },
  {
    id: 5,
    title: "Login Page",
    description:
      "A modern login and signup UI built with Vite + React, featuring responsive design, smooth animations, clean input fields, password visibility toggle, and gradient buttons for a professional user experience.",
    image: login,
    tags: ["HTML", "CSS", "JavaScript", "React JS"],
    github:
      "https://github.com/mohadkaif122344/react-js-projects/tree/main/Login_Page",
    webapp: "",
  },
  {
    id: 6,
    title: "Image Slider",
    description:
      "A fully responsive image slider that automatically changes images with smooth animations.",
    image: sliderimage,
    tags: ["HTML", "CSS", "JavaScript"],
    github:
      "https://github.com/mohadkaif122344/HTML-CSS-JAVASCRIPT-PROJECTS/tree/main/Responsive%20and%20Automatic%20Changeable%20Animated%20image%20slider",
    webapp: "",
  },
  {
    id: 7,
    title: "Cake Shop Website",
    description:
      "A responsive Cake Shop website built with HTML, CSS, and JavaScript, allowing users to browse bakery products, view promotions, and contact the bakery easily.",
    image: Cakeshop,
    tags: ["HTML", "CSS", "Javascript"],
    github: "https://github.com/codingmastr/Image-Search-App",
    webapp: "",
  },
  {
    id: 8,
    title: "Tip Caculator",
    description:
      "An interactive calculator that helps users quickly calculate tips and total amounts based on the bill.",
    image: Tipcalculator,
    tags: ["HTML", "CSS", "Javascript"],
    github:
      "https://github.com/mohadkaif122344/HTML-CSS-JAVASCRIPT-PROJECTS/tree/main/Tip%20Caculator",
    webapp: "",
  },
];






// export const experiences = [
//   {
//     title: "Self-Learning & MERN Stack Development",
   
//     description:
//       "Practical experience in full-stack development using the MERN stack. Able to build real-world projects while applying modern coding standards and responsive UI/UX principles",
//     technologies: [
//       "HTML",
//       "CSS",
//       "JavaScript",
//       "React",
//       "Node.js",
//       "Express.js",
//       "MongoDB",
//       "Tailwind CSS",
//     ],
//   },
//   {
//     title: "Project-Based Experience",

//     description:
//       "Developed projects like portfolio website, e-commerce app, and task manager. Focused on component-based architecture, REST APIs, authentication, database operations, and responsive UI.",
//     technologies: [
//       "Frontend & Backend",
//       "REST APIs",
//       "CRUD Operations",
//       "Git & GitHub",
//       "Deployment (Vercel/Netlify)",
//     ],
//   },
//   {
//     title: "Internship Readiness",
//     period: "Looking for Internship",
//     description:"Actively seeking opportunities to contribute to real-world projects using the MERN stack.Confident in team collaboration, clean coding, and delivering tasks on time.Skilled in project management, frontend & backend development, and applying modern coding standards.",
//     technologies: [
//       "Team Collaboration",
//       "Project Management",
//       "Clean Coding",
//       "MERN Stack",
//     ],
//   },
// ];

