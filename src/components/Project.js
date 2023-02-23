
import '../App.css'
import { useState } from 'react'

const containerStyles = {
    position:'absolute',
    right:'20%',
    display:'flex',
    flexDirection:'column',
    marginTop:'5%',
    marginLeft:'2em',
    width: '10%',
}





const Project = ({setShowScheduler, setShowAbout, setShowAudioLoop}) => {

    const showScheduler = () => {
        setShowScheduler('block')
        setShowAbout('none')
        setShowAudioLoop('none')
        
    }

    const showAudioLoop = () => {
        setShowScheduler('none')
        setShowAbout('none')
        setShowAudioLoop('block')

    }


    
    return (
        <div style={containerStyles}>
            <div>
        <h3 style={{fontSize:'1.5em'}}>Projects</h3>
        <div style={{paddingLeft:'1em', paddingTop:'1em'}} className='partial-border'>
            <div onClick={showScheduler} style={{'--width':'70%', display:'block'}} className='project-list-item'>Scheduler</div>
            <div onClick={showAudioLoop} style={{'--width':'80%', display:'block'}} className='project-list-item'>Audio Loop</div>
            </div>
        </div>
        </div>
       
    )
}

export default Project
