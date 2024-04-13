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
import {Helmet} from "react-helmet";
import Experience from "./Experience";

function App() {
  return (
    <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>JB</title>
      <link rel="canonical" href="http://mysite.com/example" />
      <meta name="description" content="Helmet application" />
    </Helmet>

    <NavBar/>
    <Hero />
    <Experience />
    <Projects />
    <Skills />
    <About />
    <Contact />
    <Footer />


    </>
  )
}

export default App