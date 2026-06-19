import React from "react";
import profile from "./images/profile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
// import {
//   faLocationDot,
//   faPhone,
//   faEnvelope,
// } from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <div>
      <div className="About">
        <div className="para">
          <p className="parap" id="parap">
            <span className="span1">I am S. Akshay Kumar,</span> a Data
            Engineering enthusiast with hands-on industry experience through my
            internship at Cognizant, where I worked on Python, SQL, PySpark, ETL
            concepts, Data Warehousing, and Data Modeling.I am passionate about
            solving real-world problems using data and continuously expanding my
            knowledge of modern data engineering technologies. Currently seeking
            opportunities in Data Engineering roles where I can apply my
            technical skills and contribute to building scalable data solutions.
          </p>
        </div>
        <div className="photo">
          <div className="photo1">
            <img src={profile} alt="profile" />
          </div>
          <div className="icon1">
            <a href="https://www.linkedin.com/in/akshaykumarsrigada">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/SrigadaAkshayKumar">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://leetcode.com/u/akshay_ak8/"
              style={{ textDecoration: "none" }}
            >
              <span
                style={{
                  fontSize: "3rem",
                  fontWeight: "bold",
                }}
              >
                L
              </span>
            </a>
          </div>
          <div ClassName="resume">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <button>View Resume</button>
            </a>
          </div>
        </div>
      </div>
      <div id="education" className="education">
        <div>
          <h1>Education</h1>
        </div>
        <div className="edu">
          <h3>
            Bachelor of Technology (B.Tech) in Computer Science Engineering
          </h3>
          <p>
            Malla Reddy Engineering college, Maisammaguda, medchal, Telangana,
            500049
          </p>
          <p>Year of Completion : 2026</p>
          <p>CGPA : 8.55</p>
          <h3>Intermediate (12th Grade)</h3>
          <p>junior college, mallampet, Hyderabad, Telangana, 500090 </p>
          <p>Year of Completion : 2022</p>
          <p>Marks : 950 (95%)</p>
          <h3>High School</h3>
          <p>Abhyudaya Patashala, Domakonda, kamareddy, Telangana, 503123 </p>
          <p>Year of Completion : 2020</p>
          <p> CGPA : 10</p>
        </div>
      </div>
    </div>
  );
}

export default About;
