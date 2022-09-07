import { faSun } from '@fortawesome/free-regular-svg-icons'
import { faBars, faMoon, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/NavBar.css'
import '../Querys/NavBarQuery.css'

const NavBar = ({Theme, ToggleTheme}) => {
  // Hamburger use State is use for the Hamburger menu
  const [hamburger, sethamburger] = useState(false)
  // navbar use State is use for the scrolling
  const [navbar, setnavbar] = useState(false)
// These function is the one call for using Scroll use State
  const ScrollNav = () =>{
    if(window.scrollY >= 80){
      setnavbar(true);
    }else{
      setnavbar(false);
    }
  };
  window.addEventListener('scroll', ScrollNav)
  
  return (
    <div className={navbar ? 'NavBar active' : 'NavBar'} id={Theme}>
      <div className="NavBar_wrap">
        <div className="NavBar_image">
          {/* These statement is pass for light and dark mode image */}
          {Theme === 'light' ? <img src="/assets/logo.svg" alt="" /> : <img src="/assets/logo-white.svg" alt="" /> }
        </div>
        <div className="NavBar_content">
          <div className="NavBar_ul">
            {/* These is all about the navlink if it's desktop NavBar_sublink else NavBar_sublink_mobile */}
            <ul className={hamburger ? 'NavBar_sublink_mobile' : 'NavBar_sublink'} onClick={hamburger}>
              <Link className='NavBar_link' to={'/'}>Features</Link>
              <Link className='NavBar_link' to={'/'}>About</Link>
              <Link className='NavBar_link' to={'/'}>Pricing</Link>
              <Link className='NavBar_link' to={'/'}>Reviews</Link>
              <Link className='NavBar_link' to={'/'}>Contact</Link>
            </ul>
            <span className='hamburger' onClick={() => sethamburger(!hamburger)}>
              {hamburger ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
            </span>
          </div>
          <div className='NavBar_sub'>
            <button>Download</button>
            {/* These statement is pass into the icon when toggle it should be dark or light */}
            <span onClick={ToggleTheme}>
              {Theme === 'light' ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar