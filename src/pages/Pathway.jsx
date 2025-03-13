import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import Stage1 from "../component/Pathway/one";
import Stage2 from "../component/Pathway/Stage2";
import Stage3 from "../component/Pathway/Stage3";
import Stage4 from "../component/Pathway/Stage4";
import Stage5 from "../component/Pathway/Stage5";

function Pathway() {
  const [currentStage, setCurrentStage] = useState(1);
  const stageRefs = {
    1: useRef(null),
    2: useRef(null),
    3: useRef(null),
    4: useRef(null),
    5: useRef(null)
  };
  
  // This will handle the initial position of each stage when it's first rendered
  useEffect(() => {
    // Set initial positions for stages that aren't currently showing
    Object.keys(stageRefs).forEach(stage => {
      const stageNum = parseInt(stage);
      if (stageNum !== currentStage && stageRefs[stage].current) {
        gsap.set(stageRefs[stage].current, { 
          x: stageNum > currentStage ? "100%" : "-100%", 
          opacity: 0 
        });
      }
    });
  }, [currentStage]);
  
  const handleStageTransition = (nextStage) => {
    const currentRef = stageRefs[currentStage].current;
    const nextRef = stageRefs[nextStage].current;
    
    // Determine the direction of transition
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
  };
  
  // Get the appropriate stage component based on current stage
  const getStageComponent = (stage) => {
    switch(stage) {
      case 1:
        return <Stage1 onUiUxClick={() => handleStageTransition(2)} />;
      case 2:
        return <Stage2 onNextClick2={() => handleStageTransition(3)}  />;
      case 3:
        return <Stage3 onNextClick3={() => handleStageTransition(4)} />;
      case 4:
        return <Stage4 onNextClick4={() => handleStageTransition(5)}  />;
      case 5:
        return <Stage5 />;
      default:
        return null;
    }
  };
  
  return (
    <div className="w-full min-h-[90vh] flex flex-col justify-center items-center  overflow-hidden">
      {[1, 2, 3, 4, 5].map(stage => (
        <div 
        key={stage}
        ref={stageRefs[stage]}
        className={`w-full ${currentStage === stage ? 'flex' : 'hidden'} justify-center items-center `}
      >
        {currentStage === stage && getStageComponent(stage)}
      </div>
      
      ))}
    </div>
  );
}

export default Pathway;