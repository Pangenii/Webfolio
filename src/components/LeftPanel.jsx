import React from "react";
import { Routes, Route } from "react-router-dom";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import About from "../pages/About";
const LeftPanel = () => {
  return (
    <div className="left-panel">
      {/* <About /> */}
      <Skills />
      {/* <Projects /> */}
      {/* <Contact /> */}
    </div>
  );
};

export default LeftPanel;
