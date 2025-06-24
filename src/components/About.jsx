import React from "react";
import profile from "./images/profile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <div>
      <div className="About">
        <div className="para">
          <p className="parap" id="parap">
            <span className="span1">I am S.Akshay kumar,</span>A passionate
            programmer with a strong foundation in Python, data structures, and
            database management. I enjoy building efficient solutions, solving
            real-world problems. Alongside core programming, I’ve explored data
            science and web development—gaining hands-on experience in data
            analysis, and creating interactive web applications using React. I’m
            also enthusiastic about contributing to open-source projects and
            collaborating with the developer community. Currently looking for
            opportunities in software development, backend engineering, and
            data-focused roles.
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
          <p>Year : I am currently in my third year of studying engineering</p>
          <p>CGPA : 8.7</p>
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
      <div className="Add-cont">
        <div className="contact">
          <div>
            <h1>
              <span className="span">Contact</span> :
            </h1>
            <p>
              <FontAwesomeIcon icon={faPhone} /> Phone : 9533384236
              <br />
              <FontAwesomeIcon icon={faEnvelope} /> Email :
              srigadaakshay@gmail.com
            </p>
          </div>
          <div className="icon1">
            <a href="https://www.linkedin.com/in/akshayak8">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/SrigadaAkshayKumar">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
