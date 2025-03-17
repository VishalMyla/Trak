import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import Stage1 from "../component/Pathway/one";
import Stage2 from "../component/Pathway/Stage2";
import Stage3 from "../component/Pathway/Stage3";
import Stage4 from "../component/Pathway/Stage4";
import Stage5 from "../component/Pathway/Stage5";
import UpskillComplete from "../component/Pathway/UpskillComplete";

function Pathway() {
  const [currentStage, setCurrentStage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [targetStage, setTargetStage] = useState(null);
  const [showCompletion, setShowCompletion] = useState(false);
  
  const stageRefs = {
    1: useRef(null),
    2: useRef(null),
    3: useRef(null),
    4: useRef(null),
    5: useRef(null),
    completion: useRef(null)
  };
  
  const loaderRef = useRef(null);
  
  // This will handle the initial position of each stage when it's first rendered
  useEffect(() => {
    // Set initial positions for stages that aren't currently showing
    Object.keys(stageRefs).forEach(stage => {
      if (stage === 'completion') return;
      
      const stageNum = parseInt(stage);
      if (stageNum !== currentStage && stageRefs[stage].current) {
        gsap.set(stageRefs[stage].current, {
          x: stageNum > currentStage ? "100%" : "-100%",
          opacity: 0
        });
      }
    });
  }, [currentStage]);
  
  // Handle loader to stage transition
  useEffect(() => {
    if (loading && targetStage) {
      // Simulate loading time
      const timer = setTimeout(() => {
        completeStageTransition(targetStage);
      }, 1500); // Adjust loading time as needed
      
      return () => clearTimeout(timer);
    }
  }, [loading, targetStage]);
  
  // Automatically transition to completion screen after Stage5
  useEffect(() => {
    if (currentStage === 5 && !showCompletion) {
      const timer = setTimeout(() => {
        handleCompletionTransition();
      }, 3000); // Wait 3 seconds after Stage5 appears before showing completion
      
      return () => clearTimeout(timer);
    }
  }, [currentStage, showCompletion]);
  
  const handleStageTransition = (nextStage) => {
    const currentRef = stageRefs[currentStage].current;
    
    // Determine if we need to show loader (only for transitions from 3->4 and 4->5)
    const needsLoader = (currentStage === 3 && nextStage === 4) || (currentStage === 4 && nextStage === 5);
    
    if (needsLoader) {
      // Animate current stage out
      gsap.to(currentRef, {
        x: nextStage > currentStage ? "-100%" : "100%",
        opacity: 0,
        duration: 0.7,
        ease: "power2.inOut",
        onComplete: () => {
          // Show loader
          setLoading(true);
          setTargetStage(nextStage);
        }
      });
    } else {
      // Regular transition without loader
      const nextRef = stageRefs[nextStage].current;
      const isForward = nextStage > currentStage;
      
      // Animate current stage out
      gsap.to(currentRef, {
        x: isForward ? "-100%" : "100%",
        opacity: 0,
        duration: 0.7,
        ease: "power2.inOut",
        onComplete: () => {
          // Update the state to show the next stage
          setCurrentStage(nextStage);
          
          // Make sure the next stage is positioned correctly before animating in
          gsap.set(nextRef, {
            x: isForward ? "100%" : "-100%",
            opacity: 0
          });
          
          // Animate next stage in
          gsap.to(nextRef, {
            x: "0%",
            opacity: 1,
            duration: 0.7,
            ease: "power2.inOut"
          });
        }
      });
    }
  };
  
  const handleCompletionTransition = () => {
    const currentRef = stageRefs[5].current;
    const completionRef = stageRefs.completion.current;
    
    // Animate current stage out
    gsap.to(currentRef, {
      x: "-100%",
      opacity: 0,
      duration: 0.7,
      ease: "power2.inOut",
      onComplete: () => {
        setShowCompletion(true);
        
        // Make sure the completion stage is positioned correctly before animating in
        gsap.set(completionRef, {
          x: "100%",
          opacity: 0
        });
        
        // Animate completion stage in
        gsap.to(completionRef, {
          x: "0%",
          opacity: 1,
          duration: 0.7,
          ease: "power2.inOut"
        });
      }
    });
  };
  
  const completeStageTransition = (nextStage) => {
    const nextRef = stageRefs[nextStage].current;
    const isForward = nextStage > currentStage;
    
    // Update the state to show the next stage
    setCurrentStage(nextStage);
    setLoading(false);
    setTargetStage(null);
    
    // Make sure the next stage is positioned correctly before animating in
    gsap.set(nextRef, {
      x: isForward ? "100%" : "-100%",
      opacity: 0
    });
    
    // Animate next stage in
    gsap.to(nextRef, {
      x: "0%",
      opacity: 1,
      duration: 0.7,
      ease: "power2.inOut"
    });
  };
  
  // Get the appropriate stage component based on current stage
  const getStageComponent = (stage) => {
    switch(stage) {
      case 1:
        return <Stage1 onUiUxClick={() => handleStageTransition(2)} />;
      case 2:
        return <Stage2 onNextClick2={() => handleStageTransition(3)} />;
      case 3: 
        return <Stage3 onNextClick3={() => handleStageTransition(4)} />;
      case 4:
        return <Stage4 onNextClick4={() => handleStageTransition(5)} />;
      case 5:
        return <Stage5 />;
      default:
        return null;
    }
  };
  
  return (
    <div className="w-full h-[90vh] flex flex-col justify-center items-center overflow-hidden">
      {loading ? (
        <div className='flex justify-center items-center justify-items-center h-[85vh]'>
          <div className="text-center">
            <div
              ref={loaderRef}
              className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-[#39DC8E] mx-auto"
            ></div>
          </div>
        </div>
      ) : (
        <>
          {[1, 2, 3, 4, 5].map(stage => (
            <div
              key={stage}
              ref={stageRefs[stage]}
              className={`w-full h-full ${currentStage === stage && !showCompletion ? 'flex' : 'hidden'} justify-center items-center`}
            >
              {currentStage === stage && !showCompletion && getStageComponent(stage)}
            </div>
          ))}
          
          <div
            ref={stageRefs.completion}
            className={`w-full h-full ${showCompletion ? 'flex' : 'hidden'} justify-center items-center`}
          >
            {showCompletion && <UpskillComplete />}
          </div>
        </>
      )}
    </div>
  );
}

export default Pathway;