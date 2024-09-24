// import React from "react";
import "./Navbar.css";

function Navbar() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <video  autoPlay muted>
        <source src="/public/video/nameVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <ul className="nav-links">
        <li onClick={() => scrollToSection("home")}>Home</li>
        <li onClick={() => scrollToSection("projects")}>Projects</li>
        <li onClick={() => scrollToSection("about")}>About</li>
        <li onClick={() => scrollToSection("education")}>Education</li>
      </ul>
      <button className="red-btn contact-btn" onClick={() => scrollToSection("contactMe")}>Contact Me</button>
    </nav>
  );
}

export default Navbar;
