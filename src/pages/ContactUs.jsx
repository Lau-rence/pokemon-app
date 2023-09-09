//Packages
import { useState } from 'react';
import axios from 'axios';

//Components & Styles
import './ContactUs.css';

export default function ContactUs () {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        axios.post('https://nodemailer-imko.vercel.app/send-email', {
            firstName: firstName, 
            lastName: lastName, 
            email: email, 
            subject: subject, 
            message: message
        }).then(response => {
            console.log(response.data);
        })
    }
    return(
        <div className="contactus">
            <div className="contactus-bg" style={{backgroundImage: `linear-gradient( to right, #19224f, transparent) , url('pokemon-bg2.jpg')`}}>
                <h1>Hello, Poké fans!</h1>
                <p>Want to contact us? Fill the contact form below and click submit.</p>
                <div className='contactus-container'>
                    <form className='form' onSubmit={handleSubmit}>
                        <h2>Contact Form</h2>
                        <hr/>
                        <div className='form-container'>
                            <label>Name:</label>
                            <div>
                                <input 
                                    required
                                    type='text' 
                                    placeholder='First name...'
                                    onChange={(e)=> setFirstName(e.target.value)}
                                />
                                <input 
                                    required
                                    type='text' 
                                    placeholder='Last name...' 
                                    onChange={(e)=> setLastName(e.target.value)}
                                />
                            </div>
                            <label>Email:</label>
                            <input
                                required
                                type='email'
                                onChange={(e)=> setEmail(e.target.value)}
                            />
                            <label>Subject:</label>
                            <input
                                required
                                type='text'
                                onChange={(e)=> setSubject(e.target.value)}
                            />
                            <label>Message:</label>
                            <textarea 
                                required
                                placeholder='Type your message here...'
                                onChange={(e)=> setMessage(e.target.value)}
                            />
                            <div
                              style={{
                                  margin: '20px',
                                  display: 'flex', 
                                justifyContent: 'center', 
                              }}
                            >
                              <button>Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}