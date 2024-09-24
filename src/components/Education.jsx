// import React from "react";
import "./Education.css";
import "./About.css";

const Education = () => {
  return (
    <div id="skills" className="skills-container container">
      <div className="skill-fade-text">Education</div>
      <div className="skill-container-left">
        <h2 className="skill-heading">
          <span className="caps">Education</span>
        </h2>

        <div className="skill-subHeading">
          <p>
            Throughout my educational journey, I have consistently showcased
            strong academic performance. I completed my secondary education at{" "}
            <a
              id="academic_link"
              href="https://stpetersschooljaswantnagar.edu.in/"
            >
              ST. Peters School
            </a>
            , affiliated with the CBSE Board, where I earned an impressive
            overall CGPA of 8.0. Building on this foundation, I continued my
            higher secondary education at the same school, specializing in PCM,
            and achieved a commendable overall CGPA of 7.86.
          </p>
          <p>
            My keen interest in computer science led me to pursue a Bachelor of
            Computer Applications (BCA) at{" "}
            <a id="academic_link" href="https://iimtaligarh.com/">
              {" "}
              Institute of Information Management and Technology, Aligarh
            </a>
            , affiliated with{" "}
            <a id="academic_link" href="http://www.dbrau.org.in/">
              {" "}
              DR. B.R. Ambedkar University, Agra
            </a>
            . During the three-year program, I immersed myself in various
            computer science domains, ultimately developing a passion for web
            development. I successfully completed the BCA program with an
            overall CGPA of 8.2.
          </p>
          <p>
            Motivated by a desire to deepen my knowledge and skills, I enrolled
            in the Master of Computer Applications (MCA) program at{" "}
            <a id="academic_link" href="https://www.lkouniv.ac.in/">
              Lucknow University, University of Lucknow
            </a>
            {". "} I completed the program with an overall CGPA of 8.42,
            showcasing my ability to thrive in a rigorous academic environment.
          </p>
          <p>
            With a strong academic foundation and a genuine passion for computer
            science, I am excited to take on new challenges, expand my skill
            set, and make meaningful contributions to the field of technology.
          </p>
        </div>
      </div>

      <div className="skill-container-right" id="education">
        <main className="row">
          <section className="col">
            <div className="contents">
              <div className="box">
                <h3>Master of Computer Applications</h3>
                <h4>2022-2024</h4>
                <p>
                  <a
                    href="https://www.lkouniv.ac.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Lucknow University, Lucknow
                  </a>
                </p>
                <h4>8.42/10.0</h4>
              </div>
              <div className="box">
                <h3>Bachelor of Computer Applications</h3>
                <h4>2019-2022</h4>
                <p>
                  <a
                    href="https://iimtaligarh.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Institute of Information Management & Technology, Aligarh
                  </a>
                </p>
                <h4>8.2/10.0</h4>
              </div>
              <div className="box">
                <h3>Senior Secondary School</h3>
                <h4>2016-2018</h4>
                <p>
                  <a
                    href="https://stpetersschooljaswantnagar.edu.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ST Peters School, jaswantnagar
                  </a>
                </p>
                <h4>7.86/10.0</h4>
              </div>
              <div className="box">
                <h3>Secondary School</h3>
                <h4>2015-2016</h4>
                <p>
                  <a
                    href="https://www.sjdschool.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ST Peters School, jaswantnagar
                  </a>
                </p>
                <h4>8.0/10.0</h4>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Education;
