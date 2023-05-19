import "../styles/about.css";
import dainius from "../images/Dainius.jpg";

const About = () => {
  return (
    <section id="about">
      <h2 className="numbered-heading">About Me</h2>
      <div className="inner">
        <div>
          <p>
            Hello! My name is Dainius and I enjoy creating things that live on
            the internet. My interest in web development started with just
            connecting PHP scripts and trying things out, which taught me a lot
            about HTML, CSS, JavaScript, and MySQL.
          </p>
          <p>
            Fast-forward from that time, I'm fascinated by how a product can be
            launched to people who will be able to use it. My main focus these
            days is building products and constantly learning new things every
            day.
          </p>
          <p>
            I am also studying software engineering at Kauno Kolegija, where I'm
            deepening my knowledge.
          </p>
          <p>Here are a few technologies I've been working with recently:</p>
          <ul className="skills-list">
            <li>HTML</li>
            <li>React</li>
            <li>CSS</li>
            <li>Node.js</li>
            <li>JavaScript (ES6+)</li>
            <li>MySQL</li>
          </ul>
        </div>
        <div className="about">
          <div className="wrapper">
            <div className="img">
              <img src={dainius} alt="Dainius Strazdas" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
