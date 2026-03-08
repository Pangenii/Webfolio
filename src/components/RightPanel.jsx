import React from "react";
import blueProfile from "../assets/images/blueSuit.png";

const RightPanel = () => {
  return (
    <div className="relative h-full w-full min-h-[84vh]">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
        <img
          src={blueProfile}
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
