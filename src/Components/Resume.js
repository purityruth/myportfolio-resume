import React, { Component } from "react";
import Slide from "react-reveal";
import Fade from "react-reveal";

class Resume extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;

    const skillmessage = this.props.data.skillmessage;
    const education = this.props.data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      );
    });

    const work = this.props.data.work.map(function (work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <p>{work.description}</p>
        </div>
      );
    });

    const stacks = this.props.data.stacks.map((stacks) => {
      const backgroundColor = this.getRandomColor();
      const className = "bar-expand " + stacks.name.toLowerCase();
      const width = stacks.level;

      return (
        <li key={stacks.name}>
          <span style={{ width, backgroundColor }} className={className}></span>
          <em>{stacks.name}</em>
        </li>
      );
    });

    const skills = this.props.data.skills.map((skill, index) => {
      return (
        <div key={index} className="skill-card m-3 p-4">
          <h3 className="mb-4" style={{ color: "#222" }}>{skill.title}</h3>
          <p>{skill.description}</p>
        </div>
      );
    });

    return (
      <section id="resume">
        {/* <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Education</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{education}</div>
              </div>
            </div>
          </div>
        </Slide> */}

        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Work</span>
              </h1>
            </div>

            <div className="nine columns main-col">{work}</div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row container d-flex flex-column align-items-center text-center">
            <h1 className="mb-4" style={{ color: "#222" }}>
              <span>Skills</span>
            </h1>

            <p>
              I bring a wealth of experience in <strong>software development</strong>, 
              <strong> full-stack engineering</strong>, and <strong>technology leadership</strong>. 
              My expertise spans across <strong>backend and frontend development</strong>, 
              <strong> cloud infrastructure</strong>, <strong>DevOps</strong>, 
              <strong> AI/ML</strong>, and <strong>cybersecurity</strong>. 
              As a CTO-level professional, I specialize in building scalable digital solutions, 
              optimizing software performance, and leading high-impact development teams.
            </p>

            <div className="skills-container d-flex flex-wrap justify-content-center">
              {skills}
            </div>
          </div>
        </Slide>


        <Slide left duration={1300}>
          <div className="row stack">
            <div className="three columns header-col">
              <h1>
                <span>Stacks</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <p>{skillmessage}</p>

              

              <div className="bars">
                <ul className="skills">{stacks}</ul>
              </div>
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Resume;
