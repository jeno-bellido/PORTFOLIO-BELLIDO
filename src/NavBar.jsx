import React, { useEffect } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'; 
// npm install aos [animate onscroll]
import AOS from 'aos' 
import 'aos/dist/aos.css'

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
        <p className='logo m-0' style={{fontWeight: '900', fontSize: '40px', color: '#0277B5'}} data-aos="fade-right">JB</p>
      </div>

      <div className='d-lg-flex d-md-flex d-none align-items-center justify-content-center gap-5'>
        <p className='nav m-0' style={{fontWeight: 'bold', fontSize: '14px', color: '#0277B5'}} data-aos="fade-down" data-aos-delay="200">Home</p>
        <p className='nav m-0' style={{fontWeight: 'normal', fontSize: '14px', color: '#323131'}} data-aos="fade-down" data-aos-delay="400">About</p>
        <p className='nav m-0' style={{fontWeight: 'normal', fontSize: '14px', color: '#323131'}} data-aos="fade-down" data-aos-delay="600">Projects</p>
        <p className='nav m-0' style={{fontWeight: 'normal', fontSize: '14px', color: '#323131'}} data-aos="fade-down" data-aos-delay="800">Skills</p>
        <p className='nav m-0' style={{fontWeight: 'normal', fontSize: '14px', color: '#323131'}} data-aos="fade-down" data-aos-delay="1000">Contact</p>
      </div>

      <div className='d-lg-none d-md-none d-flex align-items-center justify-content-center gap-4'>
        <div data-aos="fade-down" data-aos-delay="200">
          <p className='logo m-0' style={{fontWeight: 'bold', fontSize: '20px', color: '#323131'}} > <i className='bi-github'></i> </p>
        </div>
        <div data-aos="fade-down" data-aos-delay="400">
          <p className='logo m-0' style={{fontWeight: 'normal', fontSize: '20px', color: '#323131'}} ><i className='bi-facebook'></i> </p>
        </div>
        <div data-aos="fade-down" data-aos-delay="600">
          <p className='logo m-0' style={{fontWeight: 'normal', fontSize: '20px', color: '#323131'}} ><i className='bi-linkedin'></i> </p>
        </div>
      </div>

    </div>
    </div>

    </>
  )
}

export default NavBar