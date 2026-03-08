import React from "react";
import { Routes, Route } from "react-router-dom";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
const LeftPanel = () => {
  return (
    <div className="left-panel">
      <Routes>
        <Route path="/" element={<About />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/skills" element={<Skills />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
};

export default LeftPanel;
