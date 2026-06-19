import React, { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Blogs from "./components/Blog";
import Achievements from "./components/Achievements";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faLightbulb,
  faFileExport,
  faBars,
  faGraduationCap,
  faUserTie,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function HomePage() {
  return (
    <>
      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="achievements">
        <Achievements />
      </section>
    </>
  );
}

function Navbar({ menuOpen, setMenuOpen }) {
  const navigate = useNavigate();

  const navigateToSection = (sectionId) => {
    setMenuOpen(false);

    navigate("/");

    setTimeout(() => {
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="navbar">
          <div className="head">
            <div
              style={{ cursor: "pointer", fontSize: "4.5rem" }}
              onClick={() => navigateToSection("about")}
            >
              <FontAwesomeIcon icon={faGraduationCap} />
            </div>
          </div>

          <div className={`menu1 ${menuOpen ? "open" : ""}`}>
            <div className="home" onClick={() => navigateToSection("skills")}>
              <FontAwesomeIcon icon={faLightbulb} />
              <span>Skills</span>
            </div>

            <div
              className="home"
              onClick={() => navigateToSection("experience")}
            >
              <FontAwesomeIcon icon={faUserTie} />
              <span>Experience</span>
            </div>

            <div className="home" onClick={() => navigateToSection("projects")}>
              <FontAwesomeIcon icon={faFileExport} />
              <span>Projects</span>
            </div>

            <div
              className="home"
              onClick={() => navigateToSection("achievements")}
            >
              <FontAwesomeIcon icon={faFileExport} />
              <span>Achievements</span>
            </div>

            <div
              className="home"
              onClick={() => {
                setMenuOpen(false);
                navigate("/blogs");
              }}
            >
              <FontAwesomeIcon icon={faPen} />
              <span>Blogs</span>
            </div>
          </div>

          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      </nav>
    </header>
  );
}

function AppContent() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="content">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </main>
      <footer className="Add-cont">
        <div className="contact">
          <div>
            <h1>
              <span className="span">Contact</span> :
            </h1>

            <p>
              <FontAwesomeIcon icon={faPhone} /> Phone : 9533384236
              <br />
              <FontAwesomeIcon icon={faEnvelope} /> Email :{" "}
              srigadaakshay@gmail.com
            </p>
          </div>

          <div className="icon1">
            <a
              href="https://www.linkedin.com/in/akshayak8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>

            <a
              href="https://github.com/SrigadaAkshayKumar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
