import { borderRadius } from "@mui/system";
import React from "react";
import AudioLooperImage from '../assets/images/project_1.png'
const AudioLoop = ({ showAudioLoop }) => {
  const styles = {
    opacity: showAudioLoop ? 1 : 0,
    transform: showAudioLoop ? "scaleX(1)" : "scaleX(0)",
    transformOrigin: "left",
    transition: "all .3s",
    zIndex: showAudioLoop ? 2 : 0,
  };
  const imgStyles = {
    margin:5,
    padding:10,
    width: "50%",
    borderRadius:20
  }

  const openDemo = () => {
    window.open("https://joecooler21.github.io/react-player-app/");
  };
  const openGitHub = () => {
    window.open("https://github.com/joecooler21/react-player-app");
  };
  return (

      <div style={styles} className="project-card">
        <h1>Audio Looper</h1>

        <div className="left-border project-summary">
          A front-end application that allows the user to load an audio file and
          slow down/loop a section. Useful for guitar players trying to nail
          those difficult guitar parts. Uses React, Material UI and Tone.js.
        </div>
        <img style={imgStyles} src={AudioLooperImage} />
        <div className="button-container">
          <button
            onClick={openDemo}
            className="project-list-item project-button"
          >
            Demo
          </button>
          <button
            onClick={openGitHub}
            className="project-list-item project-button"
          >
            GitHub
          </button>
        </div>
      </div>

  );
};

export default AudioLoop;
