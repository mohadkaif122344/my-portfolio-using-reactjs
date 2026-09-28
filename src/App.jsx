import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<ProjectDetails />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;









