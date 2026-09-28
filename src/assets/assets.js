import { FaCode, FaLaptopCode, FaRocket } from "react-icons/fa";
import htmlLogo from "../assets/tech_logo/html.png";
import cssLogo from "../assets/tech_logo/css.png";
import javascriptLogo from "../assets/tech_logo/javascript.png";
import reactjsLogo from "../assets/tech_logo/reactjs.png";
import tailwindcssLogo from "../assets/tech_logo/tailwindcss.png";
import nodejsLogo from "../assets/tech_logo/nodejs.png";
import expressjsLogo from "../assets/tech_logo/express.png";
import mongodbLogo from "../assets/tech_logo/mongodb.png";
import MySqlLogo from "../assets/tech_logo/mysql.png";
import cLogo from "../assets/tech_logo/c.png";
import cppLogo from "../assets/tech_logo/cpp.png";
import javaLogo from "../assets/tech_logo/java.png";
// import pythonLogo from "../assets/tech_logo/python.png";
import githubLogo from "../assets/tech_logo/github.png";
import vscodeLogo from "../assets/tech_logo/vscode.png";
import postmanLogo from "../assets/tech_logo/postman.png";
import netlifyLogo from "../assets/tech_logo/netlify.png";
import vercelLogo from "../assets/tech_logo/vercel.png";

import Shopcart from "../assets/work_logo/Shopcart.png";
import Criptoprice from "../assets/work_logo/Cripto price.png";
import BookStore from "../assets/work_logo/BookStore.png";
import food from "../assets/work_logo/food deli.png";
import Realestate from "../assets/work_logo/Realestate.png";
import TodoList from "../assets/work_logo/TodoList.png";

export const aboutInfo = [
  {
    icon: FaCode,
    title: "Clean Code",
    description: "Writing clean, efficient, and maintainable code.",
  },
  {
    icon: FaLaptopCode,
    title: "Web Development",
    description: "Building responsive and user-friendly web applications.",
  },
  {
    icon: FaRocket,
    title: "Continuous Learning",
    description: "Learning new technologies and improving my skills.",
  },
];

export const education = [
  {
    title: "Bachelor of Computer Applications (BCA)",
    college:
      " College: Mangalmay Institute of Management and Technology, Greater Noida",
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
      { name: "MySql", logo: MySqlLogo },
    ],
  },
  {
    title: "Additional Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      // { name: "Python", logo: pythonLogo },
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
    id: 1,
    title: "React E-Commerce ShopCart Website",
    description:
      "A modern, responsive React E-Commerce app built while learning from YouTube tutorials. It features product listings, user authentication, routing, and reusable components. Developed with the latest React ecosystem, it’s fully responsive and styled using Bootstrap with custom CSS.",
    features: [
      "Home Page – Hero banner, product categories, and featured collections.",
      "Shop Page – Product grid with images, price, and ratings.",
      "Single Product Page – Dynamic route for viewing details of any product.",
      "User Authentication – Login, Signup, and Logout system.",
      "Blog Section – Blog list and single blog with dynamic routing.",
      "Private Route Protection – Restricts access to certain pages.",
      "Contact Page – Basic contact information and form layout.",
      "Responsive UI – Fully mobile-friendly layout.",
    ],
    image: Shopcart,
    tags: ["HTML", "CSS", "JS", "React JS", "Boostrap"],
    github:
      "https://github.com/mohadkaif122344/E-Commerce-ShopCart-website-using-reactjs-boostrap",

    webapp: " https://ecommerce-web-using-react-bootstrap.netlify.app",
  },
  {
    id: 2,
    title: "Crypto-price-tracker-using-reactjs",
    description:
      "A modern Crypto Price Tracker built with React + Vite that shows live cryptocurrency prices, charts, and detailed information. The app includes multi-currency support (USD, EUR, INR), responsive design, and smooth animations.",
    features: [
      "Pages – Home, About, and Contact",
      "Crypto Search – Search live cryptocurrencies with filtering",
      "Charts – Interactive price charts using Chart.js",
      "Currency Dropdown – Switch between USD, EUR, and INR",
      "Modern UI – Styled with Tailwind CSS",
      "Animations – Smooth transitions using Framer Motion",
      "Navigation – Implemented with React Router DOM",
      "Contact Form – Integrated with Web3Forms",
      "Icons – Beautiful icons via React Icons",
      "Fast Build Tool – Powered by Vite",
    ],
    image: Criptoprice,
    tags: ["React JS", "Tailwind CSS", "Framer Motion", "React-Icons", "API"],
    github:
      "https://github.com/mohadkaif122344/Crypto-price-tracker-using-reactjs",

    webapp: "https://crypto-price-tracker-web.vercel.app/",
  },
  {
    id: 3,
    title: "MERN Book Store store",
    description:
      "A full-stack Book Store web application built with the MERN stack. The project includes book listing, user signup/login, protected course/book access, contact form, responsive UI, and light/dark mode.",
    features: [
      "User Signup & Login",
      "Logout functionality",
      "Book listing from MongoDB",
      "Protected /course route",
      "Book cards with price, category, image, and title",
      "Search UI in navbar",
      "Light / Dark mode",
      "Contact form with toast notifications",
      "Responsive design",
      "React Hook Form validation",
      "MongoDB integration",
    ],
    image: BookStore,
    tags: [
      "React JS",
      "Axios",
      "Tailwind CSS",
      "DaisyUI",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    github: "https://github.com/mohadkaif122344/MERN-stack-BOOK-STORE-project",

    webapp: "",
  },
  {
    id: 4,
    title: "MERN Stack Todo List",
    description:
      "MERN Stack Todo List A full-stack Todo List app built with the MERN stack, featuring authentication and Todo CRUD operations.",
    features: [
      "User Signup, Login, and Logout – JWT authentication with cookies and localStorage.",
      "Protected Frontend Routes – Restricts access to authenticated users.",
      "Add Todos – Users can create new Todos.",
      "View Todos – Display all Todos.",
      "Update Todos – Edit existing Todos.",
      "Delete Todos – Delete individual Todos.",
      "Delete Multiple Todos – Remove multiple Todos at once.",
      "React + Vite – Modern frontend development setup.",
      "Node.js + Express – Backend REST API.",
      "MongoDB – Database for storing user and Todo data.",
    ],
    image: TodoList,
    tags: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "bcryptjs",
      "CSS",
    ],
    github: "https://github.com/mohadkaif122344/MERN-stack-Todo-List",

    webapp: "",
  },
  {
    id: 5,
    title: "Food Delivery Website",
    description:
      "A responsive Food Delivery Website built using React, Vite, and Plain CSS.It includes a dynamic Navbar, Home, Menu, Contact Us, and Login/Signup pages, search functionality, with Add to Cart functionality inside the Order Details page.",
    features: [
      "React + Vite – Fast development and optimized build",
      "Responsive UI – Built with plain CSS",
      "Navigation Bar – Home, Menu, Contact Us, and Login/Signup",
      "Home Page – Attractive landing page with hero section",
      "Menu Page – Display all food items",
      "Order Details Page – Add items to cart, view cart summary, and remove items",
      "Login/Signup Page – Fully responsive authentication UI",
      "Search Functionality – Search for food items by name",
      "Contact Us Page – Simple form to contact the restaurant",
      "Fully Responsive – Optimized for mobile, tablet, and desktop",
    ],
    image: food,
    tags: ["React JS", "HTML", "CSS", "Javascript"],
    github:
      "https://github.com/mohadkaif122344/Food-Delivery-website-using-reactjs-plane-css",

    webapp: "https://food-delivery-web-using-reactjs.netlify.app",
  },
  {
    id: 6,
    title: "Real-Estate-Website-in-react-js",
    description:
      "This is a responsive real estate frontend built with Vite + React, styled using Tailwind CSS, and enhanced with Framer Motion animations. Featuring both dark & light mode, it includes pages like Home, About, Properties, Contact Us (with Gmail contact integration), and Login/Signup UI—without using react-router-dom.",
    features: [
      "Vite + React – Fast and optimized performance",
      "Tailwind CSS – Modern and responsive styling",
      "Framer Motion – Smooth animations",
      "Light & Dark Mode",
      "Fully Responsive – Desktop, tablet, and mobile",
      "Home Page",
      "About Page",
      "Properties Page",
      "Contact Us – Email integration via Gmail",
      "Login / Signup – UI only",
      "Conditional Navigation – Without React Router DOM",
      "Deployed with Vercel",
    ],
    image: Realestate,
    tags: ["React JS", "JS", "HTML", "Tailwind CSS"],
    github:
      "https://github.com/mohadkaif122344/Real-Estate-Website-in-react-js",

    webapp: "https://my-real-estate-web.vercel.app",
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
