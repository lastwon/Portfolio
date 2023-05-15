import React, { useState } from "react";
import "../styles/jobs.css";
import Job from "./Job";

const Jobs = () => {
  const [selectedJobId, setSelectedJobId] = useState(1);

  const handleJobButtonClick = (id) => {
    setSelectedJobId(id);
  };

  const jobs = [
    { id: 1, title: "First", desc: "First work" },
    { id: 2, title: "Second", desc: "Work" },
    { id: 3, title: "Third", desc: "Work" },
    { id: 4, title: "Fourth", desc: "Work" },
    { id: 5, title: "Fifth", desc: "Work" },
  ];

  return (
    <section className="experience">
      <h2 className="numbered-heading">Experience I've Got</h2>
      <div className="innerr">
        <div className="job-list">
          {jobs.map((job) => (
            <button
              key={job.id}
              className={`job-button ${
                job.id === selectedJobId ? "active" : ""
              }`}
              onClick={() => handleJobButtonClick(job.id)}
            >
              <span>{job.title}</span>
            </button>
          ))}
        </div>
        <div className="jobs">
          {selectedJobId &&
            jobs.map(
              (job) =>
                job.id === selectedJobId && (
                  <span key={job.id} className="show">
                    <Job id={job.id} title={job.title} desc={job.desc} />
                  </span>
                )
            )}
        </div>
      </div>
    </section>
  );
};

export default Jobs;
