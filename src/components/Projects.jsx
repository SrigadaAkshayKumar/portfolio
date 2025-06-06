import React from "react";
import projectsData from "./projectsData.json";
import unemployment from "./images/Unemployment.png";
import Retail from "./images/RetailX.png";
import cricket from "./images/cricket.png";
import result from "./images/result.png";
import stock from "./images/stock.png";

const images = {
  unemployment,
  Retail,
  stock,
  cricket,
  result,
};

function Projects() {
  return (
    <div>
      <div id="projects" className="projects">
        <h1>Projects</h1>
      </div>
      <div className="project1">
        {projectsData.map((project, index) => (
          <div className="project" key={index}>
            {/* Project title */}
            <h2 className="project-title">
              <span className="span">
                {project.title} (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                )
              </span>
              :
            </h2>

            {/* Content Row: Image Left, Text Right */}
            <div className="project-content">
              <div className="box1">
                <img
                  src={images[project.image]}
                  alt={`${project.title} project`}
                  className="project-image"
                />
              </div>
              <div className="box2">
                <p>{project.description}</p>
                <h3>Technologies Used:</h3>
                <p>{project.technologies}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
