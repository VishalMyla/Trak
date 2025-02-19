import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

const AnimatedPath = ({ className, svgpath, pathId, arrowRef ,timeline }) => {
  // Register the plugins
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

  useEffect(() => {
    // Ensure the arrow and path exist in the DOM
    if (arrowRef.current && document.querySelector(`#${pathId}`)) {
      // Show the arrow at the start of the animation
      gsap.set(arrowRef.current, { opacity: 1 });

      // Create the motion path animation
      const animation = gsap.to(arrowRef.current, {
        motionPath: {
          path: `#${pathId}`, // Reference the path by its unique ID
          align: `#${pathId}`, // Align the arrow to the path
          autoRotate: true, // Rotate the arrow to follow the path's direction
          alignOrigin: [0.5, 0.5], // Center the arrow on the path
        },
        duration: 5, // Animation duration
        ease: 'power1.inOut', // Smooth easing
        paused: true, // Pause the animation initially
      });

      // Create a ScrollTrigger for the animation
      ScrollTrigger.create({
        trigger: `#${pathId}`, // Trigger when the path enters the viewport
        start: 'top center', // Start the animation when the top of the path reaches the center of the viewport
        end: 'bottom center', // End the animation when the bottom of the path reaches the center of the viewport
        onEnter: () => animation.play(), // Play the animation when the user scrolls to the path
        onLeaveBack: () => animation.pause(0), // Pause and reset the animation when scrolling back
      });
    }
  }, [svgpath, pathId, arrowRef]);

  return (
    <div className='border-2'>
      <svg
        width="100%"
        height="auto"
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
    </div>
  );
};

export default AnimatedPath;