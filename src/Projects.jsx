import React from 'react'

function Projects() {
    
  return (
    <>
    <div className=' d-flex justify-content-center align-items-center' >
        <div className=' d-flex justify-content-center align-items-center ' style={{width: "100%"}}>
            <div className='d-flex col-12 row justify-content-start p-lg-4 p-4' >
        
            <div className='col-lg-4 col-md-6 col-sm-6 col-12 d-lg-flex d-flex pb-5'>
                <div className=' rounded-5'>
                    <div className='project-bg'>
                    <img className='rounded-3' src="../public/project-1.png" alt="" style={{width: '100%', height: 'auto'}} />
                    <div className=''>
                        <p className='mt-3 title' style={{fontWeight: '800', fontSize: '30px', color: '#0277B5'}}>SafetyPin</p>
                        <button className='border rounded-3 btn' style={{fontWeight: 'normal', fontSize: '12px', color: '#0277B5', marginTop: '-10px'}}> <i className='bi bi-arrow-up-right-square'></i> Visit SafetyPin </button>
                        <p className='pt-2 desc' style={{fontWeight: 'normal', fontSize: '14px', color: '#323131'}}> Integration of Dijkstra's algorithm to recommend safe routes, and KDE algorithm to analyze crime patterns within Iloilo City.</p>
                        <p className='m-0 techstack' style={{fontWeight: 'normal', fontSize: '14px', color: '#323131'}}> <b style={{color: '#0277B5'}}>Tech Stack: </b> FastAPI, React, Javascript, CSS, Bootstrap, HTML</p>
                    </div>
                    </div>
                </div>
            </div>

      

            <div className='col-lg-4 col-md-6 col-sm-6 col-12 d-lg-flex d-flex pb-5'>
                <div className=' rounded-5'>
                    <div className='project-bg'>
                    <video className='rounded-3' autoPlay muted loop  style={{ width: '100%', height: 'auto' }}>
                        <source src="project-2.mp4" type="video/mp4" />
                    </video>
                    <div className=' py-2'>
                    <p className=' title' style={{fontWeight: '800', fontSize: '30px', color: '#0277B5'}}>Iloilo Coffee House</p>
                    <button className='border rounded-3 btn' style={{fontWeight: 'normal', fontSize: '12px', color: '#0277B5', marginTop: '-10px'}}> <i className='bi bi-arrow-up-right-square'></i> Visit ICH </button>
                        <p className='pt-2 desc' style={{fontWeight: 'normal', fontSize: '14px', color: '#323131'}}> A full-stack website that allows customers review/rate their favorite products from Iloilo Coffee House.</p>
                        <p className='m-0 techstack' style={{fontWeight: 'normal', fontSize: '14px', color: '#323131'}}> <b style={{color: '#0277B5'}}>Tech Stack: </b> MongoDB, Express, React, Node.js, Javascript, CSS, Bootstrap, HTML</p>
                    </div>
                    </div>
                </div>
            </div>

            <div className='col-lg-4 col-md-6 col-sm-6 col-12 d-lg-flex d-flex pb-5'>
                <div className=' rounded-5'>
                    <div className='project-bg'>
                    <video className='rounded-3' autoPlay muted loop  style={{ width: '100%', height: 'auto' }}>
                        <source src="project-3.mp4" type="video/mp4" />
                    </video>
                    <div className=' py-2'>
                    <p className=' title' style={{fontWeight: '800', fontSize: '30px', color: '#0277B5'}}>Swiftify</p>
                    <button className='border rounded-3 btn' style={{fontWeight: 'normal', fontSize: '12px', color: '#0277B5', marginTop: '-10px'}}> <i className='bi bi-arrow-up-right-square'></i> Visit Swiftify </button>
                        <p className='pt-2 desc' style={{fontWeight: 'normal', fontSize: '14px', color: '#323131'}}> Utilization of Spotify API to display user's top Taylor Swift tracks. </p>
                        <p className='m-0 techstack' style={{fontWeight: 'normal', fontSize: '14px', color: '#323131'}}> <b style={{color: '#0277B5'}}>Tech Stack: </b> Flask , Javascript, CSS, HTML </p>
                    </div>
                    </div>
                </div>
            </div>


            </div>
        </div>
    </div>
    <br /><br /><br />
    </>
  )
}

export default Projects