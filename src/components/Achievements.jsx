import React from "react";
import achievementsData from "./achievementsData.json";
import Hackathon1 from "./images/Hackathon1.jpg";
import opensource from "./images/opensource.jpg";
import Hackathon2 from "./images/Hackathon2.png";
import nptel from "./images/Nptel.png";

const images = {
  Hackathon1,
  opensource,
  Hackathon2,
  nptel,
};

function Achievements() {
  return (
    <div>
      <div id="achievements" className="projects">
        <h1>Achievements</h1>
      </div>
      <div className="project1">
        {achievementsData.map((achievement, index) => (
          <div className="project" key={index}>
            {/* Title on top */}
            <h2 className="project-title">
              <span className="span">{achievement.title}</span>:
            </h2>

            {/* Content - image left, description right */}
            <div className="project-content">
              <div className="box1">
                <img
                  src={images[achievement.image]}
                  alt={achievement.title}
                  className="project-image"
                />
              </div>

              <div className="box2">
                <p>{achievement.description}</p>
                {achievement.technologies && (
                  <>
                    <h3>Technologies:</h3>
                    <p>{achievement.technologies}</p>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Achievements;
