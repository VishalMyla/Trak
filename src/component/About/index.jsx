import React from 'react'
import about1 from '../../assets/about1.svg'
import mapImage from '../../assets/mapImage.svg'
import Heading from '../Heading'
import Mapf from '../../assets/mapf.svg'
import { useTranslation } from 'react-i18next'

function About() {
  const { t} = useTranslation()
    return (
        <div className='mb-52  mx-auto '>
           <Heading txt = {t('About')} />
            <div className='w-full max-md:w-full  flex justify-around  my-16 max-md:flex-col max-md:justify-center max-md:items-center'>


                <div className={` w-[25%] max-md:w-full flex flex-col items-start  `}>
                    <p className='text-[#39DC8E] w-full text-sm leading-loose'>O &nbsp;&nbsp; u &nbsp;&nbsp; r &nbsp;&nbsp;&nbsp; H &nbsp;&nbsp; i &nbsp;&nbsp; s &nbsp;&nbsp;t&nbsp;&nbsp;o&nbsp;&nbsp;r &nbsp;&nbsp;y</p>
                    <h2 className='text-6xl w-full font-semibold mt-3.5'>{t('Abouttxt1.htxt')}</h2>
                    <p className='text-base   mt-8 max-md:w-full'>
                    {t('Abouttxt1.ptxt1')}
<br />{t('Abouttxt1.ptxt2')}
<br />{t('Abouttxt1.ptxt3')}</p>
                </div>

                <div className={`w-[25%] max-md:w-full flex flex-col items-start mt-20  `}>
                    {/* <div> </div>  Empty virtual div for the extra space above the our */}
                    <p className='text-[#39DC8E] w-full text-sm leading-loose'>C &nbsp;&nbsp; o &nbsp;&nbsp; n &nbsp;&nbsp;&nbsp; c &nbsp;&nbsp; a &nbsp;&nbsp; c &nbsp;&nbsp;t&nbsp;&nbsp; U&nbsp;&nbsp; s &nbsp;&nbsp;</p>
                    <h2 className='text-6xl w-full font-semibold mt-3.5'>{t('Abouttxt2.htxt')}</h2>
                    <p className='text-base w-full mt-8  max-md:w-full'>{t('Abouttxt2.ptxt1')}</p>
                    <p className='text-base  mt-7 w-full max-md:w-full'>📩 {t('Abouttxt2.pEmail')}
                    </p>
                    <p className='text-base  mt-3 w-full max-md:w-full'>📍 {t('Abouttxt2.pLocation')}</p>
                    <p className='text-base  mt-7 w-ful max-md:w-full'>{t('Abouttxt2.ptxt2')}</p>
                    <img src={Mapf} alt="" className='mt-7' />
                </div>







            </div>
        </div>

    )
}

export default About