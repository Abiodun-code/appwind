import React from 'react'
import '../styles/Header.css'
import '../Querys/HeaderQuery.css'

const Header = () => {
  
  return (
    <div className='Header' data-aos="zoom-in" data-aos-duration="2000">
     <div className="Header_wrap">
      <div className="Header_shift">
        <div className="Header_text">
          <h1>React and CSS Template for Apps and Software</h1>
          <p>All in one React and CSS site template for - App and Software sites. Comes with all essential components, clean design and everything you can expect from a complete app landing page.</p>
          <button className='Header_button'>Explore</button>
        </div>
        <div className="Header_image">
            <img src="/assets/hero-image-2.svg" alt="" />
        </div>
      </div>
     </div>
    </div>
  )
}

export default Header