import React, { useEffect } from 'react'
// npm install aos [animate onscroll]
import AOS from 'aos' 
import 'aos/dist/aos.css'

function Projects() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
      useEffect(() => {
        AOS.init({ duration: 2000 });
      }, []);

  return (
    <>
    <div id='projects' className=' d-flex justify-content-center align-items-center mb-5' >
        <div className=' d-flex justify-content-center align-items-center flex-column' style={{width: "100%"}}>
            <div className='w-100  px-lg-5 p-4 p-lg-0'>
                <p className='mb-1 name' style={{lineHeight: '1', fontWeight: '900', fontSize: '65px', background: 'linear-gradient(to bottom, #0095E4, #004AAD)', /* From top to bottom */ WebkitBackgroundClip: 'text', color: 'transparent'}} data-aos="fade-right" >PROJECTS</p>
                <p className='m-0 description' style={{fontWeight: 'normal', fontSize: '16px', color: '#323131'}} data-aos="fade-right" data-aos-delay="400"> The showcase of the cool stuff I've worked on — take a look. 👀 </p>
            </div>
            <div className='d-flex col-12 row justify-content-start p-lg-4 p-4' >

            <div className='project col-lg-4 col-md-6 col-sm-6 col-12 d-lg-flex d-flex pb-5'>
                <div className=' rounded-5'>
                    <div className='project-bg'>
                        <div className='position-relative' data-aos="fade-up">
                        <video className='rounded-3' autoPlay muted loop  style={{ width: '100%', height: 'auto' }}>
                        <source src="safetypin.mp4" type="video/mp4" />
                    </video>
                       <a href="https://safetypin.onrender.com/" target='_blank'> <button className='m-0 border position-absolute shadow rounded-3 btn' style={{ fontWeight: 'normal', fontSize: '12px', color: 'white', bottom: '-5px', left: '50%', transform: 'translate(-50%, -50%)', }} > <i className='bi bi-arrow-up-right-square m-0'></i>  Visit SafetyPin </button>            </a>                
                        </div>
                    <div className='' data-aos="fade-up" >
                        <p className='mt-3 title' style={{fontWeight: '900', fontSize: '30px'}} >SAFETYPIN</p>
                        <p className=' desc' style={{fontWeight: 'normal', fontSize: '16px', color: '#323131'}}> Integration of Dijkstra's algorithm to recommend safe routes, and KDE algorithm to analyze crime patterns within Iloilo City.</p>
                        <p className='m-0 techstack' style={{fontWeight: 'normal', fontSize: '16px', color: '#323131'}}> <b style={{color: '#004AAD'}}>Tech Stack: </b> FastAPI, React, Javascript, CSS, Bootstrap, HTML</p>
                    </div>
                    </div>
                </div>
            </div>

            <div className='project col-lg-4 col-md-6 col-sm-6 col-12 d-lg-flex d-flex pb-5'>
                <div className=' rounded-5'>
                    <div className='project-bg'>
                    <div className='position-relative' data-aos="fade-up">
                    <video className='rounded-3' autoPlay muted loop  style={{ width: '100%', height: 'auto' }}>
                        <source src="project-2-2.mp4" type="video/mp4" />
                    </video>
                    <a href="https://iloilo-coffee-house.onrender.com/" target='_blank'> <button className='m-0 border position-absolute shadow rounded-3 btn' style={{ fontWeight: 'normal', fontSize: '12px', color: 'white', bottom: '-5px', left: '50%', transform: 'translate(-50%, -50%)', }} > <i className='bi bi-arrow-up-right-square m-0'></i>  Visit ICH </button>            </a>                
                    </div>
                    <div className=' py-2' data-aos="fade-up" >
                    <p className='mt-3 title' style={{ lineHeight: '1', fontWeight: '900', fontSize: '30px'}} >ILOILO COFFEE HOUSE</p>
                        <p className=' desc' style={{fontWeight: 'normal', fontSize: '16px', color: '#323131'}}> A full-stack website that allows customers review/rate their favorite products from Iloilo Coffee House.</p>
                        <p className='m-0 techstack' style={{fontWeight: 'normal', fontSize: '16px', color: '#323131'}}> <b style={{color: '#004AAD'}}>Tech Stack: </b> MongoDB, Express, React, Node.js, Javascript, CSS, Bootstrap, HTML</p>
                    </div>
                    </div>
                </div>
            </div>

            <div className='project col-lg-4 col-md-6 col-sm-6 col-12 d-lg-flex d-flex pb-5'>
                <div className=' rounded-5'>
                    <div className='project-bg'>
                    <div className='position-relative' data-aos="fade-up">
                    <video className='rounded-3' autoPlay muted loop  style={{ width: '100%', height: 'auto' }}>
                        <source src="project-3-2.mp4" type="video/mp4" />
                    </video>
                    <a href="https://swiftify-spotifytswrap.onrender.com/" target='_blank'> <button className='m-0 border position-absolute shadow rounded-3 btn' style={{ fontWeight: 'normal', fontSize: '12px', color: 'white', bottom: '-5px', left: '50%', transform: 'translate(-50%, -50%)', }} > <i className='bi bi-arrow-up-right-square m-0'></i>  Visit Swiftify </button>            </a>                
                    </div>
                    <div className=' py-2' data-aos="fade-up" >
                    <p className='mt-3 title' style={{ lineHeight: '1', fontWeight: '900', fontSize: '30px'}} >SWIFTIFY</p>
                        <p className=' desc' style={{fontWeight: 'normal', fontSize: '16px', color: '#323131'}}> Utilization of Spotify API to display user's top Taylor Swift tracks. </p>
                        <p className='m-0 techstack' style={{fontWeight: 'normal', fontSize: '16px', color: '#323131'}}> <b style={{color: '#004AAD'}}>Tech Stack: </b> Flask , Javascript, CSS, HTML </p>
                    </div>
                    </div>
                </div>
            </div>

            <div className='project col-lg-4 col-md-6 col-sm-6 col-12 d-lg-flex d-flex pb-5'>
                <div className=' rounded-5'>
                    <div className='project-bg'>
                    <div className='position-relative' data-aos="fade-up">
                    <video className='rounded-3' autoPlay muted loop  style={{ width: '100%', height: 'auto' }}>
                        <source src="project-5.mp4" type="video/mp4" />
                    </video>
                    <a href="https://pneumoscanai.onrender.com/" target='_blank'> <button className='m-0 border position-absolute shadow rounded-3 btn' style={{ fontWeight: 'normal', fontSize: '12px', color: 'white', bottom: '-5px', left: '50%', transform: 'translate(-50%, -50%)', }} > <i className='bi bi-arrow-up-right-square m-0'></i>  Visit PS </button>            </a>                
                    </div>
                    <div className=' py-2' data-aos="fade-up" >
                    <p className='mt-3 title' style={{ lineHeight: '1', fontWeight: '900', fontSize: '30px'}} >PNEUMOSCAN</p>
                        <p className=' desc' style={{fontWeight: 'normal', fontSize: '16px', color: '#323131'}}> An AI-driven web application that enables users to upload chest X-rays for analysis, providing insights into the likelihood of pneumonia based on CNN modeling.</p>
                        <p className='m-0 techstack' style={{fontWeight: 'normal', fontSize: '16px', color: '#323131'}}> <b style={{color: '#004AAD'}}>Tech Stack: </b> FastAPI, React, Javascript, CSS, Bootstrap, HTML</p>
                    </div>
                    </div>
                </div>
            </div>

            <div className='project col-lg-4 col-md-6 col-sm-6 col-12 d-lg-flex d-flex pb-5'>
                <div className=' rounded-5'>
                    <div className='project-bg'>
                    <div className='position-relative' data-aos="fade-up">
                    <video className='rounded-3' autoPlay muted loop  style={{ width: '100%', height: 'auto' }}>
                        <source src="project-4.mp4" type="video/mp4" />
                    </video>
                    <a href="https://wvsu-usa.vercel.app/" target='_blank'> <button className='m-0 border position-absolute shadow rounded-3 btn' style={{ fontWeight: 'normal', fontSize: '12px', color: 'white', bottom: '-5px', left: '50%', transform: 'translate(-50%, -50%)', }} > <i className='bi bi-arrow-up-right-square m-0'></i>  Visit WVSU - USA </button>            </a>                
                    </div>
                    <div className=' py-2' data-aos="fade-up" >
                    <p className='mt-3 title' style={{ lineHeight: '1', fontWeight: '900', fontSize: '30px'}} >WVSU - USA</p>
                        <p className='desc' style={{fontWeight: 'normal', fontSize: '16px', color: '#323131'}}> A static website to boost vitual presence of student council candidates. </p>
                        <p className='m-0 techstack' style={{fontWeight: 'normal', fontSize: '16px', color: '#323131'}}> <b style={{color: '#004AAD'}}>Tech Stack: </b>  Javascript, Bootstrap, CSS, HTML </p>
                    </div>
                    </div>
                </div>
            </div>



            </div>
        </div>
    </div>
    </>
  )
}

export default Projects