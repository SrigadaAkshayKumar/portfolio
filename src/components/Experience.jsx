import React from "react";

function Experience() {
  const experiences = [
    {
      role: "Programmer Analyst Trainee Intern",
      company: "Cognizant",
      duration: "march 2026 - june 2026",
      points: [
        "Successfully completed an internship as a Programmer Analyst Trainee, gaining hands-on exposure to Data Engineering, Data Science, and Machine Learning concepts.",
        "Developed practical skills in Python, SQL, and PySpark through technical training, assignments, assessments, and project-based learning activities.",
        "Gained a strong understanding of ETL concepts, Data Warehousing, Data Modeling, Cloud Computing fundamentals, Agile methodologies, and Software Development Life Cycle (SDLC) practices.",
        "Worked with structured datasets to perform data cleaning, transformation, analysis, and reporting tasks using industry-standard tools and techniques.",
        "Applied Machine Learning, Natural Language Processing (NLP), and Feature Engineering concepts to analyze datasets and derive meaningful insights from data.",
        "Worked on a Feature Engineering project involving data preprocessing, feature selection, and feature transformation techniques, while analyzing their impact on dataset quality and machine learning model performance.",
        "Documented observations, findings, and outcomes from feature engineering techniques, demonstrating analytical thinking and data-driven problem-solving skills.",
        "Collaborated in a professional learning environment, enhancing communication, presentation, and problem-solving abilities through project discussions and technical reviews.",
        "Secured a Pre-Placement Offer (PPO) upon successful completion of the internship following performance evaluations, project presentation, technical assessments, and a one-on-one managerial review.",
      ],
    },
    {
      role: "Software Development Intern",
      company: "Infosys Springboard",
      duration: "December 2025 - January 2026",
      points: [
        "Successfully completed a Software Development Internship under the Infosys Springboard program, contributing to the development and testing of a web-based application in a collaborative team environment.",
        "Worked with modern web development technologies including React, FastAPI, PostgreSQL, HTML, CSS, and JavaScript to understand full-stack application development workflows.",
        "Contributed to backend development activities using FastAPI, supporting API implementation, integration, and application functionality.",
        "Performed API testing, feature validation, and end-to-end application testing to ensure system reliability, functionality, and a seamless user experience.",
        "Assisted in identifying, troubleshooting, and resolving application issues during development and testing phases.",
        "Collaborated with team members using Git and GitHub for version control, code management, and project coordination.",
        "Gained practical experience in software development methodologies, debugging techniques, testing processes, and application lifecycle management.",
        "Presented the project to mentors and evaluators through project demonstrations and technical discussions, effectively communicating project functionality, contributions, and outcomes.",
      ],
    },
  ];

  return (
    <div>
      <div className="experience">
        <h1>Experience</h1>
      </div>

      {experiences.map((exp, index) => (
        <div className="experience1" key={index}>
          <h1>
            <span className="span">{exp.role}</span>
          </h1>

          <p>
            <h3 style={{ display: "inline" }}>{exp.company}</h3> ({exp.duration}
            )
            <br />
            <br />
            {exp.points.map((point, i) => (
              <React.Fragment key={i}>
                • {point}
                <br />
              </React.Fragment>
            ))}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Experience;
