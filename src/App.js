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
    const [showScheduler, setShowScheduler] = useState('none')
    const [showAudioLoop, setShowAudioLoop] = useState('none')
    const [showAbout, setShowAbout] = useState('block')

    const logoClick = () => {
      setShowScheduler('none')
      setShowAudioLoop('none')
      setShowAbout('block')
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
    </div>
  )
}

export default App
