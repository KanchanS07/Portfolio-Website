/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import "./ProjectCard.css";

import  { FaGithub, FaLink } from "react-icons/fa";


const ProjectCard = ({
  id,
  projectNumber,
  direction,
  skills,
  heading,
  subHeading,
  readMoreLink,
  githubLink,
  liveLink}
) => {
  return (
    // <div className="project-card" id={id}>
    <div
      className={`project-card ${
        direction === "right" ? "project-number-right" : "project-number-left"
      }`}
      id={id}
    >
      <div
        className={`project-number ${
          direction === "right" ? "project-number-right" : "project-number-left"
        }`}
      >
        {projectNumber}
      </div>
      <div
        className={`project-content ${
          direction === "right"
            ? "project-content-left"
            : "project-content-right"
        }`}
      >
        <div className="project-skill-container">
          {skills.map((skill, index) => (
            <img
              key={index}
              className="project-skill"
              src={skill.src}
              alt={skill.alt}
            />
          ))}
        </div>
        <h2 className="project-heading">{heading}</h2>
        <p className="project-subHeading">{subHeading}</p>
        <div className="btn-group">
          <a target="_blank" rel="noreferrer" href={readMoreLink}>
            <button className="red-btn btn-project">Read More</button>
          </a>
          &nbsp;
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <FaGithub
                title="GitHub Link"
                className="icon"
                aria-hidden="true"
              />
            </a>
          )}
          {liveLink && (
            <a href={liveLink} target="_blank" rel="noopener noreferrer">
              <FaLink title="Live Link" className="icon" aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </div>
    // </div>
  );
};

export default ProjectCard;
