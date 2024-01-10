import React, { useEffect } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'; 
// npm install aos [animate onscroll]
import AOS from 'aos' 
import 'aos/dist/aos.css'
// ScrollLink [npm install react-scroll, clicking it will redirect to a section with specified id]
import { Link as ScrollLink } from 'react-scroll';

function NavBar() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
    <div className='d-flex justify-content-center align-items-center '>
    <div className='d-flex justify-content-between p-lg-5 p-4' style={{height: '100px', width: '100%'}}>

      <div className='d-flex align-items-center justify-content-center'>
        <img src="logo.png" style={{width: '80px'}} alt="" />
      </div>

      <div className='d-lg-flex d-md-flex d-none align-items-center justify-content-center gap-5'>
        <ScrollLink to="projects" smooth={true} duration={0} offset={-80}> 
          <p className='nav m-0' style={{fontWeight: '300', fontSize: '16px', color: '#323131'}} data-aos="fade-down" data-aos-delay="200">Projects</p>
        </ScrollLink>
        <ScrollLink to="skills" smooth={true} duration={0} offset={-80}> 
          <p className='nav m-0' style={{fontWeight: '300', fontSize: '16px', color: '#323131'}} data-aos="fade-down" data-aos-delay="400">Skills</p>
        </ScrollLink>
        <ScrollLink to="about" smooth={true} duration={0} offset={-40}> 
          <p className='nav m-0' style={{fontWeight: '300', fontSize: '16px', color: '#323131'}} data-aos="fade-down" data-aos-delay="600">About</p>
        </ScrollLink>
        <ScrollLink to="contact" smooth={true} duration={0} offset={-80}> 
          <p className='nav m-0' style={{fontWeight: '300', fontSize: '16px', color: '#323131'}} data-aos="fade-down" data-aos-delay="800">Contact</p>
        </ScrollLink>

        <div className='d-flex align-items-center justify-content-center gap-3'>

        <div data-aos="fade-down" data-aos-delay="1000">
        <div className='nav-logo'>
        <a target='_blank' href = "https://www.linkedin.com/in/jeno-bellido-079221218/"> <img src="linkedin.png" alt="" style={{objectFit: 'cover', width: '25px', height: 'auto'}}  /></a> 
        </div>

        </div>
        <div data-aos="fade-down" data-aos-delay="1200">
        <div className='nav-logo'>
        <a target='_blank' href = "https://www.instagram.com/jjeennnooo/">  <img src="instagram.png" alt="" style={{objectFit: 'cover', width: '25px', height: 'auto'}}  /> </a>
        </div>

        </div>
        <div data-aos="fade-down" data-aos-delay="1400">
        <div className='nav-logo'>
          <img src="github.png" alt="" style={{objectFit: 'cover', width: '25px', height: 'auto'}}  />
        </div>

        </div>

        <div data-aos="fade-down" className='' data-aos-delay="1400">
        <div className='nav-logo'>
        <a href = "mailto: jeno.bellido@wvsu.edu.ph">  <img src="gmail.png" alt="" style={{objectFit: 'cover', width: '25px', height: 'auto'}}  /> </a>
        </div>

        </div>

        </div>


     </div>

      <div className='d-lg-none d-md-none d-flex align-items-center justify-content-center gap-4'>
        <div data-aos="fade-down" data-aos-delay="200">
        <div className='nav-logo'>
        <a target='_blank' href = "https://www.linkedin.com/in/jeno-bellido/"> <img src="linkedin.png" alt="" style={{objectFit: 'cover', width: '25px', height: 'auto'}}  /></a> 
        </div>
        </div>
        <div data-aos="fade-down" data-aos-delay="400">
        <div className='nav-logo'>
        <a target='_blank' href = "https://www.instagram.com/jjeennnooo/">  <img src="instagram.png" alt="" style={{objectFit: 'cover', width: '25px', height: 'auto'}}  /> </a>
        </div>
        </div>
        <div data-aos="fade-down" data-aos-delay="600">
        <div className='nav-logo'>
          <img src="github.png" alt="" style={{objectFit: 'cover', width: '25px', height: 'auto'}}  />
        </div>
        </div>

        <div data-aos="fade-down" data-aos-delay="600">
        <div className='nav-logo'>
        <a href = "mailto: jeno.bellido@wvsu.edu.ph">  <img src="gmail.png" alt="" style={{objectFit: 'cover', width: '25px', height: 'auto'}}  /> </a>
        </div>
        </div>

      </div>

    </div>
    </div>

    </>
  )
}

export default NavBar