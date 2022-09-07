import React from 'react'
import '../styles/Clients.css'
import '../Querys/ClientQuery.css'

const Clients = () => {
  return (
    <div className='Client'>
      <div className="Client_wrap">
        <div className="Client_shift">
          <h1>What Clients Says?</h1>
          <p>There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.</p>
        </div>
        <div className="Client_list">
          <div className="Client_card">
            <p>Lorem ipsum dolor sit amet, consect adipiscing elit. Pellentesque dignissim nisi a odio laoreet luctus. Ut sed diam, quis bibendum ex.</p>
            <div className="Client_card_bottom">
              <img src="/assets/image-1.png" alt="" />
              <div className="Client_bottom_text">
                <h1>Musharof Chowdhury</h1>
                <p>Web Entrepreneur</p>
              </div>
            </div>
          </div>
          <div className="Client_card">
            <p>Lorem ipsum dolor sit amet, consect adipiscing elit. Pellentesque dignissim nisi a odio laoreet luctus. Ut sed diam, quis bibendum ex.</p>
            <div className="Client_card_bottom">
              <img src="/assets/image-2.png" alt="" />
              <div className="Client_bottom_text">
                <h1>Alex Glorio</h1>
                <p>Graphics Designer</p>
              </div>
            </div>
          </div>
          <div className="Client_card">
            <p>Lorem ipsum dolor sit amet, consect adipiscing elit. Pellentesque dignissim nisi a odio laoreet luctus. Ut sed diam, quis bibendum ex.</p>
            <div className="Client_card_bottom">
              <img src="/assets/image-3.png" alt="" />
              <div className="Client_bottom_text">
                <h1>Jonathon Smith</h1>
                <p>UI/UX Designer</p>
              </div>
            </div>
          </div>
          <div className="Client_card">
            <p>Lorem ipsum dolor sit amet, consect adipiscing elit. Pellentesque dignissim nisi a odio laoreet luctus. Ut sed diam, quis bibendum ex.</p>
            <div className="Client_card_bottom">
              <img src="/assets/image-4.png" alt="" />
              <div className="Client_bottom_text">
                <h1>Devid Miller</h1>
                <p>Product Designer</p>
              </div>
            </div>
          </div>
          <div className="Client_card">
            <p>Lorem ipsum dolor sit amet, consect adipiscing elit. Pellentesque dignissim nisi a odio laoreet luctus. Ut sed diam, quis bibendum ex.</p>
            <div className="Client_card_bottom">
              <img src="/assets/image-5.png" alt="" />
              <div className="Client_bottom_text">
                <h1>Adam Wilsmith</h1>
                <p>App Developer</p>
              </div>
            </div>
          </div>
          <div className="Client_card">
            <p>Lorem ipsum dolor sit amet, consect adipiscing elit. Pellentesque dignissim nisi a odio laoreet luctus. Ut sed diam, quis bibendum ex.</p>
            <div className="Client_card_bottom">
              <img src="/assets/image-1.png" alt="" />
              <div className="Client_bottom_text">
                <h1>Justin Farnandes</h1>
                <p>Seo Expert</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Clients