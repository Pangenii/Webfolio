import React from "react";
import Socials from "../components/Socials";
const About = () => {
  return (
    <>
      <div className="md:flex flex-col justify-center h-full px-12 py-10 select-none text-left mt-16 mb-8">
        <p
          className="text-sm md:text-2xl font-bold mb-6 tracking-wide uppercase"
          style={{ color: "grey" }}
        >
          Hi, I am
        </p>
        <h1
          className="md:text-6xl font-black stroke-black  mb-2 leading-tight tracking-widest uppercase"
          style={{
            color: "#F7F7F7",
            fontFamily: "'poppins'",
            letterSpacing: "1px",
          }}
        >
          Bishwa
        </h1>
        <h1
          className="md:text-6xl font-black  mb-6 leading-tight tracking-widest uppercase"
          style={{
            color: "#222",
            fontFamily: "'poppins'",
            letterSpacing: "1px",
          }}
        >
          Pangeni
        </h1>
        <p
          className="text-sm md:text-base  font-semibold mb-8 tracking-widest uppercase"
          style={{ color: "#777" }}
        >
          Full-stack Developer / Algorithm Enthusiast
        </p>
      </div>
      <div className="ml-14">
        <Socials />
      </div>
    </>
  );
};

export default About;
