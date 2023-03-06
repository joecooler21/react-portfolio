import React from 'react'



const Scheduler = ({showScheduler}) => {

    const styles = {
        opacity:showScheduler ? 1:0,
        transform:showScheduler ? 'scaleX(1)' : 'scaleX(0)',
        transformOrigin:'right',
        transition:'all .3s',
        zIndex: showScheduler ? 2:0
    }

    const openDemo = () => {
        window.open('https://joecooler21.github.io/react-scheduler-app/')
      }
      const openGitHub = () => {
        window.open('https://github.com/joecooler21/react-scheduler-app')
      }

  return (
    <div style={styles} className='project-card'>
        <h1>Scheduler</h1>
        <div className='left-border project-summary'>A complete full stack application for managing a small crew. View, edit and store weekly schedule information in a database. Also provides a printer-friendly weekly schedule view. Uses React for the front-end and Node, Express and MongoDB for the back-end.</div>
        <div className='button-container'>
        <button onClick={openDemo} className='project-list-item project-button'>Demo</button>
        <button onClick={openGitHub} className='project-list-item project-button'>GitHub</button>
        </div>

      
    </div>
  )
}

export default Scheduler
