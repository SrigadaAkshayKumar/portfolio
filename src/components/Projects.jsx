import React from "react";
import projectsData from "./projectsData.json";
import unemployment from "./images/Unemployment.png";
import Retail from "./images/RetailX.png";
import Netflix from "./images/Netflix.png";
import Rent from "./images/Rent.png";
import Food from "./images/Food-order.png";

const images = {
  unemployment,
  Retail,
  Netflix,
  Rent,
  Food,
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
            <div className="box1">
              <h2>
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
              <img
                src={images[project.image]}
                alt={`${project.title} project`}
              />
            </div>
            <div className="box2">
              <p>{project.description}</p>
              <h3>Technologies Used :</h3>
              <p>{project.technologies}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
