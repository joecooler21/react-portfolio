import Project from './Project'
import { FaCalendarAlt, FaBeer, FaChessKnight } from 'react-icons/fa'

const fsStyles = {
    border: '0 none',
    borderRadius:'0px',
    borderTopStyle: 'solid',
    borderTopWidth: '2px',
    borderTopColor: '#00C6BD',
    marginTop: '2em',
    marginLeft: '5em',
    marginRight:'5em',
    fontWeight: 'bold',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
}

const legendStyles = {
    color: 'white',
    fontSize: '2em',
    fontWeight: 'bold'
}

const faStyles = {
    width: '3em',
    height: '3em'
}



const Projects = () => {
  return (
    <div>

        <fieldset style={fsStyles}>
            <legend style={legendStyles}>Projects</legend>
            <Project name='Scheduler'
             info='An user-friendly application for viewing and managing your workplace schedule.'
             image={<FaCalendarAlt style={faStyles} />}
             features={['Feature 1', 'Feature 2', 'Feature 3']}
             />

             <Project name='Project II'
             info='An application using React.js & Material UI for the front-end. Node.js, MongoDB and Express for the backend.'
             image={<FaBeer style={faStyles} />}
             features={['Feature 1', 'Feature 2', 'Feature 3']}
             />

             <Project name='Project III'
             info='An application using React.js & Material UI for the front-end. Node.js, MongoDB and Express for the backend.'
             image={<FaChessKnight style={faStyles} />}
             features={['Feature 1', 'Feature 2', 'Feature 3']}
             />
        </fieldset>
      
    </div>
  )
}

export default Projects
