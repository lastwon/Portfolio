import React from "react";
import "../styles/hero.css";

const Hero = () => {
  return (
    <main>
      <section>
        <h1>Hi, my name is</h1>
        <h2 className="big-heading">Dainius Strazdas.</h2>
        <h3 className="big-heading">I build things for the web.</h3>
        <p>
          I'm a front end developer with a passion for creating beautiful,
          intuitive interfaces that make users lives easier. Whether you're
          looking to build a new website or improve an existing one, I have the
          skills and expertise to help bring your vision to life.
        </p>
        <a className="big_button" href="">
          Check out my projects!
        </a>
      </section>
    </main>
  );
};

export default Hero;
