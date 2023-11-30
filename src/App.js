
import './App.css';
import About from './Component/components/About';
import Strength from './Component/components/Strength';
import WhatWeDo from './Component/components/WhatWeDo';
import Header from './Component/Header/Header';
import RouteComponent from './Component/RouteComponent/RouteComponent';


function App() {
  return (
    <>
    <Header/>
    <RouteComponent/>
    <About/>
    <WhatWeDo/>
    <Strength/>
    </>
      
  );
}

export default App;
