import React from "react";

function Skills() {
  return (
    <div>
      <div id="skill-heading" class="skill-heading">
        <h1>Skills</h1>
      </div>
      <div class="skills">
        <div class="tech-skills">
          {/* <h1>
            <span class="span">Technical Skills</span> :
          </h1> */}

          <h3 style={{ display: "inline", margin: 0, marginRight: "8px" }}>
            Programming Languages:
          </h3>
          <p style={{ display: "inline", margin: 0, marginRight: "8px" }}>
            Python, SQL
          </p>

          <br />
          <br />

          <h3 style={{ display: "inline", margin: 0, marginRight: "8px" }}>
            Data Engineering & Analytics:
          </h3>
          <p style={{ display: "inline", margin: 0, marginRight: "8px" }}>
            PySpark, ETL, Data Warehousing, Data Modeling, Data Analysis
          </p>

          <br />
          <br />

          <h3 style={{ display: "inline", margin: 0, marginRight: "8px" }}>
            Machine Learning & AI:
          </h3>
          <p style={{ display: "inline", margin: 0, marginRight: "8px" }}>
            Machine Learning, Natural Language Processing (NLP), Feature
            Engineering, Generative AI, Prompt Engineering
          </p>

          <br />
          <br />

          <h3 style={{ display: "inline", margin: 0, marginRight: "8px" }}>
            Libraries & Frameworks:
          </h3>
          <p style={{ display: "inline", margin: 0, marginRight: "8px" }}>
            Pandas, NumPy, Matplotlib, Scikit-learn, Flask, Flask
          </p>

          <br />
          <br />

          <h3 style={{ display: "inline", margin: 0, marginRight: "8px" }}>
            Databases:
          </h3>
          <p style={{ display: "inline", margin: 0, marginRight: "8px" }}>
            MySQL, PostgreSQL, MongoDB
          </p>

          <br />
          <br />

          <h3 style={{ display: "inline", margin: 0, marginRight: "8px" }}>
            Tools & Platforms:{" "}
          </h3>
          <p style={{ display: "inline", margin: 0, marginRight: "8px" }}>
            Git, GitHub, Power BI, Excel, Jupyter Notebook, VS Code
          </p>

          <br />
          <br />

          <h3 style={{ display: "inline", margin: 0, marginRight: "8px" }}>
            Concepts:
          </h3>
          <p style={{ display: "inline", margin: 0, marginRight: "8px" }}>
            Cloud Computing, Agile Methodology, Software Development Life Cycle
            (SDLC), DBMS
          </p>
        </div>

        {/* <div class="soft-skills">
          <h1>
            <span class="span">Soft Skills</span> :
          </h1>
          <p>
            Analytical thinking
            <br />
            Team Management <br />
            Problem-Solving <br />
            Time Management
            <br />
            Effective Communication
          </p>
        </div> */}
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
              title:
                "Apache Spark 3 for Data Engineering & Analytics with Python",
              source: "Udemy",
              link: "https://drive.google.com/file/d/1v90_mnFC8MpMgcyjYOkZxHoxwxwT37-H/view?usp=sharing",
            },
            {
              title: "Advanced SQL",
              source: "HackerRank",
              link: "https://www.hackerrank.com/certificates/319c823b2c56",
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
            {
              title: "Data warehouse ETL Testing & Data Quality Management A-Z",
              source: "Udemy",
              link: "https://drive.google.com/file/d/1Jxkiqn8rwgpyNouJ8iMnoCmeiw10xIn5/view?usp=sharing",
            },
            {
              title: "Relational Database Design",
              source: "Udemy",
              link: "https://drive.google.com/file/d/13rlVYKfEWrBrBQZ-dCoSGXD_PLJ2VkG4/view?usp=sharing",
            },
            {
              title: "DataWarehouse - The Ultimate Guide",
              source: "Udemy",
              link: "https://drive.google.com/file/d/17qH-Uit40UcJNweAbgr4ZSJBJuI1817E/view?usp=sharing",
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
