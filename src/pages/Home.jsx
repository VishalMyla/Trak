import React, { useEffect, useState } from 'react'
import map from '../assets/map.svg'
import Cycle from '../component/Cycle'
import FAQ from '../component/FAQ'
import About from '../component/About'
import Works from '../component/Works'
import Footer from '../component/Footer'
import Soon from '../component/ComingSoon'
import SmokeEmulsion from '../component/Waves'
import Button from '../component/Button'
const Home = () => {
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOverlay(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
    <div className='px-20 max-md:px-5'>
      {showOverlay &&
        <div class="fc-loader fc-loader_overlay">
          <div class="fc-loader_overlay-fill"></div>
          <SmokeEmulsion />
        </div>
      }
      <h1 className='w-[70%] max-md:w-full fontClass font-medium  text-7xl  my-10'>
        Your dream career isn’t a faraway <br /> destination – it’s a journey. Trak <br /> makes 
        sure you’re on the <b className='text-[#39DC8E] fontClassFastHand font-medium'>right path</b> , every
         step of the way.

      </h1>
      <div className='flex w-full justify-between'>
        <div>
          <p className='mt-20'>
            AI-Powered Personalized Pathways with Exciting Milestones to Turn <br /> Your Dreams into Reality.
          </p>
          <Button txt= "Explore My Career Path with Trak"/>

        </div>
{/* 
        <Cycle /> */}
        



      </div>

      <section className='my-40 overflow-hidden'>
      <Soon />
      </section>
   
      <section className='my-40'>
        <Works/>
      </section>

      <section className='my-72'>
        <FAQ/>
      </section>
      
      <section className='my-40'>
        <About/>
      </section>
     
    </div>
    <Footer/>
    </>
  )
}

export default Home