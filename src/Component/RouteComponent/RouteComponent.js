import React from 'react'
import {Routes ,Route } from "react-router-dom"
import Login from '../login/Login'
import Register from '../login/Register'
import Home from '../Home'

const RouteComponent = () => {
  return (
    
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
      </Routes>
  
  )
}

export default RouteComponent
