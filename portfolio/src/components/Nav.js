import React from "react";
import logo from "../images/logo.png";
import "../styles/nav.css";

import resume from "../images/resume.pdf";

const Nav = () => {
  return (
    <nav>
      <a href="#home">
        <img src={logo} alt="mylogo" />
      </a>
      <ol className="links">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#work">Work</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <a className="resume" href={resume}>
          Resume
        </a>
      </ol>
    </nav>
  );
};

export default Nav;
