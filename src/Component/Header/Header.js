import React from 'react'
import  "./Header.css"
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <div className='header-left'>
        <p className='header-left-paragraph'>+91 9211334466</p>
        <p className='header-left-paragraph'>acd@gmail.com</p>
      </div>
      <div className='header-right'>
      <p><NavLink to='/login' className="user-link">User</NavLink></p>
      </div>
    </div>
  )
}

export default Header
