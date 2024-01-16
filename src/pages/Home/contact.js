import React, { useState } from 'react';
import Call from './asset/Artboard 27.png';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log('Email sent successfully:');
    } catch (error) {
      console.error('Error sending email:');
    }
  };

  return (
    <div className='Contact'>
      <div className='Qoute'>
        <h1>
          Feel free to contact us for anything you want to improve or even to delete,
          we are here any time for you. flyChat team.
        </h1>
      </div>
      <img src={Call} alt="Call" />
      <div className='ContactCard'>
        <h1>Contact</h1>
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
          <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
          <textarea placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)} />
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
