import React from "react";
import { neoHover, neoStyle } from "../styles/neoStyles";

const Skills = () => {
  return (
    <>
      <div class="p-8 m-8 text-left">
        <div class="softskills ">
          <p
            className="text-2xl font-bold mb-16 tracking-widest uppercase"
            style={{ color: "#000" }}
          >
            SOFT SKILLS
          </p>
        </div>
        <div className="techskills flex flex-col">
          <p
            className="text-2xl font-bold mb-16 tracking-widest uppercase"
            style={{ color: "#000" }}
          >
            TEchnical skills
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, auto)",
              gap: "16px",
              width: "fit-content",
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Skills;
