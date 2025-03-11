import { useEffect, useRef } from "react";
import gsap from "gsap";

function Stage1(){
  const careerOptions = [
    "Doctor",
    "Lawyer",
    "Software Developer",
    "UI/UX Designer",
    "Engineer",
  ];

  const uiUxRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      animationRef.current = gsap
        .timeline({ repeat: -1, yoyo: true })
        .to(uiUxRef.current, { rotation: 10, duration: 0.2, ease: "power1.out" })
        .to(uiUxRef.current, { rotation: -8, duration: 0.2, ease: "power1.out" })
        .to(uiUxRef.current, { rotation: 6, duration: 0.15, ease: "power1.out" })
        .to(uiUxRef.current, { rotation: -4, duration: 0.15, ease: "power1.out" })
        .to(uiUxRef.current, { rotation: 2, duration: 0.1, ease: "power1.out" })
        .to(uiUxRef.current, { rotation: 0, duration: 0.1, ease: "power1.out" });
    });

    return () => ctx.revert(); // Cleanup GSAP animations when component unmounts
  }, []);

  const handleMouseEnter = () => {
    animationRef.current?.pause();
    gsap.to(uiUxRef.current, { rotation: 0, duration: 0.2 });
  };

  const handleMouseLeave = () => {
    animationRef.current?.resume();
  };
  return(
    <div className="h-full  flex flex-col justify-center gap-16">
        <div className="flex flex-col gap-2">
          <div className="text-4xl text-center font-semibold">
            Choose Your Career Goal
          </div>
          <div className="text-lg text-center font-normal">Find Your Path</div>
        </div>

        <div className="flex flex-wrap gap-6 max-w-2xl mx-auto">
          {/* First row - full width */}
          <div className="w-full flex gap-6 flex-row justify-center">
            {careerOptions.slice(0, 3).map((career, index) => (
              <button
                key={index}
                className="border border-black rounded-full py-3 px-6 text-lg font-normal hover:bg-gray-100 transition-colors duration-200"
              >
                {career}
              </button>
            ))}
          </div>

          {/* Second row - centered */}
          <div className="w-full flex justify-center gap-6">
            {careerOptions.slice(3).map((career, index) =>
              career === "UI/UX Designer" ? (
                <button
                  key={index + 3}
                  ref={uiUxRef}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="border border-black rounded-full py-3 px-6 text-lg font-normal hover:bg-gray-100 transition-colors duration-200"
                >
                  {career}
                </button>
              ) : (
                <button
                  key={index + 3}
                  className="border border-black rounded-full py-3 px-6 text-lg font-normal hover:bg-gray-100 transition-colors duration-200"
                >
                  {career}
                </button>
              )
            )}
          </div>
        </div>
      </div>
  );
}
export default Stage1;