import React, { useEffect } from 'react'
import VanillaTilt from 'vanilla-tilt';
// npm install aos [animate onscroll]
import AOS from 'aos' 
import 'aos/dist/aos.css'
// ScrollLink [npm install react-scroll, clicking it will redirect to a section with specified id]
import { Link as ScrollLink } from 'react-scroll';

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

    
    <div className=' d-flex justify-content-center align-items-center my-lg-0 my-md-5 my-5 mb-5' >
    <div className='  d-flex justify-content-center align-items-center my-lg-0 my-md-5 my-5 px-lg-5 p-4 p-lg-0 ' style={{width: '100%'}}>
        <div className=' col-12 row d-flex '>
            
            <div className='col-lg-7 col-12  p-2 d-flex  justify-content-center flex-column'>
              <div data-aos="fade-right" data-aos-delay="200">
                <p className='greeting' style={{fontWeight: 'normal', fontSize: '14px', color: '#323131'}} >👋 Hey there, I’m</p>
              </div>
              <div data-aos="fade-right" data-aos-delay="400">
              <p className='name' style={{ lineHeight: '1',  fontWeight: '900', fontSize: '65px', background: 'linear-gradient(to bottom, #0095E4, #004AAD)', /* From top to bottom */ WebkitBackgroundClip: 'text', color: 'transparent' }}>JENO BELLIDO</p>              
              </div>

              <div className='d-flex gap-4' data-aos="fade-right" data-aos-delay="800" >
                <button className='px-4 py-2 btn btn-primary rounded-5 border-2' style={{fontWeight: 'normal', fontSize: '14px', color: '#323131'}}> Full-stack Developer </button> 
                </div>

              <div data-aos="fade-right" data-aos-delay="600" style={{marginTop: '15px'}}>
                <p className='m-0 description' style={{fontWeight: 'normal', fontSize: '14px', color: '#323131'}} >Full-stack Developer from the Philippines. On a mission to craft apps that leave an indelible mark.  Let's build the web together! 🌐💻</p>
              </div>
                <br />

                <div className='d-flex gap-3 '>

                <div className='d-flex gap-4' data-aos="fade-right" >
                 <a target='_blank' href="https://pdfhost.io/v/gXsYkO8~8_Jenos_Portfolio"> <button className='px-4 py-2 btn btn-primary border-2' style={{fontWeight: 'bold', fontSize: '14px', color: '#323131'}}> 📄 RESUME </button> </a> 
                </div>

                <ScrollLink to="contact" className='d-flex gap-4 text-decoration-none ' data-aos="fade-right" >
                 <button className='px-4 py-2 btn btn-primary border-2 text-decoration-none ' style={{fontWeight: 'bold', fontSize: '14px', color: '#323131'}}>  🤙 Get in Touch </button> 
                </ScrollLink>

                </div>


            </div>

            <div className='col-5 d-lg-flex d-none p-2' data-aos="zoom-in" data-aos-delay="1400">
                <div className='p-5 rounded-5' >
                    <img className='element-tilt rounded-5 ' src="hero-image.png" alt="" style={{width: '100%', height: 'auto'}} />
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