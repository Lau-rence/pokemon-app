import { useState } from 'react'
import './ContactUs.css'
export default function ContactUs () {
    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    return(
        <div className="contactus">
            <div className="contactus-bg" style={{backgroundImage: `linear-gradient( to right, #19224f, transparent) , url('pokemon-bg2.jpg')`}}>
                <h1>Hello, Poké fans!</h1>
                <p>Want to contact us? Fill the contact form below and click submit.</p>
                <div className='contactus-container'>
                    <div className='form'>
                        <h2>Contact Form</h2>
                        <hr/>
                        <div className='form-container'>
                            <label>Name:</label>
                            <div>
                                <input type='text' placeholder='First name...'/>
                                <input type='text' placeholder='Last name...'/>
                            </div>
                            <label>Email:</label>
                            <input type='email'/>
                            <label>Subject:</label>
                            <input type='text'></input>
                            <label>Message:</label>
                            <textarea placeholder='Type your message here...'></textarea>
                            <div
                              style={{
                                display: 'flex', 
                                justifyContent: 'center', 
                                margin: '20px'
                              }}
                            >
                              <button>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}