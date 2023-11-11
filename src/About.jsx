import React from 'react'

function About() {
  return (
    <>
      <div id='about' className=' d-flex justify-content-center align-items-center' >
      <div className=' d-flex justify-content-center align-items-center flex-column' style={{width: "100%"}}>
      
      <div className='w-100  px-lg-5 p-4 p-lg-0'>
        <p className='mb-1 name' style={{fontWeight: '800', fontSize: '50px', background: 'linear-gradient(to bottom, #0095E4, #004AAD)', /* From top to bottom */ WebkitBackgroundClip: 'text', color: 'transparent'}} data-aos="fade-right">About Me</p>
        <p className='m-0 description' style={{fontWeight: 'normal', fontSize: '16px', color: '#323131'}} data-aos="fade-right" data-aos-delay="200"> Get to know me. Let's build the web together! 🌐💻</p>
      </div>

      <div className='d-flex flex-lg-row flex-md-row flex-column col-12 justify-content-start p-lg-4 p-4 ' >

        <div className='col-lg-5 col-md-6 col-12 p-3 row d-flex p-lg-5 p-md-4 p-sm-3 p-0 justify-content-start'>
          <img src="about-me-img.png" alt="" style={{width: '100%', height: 'auto', objectFit: 'cover'}} />
        </div>

        <div className='col-lg-7 col-md-6 col-12 p-3 row d-lg-flex d-flex p-lg-5 p-md-4 p-sm-3 p-0 '>
          <div data-aos="fade-up" data-aos-delay="200">
              <p className='my-2 skill' style={{fontWeight: 'normal', fontSize: '16px', color: '#323131'}} >
              👩‍💻 Hi, I'm <b>Jeno</b>, a 4th year student from West Visayas State University taking up BS in Computer Science majoring in Artificial Intelligence with a passion for Software Development. 
              </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="400">
              <p className='my-2 skill' style={{fontWeight: 'normal', fontSize: '16px', color: '#323131'}} >
              🤖 I've had the privilege of leading a team that achieved recognition at a national level, securing a place among the top 10 innovations in the BPI-DOST Innovation Awards 2023. Additionally, I've been fortunate to receive gold medals for academic excellence consistently each academic year.              </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="600">
              <p className='my-2 skill' style={{fontWeight: 'normal', fontSize: '16px', color: '#323131'}} >
              🤝 My career goal is to make a meaningful impact on society through my work in software development and AI, striving to contribute positively to the advancement of technology and its applications for the betterment of our community.
              </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="600">
              <p className='my-2 skill' style={{fontWeight: 'normal', fontSize: '16px', color: '#323131'}} >
              🎮 Beyond spending considerable time in programming, I find joy and relaxation in various interests. I'm an avid gamer, a music enthusiast, and I indulge in sitcoms as a means of unwinding and relieving stress.
              </p>
          </div>

        </div>


      </div>
      
      </div>
      </div>
      <br /><br /><br /><br />
    </>
  )
}

export default About