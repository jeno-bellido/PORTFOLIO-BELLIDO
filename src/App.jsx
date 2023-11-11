import React, { createContext, useEffect, useState } from "react" 
import NavBar from "./NavBar"
import Hero from "./Hero"
import './App.css'
import Projects from "./Projects"
import { animateScroll as scroll } from 'react-scroll';
import Skills from "./Skills"
import About from "./About"

function App() {
  return (
    <>

    <NavBar/>
    <Hero />
    <Projects />
    <Skills />
    <About />


    </>
  )
}

export default App