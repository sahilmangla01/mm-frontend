import React from 'react'
import {Routes ,Route } from "react-router-dom"
import Login from '../login/Login'
import Register from '../login/Register'

const RouteComponent = () => {
  return (
    
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
      </Routes>
  
  )
}

export default RouteComponent
