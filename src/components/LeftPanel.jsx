import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
const LeftPanel = () => {
  return (
    <div className="left-panel">
      {/*<Home/>*/}
      {/*<Skills />*/}
      {/*<Projects />*/}
      <Contact />
    </div>
  );
};

export default LeftPanel;
