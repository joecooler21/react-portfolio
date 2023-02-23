
import '../App.css'

const containerStyles = {
    position:'absolute',
    right:'30%',
    display:'flex',
    flexDirection:'column',
    marginTop:'10%',
    marginLeft:'2em',
    width: '10%',
}



const Project = () => {


    
    return (
        <div style={containerStyles}>
            <div>
        <h3 style={{fontSize:'1.5em'}}>Projects</h3>
        <div style={{paddingLeft:'1em', paddingTop:'1em'}} className='partial-border'>
            <div style={{'--width':'70%', display:'block'}} className='project-list-item'>Scheduler</div>
            <div style={{'--width':'80%', display:'block'}} className='project-list-item'>Audio Loop</div>
            </div>
        </div>
        </div>
       
    )
}

export default Project
