import React, { useEffect, useState } from 'react'
import map from '../assets/map.svg'
import Cycle from '../component/Cycle'
import FAQ from '../component/FAQ'
import About from '../component/About'
import Works from '../component/Works'
import Footer from '../component/Footer'
import Soon from '../component/ComingSoon'
import SmokeEmulsion from '../component/Waves'
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
      <h1 className='w-[70%] max-md:w-full fontClass font-medium  text-5xl  my-10'>
        Your dream career isn’t a faraway <br /> destination – it’s a journey. Trak makes <br />
        sure you’re on the <b className='text-[#39DC8E] fontClassFastHand font-medium'>right path</b> , every
        <br /> step of the way.

      </h1>
      <div className='flex w-full justify-between'>
        <div>
          <p className='mt-20'>
            AI-Powered Personalized Pathways with Exciting Milestones to Turn <br /> Your Dreams into Reality.
          </p>
          <button className='bg-white border-2 border-black py-1 px-7 mt-5 rounded-sm btnShadow'>
            Explore My Career Path with Trak</button>

        </div>

        <Cycle />
        



      </div>


      <Soon />
      <section className='my-20'>
        <Works/>
      </section>

      <section className='my-20'>
        <FAQ/>
      </section>
      
      <section className='my-20'>
        <About/>
      </section>
     
    </div>
    <Footer/>
    </>
  )
}

export default Home