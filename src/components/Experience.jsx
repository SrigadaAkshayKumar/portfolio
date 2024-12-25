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
          <span class="span">Internship</span> :
        </h1>
        <p>
          Position : Junior Developer
          <br />
          Skilltmate Technologies
          <br />
          Address: Plot No. 13, Patel Encalve, Sri Shyam Nagar, Telecom Nagar,
          Yapral, Hyderabad, Telangana 500087
        </p>
        <a href="#">internship Certificate</a>
      </div>
    </div>
  );
}

export default Experience;
