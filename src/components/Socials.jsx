import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { neoHover, neoStyle } from "../styles/neoStyles";
const Socials = () => {
  return (
    <>
      <div className="flex gap-6">
        <a
          href="mailto:you@email.com"
          style={neoStyle}
          className="neo-btn"
          onMouseEnter={(e) => Object.assign(e.currentTarget.style, neoHover)}
          onMouseLeave={(e) => Object.assign(e.currentTarget.style, neoStyle)}
        >
          <IoIosMail />
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          style={neoStyle}
          onMouseEnter={(e) => Object.assign(e.currentTarget.style, neoHover)}
          onMouseLeave={(e) => Object.assign(e.currentTarget.style, neoStyle)}
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
          style={neoStyle}
          onMouseEnter={(e) => Object.assign(e.currentTarget.style, neoHover)}
          onMouseLeave={(e) => Object.assign(e.currentTarget.style, neoStyle)}
        >
          <FaLinkedin />
        </a>
      </div>
    </>
  );
};

export default Socials;
