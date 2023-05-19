import React, { useState, useEffect } from "react";

import Nav from "./components/Nav";
import "../src/styles/index.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Jobs from "./components/Jobs";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Nav />
          <main>
            <Hero />
            <About />
            <Jobs />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
