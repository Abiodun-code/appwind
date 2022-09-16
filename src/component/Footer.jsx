import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Footer.css'
import '../Querys/FooterQuery.css'

const Footer = ({Theme}) => {
  return (
    <div className='Footer' data-aos="zoom-in" data-aos-duration="2000">
      <div className='Footer_wrap'>
        <div className="Footer_shift">
          <div className="Footer_left">
            <div className="left_image">
              {Theme === 'light' ? <img src="/assets/logo.svg" alt="" /> : <img src="/assets/logo-white.svg" alt="" />}
            </div>
            <div className="left_text">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla feugiat et sem at Etiam in lobortis dui. Praesent .</p>
            </div>
          </div>
          <div className="Footer_right">
            <div className="right_first">
              <div className="right_card">
                <div className="right_h1">
                  <h1>Quick Links</h1>
                </div>
                <div className="right_text">
                  <Link className='right_link' to={'/'}>Our Blog</Link>
                  <Link className='right_link' to={'/'}>Check Pricing</Link>
                  <Link className='right_link' to={'/'}>About Us</Link>
                  <Link className='right_link' to={'/'}>Help & Support</Link>
                </div>
              </div>
              <div className="right_card">
                <div className="right_h1">
                  <h1>App Information</h1>
                </div>
                <div className="right_text">
                  <Link className='right_link' to={'/'}>Style Guideline</Link>
                  <Link className='right_link' to={'/'}>Getting Started</Link>
                  <Link className='right_link' to={'/'}>Changelog</Link>
                  <Link className='right_link' to={'/'}>Update Details</Link>
                </div>
              </div>
            </div>
            <div className="right_second">
              <div className="second_h1">
                <h1>Join Our Newsletter</h1>
              </div>
              <div className="second_text">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla feugiat et sem at Etiam in lobortis dui. Praesent .</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
