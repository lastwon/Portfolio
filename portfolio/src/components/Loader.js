import React from "react";

import "../styles/loader.css";

const Loader = () => {
  return (
    <div className="loader">
      <div class="cube"></div>
      <div class="cube"></div>
      <div class="cube"></div>
      <div class="cube"></div>
      <div class="cube"></div>
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    </div>
  );
};

export default Loader;
