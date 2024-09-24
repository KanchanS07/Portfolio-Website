// eslint-disable-next-line no-unused-vars
import React from "react";
import ProjectCard from "./ProjectCard";
import "./ProjectsSection.css";
const ProjectsSection = () => {
  const projects = [
    {
      id: "project_1",
      number: "01",
      direction: "right",
      skills: [
        { src: "./images/stack/React.png", alt: "React" },
        { src: "./images/stack/Redux.svg", alt: "Redux" },
        { src: "./images/stack/NodeJs.svg", alt: "NodeJs" },
        { src: "./images/stack/Tailwind.png", alt: "Tailwind" },
        { src: "./images/stack/Express.png", alt: "Express" },
        { src: "./images/stack/MongoDB.svg", alt: "MongoDB" },
        { src: "./images/stack/Vercel.svg", alt: "Vercel" },
        { src: "./images/stack/bcrypt.svg", alt: "bcrypt" },
      ],
      heading: "StudyNotion",
      subHeading:
        "StudyNotion is a comprehensive web-based platform that brings together students and instructors, empowering a dynamic and interactive learning environment.",
      readMoreLink: "#",
      githubLink: "https://github.com/KanchanS07/StudyNotion.git",
      liveLink: "https://study-notion-rosy-seven.vercel.app/",
    },
    {
      id: "project_2",
      number:"02",
      direction: "left",
      skills: [
        { src: "./images/stack/HTML.png", alt: "HTML" },
        { src: "./images/stack/CSS.png", alt: "CSS" },
        { src: "./images/stack/Javascript.svg", alt: "JavaScript" },
        { src: "./images/stack/Vite.png", alt: "Vite" },
      ],
      heading: "Spotify 2.0",
      subHeading:
        "A fully responsive Spotify clone, built with HTML, CSS, and JavaScript, offering diverse music libraries for every mood and device.",
      readMoreLink: "#",
      githubLink: "https://github.com/KanchanS07/Spotify_2.0.git",
      liveLink: "#",
    },
    {
      id: "project_3",
      number: "03",
      direction: "right",
      skills: [
        { src: "./images/stack/React.png", alt: "React" },
        { src: "./images/stack/NodeJs.svg", alt: "NodeJs" },
        { src: "./images/stack/Express.png", alt: "Express" },
        { src: "./images/stack/MongoDB.svg", alt: "MongoDB" },
        { src: "./images/stack/Vite.png", alt: "Vite" },
      ],
      heading: "The Plasma Sage ",
      subHeading:
        "Developed a Blood Donation website using React for the front-end, Express.js and Node.js for the back-end, with MongoDB for database storage.",
      readMoreLink: "#",
      githubLink: "https://github.com/KanchanS07/The-Plasma-Sage.git",
      liveLink: "#",
    },
    {
      id: "project_4",
      number: "04",
      direction: "left",
      skills: [
        { src: "./images/stack/HTML.png", alt: "HTML" },
        { src: "./images/stack/CSS.png", alt: "CSS" },
        { src: "./images/stack/api.svg", alt: "API" },
      ],
      heading: "Weather Forecasting",
      subHeading:
        "A platform to find Weather infromation of selected location eitherby GPS or manually entered location.",
      readMoreLink: "#",
      githubLink: "https://github.com/KanchanS07/WEATHER-APP.git",
      liveLink: "#",
    },
    {
      id: "project_5",
      number: "05",
      direction: "right",
      skills: [{ src: "./images/stack/HTML.png", alt: "HTML" },
        { src: "./images/stack/CSS.png", alt: "CSS" },
      ],
      heading: "Netflix Clone",
      subHeading:
        "Created a fully responsive Netflix clone using HTML and CSS, replicating the user interface and design for a seamless streaming experience across all devices.",
      readMoreLink: "#",
      githubLink: "https://github.com/KanchanS07/Netflix-Clone.git",
      liveLink: "#",
    },
  ];

  return (
    <div className="project-section">
      <h2 className="page-header">Projects</h2>
      <div className="project-container">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            id={project.id}
            projectNumber={project.number}
            direction={project.direction}
            skills={project.skills}
            heading={project.heading}
            subHeading={project.subHeading}
            readMoreLink={project.readMoreLink}
            githubLink={project.githubLink}
            liveLink={project.liveLink}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
