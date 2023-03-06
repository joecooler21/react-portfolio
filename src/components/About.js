

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
    const styles = {
        opacity:showAbout ? 1:0,
        zIndex: showAbout ? 2:0,
        transform:showAbout ? 'scaleX(1)' : 'scaleX(0)',
        transformOrigin:'left',
        transition:'all .3s',
    }
  return (
    <div style={styles} className="project-card">
        <p style = {pStyles}>Hello friends! My name is</p>
        <h1 className='header' style = {h1Styles}>Joseph Cooler</h1>
        <h1 className='header' style= {{...h1Styles, ...altColor}}>Full Stack</h1>
        <h1 className='header' style= {{...h1Styles, ...altColor}}>Web Developer</h1>
        <p className="border-left project-summary">Full stack web developer located in Wisconsin, USA. UW Madison coding bootcamp graduate. Passion for problem-solving, building and making things work.</p>
      
    </div>
  )
}

export default About
