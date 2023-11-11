import React from 'react'

function About() {
  return (
    <>
      <div className=' d-flex justify-content-center align-items-center' >
      <div className=' d-flex justify-content-center align-items-center flex-column border' style={{width: "100%"}}>
      
      <div className='w-100  px-lg-5 p-4 p-lg-0'>
        <p className='mb-1 name' style={{fontWeight: '800', fontSize: '75px', color: '#0277B5'}} data-aos="fade-right">About Me</p>
        <p className='m-0 description' style={{fontWeight: 'normal', fontSize: '16px', color: '#323131'}} data-aos="fade-right" data-aos-delay="200"> Get to know me. Let's build the web together! 🌐💻</p>
      </div>

      <div className='d-flex flex-lg-row flex-md-row flex-column col-12 justify-content-start p-lg-4 p-4 ' >

        <div className='col-lg-5 col-md-6 col-12 p-3 row d-flex p-lg-5 p-md-4 p-sm-3 p-0 justify-content-start'>
          <img src="about-me-img.png" alt="" style={{width: '100%', height: 'auto'}} />
        </div>

        <div className='col-lg-6 col-md-6 col-12 p-3 row d-lg-flex d-flex p-lg-5 p-md-4 p-sm-3 p-0 '>
          <div data-aos="fade-up" data-aos-delay="200">
              <p className='my-2 skill' style={{fontWeight: 'normal', fontSize: '16px', color: '#323131'}} >
              👩‍💻 Immersed in the dynamic realm of full stack development, I've delved into diverse technology stacks, honing my skills along the way. Eager to stay at the forefront of tech trends, I'm actively seeking opportunities to explore new and innovative tech stacks that lie beyond my current expertise.
              </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="400">
              <p className='my-2 skill' style={{fontWeight: 'normal', fontSize: '16px', color: '#323131'}} >
              🤖 I've learned different AI algorithms. While I've acquired knowledge in this area, I'm eager to continue learning and gradually integrate AI into my upcoming projects.
              </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="600">
              <p className='my-2 skill' style={{fontWeight: 'normal', fontSize: '16px', color: '#323131'}} >
              🤝 I had the opportunity to lead a team, through our undergraduate thesis where we integrated two algorithms. Recently, our efforts were recognized, and we secured a win in the BPI-DOST Innovation Awards 2023, ranking among the top 10 innovations.
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