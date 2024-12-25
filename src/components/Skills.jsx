import React from "react";
import videoSrc from "./images/background.mp4";

function Skills() {
  return (
    <div>
      <video autoPlay loop muted className="background-video">
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div id="skill-heading" class="skill-heading">
        <h1>Skills</h1>
      </div>
      <div class="skills">
        <div class="tech-skills">
          <h1>
            <span class="span">Technical Skills</span> :
          </h1>
          <h3>Python (Intermediate), Java (Basic) </h3>
          <h2>Data Science:</h2>
          <p>Tools: Excel, Microsoft Power BI, Tableau</p>
          <p>Data Analysis: Pandas, Numpy</p>
          <p>Data Visualization: Matplotlib, Seaborn, Plotly</p>
          <p>Machine Learning: Scikit-learn</p>
          <h2>Web Development:</h2>
          <p>
            - Frontend: HTML, CSS, JavaScript <br />
            - Frameworks: Bootstrap, React js
            <br />- Backend: Python, Frameworks: Flask <br />- Databases: MySQL
          </p>
        </div>
        <div class="soft-skills">
          <h1>
            <span class="span">Soft Skills</span> :
          </h1>
          <p>
            - Communication Skills
            <br />
            - Teamwork <br />
            - Problem-Solving <br />- Time Management
            <br />- Analytical thinking
          </p>
        </div>
      </div>
      <div class="certificate">
        <h3>Certifications</h3>
      </div>
      <div class="certifi">
        <div class="certifi-btn">
          <h1>
            1. Career Essentials in Data Analysis -
            <a href="https://www.linkedin.com/learning/certificates/9ec28c0639eadfd838548c7c9ee67af53581a25f757d0c330cbf44b7201e6672?trk=share_certificate">
              (Microsoft and LinkedIn)
            </a>
            <br />
            2. Learning Data Analytics: Foundations -
            <a href="https://www.linkedin.com/learning/certificates/5062cd81216457506283d05f45604f468d18bf53e8100f27cb840ee06268337a?trk=share_certificate">
              (LinkedIn)
            </a>
            <br />
            3. Introduction to Generative AI -
            <a href="https://www.cloudskillsboost.google/public_profiles/b9438a2c-2bf8-409f-8002-62c52c46c391/badges/8897104">
              (Google Cloud)
            </a>
            <br />
            4. Data Analytics and Visualization Simulation -
            <a href="https://drive.google.com/file/d/1Gbws8SJupUmzJC1tvX3-AsGDASLXI4mZ/view?usp=sharing">
              (Accenture)
            </a>
            <br />
            5. Frontend Development (Html, CSS, Bootstrap and JavaScript) -
            <a href="https://www.udemy.com/certificate/UC-547450c2-7141-4078-aa65-5ab5a2f7fc9b/">
              (Udemy)
            </a>
            <br />
            6. Python Programming -
            <a href="https://drive.google.com/file/d/1UMRuwWENSFff6T8KJxi2BfgFEUBzAq4y/view?usp=sharing ">
              (Tutors Campus)
            </a>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Skills;
