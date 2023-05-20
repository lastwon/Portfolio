import React from "react";

import "../styles/projects.css";

import { FiGithub } from "react-icons/fi";
import { FiExternalLink } from "react-icons/fi";

import expense from "../images/budgetmakers.jpg";
import architecture from "../images/vantage.jpg";
import webfolio from "../images/webfolio.jpg";
import restaurante from "../images/restaurante.png";

const Projects = () => {
  const AllProjects = [
    {
      id: 1,
      link: "https://www.google.com/",
      git: "https://github.com/lastwon/React-Expense-Tracker",
      name: "Expense Tracker",
      desc: "The app allows user to enter expenses based on the date which he can see later in the graph by optionally selecting a year.",
      used: ["HTML", "CSS", "JavaScript", "React"],
      img: expense,
    },
    {
      id: 2,
      link: "https://www.google.com/",
      git: "https://github.com/lastwon/Vantage",
      name: "Architecture Landing Page",
      desc: "Landing page built with HTML and CSS using design from Figma",
      used: ["HTML", "CSS", "Figma"],
      img: architecture,
    },
    {
      id: 3,
      link: "https://www.google.com/",
      git: "https://github.com/lastwon/Webfolio",
      name: "Designer Landing Page",
      desc: "Landing page built with HTML and CSS using design from Figma",
      used: ["HTML", "CSS", "Figma"],
      img: webfolio,
    },
    {
      id: 4,
      link: "https://restaurante-vj7y.onrender.com/",
      git: "https://github.com/lastwon/Restaurant",
      name: "Restaurante",
      desc: "The app allows users to share his favorite restaurant, all data user entered save in the JSON fle.",
      used: [
        "HTML",
        "CSS",
        "JavaScript",
        "Unsplash API",
        "Node.js",
        "Express.js",
      ],
      img: restaurante,
    },
  ];

  return (
    <section id="work" className="projects-section">
      <h2 className="numbered-heading">Some Things I've Built</h2>
      <ul className="projects">
        {AllProjects.map((project) => (
          <li key={project.id}>
            <div className="project-content">
              <div>
                <p className="project-overline">Project</p>
                <h3 className="project-title">
                  <a href={project.link} target="_blank" rel="noreferrer">
                    {project.name}
                  </a>
                </h3>
                <div className="project-description">
                  <p>{project.desc}</p>
                </div>
                <ul className="project-tech">
                  {project.used.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
                <div className="project-links">
                  <a href={project.git} target="_blank" rel="noreferrer">
                    <FiGithub style={{ width: "20px", height: "20px" }} />
                  </a>
                  <a href={project.link} target="_blank" rel="noreferrer">
                    <FiExternalLink
                      style={{
                        width: "20px",
                        height: "20px",
                        marginTop: "-4px",
                      }}
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="project-image">
              <a href={project.link} target="_blank" rel="noreferrer">
                <div className="project-img-wrapper">
                  <div className="wrapper-div">
                    <img src={project.img} alt={project.name} />
                  </div>
                </div>
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
