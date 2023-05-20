import React, { useEffect, useState } from "react";
import { useInView, animated } from "@react-spring/web";

import logo from "../images/logo.png";
import "../styles/nav.css";

import resume from "../images/resume.pdf";

const Nav = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [open, setOpen] = useState(false);

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

  const [resumeRef, resumeSprings] = useInView(
    () => ({
      from: {
        opacity: 0,
        transform: "translateY(-100%)",
      },
      to: {
        opacity: 1,
        transform: "translateY(0%)",
      },
    }),
    {
      rootMargin: "0% 0%",
      once: true,
    }
  );

  const [resumemobileRef, resumemobileSprings] = useInView(
    () => ({
      from: {
        opacity: 0,
        transform: "translateY(-100%)",
      },
      to: {
        opacity: 1,
        transform: "translateY(0%)",
      },
    }),
    {
      rootMargin: "0% 0%",
      once: true,
    }
  );

  const handleOpen = () => {
    setOpen(!open);
  };

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
        <animated.div ref={resumeRef} style={resumeSprings}>
          <a
            className="resume"
            href={resume}
            target="_blank"
            rel="noreferrer noopener"
          >
            Resume
          </a>
        </animated.div>
      </ol>

      <div className="ham-box" onClick={handleOpen}>
        <div className={open ? "ham-open" : "ham-inner"}></div>
      </div>
      <ol className={open ? "mobile" : "none"}>
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
        <animated.div ref={resumemobileRef} style={resumemobileSprings}>
          <a
            className="resume"
            href={resume}
            target="_blank"
            rel="noreferrer noopener"
          >
            Resume
          </a>
        </animated.div>
      </ol>
    </nav>
  );
};

export default Nav;
