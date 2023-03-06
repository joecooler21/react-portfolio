import React from 'react'

const Projects = ({showProjects}) => {

  const styles={
    opacity:showProjects ? 1:0,
        transform:Projects ? 'scaleX(1)' : 'scaleX(0)',
        transformOrigin:'left',
        transition:'all .3s',
        zIndex: showProjects ? 2 : 0
  }

  const openPlayerDemo = () => {
    window.open('https://joecooler21.github.io/react-player-app/')
  }
  const openPlayerGitHub = () => {
    window.open('https://github.com/joecooler21/react-player-app')
  }
  const openSchedulerDemo = () => {
    window.open('https://joecooler21.github.io/react-scheduler-app/')
  }
  const openSchedulerGitHub = () => {
    window.open('https://github.com/joecooler21/react-scheduler-app/')
  }
  
  return (

    <div style={styles} className='project-card'>
        <h1>Projects</h1>
        <h3>Scheduler</h3>
        <div className='left-border project-summary'>A complete full stack application for managing a small crew. View, edit and store weekly schedule information in a database. Also provides a printer-friendly weekly schedule view. Uses React for the front-end and Node, Express and MongoDB for the back-end.</div>
        <div className='button-container'>
        <button onClick={openSchedulerDemo} className='project-list-item project-button'>Demo</button>
        <button onClick={openSchedulerGitHub} className='project-list-item project-button'>GitHub</button>
        </div>

        <h3>Audio Looper</h3>
        <div className='left-border project-summary'>A front-end application that allows the user to load an audio file and slow down/loop a section. Useful for guitar players trying to nail those difficult guitar parts. Uses React, Material UI and Tone.js.</div>
        <div className='button-container'>
        <button onClick={openPlayerDemo} className='project-list-item project-button'>Demo</button>
        <button onClick={openPlayerGitHub} className='project-list-item project-button'>GitHub</button>
        </div>

      
    </div>
  )
}

export default Projects