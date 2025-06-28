import React from "react";

function Skills() {
  return (
    <div>
      <div id="skill-heading" class="skill-heading">
        <h1>Skills</h1>
      </div>
      <div class="skills">
        <div class="tech-skills">
          <h1>
            <span class="span">Technical Skills</span> :
          </h1>

          <h3>Programming Languages:</h3>
          <p>Python, Java, JavaScript (Basic)</p>

          <h3>Web Development:</h3>
          <p>Frontend: HTML, CSS, JavaScript, ReactJS</p>
          <p>Backend: Flask, RESTful APIs</p>

          <h3>Database & Tools:</h3>
          <p>
            SQL, Git, GitHub, Docker (Basic), CI/CD (Basic), Visual Studio Code
          </p>

          <h3>Additional Skills:</h3>
          <p>Excel, Power BI, Tableau, Pandas</p>
        </div>

        <div class="soft-skills">
          <h1>
            <span class="span">Soft Skills</span> :
          </h1>
          <p>
            Communication Skills
            <br />
            Teamwork <br />
            Problem-Solving <br />
            Time Management
            <br />
            Analytical thinking
          </p>
        </div>
      </div>
      <div class="certificate">
        <h3>Certifications</h3>
      </div>
      <div className="certifi">
        <div className="certifications-container">
          {[
            {
              title: "Python for Data Science",
              source: "NPTEL",
              link: "https://drive.google.com/file/d/1gdkLY5JNFHbfdouUH4CSechsg2YbVHNI/view?usp=sharing",
            },
            {
              title: "Complete Python Programming",
              source: "Tutors Campus",
              link: "https://drive.google.com/file/d/1UMRuwWENSFff6T8KJxi2BfgFEUBzAq4y/view?usp=sharing",
            },
            {
              title: "Structured Query Language - SQL",
              source: "HackerRank",
              link: "https://www.hackerrank.com/certificates/319c823b2c56",
            },
            {
              title: "Complete Web Development",
              source: "Udemy",
              link: "https://drive.google.com/file/d/1rd9mOXBxw_YDWI4LXcKdl0QIt6J1_qmq/view?usp=sharing",
            },
            {
              title: "Career Essentials in Data Analysis",
              source: "Microsoft & LinkedIn",
              link: "https://www.linkedin.com/learning/certificates/9ec28c0639eadfd838548c7c9ee67af53581a25f757d0c330cbf44b7201e6672?trk=share_certificate",
            },
            {
              title: "Introduction to Generative AI",
              source: "Google Cloud",
              link: "https://www.cloudskillsboost.google/public_profiles/b9438a2c-2bf8-409f-8002-62c52c46c391/badges/8897104",
            },
          ].map((cert, index) => (
            <div key={index} className="cert-card">
              <h3 style={{ marginBottom: "8px" }}>
                {index + 1}. {cert.title}
              </h3>
              <h4>By {cert.source}</h4>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "12px",
                }}
              >
                <a href={cert.link} target="_blank" rel="noopener noreferrer">
                  <button>View</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
