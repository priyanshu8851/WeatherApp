import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Components/Header';
import WeatherDisp from './Components/WeatherDisp';
import Footer from './Components/Footer';


const App = () => {
  return (
    <>
          <Header/>
          <WeatherDisp/>
          <Footer/>
    </>
  )
}

export default App
