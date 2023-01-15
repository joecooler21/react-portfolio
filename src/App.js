import React from 'react'
import NavBar from './components/NavBar'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import '../src/App.css'

import { useState } from 'react'

const App = () => {

    const [showContact, setShowContact] = useState(false)

  return (
    <div>

        <NavBar setShowContact={setShowContact} />
        <About />
        <Projects />
        <Contact showContact={showContact} setShowContact={setShowContact} />
      
    </div>
  )
}

export default App
