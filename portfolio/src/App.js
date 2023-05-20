import React, { useState, useEffect } from "react";
import { useInView, animated } from "@react-spring/web";

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

  const [aboutRef, aboutSprings] = useInView(
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
      rootMargin: "-40% 0%",
      once: "true",
    }
  );

  const [jobsRef, jobsSprings] = useInView(
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
      rootMargin: "-40% 0%",
      once: "true",
    }
  );

  const [projectsRef, projectsSprings] = useInView(
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
      rootMargin: "-40% 0%",
      once: "true",
    }
  );

  const [contactRef, contactSprings] = useInView(
    () => ({
      from: {
        opacity: -200,
        y: 0,
      },
      to: {
        opacity: 1,
        y: 0,
      },
    }),
    {
      rootMargin: "-10% 0%",
      once: "true",
    }
  );

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
            <animated.div ref={aboutRef} style={aboutSprings}>
              <About />
            </animated.div>
            <animated.div ref={jobsRef} style={jobsSprings}>
              <Jobs />
            </animated.div>
            <animated.div ref={projectsRef} style={projectsSprings}>
              <Projects />
            </animated.div>
            <animated.div ref={contactRef} style={contactSprings}>
              <Contact />
            </animated.div>
          </main>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
