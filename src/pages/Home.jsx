import React from "react";
import Socials from "../components/Socials";
const Home = () => {
  return (
    <>
      <div className="flex flex-col justify-center h-full px-12 py-10 select-none border-2 border-amber-30 mt-16 mb-8">
        <p
          className="text-2xl font-bold text-left border-2 border-amber-300 mb-8 tracking-wide"
          style={{ color: "#777" }}
        >
          Hi, I am
        </p>
        <h1
          className="text-6xl font-black text-left mb-2 leading-tight tracking-widest uppercase"
          style={{
            color: "#222",
            fontFamily: "'poppins'",
            letterSpacing: "1px",
          }}
        >
          Bishwa Pangeni
        </h1>
        <p
          className="text-sm text-left font-semibold mb-16 tracking-widest uppercase"
          style={{ color: "#777" }}
        >
          Full-stack Developer / Algorithm Enthusiast
        </p>
      </div>
      <div class="ml-14">
        <Socials />
      </div>
    </>
  );
};

export default Home;
