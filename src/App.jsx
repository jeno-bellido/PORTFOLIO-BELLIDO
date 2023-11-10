import React, { createContext, useEffect, useState } from "react" 
import NavBar from "./NavBar"
import Hero from "./Hero"
import './App.css'
import Projects from "./Projects"
import { animateScroll as scroll } from 'react-scroll';
import Skills from "./Skills"

function App() {
  return (
    <>
    {/** Background */}
    <video id="myVideo" autoplay muted loop>
        <source src="bg.mp4" type="video/mp4" />
        <source src="bg.ogg" type="video/ogg"/>
    </video>

    <NavBar/>
    <Hero />
    <Projects />
    <Skills />

    </>
  )
}

export default App