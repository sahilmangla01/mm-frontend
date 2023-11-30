import React from 'react'
import  "./Header.css"
import { NavLink } from 'react-router-dom'
import { BsFillTelephoneFill } from "react-icons/bs";
import { LuMail } from "react-icons/lu";
import { FaRegUserCircle } from "react-icons/fa";



const Header = () => {
  return (
    <div className='header'>
      <div className='header-left'>
        <p className='header-left-paragraph'><BsFillTelephoneFill className='icon'/><span>+91 9211334466</span></p>
        <p className='header-left-paragraph'><LuMail className='icon'/><span>acd@gmail.com</span></p>
      </div>
      <div className='header-right'>
      <p><NavLink to='/login' className="user-link"><FaRegUserCircle className='icon'/><span>User</span></NavLink></p>
      </div>
    </div>
  )
}

export default Header
