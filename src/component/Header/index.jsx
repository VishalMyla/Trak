import React, { useState } from 'react'
import Logo from '../../assets/Logo.svg'

function Header() {
  const [Isclicked, setIsclicked] = useState()
  return (
    <>
      <div className=' flex px-24 max-md:px-8 py-5 justify-between items-center  '>
        <div className='flex justify-center items-center  '>
          {Isclicked ? (
            <h1 className='font-semibold text-lg cursor-pointer'
              onClick={() => setIsclicked(!Isclicked)}>
              X
            </h1>

          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" height="15" width="12.5" viewBox="0 0 448 512" onClick={() => setIsclicked(!Isclicked)}
              className=' -ml-3.5  cursor-pointer'>
              <path fill="#000000" d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0
           96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 
           0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 
           416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" /></svg>
          )}
          <img src={Logo} alt="logo" className=' h-6 ml-6' />
        </div>

        <button className='bg-white border-[1px] border-black py-2.5 text-sm px-7 cursor-pointer  rounded-sm btnShadow'> Try Us</button>

      </div>
      {Isclicked &&
        <HamBurger />
      }
    </>
  )
}

export default Header


function HamBurger(params) {
  return (
    <div className=' backdrop-blur-lg py-20 w-full px-24  mt-8 absolute hamburger-slide-in  z-20 h-screen '>
      <a href="#About" className='text-4xl font-semibold inline-block mt-0'>About</a> <br />
      <a href="#Works" className='text-4xl font-semibold inline-block mt-10'>Support</a> <br />
      <a href="#FAQ" className='text-4xl font-semibold inline-block mt-10'>FAQs</a> <br />
      <a href="#FAQ" className='text-4xl font-semibold inline-block mt-10'>Trak for Schools</a> <br />
      <div class="relative inline-block text-gray-700 mt-10">
        <select className="appearance-none border border-gray-300 rounded-md py-2 px-2 pr-7 
        focus:outline-none focus:ring-2 focus:ring-e11d49 
        ">
          <option value="en" >EN</option>
          <option value="hi">HI</option>
          <option value="fi" >FI</option>
          <option value="sv" >SWE</option>
        </select>
        <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" height="12" width="10.5" viewBox="0 0 448 512">
       <path fill="#000000" d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
          </div>
      </div>

    </div>
  )

}