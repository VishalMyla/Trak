import React, { useEffect, useState } from 'react'
import map from '../assets/map.svg'
import Cycle from '../component/Cycle'
import FAQ from '../component/FAQ'
import About from '../component/About'
import Works from '../component/Works'
import Footer from '../component/Footer'
import Soon from '../component/ComingSoon'
import SmokeEmulsion from '../component/Waves'
import { motion } from "motion/react"
import Button from '../component/Button'
import sign from '../assets/scribble.svg'
import waves from '../assets/waves.svg'
import { svg } from 'motion/react-client'
const Home = () => {
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOverlay(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div className='px-20 max-md:px-5'>
      {
  showOverlay ? (
    <div >
      <SmokeEmulsion />
    </div>
  ) : null
}
        <h1 className='w-[80%] max-md:w-full fontClass font-medium text-7xl max-md:text-4xl my-10 lg:block max-md:hidden'>
          Your dream career isn’t a faraway <br />
          destination – it’s a journey.Trak makes<br />
          sure you’re on the  <span className='text-[#39DC8E] fontClassFastHand font-medium '>
             right path
           </span> 
            <span className='inline '>,every <br/> step of the way.</span>
       
     
       </h1>

       <h1 className='  fontClass font-medium  my-10 lg:hidden max-md:block max-md:text-4xl'>
       Your dream career isn’t a faraway destination – it’s a journey. Trak makes sure you’re on the                        , every step of the way.
      
          <span className='text-[#39DC8E] fontClassFastHand font-medium flex flex-col items-start'>
            right path
            <img src={sign} className='h-10 max-md:h-5 inline ' /></span> 
           ,every step of the way.
         

       </h1>

        <div className='flex w-full justify-between'>
          <div>
            <p className='mt-20'>
              AI-Powered Personalized Pathways with Exciting Milestones to Turn <br /> Your Dreams into Reality.
            </p>
            <Button txt="Explore My Career Path with Trak" />

          </div>
          
        {/* <Cycle /> */}




        </div>

        <section className='my-20 overflow-hidden'>
          <Soon />
        </section>

        <section className='my-5'>
          <Works />
        </section>

        <section className='my-20'>
          <FAQ />
        </section>

        <section className='my-20'>
          <About />
        </section>

      </div>
      <Footer />
    </>
  )
}

export default Home