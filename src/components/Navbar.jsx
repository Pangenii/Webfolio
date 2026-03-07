import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { GiCrossMark } from "react-icons/gi";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className=" relative bg-black text-white md:bg-transparent flex justify-end p-6">
        <div className="hidden md:flex gap-12">
          <a href="/about">About</a>
          <a href="/skills">Skills</a>
          <a href="/projects">Projects</a>
          <a href="/contact">Contact Me</a>
        </div>
        {/* Mobile Dropdown */}
        {open && (
          <div className="absolute top-full left-0 w-full bg-black md:hidden flex flex-col gap-6 px-6 py-6 z-50 shadow-lg">
            <a href="/about">About</a>
            <a href="/skills">Skills</a>
            <a href="/projects">Projects</a>
            <a href="/contact">Contact Me</a>
          </div>
        )}
        {/* Hamburger Icon */}
        <div
          id="hamburgerIcon"
          className="m-0 border-2 border-white rounded-xl max-h-fit md:hidden"
        >
          <button
            onClick={() => {
              setOpen(!open);
            }}
          >
            {open ? <GiCrossMark /> : <IoMenu />}
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
