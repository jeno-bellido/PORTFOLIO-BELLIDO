import React from 'react'

function Contact() {
  return (
    <>
    <div id='about' className=' d-flex justify-content-center align-items-center' >
      <div className=' d-flex justify-content-center align-items-center flex-column' style={{width: "100%"}}>
      <div className='w-100  px-lg-5 p-4 p-lg-0'>
                    <p className='mb-1 name' style={{ lineHeight: '1', fontWeight: '800', fontSize: '65px', background: 'linear-gradient(to bottom, #0095E4, #004AAD)', /* From top to bottom */ WebkitBackgroundClip: 'text', color: 'transparent'}} data-aos="fade-right">Get in Touch</p>
                    <p className='m-0 description' style={{fontWeight: 'normal', fontSize: '14px', color: '#323131'}} data-aos="fade-right" data-aos-delay="200"> Want to chat or collaborate? Feel free to reach out! I'm all ears. Let's make something awesome together! 🚀</p>
                </div>

      <div className='d-flex flex-lg-row flex-md-row flex-column col-12 justify-content-start  ' >
      

      <div className='col-lg-7 col-md-6 col-12 p-3 row d-flex p-lg-5 p-md-4 p-sm-3 p-0 justify-content-start'>
            
        <div className=' contact'>
        <img src="email.png" alt="" style={{objectFit: 'cover', width: '50px', height: 'auto'}} data-aos="fade-right" data-aos-delay="200"/>
        <p className='mt-1 p-0 m-0 ' style={{fontWeight: 'bold', fontSize: '16px', color: '#323131'}} data-aos="fade-right" data-aos-delay="400"> 
            Email
        </p>
        <p className='' style={{fontWeight: 'normal', fontSize: '14px', color: '#323131'}} data-aos="fade-right" data-aos-delay="600"> 
        Feel free to reach out to me via email: <b> <a href = "mailto: jeno.bellido@wvsu.edu.ph"> jeno.bellido@wvsu.edu.ph </a> </b>
        </p>

        </div>

        <div className=' contact'>
        <img src="instagram.png" alt="" style={{objectFit: 'cover', width: '50px', height: 'auto'}} data-aos="fade-right" data-aos-delay="800" />
        <p className='mt-1 p-0 m-0' style={{fontWeight: 'bold', fontSize: '14px', color: '#323131'}} data-aos="fade-right" data-aos-delay="1000"> 
            Instagram
        </p>
        <p className='' style={{fontWeight: 'normal', fontSize: '14px', color: '#323131'}} data-aos="fade-right" data-aos-delay="1200"> 
            Let's connect on Instagram: <b> <a target='_blank' href = "https://www.instagram.com/jjeennnooo/"> @jnblld </a> </b>
        </p>
        </div>

        <div className=' contact'>
        <img src="linkedin.png" alt="" style={{objectFit: 'cover', width: '50px', height: 'auto'}} data-aos="fade-right" data-aos-delay="1400"/>
        <p className='mt-1 p-0 m-0 description' style={{fontWeight: 'bold', fontSize: '14px', color: '#323131'}} data-aos="fade-right" data-aos-delay="1600"> 
            Linkedin
        </p>
        <p className=' ' style={{fontWeight: 'normal', fontSize: '14px', color: '#323131'}} data-aos="fade-right" data-aos-delay="1800"> 
        Connect with me on LinkedIn:  <b> <a target='_blank' href = "https://www.linkedin.com/in/jeno-bellido-079221218/"> JENO BELLIDO </a> </b>
        </p>

        </div>



      </div>


    </div>
    </div>
    </div>
    <br /><br /><br />
    </>
  )
}

export default Contact