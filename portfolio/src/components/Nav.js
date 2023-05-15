import React from "react";
import logo from "../images/logo.png";
import "../styles/nav.css";

const Nav = () => {
  return (
    <nav>
      <img src={logo} alt="mylogo" />
      <ol className="links">
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Experience</a>
        </li>
        <li>
          <a href="">Work</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
        <a className="resume" href="">
          Resume
        </a>
      </ol>
    </nav>
  );
};

export default Nav;
