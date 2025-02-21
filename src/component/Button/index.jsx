import React from 'react'

function Button({txt}) {
  return (
    <button className='bg-white border-[1px] border-black py-2.5 px-7 text-sm mt-10 rounded-sm btnShadow cursor-pointer'>
            {txt}</button>
  )
}

export default Button