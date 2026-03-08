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
          href="mailto:bishwapangeni90@gmail.com"
          title="MAIL : bishwapangeni90@gmail.com"
          style={neoStyle}
          onMouseEnter={(e) =>
            Object.assign(e.currentTarget.style, { ...neoHover })
          }
          onMouseLeave={(e) =>
            Object.assign(e.currentTarget.style, { ...neoStyle })
          }
        >
          <IoIosMail />
        </a>
        <a
          href="https://github.com/Pangenii"
          target="_blank"
          rel="noreferrer"
          style={neoStyle}
          onMouseEnter={(e) => Object.assign(e.currentTarget.style, neoHover)}
          onMouseLeave={(e) => Object.assign(e.currentTarget.style, neoStyle)}
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/bishwa-pangeni-84436a187/"
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
