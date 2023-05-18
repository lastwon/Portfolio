import React from "react";

import "../styles/footer.css";

import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer>
      <ul className="footer-links">
        <li>
          <a href="">
            <FiGithub style={{ width: "20px", height: "20px" }} />
          </a>
        </li>
        <li>
          <a href="">
            <FiLinkedin style={{ width: "20px", height: "20px" }} />
          </a>
        </li>
      </ul>
      <div className="footer-text">
        <a
          href="https://github.com/lastwon/Portfolio/tree/main/portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          © {year} Dainius Strazdas
        </a>
      </div>
    </footer>
  );
};

export default Footer;
