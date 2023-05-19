import React from "react";

import loader from "../images/D.gif";

import "../styles/loader.css";

const Loader = () => {
  return (
    <div className="loader">
      <img src={loader} alt="loader" />
    </div>
  );
};

export default Loader;
