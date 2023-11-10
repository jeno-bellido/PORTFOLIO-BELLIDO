import React from 'react';

export function Hero() {
    return (
        <>
            <video autoplay muted loop>
                <source src="../public/your-video.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </></video>


            <div className=' d-flex justify-content-center align-items-center my-lg-0 my-md-5 my-5 '>
                <div className='  d-flex justify-content-center align-items-center my-lg-0 my-md-5 my-5' style={{ width: '90%' }}>
                    <div className=' col-12 row d-flex'>

                        <div className='col-lg-7 col-12  p-2 d-flex  justify-content-center flex-column'>
                            <p className='mb-1 greeting' style={{ fontWeight: 'normal', fontSize: '16px', color: '#323131' }}>Greetings! Delighted to introduce myself as</p>
                            <p className='mb-1 name' style={{ fontWeight: '800', fontSize: '75px', color: '#0277B5' }}>Jeno Bellido</p>
                            <p className='m-0 description' style={{ fontWeight: 'normal', fontSize: '16px', color: '#323131' }}>Full-stack Developer from the Philippines. On a mission to craft apps that leave an indelible mark.  Let's build the web together! 🌐💻</p>
                            <br />
                            <div className='d-flex gap-4'>
                                <p className='logo m-0' style={{ fontWeight: 'bold', fontSize: '25px', color: '#0277B5' }}> <i className='bi-github'></i> </p>
                                <p className='logo m-0' style={{ fontWeight: 'normal', fontSize: '25px', color: '#0277B5' }}><i className='bi-facebook'></i> </p>
                                <p className='logo m-0' style={{ fontWeight: 'normal', fontSize: '25px', color: '#0277B5' }}><i className='bi-linkedin'></i> </p>
                            </div>
                        </div>

                        <div className='col-5 d-lg-flex d-none   p-2'>
                            <img src="../public/hero-image.png" alt="" style={{ width: '100%', height: 'auto' }} />
                        </div>

                    </div>
                </div>
            </div>

        </>
    );
}
