import React from 'react'
import about1 from '../../assets/about1.svg'
import mapImage from '../../assets/mapImage.svg'
import Heading from '../Heading'
function About() {

    return (
        <div className='my-52'>
           <Heading txt = "About" />
            <div className='w-[70%] max-md:w-full mx-auto flex justify-evenly my-16 max-md:flex-col max-md:justify-center'>


                <div className={`w-[50%] max-md:w-full flex flex-col items-start  `}>
                    <p className='text-[#39DC8E] text-sm leading-loose'>O &nbsp;&nbsp; u &nbsp;&nbsp; r &nbsp;&nbsp;&nbsp; H &nbsp;&nbsp; i &nbsp;&nbsp; s &nbsp;&nbsp;t&nbsp;&nbsp;o&nbsp;&nbsp;r &nbsp;&nbsp;y</p>
                    <h2 className='text-4xl font-semibold mt-3.5'>Our History</h2>
                    <p className='text-xs  mt-8 w-[70%]'>Trak was born from a simple yet powerful idea – to bridge the gap between ambition and opportunity using AI-driven career pathways. Our journey began with a mission to empower job seekers, students, and professionals by providing them with personalized learning experiences tailored to industry demands.From our roots in Rajasthan, India, we have grown into a tech-first career guidance platform, using advanced AI to assess skills, generate custom learning pathways, and match the right talent to the right opportunities.Driven by innovation and a passion for upskilling, we continue to evolve, ensuring every learner finds their ideal career trajectory with Trak – Your AI-Powered Career Companion.</p>
                  
                </div>

                <div className={`w-[50%] max-md:w-full flex flex-col items-start mt-20  `}>
                    <p className='text-[#39DC8E] text-sm leading-loose'>C &nbsp;&nbsp; o &nbsp;&nbsp; n &nbsp;&nbsp;&nbsp; c &nbsp;&nbsp; a &nbsp;&nbsp; c &nbsp;&nbsp;t&nbsp;&nbsp; U&nbsp;&nbsp; s &nbsp;&nbsp;</p>
                    <h2 className='text-4xl font-semibold mt-3.5'>Contact Us</h2>
                    <p className='text-xs  mt-8 w-[70%]'>Have questions or need support? We're here to help! Whether you're looking for career guidance, partnership opportunities, or just want to say hello, reach out to us</p>
                    <p className='text-xs  mt-5 w-[70%]'>📩 Email: support@trak.com
                    </p>
                    <p className='text-xs  mt-3 w-[70%]'>📍Location: Rajasthan, India</p>
                    <p className='text-xs  mt-5 w-[70%]'>Have questions or need support? We're here to help! Whether you're looking for career guidance, partnership opportunities, or just want to say hello, reach out to us</p>
                    <img src={mapImage} alt="" className='h-80 mt-9 -ml-5 ' />
                </div>







            </div>
        </div>

    )
}

export default About