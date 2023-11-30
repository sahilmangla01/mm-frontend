import React from 'react'
import "./Footer.css"
import { AiOutlineEnter } from "react-icons/ai";
import { IoLogoFacebook } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillLinkedin } from "react-icons/ai";



const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-column'>
        <h1>MREN</h1>
        <p>Protecting biodiversity and natural habitats is crucial for maintaining a healthy and sustainable ecology.</p>
        <div className='inpsection'>
            <input type='text' placeholder='Enter your email' />
            <button>
                <AiOutlineEnter/>
            </button>
        </div>
      </div>
      <div className='footer-column'>
        <h3>FUNDRAISING</h3>
        <p>Energy Consulting</p>
        <p>Tree Planting</p>
        <p>Global Warming</p>
        <p>Climate Adaptation</p>
        <p>Water Conservation</p>
      </div>
      <div className='footer-column'>
        <h3>EXPLORE</h3>
        <p>About</p>
        <p>How it Works</p>
        <p>Knowledge Hub</p>
        <p>Success Stories</p>
        <p>Contact</p>
      </div>
      <div className='footer-column'>
        <h3>CONTACT</h3>
        <p>+61433511670</p>
        <p>www.wrenconsult.com.au</p>
        <p>amardeep@wrenconsult.com.au</p>

        <div>
            <IoLogoFacebook className='icon'/>
            <AiFillLinkedin className='icon'/>
            <RiInstagramFill className='icon'/>
        </div>
      </div>
    </div>
  )
}

export default Footer
