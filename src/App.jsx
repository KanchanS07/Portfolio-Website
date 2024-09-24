// import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home.jsx";
import About from "./components/About";
import Education from "./components/Education.jsx";
import Projects from "./components/ProjectsSection.jsx";
import Contact from "./components/ContactMe.jsx";
import Footer from "./components/footer.jsx"
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />

      <section id="home" className="section">
        <Home />
      </section>

      <section id="projects" className="section">
        <Projects />
      </section>

      <section id="about" className="section">
        <About />
      </section>

      <section id="education" className="section">
        <Education />
      </section>

      <section id="contactMe" className="section">
        <Contact />
      </section>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
