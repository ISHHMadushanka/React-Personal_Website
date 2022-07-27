import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {RiMessengerFill} from 'react-icons/ri'
import {RiWhatsappFill} from 'react-icons/ri'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_26jn5k3', 'template_oreelfc', form.current, '3lFbKHus6A8kFDJTP')
     
    e.target.reset()
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className="contact__options">
          <article className='contact__option'>
  <MdEmail className='contact__option-icon'/>
<h4>Email</h4>
<h5>isharamadushanka240@gmail.com</h5>
<a href="mailto:isharamadushanka240@gmail.com" target="_blank">Send a message</a>
          </article>

          <article className='contact__option'>
  <RiMessengerFill  className='contact__option-icon'/>
<h4>Messenger</h4>
<h5>wasmeer</h5>
<a href="https://m.me/wasmeer/" target="_blank">Send a message</a>
          </article>        

        <article className='contact__option'>
  <RiWhatsappFill className='contact__option-icon'/>
<h4>Whatsapp</h4>
<h5>+94778599968</h5>
<a href="https://wa.me/+94778599968" target="_blank">Send a message</a>
          </article>
        </div>        
        {/* END OF CONTACT OPTIONS */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
       <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact