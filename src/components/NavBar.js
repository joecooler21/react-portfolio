import { FaEnvelope, FaGithub, FaDownload } from "react-icons/fa"

const ulStyles = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'right'
}

const NavBar = ({ setShowContact }) => {



  const clickGitHub = () => {
    window.open('https://github.com/joecooler21')
  }

  const clickContact = () => {
    setShowContact(true)
  }

  return (
    <>

    <ul className='nav-list' style={ulStyles}>
        <li onClick = {clickContact} className='hover-underline-animation'>Contact <FaEnvelope /></li>
        <li onClick = {clickGitHub} className='hover-underline-animation'>Github <FaGithub /></li>
        <li className='hover-underline-animation' >Resume <FaDownload /></li>
    </ul>
    </>
  )
}

export default NavBar
