import { React, useState } from 'react'

const Contact = ({ showContact, setShowContact }) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [submit, setSubmit] = useState(false)

    const styles = {
        width: '25%',
        height: '60%',
        border: '1px solid #00C6BD',
        borderRadius: '5px',
        position: 'absolute',
        top: '25%',
        transform: submit ? 'rotateY(180deg)' : null,
        transition: 'transform .5s'
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
        if (name.trim() === '' || email.trim() === '' || message.trim() ==='') {
            alert('Please fill in all required fields')
            return
        }
        const contactMsg = { name: name.trim(), email: email.trim(), message: message.trim() }
        setSubmit(true)


        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(contactMsg)
        }

        const response = await fetch('http://localhost:3001/contact', options)
        const data = await response.json()
        console.log(data)
    }



    return (
        <dialog open={showContact} style={styles}>

            {submit ?
                <div style={{ transform: 'rotateY(180deg)', marginTop: '50%', textAlign: 'center' }}><h1>Message Sent</h1><p>Thank you for your message! You should expect a reply within 24 hours.</p><button onClick={closeContact} style={{ marginTop: '25px', width: '7em', borderRadius: '5px', border: '1px solid #00C6BD' }}>Close</button></div>
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
                        <button onClick={clickSubmit} style={{ marginTop: '25px', width: '7em', borderRadius: '5px', border: '1px solid #00C6BD' }}>Submit</button>
                        <button onClick={closeContact} style={{ marginTop: '25px', width: '7em', borderRadius: '5px', border: '1px solid #00C6BD' }}>Close</button>
                    </div>

                </div>}

        </dialog>
    )
}

export default Contact
