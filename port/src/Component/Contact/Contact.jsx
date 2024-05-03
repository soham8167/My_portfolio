import React, { useRef } from 'react';
import './Contact.css'

 import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_u112p0q', 'template_fy7mmki', form.current, '33gXgtJs-K49hRk_J')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className='contact'>
      <h1 className='ch'>Feel to Contact us</h1>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.7512741457595!2d88.40030907488871!3d22.513513335134157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0271359124251b%3A0xd69e77b5a6181779!2sRuby%20General%20Hospital!5e0!3m2!1sen!2sin!4v1694880726524!5m2!1sen!2sin" title="Map" width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <div className='container_c'>
        <div className='contact_form'>
          <h2 className='message'><b>Write me a message</b></h2>
          {/* <form action='#' method='POST' className='contact_inputs'>
            <input type='text' name='Full Name' placeholder='Full_Name' className='input-i' autoComplete='off'required />

            <input type='email' name='Email' placeholder='Email' className='input-i' autoComplete='off' required />
            <textarea name='message' cols='25' rows='5' required></textarea>
            <input type='submit' value='send' className='button c-button' />
          </form> */}
          <form ref={form} onSubmit={sendEmail} className='contact_inputs'>
      <label className='label-l'>Enter your Name</label>
      <input type="text" name="user_name" placeholder='Full_Name' className='input-i' autoComplete='off' required />
      <label className='label-l'>Enter your Email</label>
      <input type="email" name="user_email" placeholder='Email' className='input-i'autoComplete='off'required />
      <label className='label-m'>Message</label>
      <textarea name="message" cols='25' rows='5' />
      <input type="submit" value="Send" className='button c-button' />
    </form>
        </div>
      </div>
    </div>
    
  )
}

export default Contact
