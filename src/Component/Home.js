import React from 'react'
import About from './components/About'
import WhatWeDo from"./components/WhatWeDo"
import Strength from "./components/Strength"
import Latest from "./components/Latest"
import Client from './components/Client'
import Footer from './Footer/Footer'
const Home = () => {
  return (
    <div>
      <About/>
    <WhatWeDo/>
    <Strength/>
    <Latest/>
    <Client/>
    <Footer/>
    </div>
  )
}

export default Home
