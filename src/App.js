import React, { useState } from "react";
import "./App.css";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faLightbulb,
  faFileExport,
  faBars,
  faGraduationCap,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <Router>
      <div className="content">
        <header className="header">
          <nav className="nav">
            <div className="navbar">
              <div className="head">
                <Link to="/">
                  <FontAwesomeIcon icon={faGraduationCap} />
                </Link>
              </div>
              <div className={`menu1 ${menuOpen ? "open" : ""}`}>
                <div className="home" onClick={handleLinkClick}>
                  <FontAwesomeIcon icon={faPen} />
                  <a href="https://guideboard-mu.vercel.app/">Blogs</a>
                </div>
                <div className="home" onClick={handleLinkClick}>
                  <FontAwesomeIcon icon={faLightbulb} />
                  <Link to="/Skills">Skills</Link>
                </div>
                <div className="home" onClick={handleLinkClick}>
                  <FontAwesomeIcon icon={faUserTie} />
                  <Link to="/Experience">Experience</Link>
                </div>
                <div className="home" onClick={handleLinkClick}>
                  <FontAwesomeIcon icon={faFileExport} />
                  <Link to="/Projects">Projects</Link>
                </div>
                <div className="home" onClick={handleLinkClick}>
                  <FontAwesomeIcon icon={faFileExport} />
                  <Link to="/Achievements">Achievements</Link>
                </div>
              </div>
              <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                <FontAwesomeIcon icon={faBars} />
              </div>
            </div>
          </nav>
        </header>

        {/* Main content area for Routes */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/Skills" element={<Skills />} />
            <Route path="/Experience" element={<Experience />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Achievements" element={<Achievements />} />
          </Routes>
        </main>

        {/* Bottom navigation links */}
        <div className="bottom-box">
          <div className="hom">
            <a href="https://guideboard-mu.vercel.app/">Blogs</a>
          </div>
          <div className="hom" onClick={handleLinkClick}>
            <Link to="/Skills">Skills</Link>
          </div>
          <div className="hom" onClick={handleLinkClick}>
            <Link to="/Experience">Experience</Link>
          </div>
          <div className="hom" onClick={handleLinkClick}>
            <Link to="/Projects">Projects</Link>
          </div>
          <div className="hom" onClick={handleLinkClick}>
            <Link to="/Achievements">Achievements</Link>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
