import React from "react";

function Experience() {
  return (
    <div>
      <div class="experience">
        <h1>Experience</h1>
      </div>
      <div class="experience1">
        <h1>
          <span class="span">Project Admin</span>
        </h1>
        <p>
          <h3>GSSoC 2025 (GirlScript Summer of Code)</h3> (June 2025 - present)
          <br />
          Collaborated with 20+ developers to improve a stock price prediction
          model and deployed it as a fullstack web app with real-time financial
          data, leading to 5% better prediction accuracy.
          <br />
          Built ETL pipelines using Python (Pandas, yfinance) and scheduled
          daily data fetches with Apache Airflow, processing 100,000+ stock
          records at once.
        </p>
      </div>
      <div class="experience1">
        <h1>
          <span class="span">Data Science Intern</span>
        </h1>
        <p>
          <h3>Skilltmate Technologies</h3> (May 2024 - June 2024)
          <br />
          Developed and optimized machine learning models for predictive
          analysis, improving accuracy in data-driven decision-making.
          <br />
          Preprocessed large datasets using Python libraries like Pandas and
          NumPy, enhancing model efficiency and performance.
        </p>
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
      </div>
    </div>
  );
}

export default Experience;
