import React from "react";

import "../styles/footer.css";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer>
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
