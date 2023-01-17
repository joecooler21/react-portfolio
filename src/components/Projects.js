import Project from './Project'
import { FaCalendarAlt } from 'react-icons/fa'

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
            <Project name='React Scheduler'
             info='An user-friendly application for viewing and managing your workplace schedule.'
             image={<FaCalendarAlt style={faStyles} />}
             features={['MongoDB', 'Express', 'React', 'Node']}
             gitLink={'http://github.com/joecooler21/react-scheduler-app'}
             demoLink={'http://joecooler21.github.io/react-scheduler-app/'}
             />
        </fieldset>
      
    </div>
  )
}

export default Projects
