import React, { useState } from 'react'
import Logo from '../../assets/Logo.svg'

function Header() {
  const [Isclicked, setIsclicked] = useState()
  return (
    <>
      <div className=' flex px-24 max-md:px-8 py-5 justify-between items-center '>
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

        <button className='bg-white border-[1px] border-black py-2.5 text-sm px-7  rounded-sm btnShadow'> Try Us</button>

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
    <div className=' backdrop-blur-lg py-20 w-full px-24  mt-8 absolute hamburger-slide-in  z-20 '>
      <a href="" className='text-4xl font-semibold inline-block mt-8'>About</a> <br />
      <a href="" className='text-4xl font-semibold inline-block mt-8'>Support</a> <br />
      <a href="" className='text-4xl font-semibold inline-block mt-8'>FAQs</a> <br />
      <a href="" className='text-4xl font-semibold inline-block mt-8'>Trak for Schools</a> <br />
      <div class="relative inline-block text-gray-700 mt-10">
        <select class="appearance-none border border-gray-300 rounded-md py-2 px-2 pr-7 focus:outline-none focus:ring-2 focus:ring-e11d49">
          <option value="en">English</option>
          <option value="hi">Hindi</option>
          <option value="fi">Finish</option>
          <option value="sv">Swedish</option>
        </select>
        <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
          <svg class="h-5 w-5 fill-gray-500" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 6.707 8.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
          </div>
      </div>

    </div>
  )

}