import React from "react";


const SmokeEmulsion = () => {
  return (
    <>
      {/* Black background */}
      <div className="fc-loader_overlay-fill"></div>

      {/* Smoke animation */}
      <div className="smoke-container">
        <div className="smoke-overlay"></div>
      </div>
    </>
  );
};

export default SmokeEmulsion;