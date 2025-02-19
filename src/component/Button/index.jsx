import React from 'react'

function Button({txt}) {
  return (
    <button className='bg-white border-[1px] border-black py-2 px-7 mt-10 rounded-sm btnShadow'>
            {txt}</button>
  )
}

export default Button