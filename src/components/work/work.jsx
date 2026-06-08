

// import React , {useState} from "react";
// import { projects } from "../../constants";

// const Work = () => {
//   const[selectedProject,setSelectedProject]=useState(null);
//   const handleOpenModel=(project)=> {
//     setSelectedProject(project);
//   };
//   const handleCloseModal=(project)=>{
//     setSelectedProject(null);
//   }
//   return (
//     <section
//       id="work"
//       className="
//         relative
//         overflow-hidden
//         py-12
//         pb-24
//         px-4
//         sm:px-6
//         lg:px-8
//         xl:px-10
//         font-sans
//         bg-[#030312]
//       "
//     >
//       {/* Background Grid */}
//       <div
//         className="absolute inset-0 pointer-events-none"
//         style={{
//           backgroundImage: `
//             linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)
//           `,
//           backgroundSize: "48px 48px",
//         }}
//       />

//       {/* Cosmic Glow */}
//       <div
//         className="absolute inset-0 pointer-events-none"
//         style={{
//           background: `
//             radial-gradient(circle at 20% 20%, rgba(90,120,255,0.15), transparent 35%),
//             radial-gradient(circle at 80% 30%, rgba(255,255,255,0.08), transparent 30%),
//             radial-gradient(circle at 50% 100%, rgba(120,160,255,0.12), transparent 45%)
//           `,
//         }}
//       />

//       {/* Vignette */}
//       <div
//         className="absolute inset-0 pointer-events-none"
//         style={{
//           background:
//             "radial-gradient(circle at center, transparent 25%, rgba(3,3,18,0.7) 100%)",
//         }}
//       />

//       {/* Heading */}
//       <div className="relative z-10 text-center mb-16">
//         <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
//           PROJECTS
//         </h2>

//         <div className="w-32 h-1 bg-purple-500 mx-auto mt-4 rounded-full"></div>

//         <p className="text-gray-400 mt-4 text-sm sm:text-base md:text-lg font-semibold max-w-3xl mx-auto">
//           A showcase of the projects I have worked on, highlighting my skills
//           and experience across various technologies.
//         </p>
//       </div>

//       {/* Project Grid */}
//       <div
//         className="
//           relative
//           z-10
//           w-full
//           max-w-[1700px]
//           mx-auto
//           grid
//           grid-cols-1
//           md:grid-cols-2
//           lg:grid-cols-3
//           gap-8
//         "
//       >
//         {projects.map((project) => (
//           <div
//             key={project.id}
// onClick={()=> handleOpenModel(project)}

//             className="
//               flex
//               flex-col
//               border
//               border-white/20
//               bg-[#091122]/90
//               backdrop-blur-md
//               rounded-2xl
//               overflow-hidden
//               cursor-pointer
//               transition-all
//               duration-500
//               md:hover:-translate-y-3
//               md:hover:scale-[1.02]
//               hover:border-purple-500/40
//               hover:shadow-[0_0_30px_rgba(168,85,247,0.35),0_0_80px_rgba(168,85,247,0.18)]
//             "
//           >
//             {/* Image */}
//             <div className="p-4">
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="
//                   w-full
//                   h-52
//                   sm:h-60
//                   md:h-56
//                   lg:h-52
//                   object-cover
//                   rounded-xl
//                 "
//               />
//             </div>

//             {/* Content */}
//             <div className="p-6">
//               <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
//                 {project.title}
//               </h3>

//               <p className="text-gray-400 mb-5 line-clamp-3">
//                 {project.description}
//               </p>

//               {/* Tech Stack */}
//               <div className="flex flex-wrap gap-2">
//                 {project.tags.map((tag, index) => (
//                   <span
//                     key={index}
//                     className="
//                       bg-white/10
//                       border
//                       border-white/10
//                       text-purple-400
//                       text-xs
//                       font-semibold
//                       rounded-full
//                       px-3
//                       py-1.5
//                     "
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div> 

//       {/* MODEL CONTAINER  */}
//       <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4'> 
//         <div className='bg-gray-900 rounded-xl shadow-2xl lg:w-full w-[90%] max-w-3xl overflow-hidden relative'>
//           <div className='flex justify-end p-4'> 
//             <button
//              onClick={handleCloseModal}
//              className='text-white text-3xl font-bold hover:text-purple-500'> 
//              &times;

//              </button>
//           </div>
//           <div className='flex flex-col'>
//             <div className='w-full flex justify-center bg-gray-900 px-4' >
//               <img scr={selectedProject.image} alt={selectedProject.title} className='lg:w-full w-[95%] object-contain rounded-xl shadow-2xl'/>
//               </div>
//               <div className='lg:p-8 p-6'>
//                 <h3 className='lg:text-3xl font-bold text-white mb-4 text-md '> {selectedProject.title} </h3></div> </div>
//           <p className='text-gray-400 mb-6 lg:text-base text-xs'> {selectedProject.description}</p> 
//           <div className='flex flex-wrap gap-2 mb-6'> {selectedProject.tags.map((tag,index)=>(
//             <span
//             key={index}
//             className='bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1'>
//               {tag}

//             </span>
//           ))}</div> 
//           <div className='flex gap-4'>
//             <a href={selectedProject.github} target='_blank' rel='noopener noreferrer'
//              className='w-1/2 bg-gray-800 hover:bg-purple-800 text-gray-400 lg:px-6 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center'>
//             view on github <FontAwesomeIcon icon={byPrefixAndName.fab['github']} />  </a>


//           </div>
//           </div>
     
//       </div>
//     </section>
//   );
// };

// // export default Work;





// import React, { useState } from "react";
// import { projects } from "../../constants";

// const Work = () => {
//   const [selectedProject, setSelectedProject] = useState(null);

//   const handleOpenModal = (project) => {
//     setSelectedProject(project);
//   };

//   const handleCloseModal = () => {
//     setSelectedProject(null);
//   };

//   return (
//     <section id="work">
//       {/* Your existing heading and grid */}

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {projects.map((project) => (
//           <div
//             key={project.id}
//             onClick={() => handleOpenModal(project)}
//             className="
//               cursor-pointer
//               border border-white/20
//               bg-[#091122]/90
//               rounded-2xl
//               overflow-hidden
//               transition-all
//               duration-500
//               hover:-translate-y-2
//               hover:border-purple-500/40
//               hover:shadow-[0_0_30px_rgba(168,85,247,0.35)]
//             "
//           >
//             <div className="p-4">
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="w-full h-56 object-cover rounded-xl"
//               />
//             </div>

//             <div className="p-6">
//               <h3 className="text-2xl font-bold text-white mb-3">
//                 {project.title}
//               </h3>

//               <p className="text-gray-400 mb-5 line-clamp-3">
//                 {project.description}
//               </p>

//               <div className="flex flex-wrap gap-2">
//                 {project.tags.map((tag, index) => (
//                   <span
//                     key={index}
//                     className="
//                       bg-white/10
//                       border border-white/10
//                       text-purple-400
//                       text-xs
//                       font-semibold
//                       rounded-full
//                       px-3
//                       py-1.5
//                     "
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Modal */}
//       {selectedProject && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
//           <div className="relative w-full max-w-3xl rounded-2xl bg-gray-900 border border-white/10 overflow-hidden shadow-2xl">

//             <button
//               onClick={handleCloseModal}
//               className="absolute top-4 right-5 text-4xl text-white hover:text-purple-500"
//             >
//               &times;
//             </button>

//             <div className="p-5">
//               <img
//                 src={selectedProject.image}
//                 alt={selectedProject.title}
//                 className="w-full h-72 object-cover rounded-xl"
//               />

//               <h3 className="text-3xl font-bold text-white mt-6 mb-4">
//                 {selectedProject.title}
//               </h3>

//               <p className="text-gray-400 mb-6">
//                 {selectedProject.description}
//               </p>

//               <div className="flex flex-wrap gap-2 mb-6">
//                 {selectedProject.tags.map((tag, index) => (
//                   <span
//                     key={index}
//                     className="
//                       bg-[#251f38]
//                       text-purple-400
//                       text-xs
//                       font-semibold
//                       rounded-full
//                       px-3
//                       py-1
//                     "
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>

//               <div className="flex gap-4">
//                 <a
//                   href={selectedProject.github}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="
//                     flex-1
//                     bg-gray-800
//                     hover:bg-purple-700
//                     transition-all
//                     text-white
//                     px-6
//                     py-3
//                     rounded-xl
//                     text-center
//                     font-semibold
//                   "
//                 >
//                   View on GitHub
//                 </a>

//                 {selectedProject.webapp && (
//                   <a
//                     href={selectedProject.webapp}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="
//                       flex-1
//                       bg-purple-600
//                       hover:bg-purple-700
//                       transition-all
//                       text-white
//                       px-6
//                       py-3
//                       rounded-xl
//                       text-center
//                       font-semibold
//                     "
//                   >
//                     Live Demo
//                   </a>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Work;

import React, { useState } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="work"
      className="
        relative
        overflow-hidden
        py-12
        pb-24
        px-4
        sm:px-6
        scroll-mt-20
        lg:px-8
        xl:px-10
        font-sans
        bg-[#030312]
      "
    >
      {/* Grid Background */}
    <div
  className="absolute inset-0 pointer-events-none"
  style={{
    backgroundImage: `
      linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
    `,
    backgroundSize: "60px 60px",
    backgroundRepeat: "repeat",

    // 👇 IMPORTANT: only TOP area visible
    WebkitMaskImage:
      "linear-gradient(to bottom, black 0%, black 60%, transparent 100%)",
    maskImage:
      "linear-gradient(to bottom, black 0%, black 60%, transparent 100%)",
  }}
/>

      {/* Cosmic Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 20% 20%, rgba(90,120,255,0.15), transparent 35%),
            radial-gradient(circle at 80% 30%, rgba(255,255,255,0.06), transparent 30%),
            radial-gradient(circle at 50% 100%, rgba(120,160,255,0.12), transparent 45%)
          `,
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, transparent 25%, rgba(3,3,18,0.7) 100%)",
        }}
      />

      {/* Heading */}
      <div className="relative z-10 text-center mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          PROJECTS
        </h2>

        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4 rounded-full"></div>

        <p className="text-gray-400 mt-4 text-sm sm:text-base md:text-lg font-semibold max-w-3xl mx-auto">
          A showcase of the projects I have worked on, highlighting my skills
          and experience across various technologies.
        </p>
      </div>

      {/* Project Grid */}
      <div
        className="
          relative
          z-10
          w-full/2
          max-w-[1450px]
          mx-auto
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
        "
      >
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="
              cursor-pointer
              border border-white/20
              bg-[#091122]/90
              backdrop-blur-md
              rounded-2xl
              overflow-hidden
              transition-all
              duration-500
              hover:-translate-y-2
              hover:border-purple-500/40
              hover:shadow-[0_0_30px_rgba(168,85,247,0.35)]
            "
          >
            <div className="p-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover rounded-xl"
              />
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-3">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-5 line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="
                      bg-white/10
                      border border-white/10
                      text-purple-400
                      text-xs
                      font-semibold
                      rounded-full
                      px-3
                      py-1.5
                    "
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
          <div
            className="
              relative
              w-full
              max-w-3xl
              rounded-2xl
              bg-gray-900
              border border-white/10
              overflow-hidden
              shadow-2xl
            "
          >
            <button
              onClick={handleCloseModal}
              className="
                absolute
                top-4
                right-5
                text-4xl
                text-white
                hover:text-purple-500
              "
            >
              &times;
            </button>

            <div className="p-5">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="
                  w-full
                  h-72
                  object-cover
                  rounded-xl
                "
              />

              <h3 className="text-3xl font-bold text-white mt-6 mb-4">
                {selectedProject.title}
              </h3>

              <p className="text-gray-400 mb-6">
                {selectedProject.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="
                      bg-[#251f38]
                      text-purple-400
                      text-xs
                      font-semibold
                      rounded-full
                      px-3
                      py-1
                    "
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex-1
                    bg-gray-800
                    hover:bg-purple-700
                    transition-all
                    text-white
                    px-6
                    py-3
                    rounded-xl
                    text-center
                    font-semibold
                  "
                >
                  View on GitHub
                </a>

                {selectedProject.webapp && (
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex-1
                      bg-purple-600
                      hover:bg-purple-700
                      transition-all
                      text-white
                      px-6
                      py-3
                      rounded-xl
                      text-center
                      font-semibold
                    "
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;