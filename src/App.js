import React from 'react'
import NavBar from './components/NavBar'
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'
import Scheduler from './components/Scheduler'
import AudioLoop from './components/AudioLoop'
import '../src/App.css'

import { useState } from 'react'

const App = () => {

    const [showContact, setShowContact] = useState(false)
    const [showScheduler, setShowScheduler] = useState(false)
    const [showAudioLoop, setShowAudioLoop] = useState(false)
    const [showAbout, setShowAbout] = useState(true)

    const logoClick = () => {
      setShowScheduler(false)
      setShowAudioLoop(false)
      setShowAbout(true)
    }


  return (
    <div>

        <NavBar setShowContact={setShowContact} />
        <button onClick={logoClick} className="logo">JC</button>
        
        <div className='main-container'>
          <About showAbout={showAbout} />
          <Scheduler showScheduler={showScheduler}/>
          <AudioLoop showAudioLoop={showAudioLoop}/>
        <Project setShowScheduler={setShowScheduler} setShowAbout={setShowAbout} setShowAudioLoop={setShowAudioLoop} />
        <Contact showContact={showContact} setShowContact={setShowContact} />
      
    </div>
    <footer className='footer'>&copy; Joseph Cooler</footer>
    </div>
  )
}

export default App
