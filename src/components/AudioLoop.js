import React from 'react'

const AudioLoop = ({showAudioLoop}) => {
  return (
    <div style={{display:showAudioLoop}} className='project-card'>
        <h1>AudioLoop</h1>
        <div className='left-border' style={{width:'50ch', lineHeight:'1.6'}}>A front-end application that allows the user to load an audio file and slow down/loop a section. Useful for guitar players trying to nail those difficult guitar parts. Uses React, Material UI and Tone.js.</div>

        <button className='project-list-item project-button'>Demo</button>
        <button className='project-list-item project-button'>GitHub</button>

      
    </div>
  )
}

export default AudioLoop
