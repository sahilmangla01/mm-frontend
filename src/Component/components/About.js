import React from 'react'
import "../Css/About.css"

const About = () => {
  return (
    
    <div className='about'>
      <p className='about-title'>About WREN</p>
      <div className='about-content'>
        <p>With experts from diverse backgrounds and different countries. We are working towards improving the planet with a clear mission and vcission our minds.</p>
        <img src='https://media.istockphoto.com/id/1346944001/photo/close-up-of-co-workers-stacking-their-hands-together.webp?b=1&s=170667a&w=0&k=20&c=T04nLNefknaVCvYKvYydqEoZWkykfEb-xx8FmPWDnLY=' alt='team'/>
      </div>
      <button className='about-button'>Know More</button>
    </div>
      
  )
}

export default About
