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
function Works() {
    const getResponsivePath = () => {
        const isMobile = window.innerWidth < 768;
        return isMobile
          ? "M10 10 C100 100 300 100 400 10" // Simplified path for mobile
          : "M2.4303 51.706C207.959 -39.7872 638.47 -67.0804 716.289 555.692C751.124 957.864 1069.11 1093.1 1380.3 1024.49"; // Default path
      };
    const timeline = useRef(gsap.timeline({ repeat: -1, repeatDelay: 1 }));
    const arrowRef = useRef(null);
    const worksData = [
        {
            id: 1,
            Htitle: 'Know yourself',
            ptxt: " Every journey starts with understanding where you are.Trak begins by learning about you: your skills, experiences, career goals, and preferences. Through a quick assessment, we gather the insights needed to tailor a pathway just for you.",
            img: Work1,
            list1: "What you do:Complete a quick skills and career goal survey.",
            list2: "What Trak does: Analyzes your inputs using AI to identify your skill gaps and opportunities."
        },
        {
            id: 2,
            Htitle: 'See your path',
            ptxt: "A roadmap designed just for you Once we know where you are and where you want to go, Trak creates a dynamic, personalized pathway. This isn’t a static plan – it evolves with you.",
            img: Work2,
            list1: "What you do: Engage with your personalized pathway, exploring the skills and",
            list2: "What Trak does: Continuously updates your pathway based on your progress and"

        },
        {
            id: 3,
            Htitle: "Start Learning, Your Way",
            ptxt: "Because one size never fits all Dive into the content Trak provides, tailored to your preferences. Whether it’s video tutorials, articles, or hands-on projects, you’ll learn in the way that works best for you.",
            img: Work3,
            list1: "What you’ll find: Learning content dynamically personalized based on your style and pace.",
            list2: "What keeps you going: Regular updates and progress tracking keep you motivated."

        }, {
            id: 4,
            Htitle: "Unlock Milestones",
            ptxt: "Celebrate your progress along the way.As you follow your pathway, you’ll achieve key milestones like joining an exclusive Discord community, getting internship opportunities, and earning certifications.",
            img: Work4,
            list1: "What makes it exciting: Achieving tangible rewards as you grow.",
            list2: "What’s next: Trak adapts to help you reach even bigger goals."
        }, {
            id: 5,
            Htitle: " Reach Your Dream Career",
            ptxt: "From potential to reality.With your personalized learning pathway, you’ll close skill gaps and gain the confidence to step into your dream career. And the best part? Trak is always there to support your next move.",
            img: Work5,
            list1: "",
            list2: ""

        }

    ]

    return (
        <div className='my-20 flex flex-col items-center   justify-center mx-auto max-md:mx-1.5 max-md:block  '>
            <img
                ref={arrowRef}
                id="arrow"
                src={arrow}
                alt="arrow"
                className='absolute h-6 w-6 opacity-0' // Initially hidden
            />
            <Heading txt="How its works"/>
            <p className='text-base text-center mt-5'>Mobile banking differs from mobile payments,
                which involves the use of a <br /> mobile device</p>

            <section className=' my-20 w-[80%] max-md:w-full  '>
                <div className='relative flex max-md:h-full '>
                    <div className=' flex flex-col items-start max-md:w-[50%]'>
                        <img src={Work1} alt="step1" className=' h-28' />
                        <h1 className='text-xl font-semibold mt-3.5'>Know yourself</h1>
                        <div className=' mt-3.5 w-[40%] max-md:w-full'>
                            <p className=' text-sm max-md:text-xs'>
                                Every journey starts with understanding where you are.Trak begins by learning about you:
                                your skills, experiences, career goals, and preferences. Through a quick assessment,
                                we gather the insights needed to tailor a pathway just for you.  </p>
                            <ul className=' list-disc text-sm max-md:text-xs'>
                                <li className='ml-7 max-md:ml-3 max-md:text-xs'>What you do:Complete a quick skills and career goal survey.
                                </li>
                                <li className='ml-7 max-md:ml-3 max-md:text-xs'>What Trak does: Analyzes your inputs using AI to identify your skill gaps and opportunities.</li>
                            </ul>
                        </div>


                    </div>
                    <AnimatedPath className="h-[37rem] left-12   max-md:-left-32 max-md:-top-14 max-md:h-[31rem] max-md:w-[37rem]"
                        svgpath="M2.4303 51.706C207.959 -39.7872 638.47 -67.0804 716.289 555.692C751.124 957.864 1069.11 1093.1 1380.3 1024.49"
                        pathId="dottedLine1"
                        arrowRef={arrowRef} 
                        timeline={timeline.current} />

                       
            
                </div>


                <div className=' flex flex-col items-end mt-40 max-md:mt-3 max-md:w-full  '>
                    <img src={Work2} alt="step1" className=' h-28' />
                    <h1 className='text-xl font-semibold mt-3.5'>See your path</h1>
                    <div className='w-[40%] max-md:w-[40%] mt-3.5  ml-6'>
                        <p className=' text-sm max-md:text-xs  '>
                            A roadmap designed just for you Once we know where you are and where you want to go, Trak creates a dynamic, personalized pathway. This isn’t a static plan – it evolves with you.
                        </p>
                        <ul className=' list-disc text-sm max-md:text-xs  '>
                            <li className='ml-7 max-md:ml-3'>What you do: Engage with your personalized pathway, exploring the skills and
                            </li>
                            <li className='ml-7 max-md:ml-3'>What Trak does: Analyzes your inpuSee your pathts using AI to identify your skill gaps and opportunities.</li>
                        </ul>

                    </div>

                </div>


                <div className='relative flex'>
                    <div className=' flex flex-col items-start mt-40 max-md:mt-20  max-md:w-[40%]'>
                        <img src={Work3} alt="step1" className=' h-28' />
                        <h1 className='text-xl font-semibold mt-3.5'>Start Learning, Your Way </h1>
                        <div className='w-[40%] mt-3.5 max-md:w-full '>
                            <p className=' text-sm max-md:text-xs '>
                            Because one size never fits all."
                            Dive into the content Trak provides, tailored to your preferences. Whether it’s video tutorials, articles, or hands-on projects
                            </p>
                            <ul className=' list-disc text-sm max-md:text-xs  '>
                                <li className='ml-7 max-md:ml-3'>What you’ll find: Learning content dynamically personalized based on your style and pace.
                                </li>
                                <li className='ml-7 max-md:ml-3'>What keeps you going: Regular updates and progress tracking keep you motivated.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <AnimatedPath
                        className="h-[37rem] left-1   max-md:left-0 max-md:-top-44  max-md:w-[27rem]"
                        svgpath="M1180.68 2.55774C1087.34 210.201 868.946 345.129 612.982 214.172C206.299 25.3335 36.6516 287.155 2.66342 441.671" // Bottom-to-top
                        pathId="dottedLine2"
                        arrowRef={arrowRef} 
                        timeline={timeline.current}
                    />
                </div>


                <div className='flex relative'>
                    <div className=' flex flex-col items-end mt-64 max-md:mt-10   '>
                        <img src={Work4} alt="step1" className=' h-28' />
                        <h1 className='text-xl font-semibold mt-3.5'>See your path</h1>
                        <div className='w-[40%] mt-3.5 '>
                            <p className=' text-sm max-md:text-xs '>

                                A roadmap designed just for you Once we know where you are and where you want to go, Trak creates a dynamic, personalized pathway. This isn’t a static plan – it evolves with you.
                            </p>
                            <ul className=' list-disc text-sm max-md:text-xs '>
                                <li className='ml-7 max-md:ml-3'>What you do: Engage with your personalized pathway, exploring the skills and
                                </li>
                                <li className='ml-7 max-md:ml-3'>What Trak does: Analyzes your inpuSee your pathts using AI to identify your skill gaps and opportunities.</li>
                            </ul>
                        </div>
                    </div>
                    <AnimatedPath className="h-[37rem]  left-14 -top-48 max-md:-top-96 "
                        svgpath="M2.4303 51.706C207.959 -39.7872 638.47 -67.0804 716.289 555.692C751.124 957.864 1069.11 1093.1 1380.3 1024.49"
                        pathId="dottedLine3"
                        arrowRef={arrowRef} 
                        timeline={timeline.current} />
                </div>


                <div className=' flex relative max-md:w-full '>
                    <div className=' flex flex-col items-start mt-40  max-md:mt-20  '>
                        <img src={Work5} alt="step1" className=' h-28' />
                        <h1 className='text-xl font-semibold mt-3.5'>See your path</h1>
                        <div className='w-[40%] mt-3.5 '>
                            <p className=' text-sm max-md:text-xs '>
                                A roadmap designed just for you Once we know where you are and where you want to go, Trak creates a dynamic, personalized pathway. This isn’t a static plan – it evolves with you.
                            </p>
                            <ul className=' list-disc text-sm max-md:text-xs   '>
                                <li className='ml-7 max-md:ml-3'>What you do: Engage with your personalized pathway, exploring the skills and
                                </li>
                                <li className='ml-7 max-md:ml-3'>What Trak does: Analyzes your inpuSee your pathts using AI to identify your skill gaps and opportunities.</li>
                            </ul>
                        </div>
                    </div>
                    <AnimatedPath
                        className="h-[37rem] left-8  max-md:-top-44 "
                        svgpath="M1180.68 2.55774C1087.34 210.201 868.946 345.129 612.982 214.172C206.299 25.3335 36.6516 287.155 2.66342 441.671" // Bottom-to-top
                        pathId="dottedLine4"
                        arrowRef={arrowRef} 
                        timeline={timeline.current}
                    />
                </div>
            </section>
           <Button txt = " Start My Personalized Path Today"/>
        </div>
    )
}

export default Works