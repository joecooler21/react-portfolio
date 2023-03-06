import { React, useState } from 'react'



const ContactMe = ({ showContactMe, setShowAbout, setShowContactMe }) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [submit, setSubmit] = useState(false)

    const styles = {
        opacity: showContactMe ? '1' : '0',
        zIndex:showContactMe ? 2 : 0,
        transform: showContactMe ? 'scaleX(1)' : 'scaleX(0)',
        
    }

    const closeContact = () => {
    setShowContactMe(false)
    setShowAbout(true)
       setSubmit(false)
    }

    const editName = (e) => {
        setName(e.currentTarget.value)
    }

    const editEmail = (e) => {
        setEmail(e.currentTarget.value)
    }

    const editMessage = (e) => {
        setMessage(e.currentTarget.value)
    }

    const clickSubmit = async () => {
        if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
            alert('Please fill in all required fields')
            return
        }
        const contactMsg = { name: name.trim(), email: email.trim(), message: message.trim() }

        setSubmit(true)
        setName('')
        setEmail('')
        setMessage('')


        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(contactMsg)
        }

        try {
            const response = await fetch('https://delightful-neckerchief-foal.cyclic.app/contact', options)
            const data = await response.json()
        } catch (error) {
            console.log(error)
        }
    }

    return (

        <div className='contact-card' style={styles}>
            
            {!submit ? <div className='contact-container'>
            <h1>Contact</h1>
            <div>
                <label>Name <span style={{ color: 'red' }}>*</span></label>
                <div style={{ margin: '5px' }}></div>
                <input onChange={editName} className='edit-styles'></input>
            </div>

            <div style={{ marginTop: '15px' }}>
                <label>E-mail <span style={{ color: 'red' }}>*</span></label>
                <div style={{ margin: '5px' }}></div>
                <input onChange={editEmail} type='email' className='edit-styles'></input>
            </div>

            <div style={{ marginTop: '15px'}}>
                <label>Message <span style={{ color: 'red' }}>*</span></label>
                <div style={{ margin: '5px' }}></div>
                <textarea onChange={editMessage} className='edit-styles' style={{resize:'none', height:'125px', border:'1px solid #00C6BD', borderRadius:'7px'}}></textarea>
            </div>
            <div className='button-container'>
            
            <button className='project-list-item project-button' onClick={clickSubmit} >Submit</button>
            <button className='project-list-item project-button' onClick={closeContact} >Cancel</button>
            </div>
            </div> : <div className='contact-container' style={{transform:'rotateY(360deg)', transition:'all .2s', width:'400px'}}>
                <h1>Thank you!</h1>
                <p>Your message has been sent!. You should expect a response within 24hrs.</p>
                <button style={{marginLeft:'35%'}} onClick={closeContact} className='project-list-item project-button'>Close</button>
                </div>}
            


        </div>
    )

}

export default ContactMe