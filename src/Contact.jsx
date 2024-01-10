import React from 'react'

function Contact() {
  return (
    <>
    <div id='contact' className=' d-flex justify-content-center align-items-center mb-5' >
      <div className=' d-flex justify-content-center align-items-center flex-column' style={{width: "100%"}}>
      <div className='w-100  px-lg-5 p-4 p-lg-0' data-aos="fade-right">
          <p className='mb-1 name' style={{ lineHeight: '1', fontWeight: '800', fontSize: '65px', background: 'linear-gradient(to bottom, #0095E4, #004AAD)', /* From top to bottom */ WebkitBackgroundClip: 'text', color: 'transparent'}} data-aos="fade-right">Get in Touch</p>
          <p className='m-0 description' style={{fontWeight: '300', fontSize: '16px', color: '#323131'}} data-aos="fade-right"> Want to chat or collaborate? Feel free to reach out! I'm all ears. Let's make something awesome together! 🚀</p>
      </div>

      <div className='d-flex flex-lg-row flex-md-row flex-column col-12 justify-content-start' data-aos="fade-right" >
      

      <div className='col-12 row d-flex p-lg-5 p-md-4 p-sm-3 p-4 justify-content-start'>
            
      <div className='contact col-lg-3 col-md-6 col-6 p-lg-5 p-md-5 p-sm-3  p-2 '>
        <img src="contact-email.png" alt="" className='rounded-4 '  style={{objectFit: 'cover', width: '100%', height: 'auto'}}  />
        <p className='mt-2 p-0 m-0 description' style={{fontWeight: '700', fontSize: '16px', color: '#323131'}} > 
            Email
        </p>
        <p className='description' style={{fontWeight: '300', fontSize: '16px', color: '#323131'}} > 
        Feel free to reach out to me via email:  <a href = "mailto: jeno.bellido@wvsu.edu.ph" className='text-decoration-none'><br /> <br /><button className='btn btn-primary  bg-primary '>Send an email </button>  </a> 
        </p>

        </div>

        <div className='contact col-lg-3 col-md-6 col-6 p-lg-5 p-md-5 p-sm-3  p-2 '>
        <img src="contact-ig.png" alt="" className='rounded-4 '  style={{objectFit: 'cover', width: '100%', height: 'auto'}}  />
        <p className='mt-2 p-0 m-0 description' style={{fontWeight: '700', fontSize: '16px', color: '#323131'}} > 
            INSTAGRAM
        </p>
        <p className='description' style={{fontWeight: '300', fontSize: '16px', color: '#323131'}} > 
            Let's connect on Instagram: <a target='_blank' className='text-decoration-none ' href = "https://www.instagram.com/jjeennnooo/"> <br /> <br /><button className='btn btn-primary  bg-primary '>View Instagram </button>  </a> 
        </p>
        </div>

        <div className='contact col-lg-3 col-md-6 col-6 p-lg-5 p-md-5 p-sm-3 p-2 '>
        <img src="contact-linkedin.png" alt="" className='rounded-4 ' style={{objectFit: 'cover', width: '100%', height: 'auto'}}  />
        <p className='mt-2 p-0 m-0 description' style={{fontWeight: '700', fontSize: '16px', color: '#323131'}} > 
            LINKEDIN
        </p>
        <p className=' description' style={{fontWeight: '300', fontSize: '16px', color: '#323131'}} > 
        Connect with me on LinkedIn:  <a target='_blank' className='text-decoration-none ' href = "https://www.linkedin.com/in/jeno-bellido/"> <br /> <br /> <button className='btn btn-primary  bg-primary '>View LinkedIn </button>  </a> 
        </p>

        </div>

        <div className='contact col-lg-3 col-md-6 col-6 p-lg-5 p-md-5 p-sm-3  p-2 '>
        <img src="contact-phone.png" alt="" className='rounded-4 ' style={{objectFit: 'cover', width: '100%', height: 'auto'}}  />
        <p className='mt-2 p-0 m-0 description' style={{fontWeight: '700', fontSize: '16px', color: '#323131'}} > 
            PHONE
        </p>
        <p className=' description' style={{fontWeight: '300', fontSize: '16px', color: '#323131'}} > 
        Message or call me via phone number:  <a target='_blank'className='text-decoration-none '  href="tel:+639197750645"> <br /> <br /> <button className='btn btn-primary  bg-primary '> Send a Message </button>  </a>
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