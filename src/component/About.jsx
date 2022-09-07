import React from 'react'
import '../styles/About.css'
import '../Querys/AboutQuery.css'

const About = () => {
  return (
    <div className='About'>
      <div className="About_wrap">
        <div className="About_shift">
          <img src="/assets/about-image-1.svg" alt="" />
          <div className="About_text">
            <h2>About Application</h2>
            <h1>Instant Payment Transfer SavesYou Time</h1>
            <p>Schedule your posts for times when your audience is most active. Choose from our best-time predictions, or create your own publishing schedule.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About