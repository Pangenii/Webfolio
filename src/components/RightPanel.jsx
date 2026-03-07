import React from "react";
import whiteProfile from "../assets/images/whiteSuit.png";

const RightPanel = () => {
  return (
    <div className="relative h-full w-full min-h-[84vh]">
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
