import { faSun } from '@fortawesome/free-regular-svg-icons'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/NavBar.css'

const NavBar = ({Theme, ToggleTheme}) => {
  const [navbar, setnavbar] = useState(false)

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
          {Theme === 'light' ? <img src="/assets/logo.svg" alt="" /> : <img src="/assets/logo-white.svg" alt="" /> }
        </div>
        <div className="NavBar_content">
          <div className="NavBar_ul">
            <ul className='NavBar_sublink'>
              <Link className='NavBar_link' to={'/'}>Features</Link>
              <Link className='NavBar_link' to={'/'}>About</Link>
              <Link className='NavBar_link' to={'/'}>Pricing</Link>
              <Link className='NavBar_link' to={'/'}>Reviews</Link>
              <Link className='NavBar_link' to={'/'}>Contact</Link>
              <div className="link_drop">
                <Link className='NavBar_link' to={'/'}>Pages</Link>
                <div className="link_content">

                </div>
              </div>
            </ul>
          </div>
          <div className='NavBar_sub'>
            <button>Download</button>
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