

const pStyles = {
    fontFamily: 'Fira Code',
    fontWeight: 'normal',
    margin: '1em',
    color: 'white'
}

const h1Styles = {
    fontSize: '3em',
    marginTop: '0px',
    marginBottom:'0px',
    padding: '0',
    color: 'white',
    filter:'brightness(.9)',
    background:'none'
}

const altColor = {

    color: '#00C6BD'

}



const About = ({showAbout}) => {
  return (
    <div style={{display:showAbout}} className="project-card">
        <p style = {pStyles}>Hello friends! My name is</p>
        <h1 style = {h1Styles}>Joseph Cooler</h1>
        <h1 style= {{...h1Styles, ...altColor}}>Full Stack Web Developer</h1>
        <p style={{width:'50ch', borderLeft:'2px solid #00C6BD', paddingLeft:'1em'}}>I'm a Full Stack coding bootcamp graduate from the University of Wisconsin, Madison. Currently, my
            focus has been building fun, challenging applications using the <span style={{color:'#00C6BD'}}>MERN</span> stack. However, I'm always equal parts willing and
            excited to learn whatever technology is needed for the task at hand.
        </p>
      
    </div>
  )
}

export default About
