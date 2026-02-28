import { useState } from "react";

const ProjectCard = ({
  title,
  description,
  language,
  languageColor,
  image = null,
}) => {
  const [imageFrameHovered, setImageFrameHovered] = useState(false);

  return (
    <div
      className="w-[50%] rounded-2xl p-4 flex flex-col gap-3 cursor-pointer transition-all duration-300 hover:-translate-y-0.5 ml-[25%] my-[5%]"
      style={{
        background: "#d7d7d7",
        boxShadow: "6px 6px 14px #b8b8b8, -6px -6px 14px #f6f6f6",
      }}
    >
      <div
        className=" border-2 border-dashed border-black p-4 rounded-xl"
        id="imageplaceholder"
      >
        <div
          onMouseEnter={() => setImageFrameHovered(true)}
          onMouseLeave={() => setImageFrameHovered(false)}
          className="rounded-xl overflow-hidden w-full transition-all duration-200 flex items-center justify-center"
          style={{
            aspectRatio: "16 / 9",
            background: "#d7d7d7",
            boxShadow: imageFrameHovered
              ? "inset 4px 4px 8px #b8b8b8, inset -4px -4px 8px #f6f6f6"
              : "4px 4px 10px #b8b8b8, -4px -4px 10px #f6f6f6",
          }}
        >
          {image ? (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover block"
            />
          ) : (
            <div
              className="w-full h-full flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #dde0e6 0%, #c8cbd2 100%)",
              }}
            >
              {/* image here */}
            </div>
          )}
        </div>
      </div>
      <div className=" flex flex-col gap-1.5 text-left" id="title-description">
        <h3 className="text-[15px] font-bold text-[#2c2c2c] tracking-tight m-0 leading-snug">
          {title}
        </h3>
        <p className="text-[12px] text-[#5a5a5a] leading-relaxed m-0 line-clamp-7">
          {description}
        </p>
      </div>

      <div
        id="programming-language "
        className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#3a3a3a] rounded-full px-3 py-1 w-fit"
        style={{
          background: "#d7d7d7",
          boxShadow: "3px 3px 6px #c0c0c0, -3px -3px 6px #f0f0f0",
        }}
      >
        <span
          className="w-2 h-2 rounded-full shrink-0"
          style={{ background: languageColor || "#888" }}
        />
        {language}
      </div>
    </div>
  );
};

export default ProjectCard;
