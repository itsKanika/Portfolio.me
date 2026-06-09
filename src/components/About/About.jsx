
import React, { useEffect, useRef, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    const current = sectionRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="
        py-20 md:py-24 lg:py-28
        px-[6vw] lg:px-[14vw]
        font-sans
        mt-20 md:mt-24
        scroll-mt-24
        pb-24
      "
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-14">

        {/* LEFT SIDE */}
        <div className="md:w-1/2 text-center md:text-left">

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Hi, I am
          </h1>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-3">
            Kanika Gupta
          </h2>

          <h3 className="text-xl md:text-3xl font-semibold text-[#b34bf4] mb-6">
            <span className="text-white">I am a </span>
            <Typewriter
              words={["MERN Developer", "Tech Enthusiast", "Problem Solver"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h3>

          <p className="mt-6 text-gray-400 leading-7 max-w-xl">
            I am a Final-year Computer Science student with interest in MERN stack development
            and practicing Data Structures & Algorithms to improve problem-solving skills.
            <br /><br />
            Alongside development, I have a growing curiosity for cybersecurity,
            especially secure coding practices.
            <br /><br />
            I enjoy building projects, learning continuously, and improving through hands-on experience.
          </p>

          <a
            href="https://drive.google.com/file/d/1os0gtKd-zcibj517599ZGJOIOtJafHSd/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 px-8 py-3 text-white font-bold rounded-full"
            style={{
              background: "linear-gradient(90deg, #7b2ff7, #f107a3)",
              boxShadow: "0 0 18px rgba(123,47,247,0.35)",
            }}
          >
            Download Resume
          </a>
        </div>

        {/* RIGHT SIDE */}
      {/* RIGHT SIDE */}
{/* RIGHT SIDE */}
<div className="md:w-1/2 flex justify-end items-center">
  <img
    src="/hero-bg.svg"
    alt="about"
    className="w-[180px] sm:w-[320px] md:w-[650px] lg:w-[750px] xl:w-[850px] object-contain ml-auto"
  />
</div>

      </div>
    </section>
  );
};

export default About;
