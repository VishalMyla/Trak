import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Work1 from '../../assets/work1.svg'
import Work2 from '../../assets/work2.svg'
import Work3 from '../../assets/work3.svg'
import Work4 from '../../assets/work4.svg'
import Work5 from '../../assets/work5.svg'
import DotLine1 from '../../assets/line1.svg'
import AnimatedPath from '../AnimatedPath'
import arrow from '../../assets/arrow.svg'
import Heading from '../Heading';
import Button from '../Button';
import { useTranslation } from 'react-i18next'
function Works() {
    const { t} = useTranslation()
    const getResponsivePath = () => {
        const isMobile = window.innerWidth < 768;
        return isMobile
          ? "M10 10 C100 100 300 100 400 10" // Simplified path for mobile
          : "M2.4303 51.706C207.959 -39.7872 638.47 -67.0804 716.289 555.692C751.124 957.864 1069.11 1093.1 1380.3 1024.49"; // Default path
      };
    const timeline = useRef(gsap.timeline({ repeat: -1, repeatDelay: 1 }));
    const arrowRef = useRef(null);
   

    return (
        <div className='my-20 flex flex-col items-center justify-center mx-auto max-md:mx-1.5 max-md:block  '>
            <img
                ref={arrowRef}
                id="arrow"
                src={arrow}
                alt="arrow"
                className='absolute h-6 w-6 opacity-0' // Initially hidden
            />
            <Heading txt= {t('WorksHeading')}/>
            <p className='text-base text-center mt-5'>{t('Workingsubtxt')}
             {t('Workingsubtxt1')} <br />{t('Workingsubtxt2')}</p>

            <section className=' my-20 w-[80%] max-md:w-full  '>
                <div className='relative flex max-md:h-full '>
                    <div className=' flex flex-col items-start max-md:w-[50%]'>
                        <img src={Work1} alt="step1" className=' h-28' />
                        <h1 className='text-xl font-semibold mt-3.5'>{t('Workingtxt1.htxt1')}</h1>
                        <div className=' mt-3.5 w-[40%] max-md:w-full'>
                            <p className=' text-sm max-md:text-xs'>
                               {t('Workingtxt1.ptxt1')}  </p>
                            <ul className=' list-disc text-sm max-md:text-xs'>
                                <li className='ml-7 max-md:ml-3 max-md:text-xs'>{t('Workingtxt1.list1')}  </li>
                                <li className='ml-7 max-md:ml-3 max-md:text-xs'>{t('Workingtxt1.list2')}</li>
                            </ul>
                        </div>


                    </div>
                    <AnimatedPath className="h-[37rem] -left-12   max-md:-left-32 max-md:-top-14 max-md:h-[25rem] max-md:w-[37rem]"
                        svgpath="M2.4303 51.706C207.959 -39.7872 638.47 -67.0804 716.289 555.692C751.124 957.864 1069.11 1093.1 1380.3 1024.49"
                        pathId="dottedLine1"
                        arrowRef={arrowRef} 
                        timeline={timeline.current} />

                       
            
                </div>


                <div className=' flex flex-col items-end mt-40 max-md:mt-3 max-md:w-full  '>
                    <img src={Work2} alt="step1" className=' h-28' />
                    <h1 className='text-xl font-semibold mt-3.5'>{t('Workingtxt2.htxt1')}</h1>
                    <div className='w-[40%] max-md:w-[40%] mt-3.5  ml-6'>
                        <p className=' text-sm max-md:text-xs  '>
                        {t('Workingtxt2.ptxt1')}</p>
                        <ul className=' list-disc text-sm max-md:text-xs  '>
                            <li className='ml-7 max-md:ml-3'>{t('Workingtxt2.list1')}</li>
                            <li className='ml-7 max-md:ml-3'>{t('Workingtxt2.list2')}</li>
                        </ul>

                    </div>

                </div>


                <div className='relative flex'>
                    <div className=' flex flex-col items-start mt-40 max-md:mt-40  max-md:w-[40%]'>
                        <img src={Work3} alt="step1" className=' h-28' />
                        <h1 className='text-xl font-semibold mt-3.5'>{t('Workingtxt3.htxt1')} </h1>
                        <div className='w-[40%] mt-3.5 max-md:w-full '>
                            <p className=' text-sm max-md:text-xs '>
                            {t('Workingtxt3.ptxt1')}
                            </p>
                            <ul className=' list-disc text-sm max-md:text-xs  '>
                                <li className='ml-7 max-md:ml-3'>{t('Workingtxt3.list1')}
                                </li>
                                <li className='ml-7 max-md:ml-3'>{t('Workingtxt3.list1')}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <AnimatedPath
                        className="h-[37rem] left-1   max-md:left-0 max-md:-top-72  max-md:h-[25rem] max-md:w-[37rem]"
                        svgpath="M1180.68 2.55774C1087.34 210.201 868.946 345.129 612.982 214.172C206.299 25.3335 36.6516 287.155 2.66342 441.671" // Bottom-to-top
                        pathId="dottedLine2"
                        arrowRef={arrowRef} 
                        timeline={timeline.current}
                    />
                </div>



            </section>
           <Button   txt={t('Btntxt2')} navigateTo="pathway"/>
        </div>
    )
}

export default Works