import React from "react";
import videoSrc from "./images/background.mp4";

function Experience() {
  return (
    <div>
      <video autoPlay loop muted className="background-video">
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div class="experience">
        <h1>Experience</h1>
      </div>
      <div class="experience1">
        <h1>
          <span class="span">Data Analyst (Virtual internship)</span>
        </h1>
        <p>
          <h3>Accenture</h3> (March - May 2024)
          <br />
          Performed data cleaning on large datasets about 25,000+ Rows to ensure
          accuracy and consistency.
          <br />
          Implemented data visualizations using tools such as Power BI and
          Prepared a comprehensive report on the project, summarizing key
          insights.
        </p>
        {/* <a href="#">internship Certificate</a> */}
      </div>
    </div>
  );
}

export default Experience;
