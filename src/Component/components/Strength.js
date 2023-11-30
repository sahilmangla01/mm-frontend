import React from 'react'
import "../Css/Strength.css"
import { BsGlobe2 } from "react-icons/bs";
import { GrUserExpert } from "react-icons/gr";
import { PiPlantLight } from "react-icons/pi";
import { PiLightbulbFilamentFill } from "react-icons/pi";




const Strength = () => {
  return (
    <div className='strength'>
      <div className='strength-left'>
        <h2>Our</h2>
        <h1>Strengths</h1>
        <div className='strength-content'>
            <div className='icons'>
            <BsGlobe2 className='icon'/>
            </div>
            <div><h3>Global Presence</h3>
            <p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p></div>
        </div>
        <div className='strength-content'>
            <div className='icons'>

            <GrUserExpert className='icon'/>
            </div>
            <div>
            <h3>Expertise and Knowledge</h3>
            <p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
            </div>
        </div>
        <div className='strength-content'>
            <div className='icons'>

            <PiPlantLight className='icon'/>
            </div>
            <div><h3>Environmental Stewardship</h3>
            <p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p></div>
        </div>
        <div className='strength-content'>
            <div className='icons'>

            <PiLightbulbFilamentFill className='icon'/>
            </div>
            <div>
            <h3>Innovation</h3>
            <p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
            </div>
        </div>
        
      </div>
      <img className='strength-image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRQX2ikkiQuuMzFboOGT3EJ9O4GGt3c90La16B8XK248T3xMm0aePaCnqtf09ohXSOnCg&usqp=CAU' alt='Strength'/>
    </div>
  )
}

export default Strength
