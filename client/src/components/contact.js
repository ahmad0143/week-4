import React, { useState } from 'react';
import './contact.scss';

export default function Contact() {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [phone, setphone] = useState('');
  const [message, setmessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const contact = { name, email, phone, message };

    fetch('http://localhost:8080/api/contact/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(contact),
    }).then(() => {
      console.log('new blog added');
    });
  };
  return (
    <div class="contactme" id="contact">
      <div class="contactOverlay">
        <div class="container">
          <div class="form">
            <form onSubmit={handleSubmit}>
              <div class="formWord">
                <h2>Feel Free To Ask Us Any Thing!</h2>
                <span>Full Name</span>
                <br />
                <input
                  class="input100"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                />
                <br />
                <span>Phone Number</span>
                <br />
                <input
                  class="input100"
                  type="text"
                  required
                  value={phone}
                  onChange={(e) => setphone(e.target.value)}
                />
                <br />
                <span>Enter Email</span>
                <br />
                <input
                  class="input100"
                  type="text"
                  required
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                />
                <br />
              </div>
              <div class="formWord">
                <span>Message</span>
                <br />
                <textarea
                  required
                  value={message}
                  onChange={(e) => setmessage(e.target.value)}
                ></textarea>
                <br />
                <button>SUBMIT</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
