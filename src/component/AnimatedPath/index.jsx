import React, { useEffect, useRef } from 'react';
import arrow from '../../assets/arrow.svg';
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

const AnimatedPath = ({ className, svgpath, pathId, timeline }) => {
  const arrowRef = useRef(null); // Ref for the arrow element

  // Register the MotionPathPlugin
  gsap.registerPlugin(MotionPathPlugin);

  useEffect(() => {
    // Ensure the arrow and path exist in the DOM
    if (arrowRef.current && document.querySelector(`#${pathId}`)) {
      // Show the arrow at the start of the animation
      timeline.set(arrowRef.current, { opacity: 1 }, `+=0`);
  
      // Add the motion path animation
      timeline.to(
        arrowRef.current,
        {
          motionPath: {
            path: `#${pathId}`, // Reference the path by its unique ID
            align: `#${pathId}`, // Align the arrow to the path
            autoRotate: true, // Rotate the arrow to follow the path's direction
            alignOrigin: [0.5, 0.5], // Center the arrow on the path
          },
          duration: 5, // Animation duration
          ease: 'power1.inOut', // Smooth easing
        },
        `+=0` // No delay
      );
  
      // Hide the arrow at the end of the animation
      timeline.set(arrowRef.current, { opacity: 0 }, `+=0`);
    }
  }, [svgpath, pathId, timeline]);

  return (
    <div className=''>
      <svg
        width="1000"
        height="1044"
        viewBox="0 0 1383 1044"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`absolute ${className}`}
      >
        {/* Dynamically set the path using the `svgpath` prop */}
        <path
          id={pathId} // Unique ID for the path
          d={svgpath}
          stroke="#A5A5A5"
          strokeWidth="3.70616"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="1.85 18.53"
        />
      </svg>

      {/* Single arrow element with a ref */}
      <img
        ref={arrowRef}
        id="arrow" // Single ID for the arrow
        src={arrow}
        alt="arrow"
        className='absolute h-6 w-6 opacity-0' // Initially hidden
      />
    </div>
  );
};

export default AnimatedPath;