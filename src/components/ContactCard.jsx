import { useState } from "react";
import { MdPhoneIphone } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdDownload } from "react-icons/io";
import { neoStyle, neoHover } from "../styles/neoStyles";

const Divider = () => (
  <div
    style={{
      height: "1px",
      background: "linear-gradient(to right, #c8c8c8, transparent)",
      boxShadow: "0 1px 0 #f6f6f6",
    }}
  />
);

const InfoRow = ({ icon, label, value }) => (
  <div className="flex items-center gap-4">
    <div
      style={neoStyle}
      onMouseEnter={(e) => Object.assign(e.currentTarget.style, neoHover)}
      onMouseLeave={(e) => Object.assign(e.currentTarget.style, neoStyle)}
    >
      {icon}
    </div>
    <div>
      <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 m-0">
        {label}
      </p>
      <p className="text-sm font-semibold text-gray-700 mt-1">{value}</p>
    </div>
  </div>
);

const NeoActionButton = ({ children, onClick }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        flex: 1,
        minWidth: "120px",
        padding: "13px 20px",
        borderRadius: "14px",
        border: "2px solid #222",
        background: hovered ? "#222" : "#d7d7d7",
        color: hovered ? "#d7d7d7" : "#222",
        fontSize: "13px",
        fontWeight: "700",
        letterSpacing: "0.06em",
        cursor: "pointer",
        transition: "all 0.22s ease",
        boxShadow: hovered
          ? "inset 4px 4px 8px #b8b8b8, inset -4px -4px 8px #f6f6f6"
          : "6px 6px 12px #b8b8b8, -6px -6px 12px #f6f6f6",
        outline: "none",
        textTransform: "uppercase",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "7px",
      }}
    >
      {children}
    </button>
  );
};

const ContactCard = () => {
  return (
    <div
      style={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          background: "#d7d7d7",
          borderRadius: "28px",
          padding: "40px 44px",
          boxShadow: "12px 12px 24px #b8b8b8, -12px -12px 24px #f6f6f6",
          display: "flex",
          flexDirection: "column",
          gap: "28px",
          minWidth: "320px",
        }}
      >
        <div>
          <p className="m-0 text-xs font-bold tracking-[0.18em] uppercase text-gray-400">
            Get in touch
          </p>
          <h2 className="mt-1 text-2xl font-extrabold text-gray-800 tracking-[0.1rem]">
            Contact Me
          </h2>
        </div>

        <Divider />

        <InfoRow
          icon={<FaLocationDot />}
          label="Address"
          value="Tilottama-7, Bhalwari"
        />
        <InfoRow
          icon={<MdPhoneIphone />}
          label="Phone"
          value="+977 9867420293"
        />

        <Divider />

        <div class="flex gap-4 flex-wrap">
          <NeoActionButton>Hire Me</NeoActionButton>
          <NeoActionButton>
            <IoMdDownload /> CV
          </NeoActionButton>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
