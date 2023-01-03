import React from "react";
import { Link as ScrollLink } from "react-scroll";
import ImageGallery from "react-image-gallery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCode, faLink } from "@fortawesome/free-solid-svg-icons";
import data from "../assets/api/project_info.json";
import "./css/Projects.css";

import { dlModeContext } from "../contexts/dlMode";

const LatestProjectInfo = data[0]; //store latest project
const projectInfo = data.slice(1, data.length); //store remaining projects

function ProjectDescription({ project, latest, dlMode }) {
  return (
    <>
      <h2 className={`project-title ${dlMode ? "black" : "white"}`}>
        Introducing{" "}
        <span style={{ color: project.primaryColor }}>{project.name}!</span>
      </h2>
      <h3 className={`project-stack ${dlMode ? "black" : "white"}`}>
        Tech Stack: {project.stack}
      </h3>
      <div className={latest ? "width-size" : null}>
        <div className="project-left-section">
          <ImageGallery items={project.images} style={{ zIndex: 0 }} />
        </div>
        <div className="project-right-section">
          {project.description.map((paragraph, index) => {
            return (
              <React.Fragment key={index}>
                <p className={dlMode ? "black" : "white"}>{paragraph}</p>
                <br></br>
              </React.Fragment>
            );
          })}
          {project.sourceCodeLink ? (
            <a href={project.sourceCodeLink} target="_blank" rel="noreferrer">
              <button className="project-link">
                <FontAwesomeIcon icon={faCode} />
                <h3 style={{ display: "inline", border: "none" }}>
                  Source Code
                </h3>
              </button>
            </a>
          ) : null}
          {project.projectLink ? (
            <a href={project.projectLink} target="_blank" rel="noreferrer">
              <button className="project-link">
                <FontAwesomeIcon icon={faLink} />
                <h3 style={{ display: "inline", border: "none" }}>
                  Link to Project
                </h3>
              </button>
            </a>
          ) : null}
          <span className="project-date">{project.date}</span>
        </div>
      </div>
    </>
  );
}

function LatestProject({ dlMode }) {
  return (
    <div id="latest-project-content">
      <div style={{ flexBasis: "100%" }}>
        <ProjectDescription
          dlMode={dlMode}
          latest={true}
          project={LatestProjectInfo}
        />
      </div>
    </div>
  );
}

function ProjectEntry(props) {
  return (
    <div
      className="all-projects-entry"
      onMouseEnter={() => {
        props.toggleActiveOn(props.index);
      }}
      onMouseLeave={() => {
        props.toggleActiveOff();
      }}
      onClick={() => props.onclick(props.index)}
    >
      {props.active === props.index ? (
        <React.Fragment>
          <div className="all-projects-entry-selected">
            <h4>{props.project.name}</h4>
            <p>
              <u>Learn more</u>
            </p>
          </div>
        </React.Fragment>
      ) : null}
      <img
        src={props.project.thumbnail}
        alt="error"
        style={{ width: "100%", height: "100%" }}
        await
      />
    </div>
  );
}

class ProjectsGrid extends React.Component {
  state = {
    active: null,
  };

  toggleActiveOn = (index) => {
    this.setState({ active: index });
  };

  toggleActiveOff = () => {
    this.setState({ active: null });
  };

  render() {
    /* create grid entries for each project */
    var rowEntry = [];
    var rowIndex = 0;
    var gridRows = [];
    for (var i = 0; i < this.props.data.length; i++) {
      if (i % 3 === 0 && i !== 0) {
        gridRows[rowIndex] = rowEntry;
        rowIndex++;
        rowEntry = [];
      }
      rowEntry[i % 3] = (
        <ProjectEntry
          index={i}
          active={this.state.active}
          toggleActiveOn={this.toggleActiveOn}
          toggleActiveOff={this.toggleActiveOff}
          onclick={this.props.popupOn}
          project={this.props.data[i]}
        />
      );
    }
    if (rowEntry.length > 0) gridRows[rowIndex] = rowEntry;

    return (
      <div id="all-projects-grid">
        {gridRows.map((row, index) => {
          return (
            <div className="all-projects-row" key={index}>
              {row}
            </div>
          );
        })}
      </div>
    );
  }
}

function PopUpPrompt({ project, onClick, dlMode }) {
  return (
    <div className="popup">
      <div className="popup white-overlay" onClick={onClick} />
      <div className={`box animate ${dlMode ? "bg-white" : "bg-black"}`}>
        <ProjectDescription latest={false} project={project} dlMode={dlMode} />
      </div>
    </div>
  );
}

export default class Projects extends React.Component {
  static contextType = dlModeContext;

  state = {
    messageIndex: null,
  };

  triggerPopupOn = (index) => {
    this.setState({ messageIndex: index });
    document.querySelector("body").classList.add("no-scroll");
    console.log("no scroll");
  };
  triggerPopupOff = () => {
    this.setState({ messageIndex: null });
    document.querySelector("body").classList.remove("no-scroll"); //enables scrolling when pop-up is removed from view
  };

  render() {
    let [dlMode] = this.context;
    return (
      <>
        <section>
          <div className="width-size fade-in-3" id="project-main">
            <div className="project-main-content">
              <h1
                id="project-main-title"
                className={dlMode ? "white" : "black"}
              >
                Projects
              </h1>
              <h2 id="project-main-subtitle">
                Check out some of my personal works!
              </h2>
              <hr className="project-main-linebr"></hr>
              <p id="project-main-des" className={dlMode ? null : "black"}>
                The projects displayed below are a collection of some of my
                works. These can range from personal projects, group projects
                created during hackathons, or assigned school works. Each
                project below will be accompanied by its description, the
                associated source code, and the coding languages/tech stack used
                to develop the product. Some projects will have links to the
                complete product if it is hosted online. Please note that most
                of these projects are a work in progress meaning they are not
                perfect and improvements can be made. Supporting my previous
                statement, I consider my projects as statements of experience in
                a particular programming language(s). Overall, I had lots of
                fun, gained tons of knowledge, and exceeded many of the learning
                outcomes I had in mind while creating these projects! Click the
                arrow below to check out my latest piece of work and navigate
                below that to view a gallery of all my works.
              </p>
              <ScrollLink to="latest" spy={true} smooth={true} duration={320}>
                <FontAwesomeIcon
                  className={`scroll-down-icon ${dlMode ? "white" : "black"}`}
                  icon={faCaretDown}
                />
              </ScrollLink>
            </div>
          </div>
        </section>
        <section>
          <div
            className={`project-section ${dlMode ? "bg-white" : "bg-black"}`}
          >
            <div className="fade-in-3 width-size" id="latest">
              <div style={{ paddingTop: "3vh" }}>
                <hr
                  className={`project-section-line ${
                    dlMode ? "bg-black" : "bg-white"
                  }`}
                ></hr>
                <h1
                  className={`project-section-title ${
                    dlMode ? "black" : "white"
                  }`}
                >
                  Latest Project
                </h1>
                <hr
                  className={`project-section-line ${
                    dlMode ? "bg-black" : "bg-white"
                  }`}
                  style={{ width: "60%" }}
                ></hr>
              </div>
              <LatestProject dlMode={dlMode} />
            </div>
          </div>
        </section>
        <section>
          {this.state.messageIndex !== null ? (
            <PopUpPrompt
              onClick={this.triggerPopupOff}
              project={projectInfo[this.state.messageIndex]}
              dlMode={dlMode}
            />
          ) : null}
          <div id="all-projects-content" className="fade-in-3">
            <div style={{ textAlign: "center" }}>
              <h1
                id="all-projects-title"
                className={dlMode ? "white" : "black"}
              >
                Project Gallery
              </h1>
              <h2
                id="all-projects-subtitle"
                className={dlMode ? "white" : "black"}
              >
                Hover over each thumbnail and click to learn more!
              </h2>
              <hr style={{ width: "640px", margin: "3vh auto" }}></hr>
              <ProjectsGrid
                data={projectInfo}
                popupOn={this.triggerPopupOn}
                popupOff={this.triggerPopupOff}
              />
            </div>
          </div>
        </section>
      </>
    );
  }
}
