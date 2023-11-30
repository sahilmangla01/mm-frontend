import React from 'react'
import "../Css/Navigation.css"

const Navigation = () => {
  return (
    <div className='navigation'>
      <div className='navigate'>
        <h1>MREN</h1>
        <div className='navigation-links'>
            <p>Home</p>
            <p>About</p>
            <p>Service</p>
            <p>Project</p>
            <p>Blog</p>
            <p>Contact Us</p>
        </div>
      </div>

      <div className='nav-content'>
        <div className='nav-title'>Transforming Challenges into Opportunities</div>
        <hr/>
        <div className='nav-description'>We are dedicated to turning environmental challenges into opportunities for growth, innovation, and lasting change.</div>
      </div>
    </div>
  )
}

export default Navigation
