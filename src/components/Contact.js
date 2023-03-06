import { calculateNewValue } from '@testing-library/user-event/dist/utils'
import { React, useState } from 'react'
import { FaBalanceScale } from 'react-icons/fa'

const Contact = ({ showContact, setShowContact }) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [submit, setSubmit] = useState(false)

    const styles = {
        opacity:showContact ? 1:0,
        zIndex: showContact ? 2:0,
        padding:'1em',
        width: '350px',
        height: '450px',
        border: '1px solid #00C6BD',
        borderRadius: '5px',
        position: 'absolute',
        margin:'0 auto',
        left:'calc(50% - 25% / 2)',
        transform: submit ? 'rotateY(180deg)' : null,
        transition:'all .5s',
        }

    const fsStyles = {
        margin: '0px',
        borderRadius: '0px',
        fontWeight: 'bold',
    }

    const legendStyles = {
        color: 'white',
        fontSize: '1.2em',
        fontWeight: 'bold',
        textAlign: 'center',
        margin: '0px'
    }

    const closeContact = () => {
        setShowContact(false)
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
        <div style={styles}>

            {submit ?
                <div style={{ transform: 'rotateY(180deg)', marginTop: '50%', textAlign: 'center' }}><h1>Message Sent</h1><p>Thank you for your message! You should expect a reply within 24 hours.</p>
                <button className='contact-button' onClick={closeContact}>Close</button></div>
                : <div style={fsStyles}>

                    <div style={legendStyles}>Contact Me</div>

                    <div>
                        <label>Name <span style={{ color: 'red' }}>*</span></label>
                        <div style={{ margin: '5px' }}></div>
                        <input onChange={editName} style={{ border: 'none', outline: 'none', borderBottom: '1px solid #00C6BD', caretColor: 'white', width: '100%' }}></input>
                    </div>

                    <div style={{ marginTop: '15px' }}>
                        <label>E-mail <span style={{ color: 'red' }}>*</span></label>
                        <div style={{ margin: '5px' }}></div>
                        <input type='email' onChange={editEmail} style={{ border: 'none', outline: 'none', borderBottom: '1px solid #00C6BD', caretColor: 'white', width: '100%' }}></input>
                    </div>

                    <div style={{ marginTop: '15px' }}>
                        <label>Message <span style={{ color: 'red' }}>*</span></label>
                        <div style={{ margin: '5px' }}></div>
                        <textarea onChange={editMessage} style={{ resize: 'none', caretColor: 'white', width: '100%', height: '15em', outline: 'none', border: '1px solid #00C6BD' }}></textarea>
                    </div>

                    <div style={{ textAlign: 'center' }}>
                        <button style={{marginRight:'.5em'}} className='contact-button' onClick={clickSubmit}>Submit</button>
                        <button className='contact-button' onClick={closeContact}>Close</button>
                    </div>

                </div>}

        </div>
    )
}

export default Contact
