import React, { createContext, useEffect, useState } from "react" 
import NavBar from "./NavBar"
import Hero from "./Hero"
import './App.css'
import Projects from "./Projects"
import { animateScroll as scroll } from 'react-scroll';
import Skills from "./Skills"
import About from "./About"
import Contact from "./Contact"
import Footer from "./Footer"

function App() {
  return (
    <>

    <NavBar/>
    <Hero />
    <Projects />
    <Skills />
    <About />
    <Contact />
    <Footer />


    </>
  )
}

export default App