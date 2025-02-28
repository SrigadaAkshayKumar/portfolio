import React, { useState } from "react";
import "./App.css";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import ScrollToTop from "./components/ScrollToTop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faLightbulb,
  faFileExport,
  faBars,
  faGraduationCap,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import Blog from "./components/Blog";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <Router>
      <ScrollToTop />
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
                  <Link to="/Blog">Blogs</Link>
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
            <Route path="/Blog" element={<Blog />} />
            <Route path="/Skills" element={<Skills />} />
            <Route path="/Experience" element={<Experience />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Achievements" element={<Achievements />} />
          </Routes>
        </main>

        {/* Bottom navigation links */}
        <div className="bottom-box">
          <div className="hom">
            <Link to="/Blog">Blogs</Link>
          </div>
          <div className="hom">
            <Link to="/Skills">Skills</Link>
          </div>
          <div className="hom">
            <Link to="/Experience">Experience</Link>
          </div>
          <div className="hom">
            <Link to="/Projects">Projects</Link>
          </div>
          <div className="hom">
            <Link to="/Achievements">Achievements</Link>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
