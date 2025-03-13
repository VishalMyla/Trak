import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Number1 from '../../assets/pathway/1.svg';
import Number2 from '../../assets/pathway/2.svg';
import Number3 from '../../assets/pathway/3.svg';
import Number4 from '../../assets/pathway/4.svg';
import Number5 from '../../assets/pathway/5.svg';

function Stage5() {
  const [activeStep, setActiveStep] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check and update viewport size
    const checkViewport = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check on initial render
    checkViewport();

    // Add event listener for window resize
    window.addEventListener('resize', checkViewport);

    // Cleanup
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  const stepsData = [
    { number: "1", title: "Basic Courses", imagelink: Number1 },
    { number: "2", title: "Intermediate Courses", imagelink: Number2 },
    { number: "3", title: "Advanced Courses", imagelink: Number3 },
    { number: "4", title: "Advance Internship", imagelink: Number4 },
    { number: "5", title: "Job", imagelink: Number5 }
  ];

  // Dynamic positioning based on screen size
  const getStepPositions = () => {
    if (isMobile) {
      // For mobile: vertical layout
      return stepsData.map((step, index) => ({
        ...step,
        top: 120 + index * 120,
        left: '50%',
      }));
    } else {
      // For desktop: arc layout
      return [
        { ...stepsData[0], top: 80, left: '30%' },
        { ...stepsData[1], top: 200, left: '20%' },
        { ...stepsData[2], top: 350, left: '15%' },
        { ...stepsData[3], top: 500, left: '20%' },
        { ...stepsData[4], top: 650, left: '30%' }
      ];
    }
  };

  const steps = getStepPositions();
  
  // Goal position also changes based on screen size
  const goalPosition = isMobile ? 
    { top: 100, left: '50%' } : 
    { top: 350, left: '65%' };

  return (
    <div className="w-full min-h-screen flex justify-center items-center p-4">
      <div className="w-full max-w-4xl mx-auto relative min-h-[600px] md:min-h-[800px]  p-4">
        <motion.h1 
          className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Upskill & Generate My Pathway
        </motion.h1>
        
        <div className="relative w-full h-full">
          {/* UI Designer Box */}
          <motion.div 
            className="absolute bg-white border-[1px] border-black py-2 px-4 md:py-2.5 md:px-7 text-sm md:text-base rounded-xl btnShadow cursor-pointer" 
            style={{ 
              top: typeof goalPosition.top === 'number' ? goalPosition.top : goalPosition.top,
              left: goalPosition.left,
              transform: 'translate(-50%, -50%)'
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-lg md:text-xl font-bold">UI Designer</h3>
          </motion.div>
          
          {/* Steps arranged in an arc or vertically depending on screen size */}
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className="absolute flex flex-col md:flex-row items-center gap-2"
              style={{ 
                top: typeof step.top === 'number' ? step.top : step.top,
                left: step.left,
                transform: 'translate(-50%, -50%)'
              }}
              initial={{ opacity: 0, x: isMobile ? 0 : -50, y: isMobile ? -50 : 0 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: index * 0.3 }}
              onMouseEnter={() => setActiveStep(step.number)}
              onMouseLeave={() => setActiveStep(null)}
            >
              {/* Number Image and Text Container */}
              <div className="flex flex-row items-center gap-1 max-w-[200px] md:max-w-none">
                <img 
                  src={step.imagelink} 
                  alt={`Step ${step.number}`} 
                  className="w-8 h-8 md:w-12 md:h-12"
                />
                <span className={`text-sm md:text-lg font-semibold text-center md:text-left ${activeStep === step.number ? "text-blue-500" : ""}`}>
                  {step.title}
                </span>
              </div>
            </motion.div>
          ))}
          
          {/* Add connecting lines for visual effect - hidden on mobile */}
          {!isMobile && (
            <svg className="absolute top-0 left-0 w-full h-full" style={{ zIndex: -1 }}>
              {steps.map((step, i) => {
                if (i < steps.length - 1) {
                  return (
                    <motion.line 
                      key={i}
                      x1={typeof step.left === 'string' ? parseInt(step.left) : step.left} 
                      y1={step.top}
                      x2={typeof steps[i+1].left === 'string' ? parseInt(steps[i+1].left) : steps[i+1].left} 
                      y2={steps[i+1].top}
                      stroke="#e5e7eb"
                      strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: 5+i * 0.3 + 0.2, duration: 0.5 }}
                    />
                  );
                }
                return null;
              })}
              {/* Connect the last step to the goal */}
              <motion.line 
                x1={typeof steps[steps.length-1].left === 'string' ? parseInt(steps[steps.length-1].left) : steps[steps.length-1].left} 
                y1={steps[steps.length-1].top}
                x2={typeof goalPosition.left === 'string' ? parseInt(goalPosition.left) : goalPosition.left} 
                y2={goalPosition.top}
                stroke="#e5e7eb"
                strokeWidth="2"
                strokeDasharray="5,5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: steps.length * 0.3, duration: 0.5 }}
              />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
}

export default Stage5;