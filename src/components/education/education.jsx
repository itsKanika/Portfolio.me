// import React from "react";
// import { education } from "../../constants";

// const Education = () => {
//   return (
// <section
//   id="education"
//   className="
//     relative
//     scroll-mt-[120px]
//     overflow-hidden
//     py-24
//     px-4
//     font-sans
//     bg-[#030312]
//   "
// >
//       {/* Top Wave */}
//       <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
//         <svg
//           className="relative block w-full h-[90px]"
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 1200 120"
//           preserveAspectRatio="none"
//         >
//           <path
//             d="M321.39,56.44C197.8,89.92,91.1,95.62,0,72V0H1200V27.35c-95.71,22.17-209.33,60.18-385.39,34.94C624.29,36.23,489.7,10.72,321.39,56.44Z"
//             fill="#050414"
//           ></path>
//         </svg>
//       </div>

//      {/* Aurora Background */}
// {/* <div
//   className="absolute inset-0 pointer-events-none"
//   style={{
//     background: `
//       radial-gradient(circle at 15% 20%, rgba(80,120,255,0.15), transparent 30%),
//       radial-gradient(circle at 85% 25%, rgba(255,180,255,0.08), transparent 30%),
//       radial-gradient(circle at 50% 80%, rgba(100,200,255,0.10), transparent 40%),
//       linear-gradient(180deg,#02030d 0%,#070b1d 45%,#02030d 100%)
//     `,
//   }}
// /> */}

// {/* Dotted Background */}
// {/* <div
//   className="absolute inset-0 opacity-20 pointer-events-none"
//   style={{
//     backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
//     backgroundSize: "35px 35px",
//   }}
// /> */}

// {/* Diagonal Pattern */}
// {/* <div
//   className="absolute inset-0 opacity-10 pointer-events-none"
//   style={{
//     backgroundImage:
//       "repeating-linear-gradient(135deg, rgba(255,255,255,0.12) 0px, rgba(255,255,255,0.12) 1px, transparent 1px, transparent 28px)",
//   }}
// />

// {/* Topographic Lines */}
// {/* <div
//   className="absolute inset-0 opacity-50 pointer-events-none"
//   style={{
//     backgroundImage: `
//       radial-gradient(circle at 50% 50%, transparent 0, transparent 24px, rgba(255,255,255,0.12) 25px, transparent 26px),
//       radial-gradient(circle at 70% 30%, transparent 0, transparent 39px, rgba(255,255,255,0.08) 40px, transparent 41px)
//     `,
//     backgroundSize: "160px 160px",
//   }}
// /> */}

// {/* Saturn + Stars */}
// <div
//   className="absolute inset-0 opacity-[0.15] pointer-events-none"
//   style={{
//     backgroundImage: `
//       radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1.5px),

//       radial-gradient(circle at 35px 35px, rgba(255,255,255,0.85) 3px, transparent 4px),
//       radial-gradient(ellipse 11px 4px at 35px 35px, transparent 42%, rgba(170,180,255,0.5) 47%, transparent 58%)
//     `,
//     backgroundSize: "60px 60px, 180px 180px",
//     backgroundRepeat: "repeat",
//   }}
// />

//       {/* Cosmic Glow */}
//       <div
//         className="absolute inset-0 pointer-events-none"
//         style={{
//           background: `
//             radial-gradient(circle at 20% 20%, rgba(90,120,255,0.10), transparent 35%),
//             radial-gradient(circle at 80% 25%, rgba(255,255,255,0.04), transparent 30%),
//             radial-gradient(circle at 50% 100%, rgba(120,160,255,0.08), transparent 45%)
//           `,
//         }}
//       />

//       {/* Vignette */}
//       <div
//         className="absolute inset-0 pointer-events-none"
//         style={{
//           background:
//             "radial-gradient(circle at center, transparent 20%, rgba(3,3,18,0.75) 100%)",
//         }}
//       />

//       {/* Section Title */}
//       <div className="relative z-10 text-center mb-20">
//         <h2 className="text-4xl md:text-5xl font-bold text-white tracking-wide">
//           EDUCATION
//         </h2>

//         <div className="w-32 h-1 bg-purple-500 rounded-full mx-auto mt-4"></div>

//         <p className="text-gray-400 mt-5 text-lg font-medium max-w-3xl mx-auto">
//           My education has been a journey of learning and development.
//           Here are the details of my academic background.
//         </p>
//       </div>

//       {/* Timeline */}
//       <div className="relative z-10 max-w-6xl mx-auto">

//         {/* Center Line */}
//         <div
//           className="
//             absolute
//             left-4
//             sm:left-1/2
//             top-0
//             h-full
//             w-[3px]
//             -translate-x-1/2
//             rounded-full
//             bg-gradient-to-b
//             from-blue-400
//             via-purple-500
//             to-white
//             shadow-[0_0_20px_rgba(139,92,246,0.8)]
//           "
//         ></div>

//         {education.map((edu, index) => (
//           <div
//             key={edu.id}
//             className={`relative flex items-center mb-16 ${
//               index % 2 === 0
//                 ? "sm:justify-start"
//                 : "sm:justify-end"
//             }`}
//           >
//             {/* Timeline Circle */}
//             <div
//               className="
//                 absolute
//                 left-4
//                 sm:left-1/2
//                 -translate-x-1/2
//                 w-20
//                 h-20
//                 rounded-full
//                 bg-[#091122]
//                 border-4
//                 border-purple-500
//                 overflow-hidden
//                 z-20
//                 shadow-[0_0_20px_rgba(168,85,247,0.5)]
//               "
//             >
//               <img
//                 src={edu.img}
//                 alt={edu.school}
//                 className="w-full h-full object-cover"
//               />
//             </div>

//             {/* Card */}
//             <div
//               className={`
//                 w-full
//                 sm:w-[43%]
//                 ml-12
//                 ${
//                   index % 2 === 0
//                     ? "sm:ml-0 sm:mr-auto"
//                     : "sm:mr-0 sm:ml-auto"
//                 }
//               `}
//             >
//               <div
//                 className="
//                   rounded-3xl
//                   border
//                   border-white/10
//                   bg-[#091122]/90
//                   backdrop-blur-md
//                   p-6
//                   transition-all
//                   duration-500
//                   hover:-translate-y-2
//                   hover:border-purple-500/40
//                   hover:shadow-[0_0_30px_rgba(168,85,247,0.35)]
//                 "
//               >
//                 {/* Top */}
//                 <div className="flex items-center gap-5">
//                   <div className="w-20 h-20 rounded-xl overflow-hidden bg-white">
//                     <img
//                       src={edu.img}
//                       alt={edu.school}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>

//                   <div>
//                     <h3 className="text-xl md:text-2xl font-bold text-white">
//                       {edu.degree}
//                     </h3>

//                     <h4 className="text-gray-300 mt-1">
//                       {edu.school}
//                     </h4>

//                     <p className="text-sm text-gray-500 mt-2">
//                       {edu.date}
//                     </p>
//                   </div>
//                 </div>

//                 {/* location */}
//                 <p className="mt-6 text-purple-500 font-semibold">
//                   {edu.Location} 
//                   <span className="text-purple-400">
//                     {edu.grade}
//                   </span>
//                 </p>

//                 {/* Description */}
//                 <p className="mt-4 text-gray-400 leading-7">
//                   {edu.desc}
//                 </p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Education;

import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="
        relative
 
        overflow-hidden
        py-24
        px-4
        font-sans
        bg-[#030312]
      "
    >
      {/* ALL BACKGROUNDS (BEHIND CONTENT) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        
        {/* Top Wave */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
          <svg
            className="block w-full h-[90px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44C197.8,89.92,91.1,95.62,0,72V0H1200V27.35c-95.71,22.17-209.33,60.18-385.39,34.94C624.29,36.23,489.7,10.72,321.39,56.44Z"
              fill="#050414"
            />
          </svg>
        </div>

        {/* Saturn Stars */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `
              radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1.5px),
              radial-gradient(circle at 35px 35px, rgba(255,255,255,0.85) 3px, transparent 4px),
              radial-gradient(ellipse 11px 4px at 35px 35px, transparent 42%, rgba(170,180,255,0.5) 47%, transparent 58%)
            `,
            backgroundSize: "60px 60px, 180px 180px",
            backgroundRepeat: "repeat",
          }}
        />

        {/* Glow */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 20% 20%, rgba(90,120,255,0.10), transparent 35%),
              radial-gradient(circle at 80% 25%, rgba(255,255,255,0.04), transparent 30%),
              radial-gradient(circle at 50% 100%, rgba(120,160,255,0.08), transparent 45%)
            `,
          }}
        />

        {/* Vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at center, transparent 20%, rgba(3,3,18,0.75) 100%)",
          }}
        />
      </div>

      {/* CONTENT (ABOVE BACKGROUND) */}
      <div className="relative z-10">

        {/* Title */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-wide">
            EDUCATION
          </h2>

          <div className="w-32 h-1 bg-purple-500 rounded-full mx-auto mt-4"></div>

          <p className="text-gray-400 mt-5 text-lg font-medium max-w-3xl mx-auto">
            My education has been a journey of learning and development.
            Here are the details of my academic background.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto">

          {/* Center Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 h-full w-[3px] -translate-x-1/2 rounded-full bg-gradient-to-b from-blue-400 via-purple-500 to-white shadow-[0_0_20px_rgba(139,92,246,0.8)]"></div>

          {education.map((edu, index) => (
            <div
              key={edu.id}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0
                  ? "sm:justify-start"
                  : "sm:justify-end"
              }`}
            >
              {/* Circle */}
              <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-[#091122] border-4 border-purple-500 overflow-hidden z-20 shadow-[0_0_20px_rgba(168,85,247,0.5)]">
                <img
                  src={edu.img}
                  alt={edu.school}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Card */}
              <div
                className={`w-full sm:w-[43%] ml-12 ${
                  index % 2 === 0
                    ? "sm:ml-0 sm:mr-auto"
                    : "sm:mr-0 sm:ml-auto"
                }`}
              >
                <div className="rounded-3xl border border-white/10 bg-[#091122]/90 backdrop-blur-md p-6 transition-all duration-500 hover:-translate-y-2 hover:border-purple-500/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.35)]">

                  <div className="flex items-center gap-5">
                    <div className="w-20 h-20 rounded-xl overflow-hidden bg-white">
                      <img src={edu.img} alt={edu.school} className="w-full h-full object-cover" />
                    </div>

                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white">
                        {edu.degree}
                      </h3>

                      <h4 className="text-gray-300 mt-1">
                        {edu.school}
                      </h4>

                      <p className="text-sm text-gray-500 mt-2">
                        {edu.date}
                      </p>
                    </div>
                  </div>

                  <p className="mt-6 text-purple-500 font-semibold">
                    {edu.Location}{" "}
                    <span className="text-purple-400">{edu.grade}</span>
                  </p>

                  <p className="mt-4 text-gray-400 leading-7">
                    {edu.desc}
                  </p>

                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;