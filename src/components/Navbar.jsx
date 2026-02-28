import React from "react";

const NavBar = () => {
  return (
    <>
      <nav className="flex gap-12 p-6 justify-end ">
        <a href="/about" className="text-white">
          About
        </a>
        <a href="/skills" className="text-white ">
          Skills
        </a>
        <a href="/timeline" className="text-white">
          Projects
        </a>
        <a href="/timeline" className="text-white">
          Contact Me
        </a>
      </nav>
    </>
  );
};

export default NavBar;
