import React from "react";
import achievementsData from "./achievementsData.json";
import Hackathon1 from "./images/Hackathon1.jpg";
import Hackathon2 from "./images/Hackathon2.png";
import nptel from "./images/Nptel.png";

const images = {
  Hackathon1,
  Hackathon2,
  nptel,
};

function Achievements() {
  return (
    <div>
      <div className="project1">
        {achievementsData.map((achievement, index) => (
          <div className="project" key={index}>
            <div className="box1">
              <h2>
                <span className="span">{achievement.title}</span>:
              </h2>
              <img src={images[achievement.image]} alt="Achievement" />
            </div>
            <div className="box2">
              <p>{achievement.description}</p>
              <h3>Technologies Used :</h3>
              <p>{achievement.technologies}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Achievements;
