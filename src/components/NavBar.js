import { FaEnvelope, FaGithub, FaDownload, FaPen } from "react-icons/fa"
import { useState } from 'react'

const ulStyles = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'right',
}

const NavBar = ({ setShowContactMe, setShowAbout, setShowAudioLoop, setShowScheduler, setShowProjects }) => {

  



  const clickGitHub = () => {
    window.open('https://github.com/joecooler21')
  }

  const clickProjects = () => {
    setShowContactMe(false)
    setShowAbout(false)
    setShowAudioLoop(false)
    setShowScheduler(false)
    setShowProjects(true)
  }

  const clickContactMe = () => {
    setShowContactMe(true)
    setShowAbout(false)
    setShowAudioLoop(false)
    setShowScheduler(false)
    setShowProjects(false)
  }

  const clickLogo = () => {
    setShowAbout(true)
    setShowContactMe(false)
    setShowScheduler(false)
    setShowAudioLoop(false)
    setShowProjects(false)
  }

  return (
    <>

    <ul className='nav-list' style={ulStyles}>
      <li onClick={clickLogo} className='nav-logo'>&lt;JC /&gt;</li>
    <li style={{'--width':'75%'}} className='hover-underline-animation projects-top-menu' onClick={clickProjects}>Projects <FaPen /></li>
        <li style={{'--width':'70%'}} onClick = {clickContactMe} className='hover-underline-animation'>Contact <FaEnvelope /></li>
        <li style={{'--width':'70%'}} onClick = {clickGitHub} className='hover-underline-animation'>Github <FaGithub /></li>
        <li style={{'--width':'70%'}} className='hover-underline-animation' ><a style={{textDecoration:'none'}} href='./resume/jcdev.pdf' download>Resume</a> <FaDownload /></li>
    </ul>
    </>
  )
}

// <li style={{'--width':'75%'}} className='hover-underline-animation projects-menu'>&lt;JC /&gt; <FaEnvelope /></li>

export default NavBar
