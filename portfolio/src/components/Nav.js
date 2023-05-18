import React, { useEffect, useState } from "react";
import logo from "../images/logo.png";
import "../styles/nav.css";

import resume from "../images/resume.pdf";

const Nav = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = prevScrollPos > currentScrollPos;

      setPrevScrollPos(currentScrollPos);
      setVisible(visible);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const navClass = `${visible ? "shadow" : "nav-hidden"} ${
    window.pageYOffset < 50 ? "no-shadow" : ""
  }`;

  return (
    <nav className={navClass}>
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
