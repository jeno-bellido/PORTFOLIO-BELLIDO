import React, { useEffect } from 'react'
// npm install aos [animate onscroll]
import AOS from 'aos' 
import 'aos/dist/aos.css'

function Skills() {
   {/** useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    */}
    
      useEffect(() => {
        AOS.init({ duration: 2000 });
      }, []);
    return (
        <>
        <div id='skills' className=' d-flex justify-content-center align-items-center mb-5 ' >
            <div className=' d-flex justify-content-center align-items-center flex-column' style={{width: "100%"}}>

                <div className='w-100  px-lg-5 p-4 p-lg-0'>
                    <p className='mb-1 name' style={{lineHeight: '1', fontWeight: '800', fontSize: '65px', background: 'linear-gradient(to bottom, #0095E4, #004AAD)', /* From top to bottom */ WebkitBackgroundClip: 'text', color: 'transparent'}} data-aos="fade-right">Skills</p>
                    <p className='m-0 description' style={{fontWeight: '300', fontSize: '16px', color: '#323131'}} data-aos="fade-right" > Here are my skills: a versatile toolkit ready to enhance any project! 🚀</p>
                </div>

                <div className='d-flex flex-lg-row flex-md-row flex-column col-12 justify-content-lg-start justify-content-md-start justify-content-start align-items-start p-lg-4 p-4 ' >

                <div className='col-lg-12 col-md-12 col-12 p-3 row d-flex '>

                <div className='skill-div col-lg-2 col-md-2 col-4  px-4 d-flex flex-column justify-content-center align-items-center' data-aos="fade-up" >
                    <img src="next.svg" style={{ width: '100%', height: 'auto' }} alt="react" />
                    <p className='desc' style={{fontWeight: '300', fontSize: '16px', color: '#323131'}}> Next.JS</p>
                </div>

                <div className='skill-div col-lg-2 col-md-2 col-4  px-4 d-flex flex-column justify-content-center align-items-center' data-aos="fade-up" >
                    <img src="aws.svg" style={{ width: '100%', height: 'auto' }} alt="react" />
                    <p className='desc' style={{fontWeight: '300', fontSize: '16px', color: '#323131'}}> AWS</p>
                </div>

                <div className='skill-div col-lg-2 col-md-2 col-4  px-4 d-flex flex-column justify-content-center align-items-center' data-aos="fade-up" >
                    <img src="shopify.svg" style={{ width: '100%', height: 'auto' }} alt="react" />
                    <p className='desc' style={{fontWeight: '300', fontSize: '16px', color: '#323131'}}> Shopify </p>
                </div>

                <div className='skill-div col-lg-2 col-md-2 col-4  px-4 d-flex flex-column justify-content-center align-items-center' data-aos="fade-up" >
                        <img src="react.png" style={{ width: '100%', height: 'auto' }} alt="react" />
                        <p className='desc' style={{fontWeight: '300', fontSize: '16px', color: '#323131'}}> React</p>
                    </div>

                    <div className='skill-div col-lg-2 col-md-2 col-4  px-4 d-flex flex-column justify-content-center align-items-center' data-aos="fade-up" >
                        <img src="ts.png" style={{ width: '100%', height: 'auto' }} alt="react" />
                        <p className='desc' style={{fontWeight: '300', fontSize: '16px', color: '#323131'}}> TypeScript</p>
                    </div>


                    <div className='skill-div col-lg-2 col-md-2 col-4  px-4 d-flex flex-column justify-content-center align-items-center' data-aos="fade-up" >
                        <img src="js.png" style={{ width: '100%', height: 'auto' }} alt="react" />
                        <p className='desc' style={{fontWeight: '300', fontSize: '16px', color: '#323131'}}> JavaScript</p>
                    </div>

                    <div className='skill-div col-lg-2 col-md-2 col-4  px-4 d-flex flex-column justify-content-center align-items-center' data-aos="fade-up" >
                        <img src="node.png" style={{ width: '100%', height: 'auto' }} alt="react" />
                        <p className='desc' style={{fontWeight: '300', fontSize: '16px', color: '#323131'}}> NodeJS</p>
                    </div>

                    <div className='skill-div col-lg-2 col-md-2 col-4  px-4 d-flex flex-column justify-content-center align-items-center' data-aos="fade-up">
                        <img src="fastapi.png" style={{ width: '100%', height: 'auto' }} alt="react" />
                        <p className='desc' style={{fontWeight: '300', fontSize: '16px', color: '#323131'}}> FastAPI</p>
                    </div>

                    <div className='skill-div col-lg-2 col-md-2 col-4  px-4 d-flex flex-column justify-content-center align-items-center' data-aos="fade-up">
                        <img src="postgre.png" style={{ width: '100%', height: 'auto' }} alt="react" />
                        <p className='desc' style={{fontWeight: '300', fontSize: '16px', color: '#323131'}}> PostgreSQL</p>
                    </div>

                    <div className='skill-div col-lg-2 col-md-2 col-4  px-4 d-flex flex-column justify-content-center align-items-center' data-aos="fade-up">
                        <img src="mongodb.png" style={{ width: '100%', height: 'auto' }} alt="react" />
                        <p className='desc' style={{fontWeight: '300', fontSize: '16px', color: '#323131'}}> MongoDB</p>
                    </div>



                    <div className='skill-div col-lg-2 col-md-2 col-4  px-4 d-flex flex-column justify-content-center align-items-center' data-aos="fade-up">
                        <img src="restapi.png" style={{ width: '100%', height: 'auto' }} alt="react" />
                        <p className='desc' style={{fontWeight: '300', fontSize: '16px', color: '#323131'}}> RestAPI</p>
                    </div>


                    <div className='skill-div col-lg-2 col-md-2 col-4  px-4 d-flex flex-column justify-content-center align-items-center' data-aos="fade-up">
                        <img src="bootstrap.png" style={{ width: '100%', height: 'auto' }} alt="react" />
                        <p className='desc' style={{fontWeight: '300', fontSize: '16px', color: '#323131'}}> Bootstrap</p>
                    </div>

                    <div className='skill-div col-lg-2 col-md-2 col-4 px-4 d-flex flex-column justify-content-center align-items-center' data-aos="fade-up">
                        <img src="mysql.png" style={{ width: '100%', height: 'auto' }} alt="react" />
                        <p className='desc' style={{fontWeight: '300', fontSize: '16px', color: '#323131'}}> MySQL</p>
                        
                    </div>

                    <div className='skill-div col-lg-2 col-md-2 col-4  px-4 d-flex flex-column justify-content-center align-items-center' data-aos="fade-up" >
                        <img src="php.png" style={{ width: '100%', height: 'auto' }} alt="react" />
                        <p className='desc' style={{fontWeight: '300', fontSize: '16px', color: '#323131'}}> PHP</p>
                    </div>


                    <div className='skill-div col-lg-2 col-md-2 col-4  px-4 d-flex flex-column justify-content-center align-items-center' data-aos="fade-up">
                        <img src="github2.png" style={{ width: '100%', height: 'auto' }} alt="react" />
                        <p className='desc' style={{fontWeight: '300', fontSize: '16px', color: '#323131'}}> Github</p>
                    </div>

                    <div className='skill-div col-lg-2 col-md-2 col-4 px-4 d-flex flex-column justify-content-center align-items-center' data-aos="fade-up">
                        <img src="flask.png" style={{ width: '100%', height: 'auto' }} alt="react" />
                        <p className='desc' style={{fontWeight: '300', fontSize: '16px', color: '#323131'}}> Flask</p>
                    </div>

                    <div className='skill-div col-lg-2 col-md-2 col-4 px-4 d-flex flex-column justify-content-center align-items-center' data-aos="fade-up">
                        <img src="python.png" style={{ width: '100%', height: 'auto' }} alt="react" />
                        <p className='desc' style={{fontWeight: '300', fontSize: '16px', color: '#323131'}}> Python</p>
                    </div>

                    <div className='skill-div col-lg-2 col-md-2 col-4 px-4 d-flex flex-column justify-content-center align-items-center' data-aos="fade-up">
                        <img src="c++.png" style={{ width: '100%', height: 'auto' }} alt="react" />
                        <p className='desc' style={{fontWeight: '300', fontSize: '16px', color: '#323131'}}> C++</p>
                    </div>

                    <div className='skill-div col-lg-2 col-md-2 col-4 px-4 d-flex flex-column justify-content-center align-items-center' data-aos="fade-up">
                        <img src="openai.png" style={{ width: '100%', height: 'auto' }} alt="react" />
                        <p className='desc' style={{fontWeight: '300', fontSize: '16px', color: '#323131'}}> OpenAI</p>
                    </div>

                    <div className='skill-div col-lg-2 col-md-2 col-4 px-4 d-flex flex-column justify-content-center align-items-center' data-aos="fade-up">
                        <img src="css.png" style={{ width: '100%', height: 'auto' }} alt="react" />
                        <p className='desc' style={{fontWeight: '300', fontSize: '16px', color: '#323131'}}> CSS</p>
                    </div>

                    <div className='skill-div col-lg-2 col-md-2 col-4 px-4 d-flex flex-column justify-content-center align-items-center' data-aos="fade-up">
                        <img src="html.png" style={{ width: '100%', height: 'auto' }} alt="react" />
                        <p className='desc' style={{fontWeight: '300', fontSize: '16px', color: '#323131'}}> HTML</p>
                    </div>

                    <div className='skill-div col-lg-2 col-md-2 col-4 px-4 d-flex flex-column justify-content-center align-items-center' data-aos="fade-up">
                        <img src="ai.png" style={{ width: '100%', height: 'auto' }} alt="react" />
                        <p className='desc text-center' style={{fontWeight: '300', fontSize: '16px', color: '#323131'}}> AI Algorithms</p>
                    </div>

                </div>
                

                </div>

                
            </div>
        </div>
        </>
      )
    }

export default Skills