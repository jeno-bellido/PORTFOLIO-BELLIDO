import React from 'react'
// ScrollLink [npm install react-scroll, clicking it will redirect to a section with specified id]
import { Link as ScrollLink } from 'react-scroll';

function Footer() {
  return (
   <>
    <div id='footer' className=' d-flex justify-content-center align-items-center' style={{borderTop: '1px solid #323131'}} >
      <div className='mt-3 d-flex justify-content-center align-items-center flex-column' style={{width: "100%"}} data-aos="fade-right"> 
      
        <div className='d-flex flex-lg-row flex-md-row flex-column col-12 justify-content-start p-lg-4 p-4 ' >

        <div className='col-lg-4 col-md-4 col-12 '>
        <div className='d-flex flex-column text-center align-items-center justify-content-center'>
        <img src="logo.png" style={{width: '60px'}} alt="" />
        </div>       
        </div>

        <div className='col-lg-4 col-md-4 col-12 d-flex justify-content-center align-items-center py-lg-0 py-md-0 py-5'>
        <div className='d-flex gap-3 text-center align-items-center justify-content-center'>
        <ScrollLink to="projects" smooth={true} duration={0} offset={-80}> 
          <p className='nav m-0 description' style={{fontWeight: 'normal', fontSize: '16px', color: '#323131'}}  >Projects</p>
        </ScrollLink>
        <ScrollLink to="skills" smooth={true} duration={0} offset={-80}> 
          <p className='nav m-0 description' style={{fontWeight: 'normal', fontSize: '16px', color: '#323131'}}  >Skills</p>
        </ScrollLink>
        <ScrollLink to="about" smooth={true} duration={0} offset={-40}> 
          <p className='nav m-0 description' style={{fontWeight: 'normal', fontSize: '16px', color: '#323131'}}  >About</p>
        </ScrollLink>
        <ScrollLink to="contact" smooth={true} duration={0} offset={-80}> 
          <p className='nav m-0 description' style={{fontWeight: 'normal', fontSize: '16px', color: '#323131'}}  >Contact</p>
        </ScrollLink>
        </div>       
        </div>


        <div className='col-lg-4 col-md-4 col-12  d-flex justify-content-center align-items-center'>
        <div className='d-flex gap-3 text-center align-items-center justify-content-center'>
        <div  >
        <div className=''>
        <a target='_blank' href = "https://www.linkedin.com/in/jeno-bellido/">   <img src="linkedin.png" alt="" style={{objectFit: 'cover', width: '25px', height: 'auto'}}  /> </a>
        </div>
        </div>
        <div  >
        <div className=''>
        <a target='_blank' href = "https://www.instagram.com/jjeennnooo/">  <img src="instagram.png" alt="" style={{objectFit: 'cover', width: '25px', height: 'auto'}}  /> </a>
        </div>
        </div>
        <div >
        <div className=''>
          <img src="github.png" alt="" style={{objectFit: 'cover', width: '25px', height: 'auto'}}  />
        </div>
        </div>

        <div >
        <div className=''>
        <a href = "mailto: jeno.bellido@wvsu.edu.ph">  <img src="gmail.png" alt="" style={{objectFit: 'cover', width: '25px', height: 'auto'}}  /> </a>
        </div>
        </div>

        </div>       
        </div>

        </div>

        <div className='d-flex col-12 justify-content-center align-items-center p-lg-4 p-4 description' style={{fontSize: '16px'}} >
        📋 2021 © Jeno Bellido • All Rights Reserved.
        </div>
        </div>
    </div>
    
   </>
  )
}

export default Footer