import React from "react";
import ProjectCard from "../components/ProjectCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import chess from "../assets/images/chess.png";
import stockTracker from "../assets/images/stocktracker.png";
import criply from "../assets/images/criply.png";
import colorPicker from "../assets/images/colorPicker.png";

const projects = [
  {
    title: "StockTracker",
    description:
      "A full-stack stock data scraper for the Nepal Stock Exchange built with Node.js, Cheerio, and React.js. The application extracts and displays live market data from NEPSE.",
    language: "JavaScript",
    languageColor: "#f1e05a",
    image: stockTracker,
    link: "https://stock-tracker-nepal.vercel.app/",
  },

  {
    title: "FEN-Generator",
    description:
      "A screenshot-to-FEN tool that automatically detects chess piece placement from a board image and converts it into a machine-readable FEN string, eliminating the need for manual board setup in the Lichess editor.",
    language: "Python",
    languageColor: "#3572A5",
    image: chess,
  },
  {
    title: "URL-Shortener",
    description:
      "A full-stack MERN application that allows users to generate shortened URLs and track analytics such as visitor count and usage patterns through graph-based visualizations.",
    language: "JavaScript",
    languageColor: "#f1e05a",
  },
  {
    title: "color-picker CHROME EXTENSION",
    description:
      "Backend service for an application that helps users find the best grocery items at affordable prices available in the market.",
    language: "JavaScript",
    languageColor: "#f1e05a",
    image: colorPicker,
  },
  {
    title: "Criply",
    description:
      "Backend service for an application that helps users find the best grocery items at affordable prices available in the market.",
    language: "JavaScript",
    languageColor: "#f1e05a",
    image: criply,
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
    <div className="flex flex-col h-[80vh] gap-6 items-center">
      <div className="w-full max-w-125 py-6 overflow-hidden md:overflow-visible">
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={index} className="px-4 mt-6">
              <ProjectCard
                title={project.title}
                description={project.description}
                language={project.language}
                languageColor={project.languageColor}
                image={project.image}
                link={project.link}
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
        <a href="https://github.com/Pangenii" target="_blank">
          More on GitHub
        </a>
      </div>
    </div>
  );
};

export default Projects;
