import React from 'react'
import { useTranslation } from 'react-i18next'
function Footer() {
  const { t } = useTranslation()
  return (
    <div className = 'bg-black py-16 px-14 w-full max-md:px-5 max-md:py-5'>
        <h1 className=' w-[60%] max-md:w-fit max-md:text-xl text-center mx-auto text-white text-6xl font-semibold'>
   {t('Footer.Ftxt1')}
        <span className='bg-white inline-block text-black rounded-md px-2  py-1.5 max-md:px-1 text-3xl max-md:text-sm mx-2.5 -rotate-6'
        > {t('Footer.Ftxt2')}</span>
       {t('Footer.Ftxt3')}
         <span className='bg-white inline-block text-black rounded-md px-2 py-1 text-3xl mx-2.5 rotate-6  max-md:text-sm'
        > {t('Footer.Ftxt4')}</span>
         {t('Footer.Ftxt5')}
        </h1>
        <div className='flex justify-between mt-28 max-md:flex-col'>
            <p className='text-sm text-white max-md:hidden'> {t('Footer.Ftxt6')}</p>
             <div className='flex justify-between text-white'>
                <p className='mr-3.5 cursor-pointer hover:text-green-600'>HI</p>
                <p className='mr-3.5 cursor-pointer hover:text-green-600 '>FI</p>
                <p className='mr-3.5 cursor-pointer hover:text-green-600'>SWE</p>
                <p className='mr-3.5 cursor-pointer hover:text-green-600'>EN</p>
             </div>
        </div>
     
   
       <hr className=' border-8 border-white rounded-sm mt-6'/>
    </div>
  )
}

export default Footer