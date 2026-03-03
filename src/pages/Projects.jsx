import React from "react";
import ProjectCard from "../components/ProjectCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = [
  {
    title: "Trivia AI",
    description:
      "An interactive web app that visualizes sorting and pathfinding algorithms in real time, helping users understand how algorithms work step by step. And all the text written here is for testing so that it elongates to an extent where it looks so elegant.",
    language: "JavaScript",
    languageColor: "#3572A5",
  },
  {
    title: "Trivia AI",
    description:
      "helping users understand how algorithms work step by step. And all the text written here is for testing so that it elongates to an extent where it looks so elegant.",
    language: "JavaScript",
    languageColor: "#3572A5",
  },
  {
    title: "Trivia AI",
    description:
      "An interactive web app that visualizes sorting and pathfinding algorithms in real time, helping users understand how algorithms work step by step. And all the text written here is for testing so that it elongates to an extent where it looks so elegant.",
    language: "JavaScript",
    languageColor: "#3572A5",
  },
];

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <div className="flex flex-col h-full gap-6 items-center">
      <div className="w-full max-w-125 py-6">
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={index} className="flex justify-center mt-6">
              <ProjectCard
                title={project.title}
                description={project.description}
                language={project.language}
                languageColor={project.languageColor}
              />
            </div>
          ))}
        </Slider>
      </div>

      <div
        id="github-link"
        className="text-center uppercase font-bold text-[#2c2c2c] tracking-widest text-xs py-2 px-6 rounded-full w-fit cursor-pointer transition-all duration-200 select-none"
        style={{
          background: "#d7d7d7",
          boxShadow: "4px 4px 10px #b8b8b8, -4px -4px 10px #f6f6f6",
        }}
        onMouseDown={(e) =>
          (e.currentTarget.style.boxShadow =
            "inset 3px 3px 7px #b8b8b8, inset -3px -3px 7px #f6f6f6")
        }
        onMouseUp={(e) =>
          (e.currentTarget.style.boxShadow =
            "4px 4px 10px #b8b8b8, -4px -4px 10px #f6f6f6")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.boxShadow =
            "4px 4px 10px #b8b8b8, -4px -4px 10px #f6f6f6")
        }
      >
        More on GitHub
      </div>
    </div>
  );
};

export default Projects;
