

import React, { useRef } from 'react'
import emailjs from 'emailjs-com'
import './contact.css'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_qd88vdh',
      'template_6opmtau',
      form.current,
      'uEFE2DTq7WTormqtx'
    ).then(
      (result) => {
        console.log(result.text);
        alert("Message sent successfully!");
      },
      (error) => {
        console.log(error.text);
        alert("Failed to send message. Try again.");
      }
    );

    e.target.reset(); 
  };

  return (
    <section className="contact container section" id="contact">
      <h2 className="section_title title_of_contact">Connect With Me</h2>

      <div className="contact_container grid">
        <div className="contact_info">
          <h3 className="contact_title">Let's Connect</h3>
          <p className="contact_details">Send Me an E-mail</p>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact_form">
  <div className="contact_form-group">
    <div className="contact_form-div">
      <input
        type="text"
        name="user_name"   
        className="contact_form-input"
        placeholder="Enter your name"
        required
      />
    </div>

    <div className="contact_form-div">
      <input
        type="email"
        name="user_email"  
        className="contact_form-input"
        placeholder="Enter your email"
        required
      />
    </div>
  </div>

  <div className="contact_form-div">
    <input
      type="text"
      name="subject"     
      className="contact_form-input"
      placeholder="Subject"
      required
    />
  </div>

  <div className="contact_form-div">
    <textarea
      name="message"    
      rows="10"
      className="contact_form-input contact_form-area"
      placeholder="Enter your message"
      required
    ></textarea>
  </div>

  <button type="submit" className="btn">Send Message</button>
</form>

      </div>
    </section>
  );
}

export default Contact;
