import React, { useState } from "react";
import "../styles/jobs.css";
import Job from "./Job";

const Jobs = () => {
  const [selectedJobId, setSelectedJobId] = useState(1);

  const handleJobButtonClick = (id) => {
    setSelectedJobId(id);
  };

  const jobs = [
    {
      id: 1,
      company: "Fitsout",
      role: "Team Leader",
      when: "April - May 2023",
      desc: [
        "Checking product quality, ensuring that quality standards were met",
        "Make sure all people have a job and materials for product assembly",
      ],
    },
    {
      id: 2,
      company: "Narbutas",
      role: "Team Leader",
      when: "January 2021 - October 2022",
      desc: [
        "Was responsible for overseeing and coordinating the day-to-day operations of the production line",
        "Managed a team of 24 employees",
        "Ensuring that quality standards were met and that the production line was running efciently",
      ],
    },
    {
      id: 3,
      company: "Narbutas",
      role: "Work organizer",
      when: "September 2017 - January 2021",
      desc: [
        "Had to solve problems that have arisen",
        "Communicate with other people, leading that the products the production line ran smoothly, and that deadlines were met",
      ],
    },
    {
      id: 4,
      company: "Narbutas",
      role: "Cabinet assembler-packer",
      when: "August 2015 - September 2017",
      desc: [
        "Had to assemble the cabinets, when needed go to pack them",
        "Memorize the color codes of production",
        "Speed and critical thinking was most important thing",
      ],
    },
  ];

  return (
    <section className="experience">
      <h2 className="numbered-heading">Where I've Worked</h2>
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
              <span>{job.company}</span>
            </button>
          ))}
        </div>
        <div className="jobs">
          {selectedJobId &&
            jobs.map(
              (job) =>
                job.id === selectedJobId && (
                  <span key={job.id} className="show">
                    <Job
                      id={job.id}
                      company={job.company}
                      role={job.role}
                      when={job.when}
                      desc={job.desc}
                    />
                  </span>
                )
            )}
        </div>
      </div>
    </section>
  );
};

export default Jobs;
