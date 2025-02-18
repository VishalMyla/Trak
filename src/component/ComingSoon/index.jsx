import React from 'react'

function Soon() {
  return (
    <div className='my-40'>
        <h1 className='text-4xl text-center font-semibold '>Two as live other as coming soon..</h1>
        <div className='flex justify-evenly mt-20 enable-animation-left '>
        <Rectangle className={`gradient-background py-5`} txt= "⁠AIoT (AI + IoT) & Edge Analytics"/>
        <Rectangle className={`gradient-background2 py-5`} txt ="Automation Engineer"/>
        <Rectangle className={`gradient-background3 py-5`} txt = "AI & Data"/>
        <Rectangle className={`gradient-background py-5`} txt= "Cyber"/>
        </div>

        <div className='flex justify-between mt-8 w-[80%] enable-animation-right '>
        <Rectangle className={`gradient-background px-2 py-2`} txt= "Growth Hacking & Viral Marketing" />
        <Rectangle className={`gradient-background2 px-2 py-5`} txt= "Product Design"/>
        <Rectangle className={`gradient-background3 px-2 py-5`} txt = "3D Modeling"/>
        <Rectangle className={`gradient-background px-2 py-5`} txt= "Data Scientists"/>
     
        </div>
      
    </div>
  )
}

export default Soon



function Rectangle({className ,txt}) {
    return (
        <div className={` w-[14%]  rounded-md ${className} flex flex-col justify-between items-center`}>
         <p className='text-xs text-center text-white'>{txt}</p>
        </div>
    )
    
}