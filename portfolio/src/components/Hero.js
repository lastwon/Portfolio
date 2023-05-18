import React from "react";
import "../styles/hero.css";

import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";

const Hero = () => {
  return (
    <>
      <div className="side-left">
        <ul className="side-socials">
          <li>
            <a
              href="https://github.com/lastwon"
              target="_blank"
              rel="noreferrer"
            >
              <FiGithub style={{ width: "20px", height: "20px" }} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/dainius-strazdas/"
              target="_blank"
              rel="noreferrer"
            >
              <FiLinkedin style={{ width: "20px", height: "20px" }} />
            </a>
          </li>
        </ul>
      </div>
      <div className="side-right">
        <div className="side-email">
          <a
            href="mailto:contact@dainiusstrazdas.tech"
            target="_blank"
            rel="noreferrer"
          >
            contact@dainiusstrazdas.tech
          </a>
        </div>
      </div>
      <section id="home">
        <h1>Hi, my name is</h1>
        <h2 className="big-heading">Dainius Strazdas.</h2>
        <h3 className="big-heading">I build things for the web.</h3>
        <p>
          I'm a front end developer with a passion for creating beautiful,
          intuitive interfaces that make users lives easier. Whether you're
          looking to build a new website or improve an existing one, I have the
          skills and expertise to help bring your vision to life.
        </p>
        <a className="big_button" href="#work">
          Check out my projects!
        </a>
      </section>
    </>
  );
};

export default Hero;
