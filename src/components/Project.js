import "../App.css";
import { useState } from "react";

const Project = ({
  setShowScheduler,
  setShowAbout,
  setShowAudioLoop,
  setShowContactMe,
  setShowProjects,
}) => {
  const showScheduler = () => {
    setShowScheduler(true);
    setShowAbout(false);
    setShowAudioLoop(false);
    setShowContactMe(false);
    setShowProjects(false);
  };

  const showAudioLoop = () => {
    setShowScheduler(false);
    setShowAbout(false);
    setShowAudioLoop(true);
    setShowContactMe(false);
    setShowProjects(false);
  };

  return (
    <div className="project-container">
      <div>
        <h3 style={{ fontSize: "1.5em" }}>Projects</h3>
        <div
          style={{ paddingLeft: "1em", paddingTop: "1em" }}
          className="partial-border list-container"
        >
          <div
            onClick={showScheduler}
            style={{ "--width": "70%", display: "block" }}
            className="project-list-item"
          >
            Scheduler
          </div>
          <div
            onClick={showAudioLoop}
            style={{ "--width": "80%", display: "block" }}
            className="project-list-item"
          >
            Audio Loop
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
