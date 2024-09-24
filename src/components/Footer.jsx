// import React from "react";
import "./Footer.css"; // Make sure to create this CSS file
import { FaGithub, FaLinkedin,FaTwitter, FaInstagram,FaEnvelope } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="container">
      <div className="footer-wrapper">
        <div className="footer-faded-text">
          &nbsp; &nbsp; &nbsp; © 2024. All rights reserved by Kanchan Soni
        </div>

        <div className="link-wrapper">
          <div>
            <a href="#projects">Projects</a>
          </div>
          <div>
            <a href="#skills">Skills</a>
          </div>
          <div>
            <a href="#education">Education</a>
          </div>
          <div>
            <a href="#contactme">Contact Me</a>
          </div>
        </div>

        <div className="icon-wrapper">
          <a
            href="https://www.linkedin.com/in/kanchan-soni-641b62196"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin title="LinkedIn" className="icon" aria-hidden="true" />
          </a>
          <a
            href="https://github.com/KanchanS07"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub title="GitHub Link" className="icon" aria-hidden="true" />
          </a>
          <a
            href="https://x.com/Kanchan27782669"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter title="Twitter" className="icon" aria-hidden="true" />
          </a>
          <a
            href="https://www.instagram.com/kanchansoni_0703?igsh=NjY2MjRid2I0Z2I5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram
              title="Instagram"
              className="icon"
              aria-hidden="true"
            />
          </a>
          <a
            href="mailto:kanchansoni0703@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope title="Mail Me" className="icon" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
