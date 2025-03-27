import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useTranslation } from 'react-i18next'

function Stage1({ onUiUxClick }) {
  const { t} = useTranslation()
  const careerOptions = [
  t('PathWay.careerOptions.Otp1'),
  t('PathWay.careerOptions.Otp2'),
  t('PathWay.careerOptions.Otp3'),
  t('PathWay.careerOptions.Otp4'),
  t('PathWay.careerOptions.Otp5'),
  ];

  const uiUxRefMobile = useRef(null);
  const uiUxRefTablet = useRef(null);
  const uiUxRefDesktop = useRef(null);
  const animationRefMobile = useRef(null);
  const animationRefTablet = useRef(null);
  const animationRefDesktop = useRef(null);

  // Animation setup for all breakpoints
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Mobile animation
      if (uiUxRefMobile.current) {
        animationRefMobile.current = gsap
          .timeline({ repeat: -1, yoyo: true })
          .to(uiUxRefMobile.current, { rotation: 10, duration: 0.2, ease: "power1.out" })
          .to(uiUxRefMobile.current, { rotation: -8, duration: 0.2, ease: "power1.out" })
          .to(uiUxRefMobile.current, { rotation: 6, duration: 0.15, ease: "power1.out" })
          .to(uiUxRefMobile.current, { rotation: -4, duration: 0.15, ease: "power1.out" })
          .to(uiUxRefMobile.current, { rotation: 2, duration: 0.1, ease: "power1.out" })
          .to(uiUxRefMobile.current, { rotation: 0, duration: 0.1, ease: "power1.out" });
      }

      // Tablet animation
      if (uiUxRefTablet.current) {
        animationRefTablet.current = gsap
          .timeline({ repeat: -1, yoyo: true })
          .to(uiUxRefTablet.current, { rotation: 10, duration: 0.2, ease: "power1.out" })
          .to(uiUxRefTablet.current, { rotation: -8, duration: 0.2, ease: "power1.out" })
          .to(uiUxRefTablet.current, { rotation: 6, duration: 0.15, ease: "power1.out" })
          .to(uiUxRefTablet.current, { rotation: -4, duration: 0.15, ease: "power1.out" })
          .to(uiUxRefTablet.current, { rotation: 2, duration: 0.1, ease: "power1.out" })
          .to(uiUxRefTablet.current, { rotation: 0, duration: 0.1, ease: "power1.out" });
      }

      // Desktop animation
      if (uiUxRefDesktop.current) {
        animationRefDesktop.current = gsap
          .timeline({ repeat: -1, yoyo: true })
          .to(uiUxRefDesktop.current, { rotation: 10, duration: 0.2, ease: "power1.out" })
          .to(uiUxRefDesktop.current, { rotation: -8, duration: 0.2, ease: "power1.out" })
          .to(uiUxRefDesktop.current, { rotation: 6, duration: 0.15, ease: "power1.out" })
          .to(uiUxRefDesktop.current, { rotation: -4, duration: 0.15, ease: "power1.out" })
          .to(uiUxRefDesktop.current, { rotation: 2, duration: 0.1, ease: "power1.out" })
          .to(uiUxRefDesktop.current, { rotation: 0, duration: 0.1, ease: "power1.out" });
      }
    });

    return () => ctx.revert(); // Cleanup GSAP animations when component unmounts
  }, []);

  // Event handlers for mobile
  const handleMouseEnterMobile = () => {
    animationRefMobile.current?.pause();
    gsap.to(uiUxRefMobile.current, { rotation: 0, duration: 0.2 });
  };

  const handleMouseLeaveMobile = () => {
    animationRefMobile.current?.resume();
  };

  // Event handlers for tablet
  const handleMouseEnterTablet = () => {
    animationRefTablet.current?.pause();
    gsap.to(uiUxRefTablet.current, { rotation: 0, duration: 0.2 });
  };

  const handleMouseLeaveTablet = () => {
    animationRefTablet.current?.resume();
  };

  // Event handlers for desktop
  const handleMouseEnterDesktop = () => {
    animationRefDesktop.current?.pause();
    gsap.to(uiUxRefDesktop.current, { rotation: 0, duration: 0.2 });
  };

  const handleMouseLeaveDesktop = () => {
    animationRefDesktop.current?.resume();
  };
  
 // Determine if the current career option is a UI/UX designer variant
 const isUiUxDesigner = (career) => {
  const uiUxVariants = [
    "UI/UX Designer", 
    "UI/UX डिज़ाइनर", 
    "UI/UX-suunnittelija", 
    "UI/UX Designer"  // Swedish variant
  ];
  return uiUxVariants.includes(career);
};

return (
  <div className="h-full w-full px-4 md:px-6 lg:px-8 py-8 flex flex-col justify-center gap-8 md:gap-12 lg:gap-16">
    <div className="flex flex-col gap-2">
      <div className="text-2xl sm:text-3xl md:text-4xl text-center font-semibold">
        {t('PathWay.PathHtxt')}
      </div>
      <div className="text-base sm:text-lg text-center font-normal">{t('PathWay.PathSubTxt')}</div>
    </div>

    <div className="flex flex-col gap-4 md:gap-6 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto">
      {/* Mobile: Stack all buttons vertically */}
      <div className="flex flex-col sm:hidden w-full gap-4">
        {careerOptions.map((career, index) => (
          <button
            key={index}
            ref={isUiUxDesigner(career) ? uiUxRefMobile : null}
            onClick={isUiUxDesigner(career) ? onUiUxClick : undefined}
            onMouseEnter={isUiUxDesigner(career) ? handleMouseEnterMobile : undefined}
            onMouseLeave={isUiUxDesigner(career) ? handleMouseLeaveMobile : undefined}
            className={`w-full border border-black rounded-full py-2 px-4 text-base font-normal hover:bg-gray-100 transition-colors duration-200 ${
              isUiUxDesigner(career) ? 'cursor-pointer' : 'cursor-default'
            }`}
          >
            {career}
          </button>
        ))}
      </div>

      {/* Tablet: Two rows with buttons wrapping */}
      <div className="hidden sm:flex md:hidden flex-wrap gap-4 justify-center">
        {careerOptions.map((career, index) => (
          <button
            key={index}
            ref={isUiUxDesigner(career) ? uiUxRefTablet : null}
            onClick={isUiUxDesigner(career) ? onUiUxClick : undefined}
            onMouseEnter={isUiUxDesigner(career) ? handleMouseEnterTablet : undefined}
            onMouseLeave={isUiUxDesigner(career) ? handleMouseLeaveTablet : undefined}
            className={`border border-black rounded-full py-2 px-5 text-base font-normal hover:bg-gray-100 transition-colors duration-200 ${
              isUiUxDesigner(career) ? 'cursor-pointer' : 'cursor-default'
            }`}
          >
            {career}
          </button>
        ))}
      </div>

      {/* Desktop: Two rows as in original design */}
      <div className="hidden md:flex flex-wrap gap-6 justify-center">
        {/* First row */}
        <div className="w-full flex gap-4 md:gap-6 flex-row justify-center">
          {careerOptions.slice(0, 3).map((career, index) => (
            <button
              key={index}
              className={`border border-black rounded-full py-2 md:py-3 px-4 md:px-6 text-base md:text-lg font-normal hover:bg-gray-100 transition-colors duration-200 ${
                isUiUxDesigner(career) ? 'cursor-pointer' : 'cursor-default'
              }`}
            >
              {career}
            </button>
          ))}
        </div>

        {/* Second row */}
        <div className="w-full flex justify-center gap-4 md:gap-6">
          {careerOptions.slice(3).map((career, index) => (
            <button
              key={index + 3}
              ref={isUiUxDesigner(career) ? uiUxRefDesktop : null}
              onClick={isUiUxDesigner(career) ? onUiUxClick : undefined}
              onMouseEnter={isUiUxDesigner(career) ? handleMouseEnterDesktop : undefined}
              onMouseLeave={isUiUxDesigner(career) ? handleMouseLeaveDesktop : undefined}
              className={`border border-black rounded-full py-2 md:py-3 px-4 md:px-6 text-base md:text-lg font-normal hover:bg-gray-100 transition-colors duration-200 ${
                isUiUxDesigner(career) ? 'cursor-pointer' : 'cursor-default'
              }`}
            >
              {career}
            </button>
          ))}
        </div>
      </div>
    </div>
  </div>
);
}

export default Stage1;