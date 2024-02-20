import React from 'react'

function About() {
  return (
    <>
      <div id='about' className=' d-flex justify-content-center align-items-center mb-lg-5 mb-md-5 m-0 mb-5' >
      <div className=' d-flex justify-content-center align-items-center flex-column mb-lg-5 mb-md-5 m-0' style={{width: "100%"}}>
      
      <div className='w-100  px-lg-5 p-4 p-lg-0'>
        <p className='mb-1 name' style={{lineHeight: '1', fontWeight: '800', fontSize: '65px', background: 'linear-gradient(to bottom, #0095E4, #004AAD)', /* From top to bottom */ WebkitBackgroundClip: 'text', color: 'transparent'}} data-aos="fade-right">About Me</p>
        <p className='m-0 description' style={{fontWeight: '300', fontSize: '16px', color: '#323131'}} data-aos="fade-right" data-aos-delay="200"> Get to know me better. Let's connect and explore together! 👩‍💻</p>
      </div>

      <div className='d-flex flex-lg-row flex-md-row flex-column col-12 justify-content-lg-start align-items-lg-start align-items-md-start align-items-center justify-content-md-start justify-content-center p-lg-0 p-4' >

        <div className='col-lg-5 col-md-6 col-12  row d-flex p-lg-5 p-md-4 p-sm-3 p-0 justify-content-start' data-aos="fade-right">
          <img src="hero-image.png" className='rounded-5' alt="" style={{width: '100%', height: 'auto', objectFit: 'cover'}} />
        </div>

        <div className='col-lg-7 col-md-6 col-12 row d-lg-flex d-flex p-lg-5 p-md-4 p-sm-3 p-0 mt-lg-0 mt-md-0 mt-4'>
          <div data-aos="fade-up" data-aos-delay="200" className='d-flex flex-column justify-content-center '>
          <p className='mb-1 ' style={{lineHeight: '1', fontWeight: '700', fontSize: '40px'}}>JENO BELLIDO</p>
          <div className='d-flex gap-4' >
                <p className='' style={{fontWeight: '300', fontSize: '16px', color: '#323131', borderBottom: '2px solid #0277B5'}}> Software Engineer </p> 
                </div>

          <p className='my-2 skill' style={{fontWeight: '300', fontSize: '16px', color: '#323131'}} >
            Hey, I'm <b>Jeno</b>, I took up <b>BS Computer Science</b> with a major on <b>Artificial Intelligence.</b> I'm genuinely passionate about actively engaging in the dynamic field of <b>Software Development. </b> 
            I've had the incredible experience of leading a team to a national competition that made it to the <b>top 10 innovations in the BPI-DOST Innovation Awards 2023</b>. Also, I've been fortunate enough to consistently receive <b>gold medals for academic excellence</b> throughout my college journey.
            <br /> <br /> Looking ahead, my career goal is to make a meaningful contribution on society through my work in <b>software development and AI</b>. I'm driven to contribute positively to the advancement of technology, aiming to use it for the betterment of our community.
          </p>

<div className='d-flex mt-2 gap-3'>

<div  >
<div className=''>
<a target='_blank' href = "https://www.linkedin.com/in/jeno-bellido/"> <img src="linkedin.png" alt="" style={{objectFit: 'cover', width: '25px', height: 'auto'}}  /></a> 
</div>

</div>
<div  >
<div className=''>
<a target='_blank' href = "https://www.instagram.com/jjeennnooo/">  <img src="instagram.png" alt="" style={{objectFit: 'cover', width: '25px', height: 'auto'}}  /> </a>
</div>

</div>
<div  >
<div className=''>
  <img src="github.png" alt="" style={{objectFit: 'cover', width: '25px', height: 'auto'}}  />
</div>

</div>

<div  >
<div className=''>
  <a href = "mailto: jeno.bellido@wvsu.edu.ph">  <img src="gmail.png" alt="" style={{objectFit: 'cover', width: '25px', height: 'auto'}}  /> </a>
</div>

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

export default About