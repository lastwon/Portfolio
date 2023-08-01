import React, { useState } from "react";

import "../styles/projects.css";

import { FaQuestion } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FiExternalLink } from "react-icons/fi";

import shope from "../images/shope.jpg";
import expense from "../images/budgetmakers.jpg";
import architecture from "../images/vantage.jpg";
import webfolio from "../images/webfolio.jpg";
import restaurante from "../images/restaurante.png";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const AllProjects = [
    {
      id: 1,
      link: "https://e-shope-60kk.onrender.com/",
      git: "https://github.com/lastwon/E-Shop",
      name: "Shope",
      desc: "E-commerce platform I developed, featuring key enhancements such as product comments and ratings, a fully functional product cart system, product stock unit checks, product previews, a system for displaying similar products, a product search engine, and authentication. More about the features can be found on my GitHub.",
      used: ["React", "Node.js", "Express.js", "MySQL"],
      demo: ["test@test.com", "Test123*"],
      note: "The project is hosted on a free hosting service, so loading times may be a bit longer than usual!",
      img: shope,
    },
    {
      id: 2,
      link: "https://budgetmakers.netlify.app/",
      git: "https://github.com/lastwon/React-Expense-Tracker",
      name: "Expense Tracker",
      desc: "The app allows user to enter expenses based on the date which he can see later in the graph by optionally selecting a year.",
      used: ["HTML", "CSS", "JavaScript", "React"],
      img: expense,
    },
    {
      id: 3,
      link: "https://vantage-studio.netlify.app/",
      git: "https://github.com/lastwon/Vantage",
      name: "Architecture Landing Page",
      desc: "Landing page built with HTML and CSS using design from Figma",
      used: ["HTML", "CSS", "Figma"],
      img: architecture,
    },
    {
      id: 4,
      link: "https://designer-webfolio.netlify.app/",
      git: "https://github.com/lastwon/Webfolio",
      name: "Designer Landing Page",
      desc: "Landing page built with HTML and CSS using design from Figma",
      used: ["HTML", "CSS", "Figma"],
      img: webfolio,
    },
    {
      id: 5,
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
                  {project.demo ? (
                    <div
                      className="tooltip-container"
                      onMouseEnter={() => setHoveredProject(project.id)}
                      onMouseLeave={() => setHoveredProject(null)}
                    >
                      <button>DEMO ACCOUNT</button>
                      {hoveredProject === project.id && (
                        <div className="tooltip">
                          Demo: <br />
                          <u>Username:</u> {project.demo[0]} <br />
                          <u>Password:</u> {project.demo[1]}
                        </div>
                      )}
                    </div>
                  ) : (
                    ""
                  )}
                  {project.note ? (
                    <div
                      className="tooltip-container"
                      onMouseEnter={() => setHoveredProject(project.id)}
                      onMouseLeave={() => setHoveredProject(null)}
                    >
                      <button>
                        <FaQuestion style={{ width: "20px", height: "20px" }} />
                      </button>
                      {hoveredProject === project.id && (
                        <div className="tooltip">{project.note}</div>
                      )}
                    </div>
                  ) : (
                    ""
                  )}
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
