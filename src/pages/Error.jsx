import React from 'react'
import Button from '../component/Button'

function ErrorPage() {
  return (
    <>
    

    <div className='w-[50%] mx-auto  my-16'>
        <h1 className='text-4xl '>Oops! We’re Not Live in Your Location Yet 🚧</h1>
        <p className='text-lg  mt-6'>Looks like you’re trying to access Trak from outside Rajasthan, India. We’re currently rolling out our AI-powered career pathways exclusively in Rajasthan – but don’t worry, we’re expanding soon to help more people achieve their career dreams!</p>
        <p className='text-lg mt-6'>✨ Want to be the first to know when we launch in your area? </p>
        <Button txt="Sign up for Early Access" />
        </div>
        <footer className=' bg-black py-10 px-10'>
        <div className='flex justify-between mt-10 max-md:flex-col'>
            <p className='text-sm text-white'>© 2025 — Copyright</p>
            <span className='bg-white inline-block text-black rounded-md px-2 py-1 text-2xl mx-2.5 rotate-6'
        >step</span>

<span className='bg-white inline-block text-black rounded-md px-2 py-1.5 text-2xl mx-2.5 -rotate-6'
        >destination</span>
             <div className='flex justify-between text-white'>
                <p className='mr-3.5 cursor-pointer hover:text-green-600'>Spa</p>
                <p className='mr-3.5 cursor-pointer hover:text-green-600 '>Ger</p>
                <p className='mr-3.5 cursor-pointer hover:text-green-600'>Swe</p>
                <p className='mr-3.5 cursor-pointer hover:text-green-600'>Eng</p>
         

             </div>

        


        </div>
     
   
       <hr className=' border-8 border-white rounded-sm mt-6'/>
        </footer>
        </>
  )
}

export default ErrorPage