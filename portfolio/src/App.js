import Nav from "./components/Nav";
import "../src/styles/index.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Jobs from "./components/Jobs";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Jobs />
      <Projects />
    </>
  );
}

export default App;
