import React from 'react'
import NavBar from './components/NavBar'
import About from './components/About'
import Project from './components/Project'
import Scheduler from './components/Scheduler'
import AudioLoop from './components/AudioLoop'
import ContactMe from './components/ContactMe'
import Projects from './components/Projects'
import '../src/App.css'

import { useState } from 'react'

const App = () => {

    const [showScheduler, setShowScheduler] = useState(false)
    const [showAudioLoop, setShowAudioLoop] = useState(false)
    const [showAbout, setShowAbout] = useState(true)
    const [showContactMe, setShowContactMe] = useState(false)
    const [showProjects, setShowProjects] = useState(false)

    const logoClick = () => {
      setShowScheduler(false)
      setShowAudioLoop(false)
      setShowAbout(true)
      setShowContactMe(false)
    }


  return (
    <div>
      <NavBar setShowProjects={setShowProjects} setShowContactMe={setShowContactMe} setShowAbout={setShowAbout} setShowAudioLoop={setShowAudioLoop} setShowScheduler={setShowScheduler} />
      <button onClick={logoClick} className="logo">&lt;JC /&gt;</button>
      <div className='main-container'>
        <About showAbout={showAbout} />
        <Scheduler showScheduler={showScheduler}/>
        <AudioLoop showAudioLoop={showAudioLoop}/>
        <ContactMe showContactMe={showContactMe} setShowAbout={setShowAbout} setShowContactMe={setShowContactMe} />
        <Projects showProjects={showProjects} />
      <Project setShowProjects={setShowProjects} setShowContactMe={setShowContactMe} setShowScheduler={setShowScheduler} setShowAbout={setShowAbout} setShowAudioLoop={setShowAudioLoop} />
    </div>
    <footer className='footer'>&copy; Joseph Cooler</footer>
    </div>
  )
}

export default App
