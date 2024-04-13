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
                <p className='m-0 description' style={{fontWeight: '300', fontSize: '16px', color: '#323131'}} data-aos="fade-right" data-aos-delay="400"> The showcase of the cool stuff I've worked on — take a look. <br /> <span className='text-danger '>Note: My projects are hosted on Render's free tier, and the content may load slowly on the initial load.</span> </p>
            </div>
            
            <div className='d-flex col-12 row justify-content-start p-lg-4 p-4' >

            <div className='project col-lg-4 col-md-6 col-sm-6 col-12 d-lg-flex d-flex pb-5'>
                <div className=' rounded-5'>
                    <div className='project-bg'>
                        <div className='position-relative' data-aos="fade-up">
                        <video className='rounded-3' autoPlay muted loop  style={{ width: '100%', height: 'auto' }}>
                        <source src="safetypin.mp4" type="video/mp4" />
                    </video>
                       <a href="https://safetypin.onrender.com/" target='_blank'> <button className='m-0 position-absolute shadow rounded-3 btn' style={{ fontWeight: 'normal', fontSize: '12px', color: 'white', bottom: '-5px', left: '50%', transform: 'translate(-50%, -50%)', }} > <i className='bi bi-arrow-up-right-square m-0'></i>  Visit SafetyPin </button>            </a>                
                        </div>
                    <div className='' data-aos="fade-up" >
                        <p className='mt-3 title' style={{fontWeight: '700', fontSize: '30px'}} >SafetyPin</p>
                        <p className=' desc' style={{fontWeight: '300', fontSize: '16px', color: '#323131'}}> Integration of <b>Dijkstra's algorithm to recommend safe routes</b>, and <b>Kernel Density Estimation algorithm</b> to <b>analyze crime patterns</b>  within Iloilo City. </p>
                        <p className='m-0 techstack' style={{fontWeight: '300', fontSize: '16px', color: '#323131'}}> <b style={{color: '#004AAD'}}>Tech Stack: </b> FastAPI, React, Javascript, CSS, Bootstrap, HTML</p>
                    </div>
                    </div>
                </div>
            </div>

            <div className='project col-lg-4 col-md-6 col-sm-6 col-12 d-lg-flex d-flex pb-5'>
                <div className=' rounded-5'>
                    <div className='project-bg'>
                    <div className='position-relative' data-aos="fade-up">
                    <video className='rounded-3' autoPlay muted loop  style={{ width: '100%', height: 'auto' }}>
                        <source src="project-10.mp4" type="video/mp4" />
                    </video>
                    <a href="https://explore-content-site.vercel.app/" target='_blank'> <button className='m-0  position-absolute shadow rounded-3 btn' style={{ fontWeight: 'normal', fontSize: '12px', color: 'white', bottom: '-5px', left: '50%', transform: 'translate(-50%, -50%)', }} > <i className='bi bi-arrow-up-right-square m-0'></i>  Visit ContentSite </button>            </a>                
                    </div>
                    <div className=' py-2' data-aos="fade-up" >
                    <p className='mt-3 title' style={{ lineHeight: '1', fontWeight: '700', fontSize: '30px'}} >ContentSite</p>
                        <p className=' desc' style={{fontWeight: '300', fontSize: '16px', color: '#323131'}}> A <b>full-stack website</b> that enables users to <b>create and share content</b>, categorized by hashtags (#) to specify the type of content.</p>
                        <p className='m-0 techstack' style={{fontWeight: '300', fontSize: '16px', color: '#323131'}}> <b style={{color: '#004AAD'}}>Tech Stack: </b> MongoDB, Express, Next.js, Node.js, Express.js, Javascript, TailwindCSS CSS, HTML</p>
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
                    <a href="https://iloilo-coffee-house.onrender.com/" target='_blank'> <button className='m-0  position-absolute shadow rounded-3 btn' style={{ fontWeight: 'normal', fontSize: '12px', color: 'white', bottom: '-5px', left: '50%', transform: 'translate(-50%, -50%)', }} > <i className='bi bi-arrow-up-right-square m-0'></i>  Visit ICH </button>            </a>                
                    </div>
                    <div className=' py-2' data-aos="fade-up" >
                    <p className='mt-3 title' style={{ lineHeight: '1', fontWeight: '700', fontSize: '30px'}} >Iloilo Coffee House</p>
                        <p className=' desc' style={{fontWeight: '300', fontSize: '16px', color: '#323131'}}> A <b>full-stack website</b> that allows customers <b> review </b> their favorite products from Iloilo Coffee House.</p>
                        <p className='m-0 techstack' style={{fontWeight: '300', fontSize: '16px', color: '#323131'}}> <b style={{color: '#004AAD'}}>Tech Stack: </b> MongoDB, Express, React, Node.js, Javascript, CSS, Bootstrap, HTML</p>
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
                    <p className='mt-3 title' style={{ lineHeight: '1', fontWeight: '700', fontSize: '30px'}} >Swiftify</p>
                        <p className=' desc' style={{fontWeight: '300', fontSize: '16px', color: '#323131'}}>  <b>  Utilization of Spotify API </b> to display user's top Taylor Swift tracks. </p>
                        <p className='m-0 techstack' style={{fontWeight: '300', fontSize: '16px', color: '#323131'}}> <b style={{color: '#004AAD'}}>Tech Stack: </b> Flask , Javascript, CSS, HTML </p>
                    </div>
                    </div>
                </div>
            </div>

            <div className='project col-lg-4 col-md-6 col-sm-6 col-12 d-lg-flex d-flex pb-5'>
                <div className=' rounded-5'>
                    <div className='project-bg'>
                    <div className='position-relative' data-aos="fade-up">
                    <video className='rounded-3' autoPlay muted loop  style={{ width: '100%', height: 'auto' }}>
                        <source src="project-6.mp4" type="video/mp4" />
                    </video>
                    <a href="https://gan-comvis.onrender.com/" target='_blank'> <button className='m-0 border position-absolute shadow rounded-3 btn' style={{ fontWeight: 'normal', fontSize: '12px', color: 'white', bottom: '-5px', left: '50%', transform: 'translate(-50%, -50%)', }} > <i className='bi bi-arrow-up-right-square m-0'></i>  Visit Genpixel </button>            </a>                
                    </div>
                    <div className=' py-2' data-aos="fade-up" >
                    <p className='mt-3 title' style={{ lineHeight: '1', fontWeight: '700', fontSize: '30px'}} >Genpixel</p>
                        <p className=' desc' style={{fontWeight: '300', fontSize: '16px', color: '#323131'}}> An AI-driven web application that enables users to generate new face images. The trained <b> Generative Adversarial Network (GAN) </b>  model is based on a dataset containing 10,000 images.</p>
                        <p className='m-0 techstack' style={{fontWeight: '300', fontSize: '16px', color: '#323131'}}> <b style={{color: '#004AAD'}}>Tech Stack: </b> FastAPI, React, Javascript, CSS, Bootstrap, HTML</p>
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
                    <p className='mt-3 title' style={{ lineHeight: '1', fontWeight: '700', fontSize: '30px'}} >PneumoScan</p>
                        <p className=' desc' style={{fontWeight: '300', fontSize: '16px', color: '#323131'}}> An AI-driven web application that <b>enables users to upload chest X-rays for analysis</b>, providing insights into the likelihood of pneumonia based on <b>CNN modeling</b>.</p>
                        <p className='m-0 techstack' style={{fontWeight: '300', fontSize: '16px', color: '#323131'}}> <b style={{color: '#004AAD'}}>Tech Stack: </b> FastAPI, React, Javascript, CSS, Bootstrap, HTML</p>
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
                    <p className='mt-3 title' style={{ lineHeight: '1', fontWeight: '700', fontSize: '30px'}} >WVSU - USA</p>
                        <p className='desc' style={{fontWeight: '300', fontSize: '16px', color: '#323131'}}> A static website to <b>boost virtual presence</b>  of student council candidates. </p>
                        <p className='m-0 techstack' style={{fontWeight: '300', fontSize: '16px', color: '#323131'}}> <b style={{color: '#004AAD'}}>Tech Stack: </b>  Javascript, Bootstrap, CSS, HTML </p>
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