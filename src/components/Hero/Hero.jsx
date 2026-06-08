import React from "react";

const Hero = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 flex justify-center">

      <video
        autoPlay
        muted
        loop
        playsInline
     className="
  w-[1400px] sm:w-[1200px] md:w-[1500px]
  opacity-70

  -translate-y-[335px] sm:-translate-y-[320px] md:-translate-y-[334px]
"
      >
        <source src="/black.webm" type="video/webm" />
      </video>

    </div>
  );
};

export default Hero;