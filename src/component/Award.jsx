import React from 'react'
import '../styles/Award.css'
import '../Querys/AwardQuery.css'
import { Link } from 'react-router-dom'

const Award = () => {
  return (
    <div className='Award'>
      <div className="Award_wrap">
        <h1>Our Recent Awards</h1>
        <p>There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.</p>
        <div className="Award_shift">
          <div className="Award_card">
            <div className="Award_card_top">
              <span className='Award_svg'>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16" cy="16" r="16" fill="#8B5CF6"></circle>
                  <path d="M24 14.0968L18.248 13.5747L16 8L13.752 13.5747L8 14.0968L12.36 18.08L11.056 24L16 20.8589L20.944 24L19.632 18.08L24 14.0968Z" fill="white"></path>
                </svg>
              </span>
              <p>4.9 Rating</p>
            </div>
            <div className="Award_card_head">
              <div className="Award_head_img">
                <img src="/assets/person-1.png" alt="" />
                <img src="/assets/person-2.png" alt="" />
                <img src="/assets/person-3.png" alt="" />
              </div>
              <p>+195K raters</p>
            </div>
            <h1>Lorem ipsum dolor sit amet, consec adipiscing elit In vulputate vitae massa eu dapibus ligula.</h1>
            <Link to={'/'} className='Award_button'>
              Rate Out Application
            </Link>
          </div>
          <div className="Award_card">
            <div className="Award_card_top">
              <span className='Award_svg'>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16" cy="16" r="16" fill="#8B5CF6"></circle>
                  <path d="M19.3333 10.6666V9.33325H12.6667V10.6666H9.33334V15.3333C9.33334 16.0666 9.93334 16.6666 10.6667 16.6666H12.7333C13 17.9733 14.0267 18.9999 15.3333 19.2666V20.7199C13.3333 21.0266 13.3333 22.6666 13.3333 22.6666H18.6667C18.6667 22.6666 18.6667 21.0266 16.6667 20.7199V19.2666C17.9733 18.9999 19 17.9733 19.2667 16.6666H21.3333C22.0667 16.6666 22.6667 16.0666 22.6667 15.3333V10.6666H19.3333ZM10.6667 15.3333V11.9999H12.6667V15.3333H10.6667ZM21.3333 15.3333H19.3333V11.9999H21.3333V15.3333Z" fill="white"></path>
                </svg>
              </span>
              <p>Awwwards</p>
            </div>
            <div className="Award_card_head">
              <div className="Award_head_img">
                <img src="/assets/person-1.png" alt="" />
                <img src="/assets/person-2.png" alt="" />
                <img src="/assets/person-3.png" alt="" />
              </div>
              <p>Best trendy</p>
            </div>
            <h1>Lorem ipsum dolor sit amet, consec adipiscing elit In vulputate vitae massa eu dapibus ligula.</h1>
            <Link to={'/'} className='Award_button'>
              Go to Awards
            </Link>
          </div>
          <div className="Award_card">
            <div className="Award_card_top">
              <span className='Award_svg'>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16" cy="16" r="16" fill="#8B5CF6"></circle>
                  <path d="M19.3333 10.6666V9.33325H12.6667V10.6666H9.33334V15.3333C9.33334 16.0666 9.93334 16.6666 10.6667 16.6666H12.7333C13 17.9733 14.0267 18.9999 15.3333 19.2666V20.7199C13.3333 21.0266 13.3333 22.6666 13.3333 22.6666H18.6667C18.6667 22.6666 18.6667 21.0266 16.6667 20.7199V19.2666C17.9733 18.9999 19 17.9733 19.2667 16.6666H21.3333C22.0667 16.6666 22.6667 16.0666 22.6667 15.3333V10.6666H19.3333ZM10.6667 15.3333V11.9999H12.6667V15.3333H10.6667ZM21.3333 15.3333H19.3333V11.9999H21.3333V15.3333Z" fill="white"></path>
                </svg>
              </span>
              <p>Appwind</p>
            </div>
            <div className="Award_card_head">
              <div className="Award_head_img">
                <img src="/assets/person-1.png" alt="" />
                <img src="/assets/person-2.png" alt="" />
                <img src="/assets/person-3.png" alt="" />
              </div>
              <p>online pay</p>
            </div>
            <h1>Lorem ipsum dolor sit amet, consec adipiscing elit In vulputate vitae massa eu dapibus ligula.</h1>
            <Link to={'/'} className='Award_button'>
              Know More
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Award