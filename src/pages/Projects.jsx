import React from "react";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "URL-Shortener",
    description:
      "A full-stack MERN application that allows users to generate shortened URLs and track detailed analytics, including visitor count and usage patterns through graph-based visualizations.",
    language: "JavaScript",
    languageColor: "#f1e05a",
    isPublic: true,
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio built with React and Vite featuring a neomorphic design system, diagonal SVG layout, and smooth route-based content switching.",
    language: "TypeScript",
    languageColor: "#3178c6",
    isPublic: true,
  },
  {
    title: "Algorithm Visualizer",
    description:
      "An interactive web app that visualizes sorting and pathfinding algorithms in real time, helping users understand how algorithms work step by step.",
    language: "Python",
    languageColor: "#3572A5",
    isPublic: false,
  },
  {
    title: "Algorithm Visualizer",
    description:
      "An interactive web app that visualizes sorting and pathfinding algorithms in real time, helping users understand how algorithms work step by step.",
    language: "Python",
    languageColor: "#3572A5",
    isPublic: false,
  },
];

const Projects = () => {
  return (
    <>
      <div className="px-12 py-10 mr-6">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "20px",
          }}
        >
          {projects.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
      </div>
      <div class="text-center uppercase font-bold text-black tracking-wide">
        {" "}
        More On GITHUB{" "}
      </div>
    </>
  );
};

export default Projects;
