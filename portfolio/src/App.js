import Nav from "./components/Nav";
import "../src/styles/index.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Jobs from "./components/Jobs";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Jobs />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
