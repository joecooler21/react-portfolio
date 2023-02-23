import React from 'react'
import NavBar from './components/NavBar'
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'
import Scheduler from './components/Scheduler'
import '../src/App.css'

import { useState } from 'react'

const App = () => {

    const [showContact, setShowContact] = useState(false)


  return (
    <div>

        <NavBar setShowContact={setShowContact} />
        <div style={{display:'flex'}}>
          <About />
        <Project />
        <Contact showContact={showContact} setShowContact={setShowContact} />
      
    </div>
    </div>
  )
}

export default App
