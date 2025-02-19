import React from 'react'
import Heading from '../Heading'

function Soon() {
  return (
    <div className='my-40'>
       <Heading txt = " Two as live other as coming soon.."/>
        <div className='flex justify-evenly mt-32 enable-animation-left '>
        <Rectangle className={`gradient-background  py-5`} txt= "⁠AIoT(AI + IoT) & Edge Analytics"/>
        <Rectangle className={`gradient-background2 py-5`} txt ="Automation Engineer"/>
        <Rectangle className={`gradient-background3 py-5 `} txt = "AI & Data"/>
        <Rectangle className={`gradient-background  py-5`} txt= "CyberSecurity"/>
        </div>

        <div className='flex justify-between mt-8 w-[80%] max-md:w-[100%] enable-animation-right '>
        <Rectangle className={`gradient-background px-2.5  py-2`} txt= "Growth Hacking & Viral Marketing" />
        <Rectangle className={`gradient-background2 px-2.5 py-5`} txt= "Product Design"/>
        <Rectangle className={`gradient-background3 px-2.5  py-5`} txt = "3D Modeling"/>
        <Rectangle className={`gradient-background py-5`} txt= "Data Scientists"/>
     
        </div>
      
    </div>
  )
}

export default Soon



function Rectangle({className ,txt}) {
    return (
        <div className={` w-[14%] max-md:w-[100%]  rounded-md ${className} max-md:mr-5 flex flex-col justify-between items-center`}>
         <p className='text-xs text-center text-white'>{txt}</p>
        </div>
    )
    
}