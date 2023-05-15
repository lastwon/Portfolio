import React from "react";
import "../styles/jobs.css";

const Job = ({ id, title, desc }) => {
  return (
    <div className="job-panels">
      <div className="job-panel">
        <h3>{title}</h3>
        <ul>
          <li>{desc}</li>
        </ul>
      </div>
    </div>
  );
};

export default Job;
