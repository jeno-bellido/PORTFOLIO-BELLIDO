import React from 'react'

function About() {
  return (
    <>
      <div id='about' className=' d-flex justify-content-center align-items-center mb-5 ' >
      <div className=' d-flex justify-content-center align-items-center flex-column' style={{width: "100%"}}>
      
      <div className='w-100  px-lg-5 p-4 p-lg-0'>
        <p className='mb-1 name' style={{lineHeight: '1', fontWeight: '800', fontSize: '65px', background: 'linear-gradient(to bottom, #0095E4, #004AAD)', /* From top to bottom */ WebkitBackgroundClip: 'text', color: 'transparent'}} data-aos="fade-right">About Me</p>
        <p className='m-0 description' style={{fontWeight: 'normal', fontSize: '14px', color: '#323131'}} data-aos="fade-right" data-aos-delay="200"> Get to know me better. Let's connect and explore together! 👩‍💻</p>
      </div>

      <div className='d-flex flex-lg-row flex-md-row flex-column col-12 justify-content-lg-start align-items-lg-start align-items-md-start align-items-center justify-content-md-start justify-content-center p-lg-0 p-4' >

        <div className='col-lg-5 col-md-6 col-12 p-3 row d-flex p-lg-5 p-md-4 p-sm-3 p-0 justify-content-start' data-aos="fade-right">
          <img src="hero-image.png" className='rounded-5' alt="" style={{width: '100%', height: 'auto', objectFit: 'cover'}} />
        </div>

        <div className='col-lg-7 col-md-6 col-12 row d-lg-flex d-flex p-lg-5 p-md-4 p-sm-3 p-0 '>
          <div data-aos="fade-up" data-aos-delay="200">
              <p className='my-2 skill' style={{fontWeight: 'normal', fontSize: '14px', color: '#323131'}} >
              👩‍💻 Hey, I'm <b>Jeno</b> , currently in my 4th year at West Visayas State University, where I'm majoring in Computer Science with a focus on Artificial Intelligence. I'm genuinely passionate about diving into the world of Software Development.

</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="400">
              <p className='my-2 skill' style={{fontWeight: 'normal', fontSize: '14px', color: '#323131'}} >
              🤖 I'm not just about the books; I've had the incredible experience of leading a team to a antional competition that made it to the <b> top 10 innovations in the BPI-DOST Innovation Awards 2023 </b>. Also, I've been fortunate enough to consistently receive <b> gold medals for academic excellence </b> throughout my college journey.


</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="600">
              <p className='my-2 skill' style={{fontWeight: 'normal', fontSize: '14px', color: '#323131'}} >
              🤝 Looking ahead, my career goal is pretty clear: I want to make a meaningful impact on society through my work in <b> software development and AI </b>. I'm driven by the desire to contribute positively to the advancement of technology, aiming to use it for the betterment of our community.


</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="600">
              <p className='my-2 skill' style={{fontWeight: 'normal', fontSize: '14px', color: '#323131'}} >
              🎮 And when I'm not immersed in programming and tech, you'll find me unwinding with my other interests. I'm an avid gamer, finding joy in virtual worlds. I'm also a music enthusiast, and when it's time to kick back, I love indulging in sitcoms—it's my go-to stress-reliever.






</p>
          </div>

        </div>


      </div>
      
      </div>
      </div>
    </>
  )
}

export default About