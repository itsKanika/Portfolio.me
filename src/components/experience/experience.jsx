import React from "react";
import { experience } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative overflow-hidden py-24 px-[9vw] md:px-[10vw] lg:px-[16vw]
      font-sans
      bg-[linear-gradient(180deg,#050414_0%,#0d0221_50%,#050414_100%)]"
    >
      {/* DOTTED BACKGROUND */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "35px 35px",
        }}
      />

      <div className="relative z-10">

        {/* TITLE */}
        <div className="text-center mb-14 md:mb-20 pt-2">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            EXPERIENCE
          </h2>

          <p className="text-gray-400 mt-5 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed">
            My internships, open-source contributions, and technical journey.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="relative">

          {/* CENTER LINE */}
          <div
            className="absolute left-5 sm:left-1/2 sm:-translate-x-1/2
            w-1 h-full rounded-full
            bg-gradient-to-b from-pink-500 via-purple-500 to-cyan-500"
          />

          {experience.map((item, index) => (
            <div
              key={item.id}
              className={`relative flex items-center min-h-[240px] mb-16
              ${index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"}`}
            >
              {/* ICON */}
              <div
                className="absolute left-5 sm:left-1/2
                top-1/2 -translate-y-1/2
                sm:-translate-x-1/2
                w-16 h-16 sm:w-30 sm:h-30
                rounded-full bg-white
                border-4 border-purple-500
                flex items-center justify-center
                overflow-hidden z-20
                shadow-[0_0_25px_rgba(168,85,247,0.8)]"
              >
                <img
                  src={item.img}
                  alt={item.company}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* CARD */}
              <div
                className={`ml-16 sm:ml-0
                w-full sm:w-[44%]
                rounded-3xl p-6 sm:p-8
                border border-white/10
                backdrop-blur-lg
                bg-gradient-to-br
                from-[#1a0b2e]/80
                via-[#12091f]/80
                to-[#0b1220]/80
                shadow-[0_0_40px_rgba(130,69,236,0.35)]
                hover:scale-[1.02]
                transition-all duration-300
                ${index % 2 === 0 ? "sm:mr-auto" : "sm:ml-auto"}`}
              >
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {item.role}
                </h3>

                <h4 className="mt-2 text-base sm:text-lg font-semibold text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text">
                  {item.company}
                </h4>

                <p className="text-gray-400 text-sm mt-2">
                  {item.date}
                </p>

                <p className="text-gray-300 mt-5 text-sm sm:text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;