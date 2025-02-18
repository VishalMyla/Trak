// Cycle.jsx
import React, { useRef, useEffect } from 'react';


const Cycle = () => {


  return (
    <div className=' w-[40%] py-32  ' >
      <div className='flex justify-around'>
        <div className='flex relative w-fit'>
          <div className=' shadow-2xl rounded-4xl  w-fit boxShadow p-1.5 px-5'>
            <p className='text-lg fontClass'>Learning</p>
          </div>
          <svg width="300" height="80" viewBox="0 0 543 140" fill="none" xmlns="http://www.w3.org/2000/svg"
            className='absolute -top-9 left-24 '>
            <g filter="url(#filter0_d_1445_925)">
              <path d="M514.219 51.8426C360.655 -0.713848 205.45 -41.7736 14.9278 91.6406" stroke="#39DC8E" stroke-width="3.28478" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="6.57 13.14" />
            </g>
            <defs>
              <filter id="filter0_d_1445_925" x="0.14605" y="0.40625" width="541.995" height="138.862" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dx="6.56955" dy="26.2782" />
                <feGaussianBlur stdDeviation="9.85433" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.224227 0 0 0 0 0.861929 0 0 0 0 0.555832 0 0 0 1 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1445_925" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1445_925" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>

        <div className='flex relative w-fit  '>
          <div className=' shadow-2xl rounded-4xl  w-fit boxShadow p-1.5 px-5 absolute -top-6 left-14'>
            <p className='text-lg fontClass'>UpSkilling</p>
          </div>
          <svg width="77" height="136" viewBox="0 0 77 218" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute top-3.5 left-20'>
            <g filter="url(#filter0_d_1445_928)">
              <path d="M35.8651 1.78125C55.5738 83.0795 53.9314 120.033 15.0273 170.126" stroke="#39DC8E" stroke-width="3.28478" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="6.57 13.14" />
            </g>
            <defs>
              <filter id="filter0_d_1445_928" x="0.247612" y="0.136719" width="75.9212" height="217.62" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dx="6.56955" dy="26.2782" />
                <feGaussianBlur stdDeviation="9.85433" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.224227 0 0 0 0 0.861929 0 0 0 0 0.555832 0 0 0 1 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1445_928" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1445_928" result="shape" />
              </filter>
            </defs>
          </svg>

        </div>

      </div>

      <div className=' flex '>
        <div className='flex relative w-full justify-between  '>
          <div className=' shadow-2xl rounded-4xl  w-fit boxShadow p-1.5 px-5 absolute -bottom-24 right-2'>
            <p className='text-lg fontClass'>Advancement</p>

          </div>
          <svg width="105" height="74" viewBox="0 0 224 200" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute right-32 -bottom-36'>
            <g filter="url(#filter0_d_1445_927)">
              <path d="M195.393 3.35443C72.5425 -7.56793 -2.48771 49.7744 18.1245 151.489" stroke="#39DC8E" stroke-width="3.28478" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="6.57 13.14" />
            </g>
            <defs>
              <filter id="filter0_d_1445_927" x="0.00542498" y="0.445312" width="223.308" height="198.674" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dx="6.56955" dy="26.2782" />
                <feGaussianBlur stdDeviation="9.85433" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.224227 0 0 0 0 0.861929 0 0 0 0 0.555832 0 0 0 1 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1445_927" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1445_927" result="shape" />
              </filter>
            </defs>
          </svg>

          <div className=' shadow-2xl rounded-4xl  w-fit boxShadow p-1.5 px-5 absolute right-44 -bottom-40'>
            <p className='text-lg fontClass'>Success</p>
          </div>
          <svg width="86" height="198" viewBox="0 0 223 416" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute left-48 -top-5'>
            <g filter="url(#filter0_d_1445_926)">
              <path d="M15.0586 2.49219C15.0586 112.532 15.0586 266.536 194.9 367.543" stroke="#39DC8E" stroke-width="3.28478" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="6.57 13.14" />
            </g>
            <defs>
              <filter id="filter0_d_1445_926" x="0.278862" y="0.851562" width="222.542" height="414.323" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dx="6.56955" dy="26.2782" />
                <feGaussianBlur stdDeviation="9.85433" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.224227 0 0 0 0 0.861929 0 0 0 0 0.555832 0 0 0 1 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1445_926" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1445_926" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>


    </div>
  );
};

export default Cycle;