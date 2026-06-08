

// import React from "react";
// import { SkillsInfo } from "../../constants";
// import Tilt from "react-parallax-tilt";

// const Skills = () => {
//   return (
//     <section
//       id="skills"
//       className="
//         scroll-mt-24
//         z-20
//         py-24
//         px-[8vw]
//         md:px-[7vw]
//         lg:px-[12vw]
//         font-sans
//         bg-[#050414]
//         bg-[linear-gradient(38.73deg,rgba(204,0,187,0.15)_0%,rgba(201,32,184,0)_50%),linear-gradient(141.27deg,rgba(0,70,209,0)_50%,rgba(0,70,209,0.15)_100%)]
//       "
//     >
//       {/* Section Title */}
//       <div className="text-center mb-14">
//         <h2 className="text-3xl sm:text-4xl font-bold text-white">
//           SKILLS
//         </h2>

//         <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2 rounded-full"></div>

//         <p className="text-gray-400 mt-4 text-sm sm:text-lg font-semibold max-w-2xl mx-auto">
//           A collection of my technical skills and expertise honed through
//           various projects and experience.
//         </p>
//       </div>

//       {/* Skills Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
//         {SkillsInfo.map((category) => (
//           <Tilt
//             key={category.title}
//             className="w-full"
//             tiltMaxAngleX={15}
//             tiltMaxAngleY={15}
//             perspective={1000}
//             scale={1.02}
//             transitionSpeed={1000}
//             gyroscope={true}
//           >
//             <div
//               className="
//                 bg-gray-900/50
//                 backdrop-blur-md
//                 p-4
//                 sm:p-6
//                 rounded-2xl
//                 border
//                 border-white/10
//                 overflow-hidden
//                 h-full
//                 shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]
//                 hover:shadow-[0_0_30px_4px_rgba(130,69,236,0.5)]
//                 transition-all
//                 duration-300
//               "
//             >
//               {/* Category Title */}
//               <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6 text-center">
//                 {category.title}
//               </h3>

//               {/* Skills Grid */}
//               <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
//                 {category.skills.map((skill) => (
//                   <div
//                     key={skill.name}
//                     className="
//                       flex
//                       items-center
//                       justify-center
//                       gap-2
//                       border
//                       border-gray-700
//                       rounded-xl
//                       py-2
//                       px-2
//                       sm:px-3
//                       min-w-0
//                     "
//                   >
//                     {skill.logo && (
//                       <img
//                         src={skill.logo}
//                         alt={`${skill.name} logo`}
//                         className="w-5 h-5 sm:w-7 sm:h-7 object-contain"
//                       />
//                     )}

//                     <span className="text-[10px] sm:text-sm text-gray-300 truncate">
//                       {skill.name}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </Tilt>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Skills;



// import React from "react";
// import { SkillsInfo } from "../../constants";
// import Tilt from "react-parallax-tilt";

// const Skills = () => {
//   return (
//     <section
//       id="skills"
//       className="
//         relative
//         overflow-hidden
//         scroll-mt-24
//         py-24
//         px-4
//         sm:px-6
//         lg:px-8
//         xl:px-10
//         font-sans
//         bg-[#050414]
//       "
//     >
//       {/* Background Dots */}
//       <div
//         className="absolute inset-0 pointer-events-none opacity-20"
//         style={{
//           backgroundImage:
//             "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
//           backgroundSize: "40px 40px",
//         }}
//       />

//       {/* Floating Blobs */}
//       <div
//         className="absolute inset-0 pointer-events-none"
//         style={{
//           background: `
//             radial-gradient(circle at 15% 20%, rgba(0,180,255,0.12), transparent 28%),
//             radial-gradient(circle at 85% 30%, rgba(130,69,236,0.14), transparent 30%),
//             radial-gradient(circle at 50% 85%, rgba(255,255,255,0.05), transparent 35%)
//           `,
//           filter: "blur(60px)",
//         }}
//       />

//       {/* Constellation Lines */}
//       <svg
//         className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <line
//           x1="15%"
//           y1="20%"
//           x2="30%"
//           y2="35%"
//           stroke="white"
//           strokeWidth="1"
//         />
//         <line
//           x1="30%"
//           y1="35%"
//           x2="22%"
//           y2="50%"
//           stroke="white"
//           strokeWidth="1"
//         />
//         <line
//           x1="70%"
//           y1="25%"
//           x2="82%"
//           y2="40%"
//           stroke="white"
//           strokeWidth="1"
//         />
//         <line
//           x1="82%"
//           y1="40%"
//           x2="75%"
//           y2="58%"
//           stroke="white"
//           strokeWidth="1"
//         />

//         {/* Stars */}
//         <circle cx="15%" cy="20%" r="2" fill="white" />
//         <circle cx="30%" cy="35%" r="2" fill="white" />
//         <circle cx="22%" cy="50%" r="2" fill="white" />
//         <circle cx="70%" cy="25%" r="2" fill="white" />
//         <circle cx="82%" cy="40%" r="2" fill="white" />
//         <circle cx="75%" cy="58%" r="2" fill="white" />
//       </svg>

//       {/* Dark Overlay */}
//       <div
//         className="absolute inset-0 pointer-events-none"
//         style={{
//           background:
//             "radial-gradient(circle at center, transparent 35%, rgba(5,4,20,0.8) 100%)",
//         }}
//       />

//       {/* Content */}
//       <div className="relative z-10">
//         {/* Section Title */}
//         <div className="text-center mb-14">
//           <h2 className="text-3xl sm:text-4xl font-bold text-white">
//             SKILLS
//           </h2>

//           <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-3 rounded-full"></div>

//           <p className="text-gray-400 mt-4 text-sm sm:text-lg font-semibold max-w-2xl mx-auto">
//             A collection of my technical skills and expertise honed through
//             various projects and experience.
//           </p>
//         </div>

//         {/* Skills Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
//           {SkillsInfo.map((category) => (
//             <Tilt
//               key={category.title}
//               className="w-full"
//               tiltMaxAngleX={15}
//               tiltMaxAngleY={15}
//               perspective={1000}
//               scale={1.02}
//               transitionSpeed={1000}
//               gyroscope={true}
//             >
//               <div
//                 className="
//                   bg-white/[0.04]
//                   backdrop-blur-lg
//                   p-4
//                   sm:p-6
//                   rounded-2xl
//                   border
//                   border-white/5
//                   overflow-hidden
//                   h-full
//                   transition-all
//                   duration-500
//                   shadow-[0_0_20px_rgba(0,180,255,0.12)]
//                   hover:-translate-y-2
//                   hover:shadow-[0_0_35px_rgba(130,69,236,0.35)]
//                 "
//               >
//                 {/* Category Title */}
//                 <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6 text-center">
//                   {category.title}
//                 </h3>

//                 {/* Skills Grid */}
//                 <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
//                   {category.skills.map((skill) => (
//                     <div
//                       key={skill.name}
//                       className="
//                         flex
//                         items-center
//                         justify-center
//                         gap-2
//                         rounded-xl
//                         border
//                         border-white/10
//                         bg-white/[0.02]
//                         py-2
//                         px-2
//                         sm:px-3
//                         transition-all
//                         duration-300
//                         hover:border-[#8245ec]
//                         hover:bg-white/[0.05]
//                       "
//                     >
//                       {skill.logo && (
//                         <img
//                           src={skill.logo}
//                           alt={skill.name}
//                           className="w-5 h-5 sm:w-7 sm:h-7 object-contain"
//                         />
//                       )}

//                       <span className="text-[10px] sm:text-sm text-gray-300 truncate">
//                         {skill.name}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </Tilt>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;

// import React from "react";
// import { SkillsInfo } from "../../constants";
// import Tilt from "react-parallax-tilt";

// const Skills = () => {
//   return (
//     <section
//       id="skills"
//       className="
//         relative
//         overflow-hidden
//         scroll-mt-24
//         pt-20
//         pb-24
//         px-4
//         sm:px-6
//         lg:px-8
//         xl:px-10
//         font-sans
//         bg-[#050414]
//       "
//     >
//       {/* 🌊 TOP WAVE DIVIDER */}
//       <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180 z-0">
//         <svg
//           className="relative block w-full h-24 sm:h-32"
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 1200 120"
//           preserveAspectRatio="none"
//         >
//           {/* Base dark wave */}
//           <path
//             d="M0,0 C300,120 900,0 1200,100 L1200,0 L0,0 Z"
//             fill="#050414"
//           />

//           {/* Purple glow wave */}
//           <path
//             d="M0,40 C300,140 900,-20 1200,80 L1200,0 L0,0 Z"
//             fill="rgba(130,69,236,0.18)"
//           />

//           {/* Blue glow wave */}
//           <path
//             d="M0,60 C300,160 900,0 1200,100 L1200,0 L0,0 Z"
//             fill="rgba(0,180,255,0.10)"
//           />
//         </svg>
//       </div>

//       {/* Background Dots */}
//       <div
//         className="absolute inset-0 pointer-events-none opacity-20"
//         style={{
//           backgroundImage:
//             "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
//           backgroundSize: "40px 40px",
//         }}
//       />

//       {/* Floating Blobs */}
//       <div
//         className="absolute inset-0 pointer-events-none"
//         style={{
//           background: `
//             radial-gradient(circle at 15% 20%, rgba(0,180,255,0.12), transparent 28%),
//             radial-gradient(circle at 85% 30%, rgba(130,69,236,0.14), transparent 30%),
//             radial-gradient(circle at 50% 85%, rgba(255,255,255,0.05), transparent 35%)
//           `,
//           filter: "blur(60px)",
//         }}
//       />

//       {/* Constellation Lines */}
//       <svg
//         className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <line x1="15%" y1="20%" x2="30%" y2="35%" stroke="white" strokeWidth="1" />
//         <line x1="30%" y1="35%" x2="22%" y2="50%" stroke="white" strokeWidth="1" />
//         <line x1="70%" y1="25%" x2="82%" y2="40%" stroke="white" strokeWidth="1" />
//         <line x1="82%" y1="40%" x2="75%" y2="58%" stroke="white" strokeWidth="1" />

//         <circle cx="15%" cy="20%" r="2" fill="white" />
//         <circle cx="30%" cy="35%" r="2" fill="white" />
//         <circle cx="22%" cy="50%" r="2" fill="white" />
//         <circle cx="70%" cy="25%" r="2" fill="white" />
//         <circle cx="82%" cy="40%" r="2" fill="white" />
//         <circle cx="75%" cy="58%" r="2" fill="white" />
//       </svg>

//       {/* Dark Overlay */}
//       <div
//         className="absolute inset-0 pointer-events-none"
//         style={{
//           background:
//             "radial-gradient(circle at center, transparent 35%, rgba(5,4,20,0.85) 100%)",
//         }}
//       />

//       {/* Content */}
//       <div className="relative z-10">
//         {/* Section Title */}
//         <div className="text-center mb-14">
//           <h2 className="text-3xl sm:text-4xl font-bold text-white">
//             SKILLS
//           </h2>

//           <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-3 rounded-full"></div>

//           <p className="text-gray-400 mt-4 text-sm sm:text-lg font-semibold max-w-2xl mx-auto">
//             A collection of my technical skills and expertise honed through
//             various projects and experience.
//           </p>
//         </div>

//         {/* Skills Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
//           {SkillsInfo.map((category) => (
//             <Tilt
//               key={category.title}
//               className="w-full"
//               tiltMaxAngleX={15}
//               tiltMaxAngleY={15}
//               perspective={1000}
//               scale={1.02}
//               transitionSpeed={1000}
//               gyroscope={true}
//             >
//               <div
//                 className="
//                   bg-white/[0.04]
//                   backdrop-blur-lg
//                   p-4
//                   sm:p-6
//                   rounded-2xl
//                   border
//                   border-white/5
//                   overflow-hidden
//                   h-full
//                   transition-all
//                   duration-500
//                   shadow-[0_0_20px_rgba(0,180,255,0.12)]
//                   hover:-translate-y-2
//                   hover:shadow-[0_0_35px_rgba(130,69,236,0.35)]
//                 "
//               >
//                 {/* Category Title */}
//                 <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6 text-center">
//                   {category.title}
//                 </h3>

//                 {/* Skills Grid */}
//                 <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
//                   {category.skills.map((skill) => (
//                     <div
//                       key={skill.name}
//                       className="
//                         flex
//                         items-center
//                         justify-center
//                         gap-2
//                         rounded-xl
//                         border
//                         border-white/10
//                         bg-white/[0.02]
//                         py-2
//                         px-2
//                         sm:px-3
//                         transition-all
//                         duration-300
//                         hover:border-[#8245ec]
//                         hover:bg-white/[0.05]
//                       "
//                     >
//                       {skill.logo && (
//                         <img
//                           src={skill.logo}
//                           alt={skill.name}
//                           className="w-5 h-5 sm:w-7 sm:h-7 object-contain"
//                         />
//                       )}

//                       <span className="text-[10px] sm:text-sm text-gray-300 truncate">
//                         {skill.name}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </Tilt>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;

import React from "react";
import { SkillsInfo } from "../../constants";

import Tilt from "react-parallax-tilt";

const Skills = () => {
  return (
    <section
      id="skills"
      className="
        relative
        overflow-hidden
        scroll-mt-8
        pt-28
        pb-24
        px-4
        sm:px-6
        lg:px-8
        xl:px-10
        font-sans
        bg-[#050414]
      "
    >{/* 🌊 ABOUT → SKILLS WAVE DIVIDER (SINGLE GREEN LAYER) */}
{/* 🌊 ABOUT → SKILLS WAVE DIVIDER (CLEAN) */}
{/* 🌊 ABOUT → SKILLS LAYERED DIVIDER */}
<div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-0">
  <svg
    className="relative block w-full h-32 sm:h-40"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1200 120"
    preserveAspectRatio="none"
  >

   


   
  </svg>
</div>

      {/* Background Dots */}
      {/* <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      /> */}

      {/* Floating Blobs */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 15% 20%, rgba(0,180,255,0.12), transparent 28%),
            radial-gradient(circle at 85% 30%, rgba(130,69,236,0.14), transparent 30%),
            radial-gradient(circle at 50% 85%, rgba(255,255,255,0.05), transparent 35%)
          `,
          filter: "blur(60px)",
        }}
      />

      {/* Constellation Lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="15%" y1="20%" x2="30%" y2="35%" stroke="white" strokeWidth="1" />
        <line x1="30%" y1="35%" x2="22%" y2="50%" stroke="white" strokeWidth="1" />
        <line x1="70%" y1="25%" x2="82%" y2="40%" stroke="white" strokeWidth="1" />
        <line x1="82%" y1="40%" x2="75%" y2="58%" stroke="white" strokeWidth="1" />

        <circle cx="15%" cy="20%" r="2" fill="white" />
        <circle cx="30%" cy="35%" r="2" fill="white" />
        <circle cx="22%" cy="50%" r="2" fill="white" />
        <circle cx="70%" cy="25%" r="2" fill="white" />
        <circle cx="82%" cy="40%" r="2" fill="white" />
        <circle cx="75%" cy="58%" r="2" fill="white" />
      </svg>

      {/* Dark Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, transparent 40%, rgba(5,4,20,0.9) 100%)",
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10">
        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            SKILLS
          </h2>

          <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-3 rounded-full"></div>

          <p className="text-gray-400 mt-4 text-sm sm:text-lg font-semibold max-w-2xl mx-auto">
            A collection of my technical skills and expertise honed through
            various projects and experience.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
          {SkillsInfo.map((category) => (
            <Tilt
              key={category.title}
              className="w-full"
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              perspective={1000}
              scale={1.02}
              transitionSpeed={1000}
              gyroscope={true}
            >
              <div
                className="
                  bg-white/[0.04]
                  backdrop-blur-lg
                  p-4
                  sm:p-6
                  rounded-2xl
                  border
                  border-white/5
                  overflow-hidden
                  h-full
                  transition-all
                  duration-500
                  shadow-[0_0_20px_rgba(0,180,255,0.12)]
                  hover:-translate-y-2
                  hover:shadow-[0_0_35px_rgba(130,69,236,0.35)]
                "
              >
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6 text-center">
                  {category.title}
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="
                        flex
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        border
                        border-white/10
                        bg-white/[0.02]
                        py-2
                        px-2
                        sm:px-3
                        transition-all
                        duration-300
                        hover:border-[#8245ec]
                        hover:bg-white/[0.05]
                      "
                    >
                      {skill.logo && (
                        <img
                          src={skill.logo}
                          alt={skill.name}
                          className="w-5 h-5 sm:w-7 sm:h-7 object-contain"
                        />
                      )}

                      <span className="text-[10px] sm:text-sm text-gray-300 truncate">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
