import React from 'react'

const Experience = () => {
  return (
    <>
    <div id='experience' className='d-flex justify-content-center align-items-center mb-5' >
        <div className=' d-flex justify-content-center align-items-center flex-column' style={{width: "100%"}}>
            
            <div className='w-100  px-lg-5 p-4 p-lg-0'>
                <p className='mb-1 name' style={{lineHeight: '1', fontWeight: '900', fontSize: '65px', background: 'linear-gradient(to bottom, #0095E4, #004AAD)', /* From top to bottom */ WebkitBackgroundClip: 'text', color: 'transparent'}} data-aos="fade-right" >EXPERIENCE</p>
                <p className='m-0 description' style={{fontWeight: '300', fontSize: '16px', color: '#323131'}} data-aos="fade-right" data-aos-delay="400"> Get to know my work experience and see if we can work together. </p>
            </div>

            <div className='d-flex col-12 row justify-content-start p-lg-4 p-4' >
                <div className='col-lg-4 col-md-6 col-sm-6 col-12 d-lg-flex d-flex pb-5 order-3'>
                    <div className=' rounded-5'>
                        <div className='project-bg'>
                            <div className='mb-3'>
                                <img src="sv-logo.svg" style={{width: '50%'}}  alt="" />
                            </div>
                            <div>
                                <h4 className='mb-1'> Software Developer </h4> 
                                <p style={{ textAlign: 'justify', fontWeight: '300'}} > Spring Valley Tech Corp · Internship <br /> Feb 2024 - Present <br /> Negros Occidental, Western Visayas, Philippines · On-site </p>
                                <p style={{ textAlign: 'justify', fontWeight: '300'}} > • Engaged in an immersive <b> software development training </b> program while also gaining <b>experience in cloud-based development, specifically, AWS.</b></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-6 col-12 d-lg-flex d-flex pb-5 order-2'>
                <div className=' rounded-5'>
                        <div className='project-bg'>
                            <div className='mb-3'>
                                <img src="fpd-logo.svg"  style={{width: '50%'}} alt="" />
                            </div>
                            <div>
                                <h4 className='mb-1'> Software Engineer </h4> 
                                <p style={{ textAlign: 'justify' , fontWeight: '300'}}> Forever Passion Dream Inc. · Part-time <br /> Feb 2024 - Apr 2024 <br /> New York, United States · Remote </p>
                                <p style={{ textAlign: 'justify', fontWeight: '300'}}> 
                                • Worked as a <b>software engineer</b> specializing in developing web applications that <b> leverage
                                artificial intelligence, and e-commerce development (Shopify) </b> to address the specific
                                requirements of businesses.
                                </p>
                            </div>
                        </div>                        
                    </div>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-6 col-12 d-lg-flex d-flex pb-5 order-1'>
                <div className=' rounded-5'>
                        <div className='project-bg'>
                            <div className='mb-3'>
                                <img src="mediaset.jpg"  style={{width: '50%'}} alt="" />
                            </div>
                            <div>
                                <h4 className='mb-1'> Software Engineer </h4> 
                                <p style={{ textAlign: 'justify', fontWeight: '300'}} > Mediaset · Full-time <br /> Apr 2024 - Present <br /> Oslo, Norway · Remote </p>
                                <p style={{ textAlign: 'justify', fontWeight: '300'}} > 
                                • Responsible for <b>full-stack development, planning and designing concepts</b>, and implementing them into a working product.
                                </p>
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

export default Experience
