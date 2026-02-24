import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
const Socials = () => {
  const neoStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "52px",
    height: "52px",
    borderRadius: "14px",
    background: "#d7d7d7",
    boxShadow: "6px 6px 12px #b8b8b8, -6px -6px 12px #f6f6f6",
    cursor: "pointer",
    transition: "box-shadow 0.2s ease",
    textDecoration: "none",
    color: "black",
  };

  const neoHover = {
    ...neoStyle,
    boxShadow: "inset 4px 4px 8px #b8b8b8, inset -4px -4px 8px #f6f6f6",
  };
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
