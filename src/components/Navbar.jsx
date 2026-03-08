import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { GiCrossMark } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className=" relative uppercase bg-black text-white md:bg-transparent flex justify-end p-6 tracking-widest">
        <div className="hidden md:flex gap-12">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `hover:text-blue-400 ${isActive ? "text-blue-400 font-semibold" : ""}`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/skills"
            className={({ isActive }) =>
              `hover:text-blue-400 ${isActive ? "text-blue-400 font-semibold" : ""}`
            }
          >
            Skills
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `hover:text-blue-400 ${isActive ? "text-blue-400 font-semibold" : ""}`
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `hover:text-blue-400 ${isActive ? "text-blue-400 font-semibold" : ""}`
            }
          >
            Contact Me
          </NavLink>
        </div>
        {/* Mobile Dropdown */}
        {open && (
          <div className="absolute top-full left-0 w-full bg-black md:hidden flex flex-col gap-6 px-6 py-6 z-50 shadow-lg">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `hover:text-blue-400 ${isActive ? "text-blue-400 font-semibold" : ""}`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/skills"
              className={({ isActive }) =>
                `hover:text-blue-400 ${isActive ? "text-blue-400 font-semibold" : ""}`
              }
            >
              Skills
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `hover:text-blue-400 ${isActive ? "text-blue-400 font-semibold" : ""}`
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `hover:text-blue-400 ${isActive ? "text-blue-400 font-semibold" : ""}`
              }
            >
              Contact Me
            </NavLink>
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
