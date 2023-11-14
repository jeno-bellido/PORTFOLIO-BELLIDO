import React, { useEffect } from 'react'
import VanillaTilt from 'vanilla-tilt';
// npm install aos [animate onscroll]
import AOS from 'aos' 
import 'aos/dist/aos.css'

function Hero() {



      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
      useEffect(() => {
        AOS.init({ duration: 2000 });
      }, []);

      useEffect(() => {
        // This code block initializes the VanillaTilt effect on elements with class "element-tilt"
        const elements = document.querySelectorAll('.element-tilt');
    
        // Adding a delay of 100ms to give the elements more time to render
        const initializeVanillaTilt = () => {
          VanillaTilt.init(elements, {
            max: 25,
            speed: 400,
            glare: true,
            'max-glare': 0.5,
          });
        };
    
      // Wait for a short delay before initializing VanillaTilt
      const delayTimeout = setTimeout(initializeVanillaTilt, 100);
    
      // Clean up the timeout when the component unmounts or when the effect re-runs
      return () => clearTimeout(delayTimeout);
    }, []); // Make sure this useEffect runs only once after the initial render  
    
  return (
    <>

    
    <div className=' d-flex justify-content-center align-items-center my-lg-0 my-md-5 my-5' >
    <div className='  d-flex justify-content-center align-items-center my-lg-0 my-md-5 my-5 px-lg-5 p-4 p-lg-0 ' style={{width: '100%'}}>
        <div className=' col-12 row d-flex '>
            
            <div className='col-lg-7 col-12  p-2 d-flex  justify-content-center flex-column'>
              <div data-aos="fade-right" data-aos-delay="200">
                <p className='mb-1 greeting' style={{fontWeight: 'normal', fontSize: '16px', color: '#323131'}} >Greetings! Delighted to introduce myself as</p>
              </div>
              <div data-aos="fade-right" data-aos-delay="400">
              <p className='mb-1 name' style={{ fontWeight: '800', fontSize: '75px', background: 'linear-gradient(to bottom, #0095E4, #004AAD)', /* From top to bottom */ WebkitBackgroundClip: 'text', color: 'transparent' }}>JENO BELLIDO</p>              </div>
              <div data-aos="fade-right" data-aos-delay="600">
                <p className='m-0 description' style={{fontWeight: 'normal', fontSize: '16px', color: '#323131'}} >Full-stack Developer from the Philippines. On a mission to craft apps that leave an indelible mark.  Let's build the web together! 🌐💻</p>
              </div>
                <br />
                <div className='d-flex gap-4' data-aos="fade-right" data-aos-delay="800">
                 <a target='_blank' href="https://pdfhost.io/v/gXsYkO8~8_Jenos_Portfolio"> <button className='px-4 py-2 btn btn-primary bi bi-file-earmark-pdf' style={{fontWeight: 'bold', fontSize: '16px', color: '#323131'}}> RESUME </button> </a> 
                </div>
            </div>

            <div className='col-5 d-lg-flex d-none p-2' data-aos="zoom-in" data-aos-delay="1400">
                <div className='p-5 rounded-5' >
                    <img className='element-tilt' src="hero-image.png" alt="" style={{width: '100%', height: 'auto'}} />
                </div>
            </div>

        </div>
    </div>
    </div>
    <br /><br /><br />

    </>
  )
}

export default Hero