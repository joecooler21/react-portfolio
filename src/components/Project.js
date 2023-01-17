import {FaChevronRight} from 'react-icons/fa'
import '../App.css'

const legendStyles = {
    textAlign: 'center',
    fontSize: '1.5em',
    color: '#00C6BD',
    fontWeight: 'normal'
}

const Project = ({ name, info, image, features, gitLink, demoLink }) => {

    const clickGitHub = () => {
        window.open(gitLink)
    }

    const clickDemo = () => {
        window.open(demoLink)
    }
    return (
        <div style={{marginTop:'1em'}}>
            <fieldset style={{textAlign:'center', width:'15em', height:'19em'}}>
                <legend style={legendStyles}>
                    {name}
                </legend>
                {image}
                <p style={{fontWeight: 'normal', maxWidth:'fit-content'}}>{info}</p>
                <ul style={{marginLeft:'4em'}} className='feature-list'>
                    {features.map(e => {
                        return <li style={{textAlign:'left'}}>{e}</li>
                    })}
                </ul>
                <hr style={{width: '50%', borderColor:'#00C6BD'}} />

                <ul style={{position:'relative', display:'flex', left:'1.8em', maxWidth:'fit-content'}} className='nav-list'>
                    <li onClick={clickGitHub} className='hover-underline-animation'>GitHub</li>
                    <li onClick={clickDemo} className='hover-underline-animation'>Demo</li>
                </ul>
            </fieldset>

        </div>
    )
}

export default Project
