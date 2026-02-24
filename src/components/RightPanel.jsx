import React from "react";
import whiteProfile from "../assets/images/whiteSuit.png";

const RightPanel = () => {
  return (
    <div className="relative h-full w-full min-h-[84vh]">
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
        style={{
          width: "40vw",
          height: "40vh",
          borderRadius: "50%",
          background: "#d7d7d7",
          boxShadow:
            "0 0 60px 40px rgba(215, 215, 215, 0.20), 0 0 120px 80px rgba(215, 215, 215, 0.05)",
        }}
      />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
        <img
          src={whiteProfile}
          alt="profile"
          style={{
            width: "100vw",
            height: "82vh",
            objectFit: "contain",
            objectPosition: "bottom",
            mixBlendMode: "lighten",
          }}
        />
      </div>
    </div>
  );
};
export default RightPanel;
