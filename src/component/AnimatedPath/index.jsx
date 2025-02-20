import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

const AnimatedPath = ({ className, svgpath, pathId, arrowRef }) => {
  const pathRef = useRef(null); // Ref for the SVG path

  // Register the plugins
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

  useEffect(() => {
    // Ensure the arrow and path exist in the DOM
    if (arrowRef.current && pathRef.current) {
      // Show the arrow at the start of the animation
      gsap.set(arrowRef.current, { opacity: 1 });

      // Calculate the total length of the path
      const pathLength = pathRef.current.getTotalLength();

      // Create the motion path animation
      const animation = gsap.to(arrowRef.current, {
        motionPath: {
          path: `#${pathId}`, // Reference the path by its unique ID
          align: `#${pathId}`, // Align the arrow to the path
          autoRotate: true, // Rotate the arrow to follow the path's direction
          alignOrigin: [0.5, 0.5], // Center the arrow on the path
        },
        ease:  'power1.inOut', // Smooth easing, // Linear easing for smooth scrolling
        duration: pathLength / 100, // Scale duration based on path length
      });

      // Create a ScrollTrigger for the animation
      ScrollTrigger.create({
        trigger: `#${pathId}`, // Trigger when the path enters the viewport
        start: 'top 80%', // Start the animation when the top of the path reaches 80% of the viewport
        end: 'bottom 20%', // End the animation when the bottom of the path reaches 20% of the viewport
        animation: animation, // Link the animation to the ScrollTrigger
        scrub: 1, // Smooth scrubbing with a 1-second delay
        markers: true, // Set to true for debugging (shows start/end markers)
      });
    }
  }, [svgpath, pathId, arrowRef]);

  return (
    <div className=''>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1383 1044"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`absolute ${className}`}
      >
        {/* Dynamically set the path using the `svgpath` prop */}
        <path
          id={pathId} // Unique ID for the path
          ref={pathRef} // Ref to the path element
          d={svgpath}
          stroke="#A5A5A5"
          strokeWidth="0.2%" // Use percentage for stroke width
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="0.1% 1%" // Use percentage for dash array
        />
      </svg>
    </div>
  );
};

export default AnimatedPath;