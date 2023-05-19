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

  const navItems = [
    { text: "About", delay: 0 },
    { text: "Experience", delay: 100 },
    { text: "Work", delay: 200 },
    { text: "Contact", delay: 300 },
  ];

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className={navClass}>
      <a
        href="#home"
        style={{ transitionDelay: "0ms", opacity: mounted ? "1" : "0" }}
      >
        <img src={logo} alt="mylogo" />
      </a>
      <ol className="links">
        {navItems.map((item, index) => (
          <li
            key={index}
            style={{
              transitionDelay: `${item.delay}ms`,
              transform: mounted ? "translateY(0%)" : "translateY(-200%)",
            }}
          >
            <a href={`#${item.text.toLowerCase()}`}>{item.text}</a>
          </li>
        ))}
        <a
          className="resume"
          href={resume}
          target="_blank"
          rel="noreferrer noopener"
          style={{
            transitionDelay: "400ms",
            transform: mounted ? "translateY(0%)" : "translateY(-200%)",
          }}
        >
          Resume
        </a>
      </ol>
    </nav>
  );
};

export default Nav;
