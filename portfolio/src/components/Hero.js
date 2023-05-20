import React from "react";
import { useInView, animated } from "@react-spring/web";

import "../styles/hero.css";

import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";

const Hero = () => {
  const [leftRef, leftSprings] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 0,
      },
      to: {
        opacity: 1,
        y: 0,
      },
    }),
    {
      rootMargin: "0% 0%",
      once: true,
    }
  );

  const [rightRef, rightSprings] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 0,
      },
      to: {
        opacity: 1,
        y: 0,
      },
    }),
    {
      rootMargin: "0% 0%",
      once: true,
    }
  );

  const [oneRef, oneSprings] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: -200,
      },
      to: {
        opacity: 1,
        y: 0,
      },
    }),
    {
      rootMargin: "0% 0%",
      once: true,
    }
  );

  const [twoRef, twoSprings] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 200,
      },
      to: {
        opacity: 1,
        y: 0,
      },
    }),
    {
      rootMargin: "0% 0%",
      once: true,
    }
  );

  return (
    <>
      <animated.div ref={leftRef} style={leftSprings}>
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
      </animated.div>
      <animated.div ref={rightRef} style={rightSprings}>
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
      </animated.div>
      <section id="home">
        <animated.div ref={oneRef} style={oneSprings}>
          <h1>Hi, my name is</h1>
          <h2 className="big-heading">Dainius Strazdas.</h2>
          <h3 className="big-heading">I build things for the web.</h3>
        </animated.div>
        <animated.div ref={twoRef} style={twoSprings}>
          <p>
            I'm a front end developer with a passion for creating beautiful,
            intuitive interfaces that make users lives easier. Whether you're
            looking to build a new website or improve an existing one, I have
            the skills and expertise to help bring your vision to life.
          </p>
          <a className="big_button" href="#work">
            Check out my projects!
          </a>
        </animated.div>
      </section>
    </>
  );
};

export default Hero;
