import React, { useEffect } from 'react'
import Button from '../component/Button'
import { useState } from 'react'
import { div } from 'motion/react-client'
import { useTranslation } from 'react-i18next'
function ErrorPage() {
 const { t} = useTranslation()
  const [loader, setLoader] = useState(true)
  const navigateToInstagram = () => {
    window.location.href =  'https://www.instagram.com/trak.pe/ ';
  };
  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 3000);
  }, [])
  return (
    <>
      {
        loader ? (
          <div className='flex  justify-center  items-center justify-items-center h-[85vh] '>         
            <div class="text-center">
              <div
                class="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-[#39DC8E] mx-auto"
              ></div>
            </div>
          </div>
        ) : (
          <section>
            <div className='w-[50%] mx-auto  my-16 max-md:w-full max-md:px-5 max-md:mb-60 max-md:my-5 '>
              <h1 className='text-4xl max-md:text-2xl '>{t('ErrorPage.ErrorHeading')}</h1>
              <p className='text-lg  max-md:text-sm mt-6 max-md:mt-3'>{t('ErrorPage.ErrorSub1')}</p>
              <p className='text-lg  max-md:text-sm mt-6 max-md:mt-3'>{t('ErrorPage.ErrorSub2')} </p>
              <Button txt={t('ErrorPage.Btntxt3')}
              className='!mt-5'
              navigateTo='pathway'/>
            </div>
            <footer className=' bg-black py-10 px-10 max-md:px-5 max-md:py-5 fixed bottom-0 w-full '>
              <div className='flex justify-between items-center mt-10 max-md:mt-5 max-md:flex-col'>
                <p className='text-sm text-white'>{t('Footer.Ftxt6')}</p>

                <span className='flex justify-between my-5'>
                  <span className='bg-white inline-block text-black rounded-md px-2 py-1 max-md:text-lg text-2xl mx-2.5 rotate-6 max-md:w-fit'
                  >{t('Footer.Ftxt4')}</span>

                  <span className='bg-white inline-block text-black rounded-md px-2 py-1.5 text-2xl max-md:text-lg mx-2.5 -rotate-6 max-md:w-fit'
                  >{t('Footer.Ftxt2')}</span>
                </span>
                <div className='flex justify-between text-white'>
                <button onClick={navigateToInstagram} className=' cursor-pointer text-white py-2 px-4 rounded-md text-sm  max-md:mt-5'>
                © 2025 Trakpe. Follow us on
                <b className='font-bold'> Instagram</b> </button>
                </div>
              </div>
              <hr className=' border-8 border-white rounded-sm mt-6' />
            </footer>
          </section>
        )
      }
    </>
  )
}

export default ErrorPage