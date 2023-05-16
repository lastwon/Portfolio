import React from "react";
import "../styles/jobs.css";

const Job = ({ id, company, role, when, desc }) => {
  return (
    <div className="job-panels">
      <div className="job-panel">
        <h3>
          {role}
          <span> @ {company}</span>
        </h3>
        <p className="when">{when}</p>
        <ul>
          {desc.map((description, index) => (
            <li key={index}>{description}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Job;
