import React from 'react'
import '../styles/Contact.css'
import '../Querys/ContactQuery.css'

const Contact = () => {
  return (
    <div className='Contact' data-aos="zoom-in" data-aos-duration="2000">
      <div className="Contact_wrap">
        <div className="Contact_shift">
          <h1>Get in Touch</h1>
          <p>There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.</p>
        </div>
        <form action="mailto: olaabiodun157@gmail.com">
          <div className="form_header">
            <input className='form_name' type="text" placeholder='Your Name' />
            <input className='form_email' type="email" placeholder='Your Email' />
          </div>
          <input className='form_sub' type="text" placeholder='Subject' />
          <textarea placeholder='What are you looking for?' className='form_text'></textarea>
          <button className='form_button'>Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact