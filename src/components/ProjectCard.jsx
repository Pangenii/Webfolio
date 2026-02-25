import React from "react";
import { neoStyle } from "../styles/neoStyles";

const ProjectCard = ({
  title,
  description,
  language,
  languageColor = "#f1e05a",
  isPublic = true,
}) => {
  return (
    <>
      <div
        style={{
          ...neoStyle,
          width: "100%",
          height: "auto",
          border: "2px solid black",
          borderRadius: "12px",
          padding: "20px",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "10px",
          cursor: "default",
        }}
        class="text-left"
      >
        {/* Title + Badge */}
        <div className="flex justify-between items-center w-full">
          <h3 className="font-bold text-black text-base">{title}</h3>
          {isPublic && (
            <span
              className="text-xs px-3 py-1"
              style={{
                border: "2px solid black",
                borderRadius: "999px",
                color: "#555",
              }}
            >
              Public
            </span>
          )}
        </div>

        <p className="text-sm" style={{ color: "#444", lineHeight: "1.6" }}>
          {description}
        </p>

        <div className="flex items-center gap-2">
          <span
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              background: languageColor,
              display: "inline-block",
            }}
          />
          <span className="text-xs" style={{ color: "#555" }}>
            {language}
          </span>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
