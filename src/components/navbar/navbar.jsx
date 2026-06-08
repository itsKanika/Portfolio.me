


// // // // // import React, { useState, useEffect } from "react";
// // // // // import { FiMenu, FiX } from "react-icons/fi";
// // // // // import { FaGithub, FaLinkedin } from "react-icons/fa";

// // // // // const Navbar = () => {
// // // // //   const [isOpen, setIsOpen] = useState(false);
// // // // //   const [activeSection, setActiveSection] = useState("");
// // // // //   const [isScrolled, setIsScrolled] = useState(false);

// // // // //   // menu items
// // // // //   const menuItems = [
// // // // //     { id: "about", label: "About" },
// // // // //     { id: "skills", label: "Skills" },
// // // // //     { id: "experience", label: "Experience" },
// // // // //     { id: "work", label: "Work" },
// // // // //     { id: "education", label: "Education" },
// // // // //   ];

// // // // //   // scroll effect + active section detection
// // // // //   useEffect(() => {
// // // // //     const handleScroll = () => {
// // // // //       setIsScrolled(window.scrollY > 50);

// // // // //       menuItems.forEach((item) => {
// // // // //         const section = document.getElementById(item.id);

// // // // //         if (section) {
// // // // //           const sectionTop = section.offsetTop - 120;
// // // // //           const sectionHeight = section.clientHeight;

// // // // //           if (
// // // // //             window.scrollY >= sectionTop &&
// // // // //             window.scrollY < sectionTop + sectionHeight
// // // // //           ) {
// // // // //             setActiveSection(item.id);
// // // // //           }
// // // // //         }
// // // // //       });
// // // // //     };

// // // // //     window.addEventListener("scroll", handleScroll);

// // // // //     return () => window.removeEventListener("scroll", handleScroll);
// // // // //   }, []);

// // // // //   // smooth scroll
// // // // //   const handleMenuItemClick = (sectionId) => {
// // // // //     setActiveSection(sectionId);
// // // // //     setIsOpen(false);

// // // // //     const section = document.getElementById(sectionId);

// // // // //     section?.scrollIntoView({
// // // // //       behavior: "smooth",
// // // // //     });
// // // // //   };

// // // // //   return (
// // // // //     <nav
// // // // //       className={`fixed top-0 w-full z-50 transition-all duration-300
// // // // //       px-[5vw] md:px-[7vw] lg:px-[20vw]
// // // // //       ${
// // // // //         isScrolled
// // // // //           ? "bg-[#050414]/80 backdrop-blur-md shadow-lg shadow-[#2A0E61]/30 py-4"
// // // // //           : "bg-transparent py-5"
// // // // //       }`}
// // // // //     >
// // // // //       <div className="text-white w-full mx-auto flex justify-between items-center">
// // // // //         {/* logo */}
// // // // //         <div className="text-lg sm:text-xl font-semibold cursor-pointer">
// // // // //           <span className="text-[#b34bf4]">&lt;</span>

// // // // //           <span className="text-[#f2eaf2]"> Kanika</span>

// // // // //           <span className="text-[#b34bf4]"> /</span>

// // // // //           <span className="text-[#e6e0e6]"> Gupta </span>

// // // // //           <span className="text-[#b34bf4]">&gt;</span>
// // // // //         </div>

// // // // //         {/* desktop menu */}
// // // // //         <ul className="hidden md:flex space-x-6 text-gray-300">
// // // // //           {menuItems.map((item) => (
// // // // //             <li
// // // // //               key={item.id}
// // // // //               className={`cursor-pointer transition duration-200 hover:text-[#b34bf4]
// // // // //               ${
// // // // //                 activeSection === item.id
// // // // //                   ? "text-[#b34bf4]"
// // // // //                   : "text-gray-300"
// // // // //               }`}
// // // // //             >
// // // // //               <button onClick={() => handleMenuItemClick(item.id)}>
// // // // //                 {item.label}
// // // // //               </button>
// // // // //             </li>
// // // // //           ))}
// // // // //         </ul>

// // // // //         {/* social icons */}
// // // // //         <div className="hidden md:flex space-x-4">
// // // // //           <a
// // // // //             href="https://github.com/itsKanika"
// // // // //             target="_blank"
// // // // //             rel="noopener noreferrer"
// // // // //             className="text-gray-300 hover:text-[#1b432c] transition duration-200"
// // // // //           >
// // // // //             <FaGithub size={28} />
// // // // //           </a>

// // // // //           <a
// // // // //             href="https://www.linkedin.com/in/kanika-gupta369/"
// // // // //             target="_blank"
// // // // //             rel="noopener noreferrer"
// // // // //             className="text-gray-300 hover:text-[#779dfd] transition duration-200"
// // // // //           >
// // // // //             <FaLinkedin size={26} />
// // // // //           </a>
// // // // //         </div>

// // // // //         {/* mobile menu icon */}
// // // // //         <div className="md:hidden">
// // // // //           {isOpen ? (
// // // // //             <FiX
// // // // //               className="text-3xl text-[#b34bf4] cursor-pointer"
// // // // //               onClick={() => setIsOpen(false)}
// // // // //             />
// // // // //           ) : (
// // // // //             <FiMenu
// // // // //               className="text-3xl text-[#b34bf4] cursor-pointer"
// // // // //               onClick={() => setIsOpen(true)}
// // // // //             />
// // // // //           )}
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* mobile menu */}
// // // // //       {isOpen && (
// // // // //         <div
// // // // //           className="absolute top-14 left-1/2 -translate-x-1/2
// // // // //           w-[90%] bg-[#140921]/95 backdrop-blur-lg
// // // // //           rounded-2xl shadow-xl border border-white/10
// // // // //           py-5 px-4 md:hidden"
// // // // //         >
// // // // //           <ul className="flex flex-col items-center gap-5 text-gray-200">
// // // // //             {menuItems.map((item) => (
// // // // //               <li
// // // // //                 key={item.id}
// // // // //                 className={`cursor-pointer transition duration-200
// // // // //                 ${
// // // // //                   activeSection === item.id
// // // // //                     ? "text-[#b34bf4]"
// // // // //                     : "text-gray-300"
// // // // //                 }`}
// // // // //               >
// // // // //                 <button onClick={() => handleMenuItemClick(item.id)}>
// // // // //                   {item.label}
// // // // //                 </button>
// // // // //               </li>
// // // // //             ))}

// // // // //             {/* mobile social icons */}
// // // // //             <div className="flex gap-5 pt-2">
// // // // //               <a
// // // // //                 href="https://github.com/itsKanika"
// // // // //                 target="_blank"
// // // // //                 rel="noopener noreferrer"
// // // // //                 className="text-gray-300 hover:text-[#1b432c]"
// // // // //               >
// // // // //                 <FaGithub size={26} />
// // // // //               </a>

// // // // //               <a
// // // // //                 href="https://www.linkedin.com/in/kanika-gupta369/"
// // // // //                 target="_blank"
// // // // //                 rel="noopener noreferrer"
// // // // //                 className="text-gray-300 hover:text-[#779dfd]"
// // // // //               >
// // // // //                 <FaLinkedin size={24} />
// // // // //               </a>
// // // // //             </div>
// // // // //           </ul>
// // // // //         </div>
// // // // //       )}
// // // // //     </nav>
// // // // //   );
// // // // // };

// // // // // export default Navbar; 






// // // // // import React, { useState, useEffect } from "react";
// // // // // import { FiMenu, FiX } from "react-icons/fi";
// // // // // import { FaGithub, FaLinkedin } from "react-icons/fa";

// // // // // const Navbar = () => {
// // // // //   const [isOpen, setIsOpen] = useState(false);
// // // // //   const [activeSection, setActiveSection] = useState("");
// // // // //   const [isScrolled, setIsScrolled] = useState(false);

// // // // //   // menu items
// // // // //   const menuItems = [
// // // // //     { id: "about", label: "About" },
// // // // //     { id: "skills", label: "Skills" },
// // // // //     { id: "experience", label: "Experience" },
// // // // //     { id: "work", label: "Work" },
// // // // //     { id: "education", label: "Education" },
// // // // //   ];

// // // // //   // scroll effect + active section detection
// // // // //   useEffect(() => {
// // // // //     const handleScroll = () => {
// // // // //       setIsScrolled(window.scrollY > 50);

// // // // //       menuItems.forEach((item) => {
// // // // //         const section = document.getElementById(item.id);

// // // // //         if (section) {
// // // // //           const sectionTop = section.offsetTop - 120;
// // // // //           const sectionHeight = section.clientHeight;

// // // // //           if (
// // // // //             window.scrollY >= sectionTop &&
// // // // //             window.scrollY < sectionTop + sectionHeight
// // // // //           ) {
// // // // //             setActiveSection(item.id);
// // // // //           }
// // // // //         }
// // // // //       });
// // // // //     };

// // // // //     window.addEventListener("scroll", handleScroll);

// // // // //     return () => window.removeEventListener("scroll", handleScroll);
// // // // //   }, []);

// // // // //   // smooth scroll
// // // // //   const handleMenuItemClick = (sectionId) => {
// // // // //     setActiveSection(sectionId);
// // // // //     setIsOpen(false);

// // // // //     const section = document.getElementById(sectionId);

// // // // //     section?.scrollIntoView({
// // // // //       behavior: "smooth",
// // // // //     });
// // // // //   };

// // // // //   return (
// // // // //    <nav
// // // // //   className={`fixed top-0 w-full z-50 overflow-hidden transition-all duration-300
// // // // //   px-[5vw] md:px-[7vw] lg:px-[20vw]
// // // // //   ${
// // // // //     isScrolled
// // // // //       ? "bg-[#050414]/80 backdrop-blur-md shadow-lg shadow-[#2A0E61]/30 py-4"
// // // // //       : "bg-transparent py-5"
// // // // //   }`}
// // // // // >
// // // // //   {/* Video Background */}
// // // // //   <video
// // // // //     autoPlay
// // // // //     muted
// // // // //     loop
// // // // //     playsInline
// // // // //     className="
// // // // //       absolute
// // // // //       left-1/2
// // // // //       -translate-x-1/2
// // // // //       -top-[300px]
// // // // //       w-[1000px]
// // // // //       opacity-70
// // // // //       pointer-events-none
// // // // //       z-0
// // // // //     "
// // // // //   >
// // // // //     <source src="/black.webm" type="video/webm" />
// // // // //   </video>

// // // // //   <div className="relative z-10 text-white w-full mx-auto flex justify-between items-center">
// // // // //     {/* logo */}
// // // // //     <div className="text-lg sm:text-xl font-semibold cursor-pointer">
// // // // //       <span className="text-[#b34bf4]">&lt;</span>
// // // // //       <span className="text-[#f2eaf2]"> Kanika</span>
// // // // //       <span className="text-[#b34bf4]"> /</span>
// // // // //       <span className="text-[#e6e0e6]"> Gupta </span>
// // // // //       <span className="text-[#b34bf4]">&gt;</span>
// // // // //     </div>

// // // // //     {/* desktop menu */}
// // // // //     <ul className="hidden md:flex space-x-6 text-gray-300">
// // // // //       {menuItems.map((item) => (
// // // // //         <li
// // // // //           key={item.id}
// // // // //           className={`cursor-pointer transition duration-200 hover:text-[#b34bf4]
// // // // //           ${
// // // // //             activeSection === item.id
// // // // //               ? "text-[#b34bf4]"
// // // // //               : "text-gray-300"
// // // // //           }`}
// // // // //         >
// // // // //           <button onClick={() => handleMenuItemClick(item.id)}>
// // // // //             {item.label}
// // // // //           </button>
// // // // //         </li>
// // // // //       ))}
// // // // //     </ul>

// // // // //     {/* social icons */}
// // // // //     <div className="hidden md:flex space-x-4">
// // // // //       <a
// // // // //         href="https://github.com/itsKanika"
// // // // //         target="_blank"
// // // // //         rel="noopener noreferrer"
// // // // //         className="text-gray-300 hover:text-[#1b432c] transition duration-200"
// // // // //       >
// // // // //         <FaGithub size={28} />
// // // // //       </a>

// // // // //       <a
// // // // //         href="https://www.linkedin.com/in/kanika-gupta369/"
// // // // //         target="_blank"
// // // // //         rel="noopener noreferrer"
// // // // //         className="text-gray-300 hover:text-[#779dfd] transition duration-200"
// // // // //       >
// // // // //         <FaLinkedin size={26} />
// // // // //       </a>
// // // // //     </div>

// // // // //     {/* mobile menu icon */}
// // // // //     <div className="md:hidden">
// // // // //       {isOpen ? (
// // // // //         <FiX
// // // // //           className="text-3xl text-[#b34bf4] cursor-pointer"
// // // // //           onClick={() => setIsOpen(false)}
// // // // //         />
// // // // //       ) : (
// // // // //         <FiMenu
// // // // //           className="text-3xl text-[#b34bf4] cursor-pointer"
// // // // //           onClick={() => setIsOpen(true)}
// // // // //         />
// // // // //       )}
// // // // //     </div>
// // // // //   </div>

// // // // //   {/* mobile menu */}
// // // // //   {isOpen && (
// // // // //     <div
// // // // //       className="absolute top-14 left-1/2 -translate-x-1/2
// // // // //       w-[90%] bg-[#140921]/95 backdrop-blur-lg
// // // // //       rounded-2xl shadow-xl border border-white/10
// // // // //       py-5 px-4 md:hidden z-20"
// // // // //     >
// // // // //       <ul className="flex flex-col items-center gap-5 text-gray-200">
// // // // //         {menuItems.map((item) => (
// // // // //           <li
// // // // //             key={item.id}
// // // // //             className={`cursor-pointer transition duration-200
// // // // //             ${
// // // // //               activeSection === item.id
// // // // //                 ? "text-[#b34bf4]"
// // // // //                 : "text-gray-300"
// // // // //             }`}
// // // // //           >
// // // // //             <button onClick={() => handleMenuItemClick(item.id)}>
// // // // //               {item.label}
// // // // //             </button>
// // // // //           </li>
// // // // //         ))}

// // // // //         <div className="flex gap-5 pt-2">
// // // // //           <a
// // // // //             href="https://github.com/itsKanika"
// // // // //             target="_blank"
// // // // //             rel="noopener noreferrer"
// // // // //             className="text-gray-300 hover:text-[#1b432c]"
// // // // //           >
// // // // //             <FaGithub size={26} />
// // // // //           </a>

// // // // //           <a
// // // // //             href="https://www.linkedin.com/in/kanika-gupta369/"
// // // // //             target="_blank"
// // // // //             rel="noopener noreferrer"
// // // // //             className="text-gray-300 hover:text-[#779dfd]"
// // // // //           >
// // // // //             <FaLinkedin size={24} />
// // // // //           </a>
// // // // //         </div>
// // // // //       </ul>
// // // // //     </div>
// // // // //   )}
// // // // // </nav>
// // // // //   );
// // // // // };

// // // // // export default Navbar; 


// // // // import React, { useState, useEffect } from "react";
// // // // import { FiMenu, FiX } from "react-icons/fi";
// // // // import { FaGithub, FaLinkedin } from "react-icons/fa";

// // // // const Navbar = () => {
// // // //   const [isOpen, setIsOpen] = useState(false);
// // // //   const [activeSection, setActiveSection] = useState("about");
// // // //   const [isScrolled, setIsScrolled] = useState(false);

// // // //   const menuItems = [
// // // //     { id: "about", label: "About" },
// // // //     { id: "skills", label: "Skills" },
// // // //     { id: "experience", label: "Experience" },
// // // //     { id: "work", label: "Work" },
// // // //     { id: "education", label: "Education" },
// // // //   ];

// // // //   useEffect(() => {
// // // //     const handleScroll = () => {
// // // //       setIsScrolled(window.scrollY > 30);

// // // //       menuItems.forEach((item) => {
// // // //         const section = document.getElementById(item.id);

// // // //         if (section) {
// // // //           const sectionTop = section.offsetTop - 120;
// // // //           const sectionHeight = section.offsetHeight;

// // // //           if (
// // // //             window.scrollY >= sectionTop &&
// // // //             window.scrollY < sectionTop + sectionHeight
// // // //           ) {
// // // //             setActiveSection(item.id);
// // // //           }
// // // //         }
// // // //       });
// // // //     };

// // // //     window.addEventListener("scroll", handleScroll);

// // // //     return () => {
// // // //       window.removeEventListener("scroll", handleScroll);
// // // //     };
// // // //   }, []);

// // // //   const handleMenuItemClick = (sectionId) => {
// // // //     setIsOpen(false);

// // // //     const section = document.getElementById(sectionId);

// // // //     if (section) {
// // // //       const navbarHeight = 85;

// // // //       const position =
// // // //         section.getBoundingClientRect().top +
// // // //         window.pageYOffset -
// // // //         navbarHeight;

// // // //       window.scrollTo({
// // // //         top: position,
// // // //         behavior: "smooth",
// // // //       });
// // // //     }
// // // //   };

// // // //   return (
// // // //     <nav
// // // //       className={`fixed top-0 w-full z-50 overflow-visible transition-all duration-300
// // // //       px-[5vw] md:px-[7vw] lg:px-[20vw]
// // // //       ${
// // // //         isScrolled
// // // //           ? "bg-[#050414]/40 backdrop-blur-xl border-b border-white/10 py-4"
// // // //           : "bg-black/10 backdrop-blur-md border-b border-white/5 py-5"
// // // //       }`}
// // // //     >
// // // //       <div className="relative z-20 flex items-center justify-between text-white">

// // // //         {/* Logo */}
// // // //         <div className="text-lg sm:text-xl font-semibold cursor-pointer">
// // // //           <span className="text-[#b34bf4]">&lt;</span>
// // // //           <span className="text-white"> Kanika</span>
// // // //           <span className="text-[#b34bf4]"> /</span>
// // // //           <span className="text-white"> Gupta </span>
// // // //           <span className="text-[#b34bf4]">&gt;</span>
// // // //         </div>

// // // //         {/* Desktop Menu */}
// // // //         <ul className="hidden md:flex items-center gap-8">
// // // //           {menuItems.map((item) => (
// // // //             <li key={item.id}>
// // // //               <button
// // // //                 onClick={() => handleMenuItemClick(item.id)}
// // // //                 className={`transition duration-200 hover:text-[#b34bf4]
// // // //                 ${
// // // //                   activeSection === item.id
// // // //                     ? "text-[#b34bf4]"
// // // //                     : "text-gray-300"
// // // //                 }`}
// // // //               >
// // // //                 {item.label}
// // // //               </button>
// // // //             </li>
// // // //           ))}
// // // //         </ul>

// // // //         {/* Desktop Social */}
// // // //         <div className="hidden md:flex gap-4">
// // // //           <a
// // // //             href="https://github.com/itsKanika"
// // // //             target="_blank"
// // // //             rel="noopener noreferrer"
// // // //             className="text-gray-300 hover:text-[#b34bf4]"
// // // //           >
// // // //             <FaGithub size={28} />
// // // //           </a>

// // // //           <a
// // // //             href="https://www.linkedin.com/in/kanika-gupta369/"
// // // //             target="_blank"
// // // //             rel="noopener noreferrer"
// // // //             className="text-gray-300 hover:text-[#b34bf4]"
// // // //           >
// // // //             <FaLinkedin size={26} />
// // // //           </a>
// // // //         </div>

// // // //         {/* Mobile Toggle */}
// // // //         <div className="md:hidden z-50">
// // // //           {isOpen ? (
// // // //             <FiX
// // // //               size={32}
// // // //               className="text-[#b34bf4] cursor-pointer"
// // // //               onClick={() => setIsOpen(false)}
// // // //             />
// // // //           ) : (
// // // //             <FiMenu
// // // //               size={32}
// // // //               className="text-[#b34bf4] cursor-pointer"
// // // //               onClick={() => setIsOpen(true)}
// // // //             />
// // // //           )}
// // // //         </div>
// // // //       </div>

// // // //       {/* Mobile Menu */}
// // // //       {isOpen && (
// // // //         <div
// // // //           className="
// // // //             fixed
// // // //             top-[75px]
// // // //             left-1/2
// // // //             -translate-x-1/2
// // // //             w-[92%]
// // // //             bg-[#140921]/95
// // // //             backdrop-blur-xl
// // // //             border
// // // //             border-white/10
// // // //             rounded-2xl
// // // //             shadow-2xl
// // // //             py-6
// // // //             px-4
// // // //             md:hidden
// // // //             z-[9999]
// // // //           "
// // // //         >
// // // //           <ul className="flex flex-col items-center gap-6">
// // // //             {menuItems.map((item) => (
// // // //               <li key={item.id}>
// // // //                 <button
// // // //                   onClick={() => handleMenuItemClick(item.id)}
// // // //                   className={`text-lg font-medium transition duration-200
// // // //                   ${
// // // //                     activeSection === item.id
// // // //                       ? "text-[#b34bf4]"
// // // //                       : "text-gray-300"
// // // //                   }
// // // //                   hover:text-[#b34bf4]`}
// // // //                 >
// // // //                   {item.label}
// // // //                 </button>
// // // //               </li>
// // // //             ))}

// // // //             <div className="w-full h-px bg-white/10" />

// // // //             <div className="flex gap-6 pt-2">
// // // //               <a
// // // //                 href="https://github.com/itsKanika"
// // // //                 target="_blank"
// // // //                 rel="noopener noreferrer"
// // // //                 className="text-gray-300 hover:text-[#b34bf4]"
// // // //               >
// // // //                 <FaGithub size={28} />
// // // //               </a>

// // // //               <a
// // // //                 href="https://www.linkedin.com/in/kanika-gupta369/"
// // // //                 target="_blank"
// // // //                 rel="noopener noreferrer"
// // // //                 className="text-gray-300 hover:text-[#b34bf4]"
// // // //               >
// // // //                 <FaLinkedin size={26} />
// // // //               </a>
// // // //             </div>
// // // //           </ul>
// // // //         </div>
// // // //       )}
// // // //     </nav>
// // // //   );
// // // // };



// // // // import React, { useState, useEffect } from "react";
// // // // import { FiMenu, FiX } from "react-icons/fi";
// // // // import { FaGithub, FaLinkedin } from "react-icons/fa";

// // // // const Navbar = () => {
// // // //   const [isOpen, setIsOpen] = useState(false);
// // // //   const [activeSection, setActiveSection] = useState("about");
// // // //   const [isScrolled, setIsScrolled] = useState(false);

// // // //   const menuItems = [
// // // //     { id: "about", label: "About" },
// // // //     { id: "skills", label: "Skills" },
// // // //     { id: "experience", label: "Experience" },
// // // //     { id: "work", label: "Work" },
// // // //     { id: "education", label: "Education" },
// // // //   ];

// // // //   useEffect(() => {
// // // //     const handleScroll = () => {
// // // //       setIsScrolled(window.scrollY > 30);

// // // //       menuItems.forEach((item) => {
// // // //         const section = document.getElementById(item.id);

// // // //         if (section) {
// // // //           const sectionTop = section.offsetTop - 120;
// // // //           const sectionHeight = section.offsetHeight;

// // // //           if (
// // // //             window.scrollY >= sectionTop &&
// // // //             window.scrollY < sectionTop + sectionHeight
// // // //           ) {
// // // //             setActiveSection(item.id);
// // // //           }
// // // //         }
// // // //       });
// // // //     };

// // // //     window.addEventListener("scroll", handleScroll);

// // // //     return () => {
// // // //       window.removeEventListener("scroll", handleScroll);
// // // //     };
// // // //   }, []);

// // // //   const handleMenuItemClick = (sectionId) => {
// // // //     setIsOpen(false);

// // // //     const section = document.getElementById(sectionId);

// // // //     if (section) {
// // // //       const navbarHeight = 85;

// // // //       const position =
// // // //         section.getBoundingClientRect().top +
// // // //         window.pageYOffset -
// // // //         navbarHeight;

// // // //     const handleMenuItemClick = (sectionId) => {
// // // //   setIsOpen(false);

// // // //   const section = document.getElementById(sectionId);

// // // //   if (section) {
// // // //     const yOffset = -90; // 👈 adjust UP/DOWN here

// // // //     const y =
// // // //       section.getBoundingClientRect().top +
// // // //       window.pageYOffset +
// // // //       yOffset;

// // // //     window.scrollTo({
// // // //       top: y,
// // // //       behavior: "smooth",
// // // //     });
// // // //   }
// // // // };
// // // //     }
// // // //   };

// // // //   return (
// // // //     <nav
// // // //       className={`fixed top-0 w-full z-50 overflow-visible transition-all duration-300
// // // //       px-[5vw] md:px-[7vw] lg:px-[20vw]
// // // //       ${
// // // //         isScrolled
// // // //           ? "bg-[#050414]/40 backdrop-blur-xl border-b border-white/10 py-4"
// // // //           : "bg-black/10 backdrop-blur-md border-b border-white/5 py-5"
// // // //       }`}
// // // //     >
// // // //       <div className="relative z-20 flex items-center justify-between text-white">

// // // //         {/* Logo */}
// // // //         <div className="text-lg sm:text-xl font-semibold cursor-pointer">
// // // //           <span className="text-[#b34bf4]">&lt;</span>
// // // //           <span className="text-white"> Kanika</span>
// // // //           <span className="text-[#b34bf4]"> /</span>
// // // //           <span className="text-white"> Gupta </span>
// // // //           <span className="text-[#b34bf4]">&gt;</span>
// // // //         </div>

// // // //         {/* Desktop Menu */}
// // // //         <ul className="hidden md:flex items-center gap-8">
// // // //           {menuItems.map((item) => (
// // // //             <li key={item.id}>
// // // //               <button
// // // //                 onClick={() => handleMenuItemClick(item.id)}
// // // //                 className={`transition duration-200 hover:text-[#b34bf4]
// // // //                 ${
// // // //                   activeSection === item.id
// // // //                     ? "text-[#b34bf4]"
// // // //                     : "text-gray-300"
// // // //                 }`}
// // // //               >
// // // //                 {item.label}
// // // //               </button>
// // // //             </li>
// // // //           ))}
// // // //         </ul>

// // // //         {/* Desktop Social */}
// // // //         <div className="hidden md:flex gap-4">
// // // //           <a
// // // //             href="https://github.com/itsKanika"
// // // //             target="_blank"
// // // //             rel="noopener noreferrer"
// // // //             className="text-gray-300 hover:text-[#b34bf4]"
// // // //           >
// // // //             <FaGithub size={28} />
// // // //           </a>

// // // //           <a
// // // //             href="https://www.linkedin.com/in/kanika-gupta369/"
// // // //             target="_blank"
// // // //             rel="noopener noreferrer"
// // // //             className="text-gray-300 hover:text-[#b34bf4]"
// // // //           >
// // // //             <FaLinkedin size={26} />
// // // //           </a>
// // // //         </div>

// // // //         {/* Mobile Toggle */}
// // // //         <div className="md:hidden z-50">
// // // //           {isOpen ? (
// // // //             <FiX
// // // //               size={32}
// // // //               className="text-[#b34bf4] cursor-pointer"
// // // //               onClick={() => setIsOpen(false)}
// // // //             />
// // // //           ) : (
// // // //             <FiMenu
// // // //               size={32}
// // // //               className="text-[#b34bf4] cursor-pointer"
// // // //               onClick={() => setIsOpen(true)}
// // // //             />
// // // //           )}
// // // //         </div>
// // // //       </div>

// // // //       {/* Mobile Menu */}
// // // //       {isOpen && (
// // // //         <div
// // // //           className="
// // // //             fixed
// // // //             top-[75px]
// // // //             left-1/2
// // // //             -translate-x-1/2
// // // //             w-[92%]
// // // //             bg-[#140921]/95
// // // //             backdrop-blur-xl
// // // //             border
// // // //             border-white/10
// // // //             rounded-2xl
// // // //             shadow-2xl
// // // //             py-6
// // // //             px-4
// // // //             md:hidden
// // // //             z-[9999]
// // // //           "
// // // //         >
// // // //           <ul className="flex flex-col items-center gap-6">
// // // //             {menuItems.map((item) => (
// // // //               <li key={item.id}>
// // // //                 <button
// // // //                   onClick={() => handleMenuItemClick(item.id)}
// // // //                   className={`text-lg font-medium transition duration-200
// // // //                   ${
// // // //                     activeSection === item.id
// // // //                       ? "text-[#b34bf4]"
// // // //                       : "text-gray-300"
// // // //                   }
// // // //                   hover:text-[#b34bf4]`}
// // // //                 >
// // // //                   {item.label}
// // // //                 </button>
// // // //               </li>
// // // //             ))}

// // // //             <div className="w-full h-px bg-white/10" />

// // // //             <div className="flex gap-6 pt-2">
// // // //               <a
// // // //                 href="https://github.com/itsKanika"
// // // //                 target="_blank"
// // // //                 rel="noopener noreferrer"
// // // //                 className="text-gray-300 hover:text-[#b34bf4]"
// // // //               >
// // // //                 <FaGithub size={28} />
// // // //               </a>

// // // //               <a
// // // //                 href="https://www.linkedin.com/in/kanika-gupta369/"
// // // //                 target="_blank"
// // // //                 rel="noopener noreferrer"
// // // //                 className="text-gray-300 hover:text-[#b34bf4]"
// // // //               >
// // // //                 <FaLinkedin size={26} />
// // // //               </a>
// // // //             </div>
// // // //           </ul>
// // // //         </div>
// // // //       )}
// // // //     </nav>
// // // //   );
// // // // };

// // // // export default Navbar;




// // // import React, { useState, useEffect } from "react";
// // // import { FiMenu, FiX } from "react-icons/fi";
// // // import { FaGithub, FaLinkedin } from "react-icons/fa";

// // // const Navbar = () => {
// // //   const [isOpen, setIsOpen] = useState(false);
// // //   const [activeSection, setActiveSection] = useState("about");
// // //   const [isScrolled, setIsScrolled] = useState(false);

// // //   const menuItems = [
// // //     { id: "about", label: "About" },
// // //     { id: "skills", label: "Skills" },
// // //     { id: "experience", label: "Experience" },
// // //     { id: "work", label: "Work" },
// // //     { id: "education", label: "Education" },
// // //   ];

// // //   useEffect(() => {
// // //     const handleScroll = () => {
// // //       setIsScrolled(window.scrollY > 30);

// // //       menuItems.forEach((item) => {
// // //         const section = document.getElementById(item.id);

// // //         if (section) {
// // //           const sectionTop = section.offsetTop - 120;
// // //           const sectionHeight = section.offsetHeight;

// // //           if (
// // //             window.scrollY >= sectionTop &&
// // //             window.scrollY < sectionTop + sectionHeight
// // //           ) {
// // //             setActiveSection(item.id);
// // //           }
// // //         }
// // //       });
// // //     };

// // //     window.addEventListener("scroll", handleScroll);

// // //     return () => {
// // //       window.removeEventListener("scroll", handleScroll);
// // //     };
// // //   }, []);

// // //   const handleMenuItemClick = (sectionId) => {
// // //     setIsOpen(false);

// // //     const section = document.getElementById(sectionId);

// // //     if (section) {
// // //       const navbarHeight = 85;

// // //       const position =
// // //         section.getBoundingClientRect().top +
// // //         window.pageYOffset -
// // //         navbarHeight;

// // //     const handleMenuItemClick = (sectionId) => {
// // //   setIsOpen(false);

// // //   const section = document.getElementById(sectionId);

// // //   if (section) {
// // //     const yOffset = -90; // 👈 adjust UP/DOWN here

// // //     const y =
// // //       section.getBoundingClientRect().top +
// // //       window.pageYOffset +
// // //       yOffset;

// // //     window.scrollTo({
// // //       top: y,
// // //       behavior: "smooth",
// // //     });
// // //   }
// // // };
// // //     }
// // //   };

// // //   return (
// // //     <nav
// // //       className={`fixed top-0 w-full z-50 overflow-visible transition-all duration-300
// // //       px-[5vw] md:px-[7vw] lg:px-[20vw]
// // //       ${
// // //         isScrolled
// // //           ? "bg-[#050414]/40 backdrop-blur-xl border-b border-white/10 py-4"
// // //           : "bg-black/10 backdrop-blur-md border-b border-white/5 py-5"
// // //       }`}
// // //     >
// // //       <div className="relative z-20 flex items-center justify-between text-white">

// // //         {/* Logo */}
// // //         <div className="text-lg sm:text-xl font-semibold cursor-pointer">
// // //           <span className="text-[#b34bf4]">&lt;</span>
// // //           <span className="text-white"> Kanika</span>
// // //           <span className="text-[#b34bf4]"> /</span>
// // //           <span className="text-white"> Gupta </span>
// // //           <span className="text-[#b34bf4]">&gt;</span>
// // //         </div>

// // //         {/* Desktop Menu */}
// // //         <ul className="hidden md:flex items-center gap-8">
// // //           {menuItems.map((item) => (
// // //             <li key={item.id}>
// // //               <button
// // //                 onClick={() => handleMenuItemClick(item.id)}
// // //                 className={`transition duration-200 hover:text-[#b34bf4]
// // //                 ${
// // //                   activeSection === item.id
// // //                     ? "text-[#b34bf4]"
// // //                     : "text-gray-300"
// // //                 }`}
// // //               >
// // //                 {item.label}
// // //               </button>
// // //             </li>
// // //           ))}
// // //         </ul>

// // //         {/* Desktop Social */}
// // //         <div className="hidden md:flex gap-4">
// // //           <a
// // //             href="https://github.com/itsKanika"
// // //             target="_blank"
// // //             rel="noopener noreferrer"
// // //             className="text-gray-300 hover:text-[#b34bf4]"
// // //           >
// // //             <FaGithub size={28} />
// // //           </a>

// // //           <a
// // //             href="https://www.linkedin.com/in/kanika-gupta369/"
// // //             target="_blank"
// // //             rel="noopener noreferrer"
// // //             className="text-gray-300 hover:text-[#b34bf4]"
// // //           >
// // //             <FaLinkedin size={26} />
// // //           </a>
// // //         </div>

// // //         {/* Mobile Toggle */}
// // //         <div className="md:hidden z-50">
// // //           {isOpen ? (
// // //             <FiX
// // //               size={32}
// // //               className="text-[#b34bf4] cursor-pointer"
// // //               onClick={() => setIsOpen(false)}
// // //             />
// // //           ) : (
// // //             <FiMenu
// // //               size={32}
// // //               className="text-[#b34bf4] cursor-pointer"
// // //               onClick={() => setIsOpen(true)}
// // //             />
// // //           )}
// // //         </div>
// // //       </div>

// // //       {/* Mobile Menu */}
// // //       {isOpen && (
// // //         <div
// // //           className="
// // //             fixed
// // //             top-[75px]
// // //             left-1/2
// // //             -translate-x-1/2
// // //             w-[92%]
// // //             bg-[#140921]/95
// // //             backdrop-blur-xl
// // //             border
// // //             border-white/10
// // //             rounded-2xl
// // //             shadow-2xl
// // //             py-6
// // //             px-4
// // //             md:hidden
// // //             z-[9999]
// // //           "
// // //         >
// // //           <ul className="flex flex-col items-center gap-6">
// // //             {menuItems.map((item) => (
// // //               <li key={item.id}>
// // //                 <button
// // //                   onClick={() => handleMenuItemClick(item.id)}
// // //                   className={`text-lg font-medium transition duration-200
// // //                   ${
// // //                     activeSection === item.id
// // //                       ? "text-[#b34bf4]"
// // //                       : "text-gray-300"
// // //                   }
// // //                   hover:text-[#b34bf4]`}
// // //                 >
// // //                   {item.label}
// // //                 </button>
// // //               </li>
// // //             ))}

// // //             <div className="w-full h-px bg-white/10" />

// // //             <div className="flex gap-6 pt-2">
// // //               <a
// // //                 href="https://github.com/itsKanika"
// // //                 target="_blank"
// // //                 rel="noopener noreferrer"
// // //                 className="text-gray-300 hover:text-[#b34bf4]"
// // //               >
// // //                 <FaGithub size={28} />
// // //               </a>

// // //               <a
// // //                 href="https://www.linkedin.com/in/kanika-gupta369/"
// // //                 target="_blank"
// // //                 rel="noopener noreferrer"
// // //                 className="text-gray-300 hover:text-[#b34bf4]"
// // //               >
// // //                 <FaLinkedin size={26} />
// // //               </a>
// // //             </div>
// // //           </ul>
// // //         </div>
// // //       )}
// // //     </nav>
// // //   );
// // // };

// // // export default Navbar;


// // import React, { useState, useEffect } from "react";
// // import { FiMenu, FiX } from "react-icons/fi";
// // import { FaGithub, FaLinkedin } from "react-icons/fa";

// // const Navbar = () => {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [activeSection, setActiveSection] = useState("about");
// //   const [isScrolled, setIsScrolled] = useState(false);

// //   const menuItems = [
// //     { id: "about", label: "About" },
// //     { id: "skills", label: "Skills" },
// //     { id: "experience", label: "Experience" },
// //     { id: "work", label: "Work" },
// //     { id: "education", label: "Education" },
// //   ];

// //   // 🔥 Scroll spy (active section highlight)
// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setIsScrolled(window.scrollY > 30);

// //       menuItems.forEach((item) => {
// //         const section = document.getElementById(item.id);

// //         if (section) {
// //           const sectionTop = section.offsetTop - 100;
// //           const sectionHeight = section.offsetHeight;

// //           if (
// //             window.scrollY >= sectionTop &&
// //             window.scrollY < sectionTop + sectionHeight
// //           ) {
// //             setActiveSection(item.id);
// //           }
// //         }
// //       });
// //     };

// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, []);

// //   // 🔥 Smooth scroll click (FIXED)
// //   const handleMenuItemClick = (sectionId) => {
// //     setIsOpen(false);

// //     const section = document.getElementById(sectionId);

// //     if (section) {
// //       const yOffset = -90; // 👉 adjust if needed (-80 to -110)

// //       const y =
// //         section.getBoundingClientRect().top +
// //         window.pageYOffset +
// //         yOffset;

// //       window.scrollTo({
// //         top: y,
// //         behavior: "smooth",
// //       });
// //     }
// //   };

// //   return (
// //     <nav
// //       className={`fixed top-0 w-full z-50 transition-all duration-300 px-[5vw] md:px-[7vw] lg:px-[20vw]
// //       ${
// //         isScrolled
// //           ? "bg-[#050414]/40 backdrop-blur-xl border-b border-white/10 py-4"
// //           : "bg-black/10 backdrop-blur-md border-b border-white/5 py-5"
// //       }`}
// //     >
// //       <div className="relative z-20 flex items-center justify-between text-white">

// //         {/* Logo */}
// //         <div className="text-lg sm:text-xl font-semibold cursor-pointer">
// //           <span className="text-[#b34bf4]">&lt;</span>
// //           <span className="text-white"> Kanika</span>
// //           <span className="text-[#b34bf4]"> /</span>
// //           <span className="text-white"> Gupta </span>
// //           <span className="text-[#b34bf4]">&gt;</span>
// //         </div>

// //         {/* Desktop Menu */}
// //         <ul className="hidden md:flex items-center gap-8">
// //           {menuItems.map((item) => (
// //             <li key={item.id}>
// //               <button
// //                 onClick={() => handleMenuItemClick(item.id)}
// //                 className={`transition hover:text-[#b34bf4]
// //                 ${
// //                   activeSection === item.id
// //                     ? "text-[#b34bf4]"
// //                     : "text-gray-300"
// //                 }`}
// //               >
// //                 {item.label}
// //               </button>
// //             </li>
// //           ))}
// //         </ul>

// //         {/* Social */}
// //         <div className="hidden md:flex gap-4">
// //           <a
// //             href="https://github.com/itsKanika"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //             className="text-gray-300 hover:text-[#b34bf4]"
// //           >
// //             <FaGithub size={28} />
// //           </a>

// //           <a
// //             href="https://www.linkedin.com/in/kanika-gupta369/"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //             className="text-gray-300 hover:text-[#b34bf4]"
// //           >
// //             <FaLinkedin size={26} />
// //           </a>
// //         </div>

// //         {/* Mobile Toggle */}
// //         <div className="md:hidden z-50">
// //           {isOpen ? (
// //             <FiX
// //               size={32}
// //               className="text-[#b34bf4]"
// //               onClick={() => setIsOpen(false)}
// //             />
// //           ) : (
// //             <FiMenu
// //               size={32}
// //               className="text-[#b34bf4]"
// //               onClick={() => setIsOpen(true)}
// //             />
// //           )}
// //         </div>
// //       </div>

// //       {/* Mobile Menu */}
// //       {isOpen && (
// //         <div className="fixed top-[75px] left-1/2 -translate-x-1/2 w-[92%] bg-[#140921]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl py-6 px-4 md:hidden z-[9999]">
// //           <ul className="flex flex-col items-center gap-6">
// //             {menuItems.map((item) => (
// //               <li key={item.id}>
// //                 <button
// //                   onClick={() => handleMenuItemClick(item.id)}
// //                   className={`text-lg font-medium transition
// //                   ${
// //                     activeSection === item.id
// //                       ? "text-[#b34bf4]"
// //                       : "text-gray-300"
// //                   } hover:text-[#b34bf4]`}
// //                 >
// //                   {item.label}
// //                 </button>
// //               </li>
// //             ))}

// //             <div className="w-full h-px bg-white/10" />

// //             <div className="flex gap-6 pt-2">
// //               <a
// //                 href="https://github.com/itsKanika"
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //                 className="text-gray-300 hover:text-[#b34bf4]"
// //               >
// //                 <FaGithub size={28} />
// //               </a>

// //               <a
// //                 href="https://www.linkedin.com/in/kanika-gupta369/"
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //                 className="text-gray-300 hover:text-[#b34bf4]"
// //               >
// //                 <FaLinkedin size={26} />
// //               </a>
// //             </div>
// //           </ul>
// //         </div>
// //       )}
// //     </nav>
// //   );
// // };

// // export default Navbar;



// import React, { useState, useEffect } from "react";
// import { FiMenu, FiX } from "react-icons/fi";
// import { FaGithub, FaLinkedin } from "react-icons/fa";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("about");
//   const [isScrolled, setIsScrolled] = useState(false);

//   const menuItems = [
//     { id: "about", label: "About" },
//     { id: "skills", label: "Skills" },
//     { id: "experience", label: "Experience" },
//     { id: "work", label: "Work" },
//     { id: "education", label: "Education" },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 30);

//       menuItems.forEach((item) => {
//         const section = document.getElementById(item.id);

//         if (section) {
//           const sectionTop = section.offsetTop - 120;
//           const sectionHeight = section.offsetHeight;

//           if (
//             window.scrollY >= sectionTop &&
//             window.scrollY < sectionTop + sectionHeight
//           ) {
//             setActiveSection(item.id);
//           }
//         }
//       });
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const handleMenuItemClick = (sectionId) => {
//     setIsOpen(false);

//     const section = document.getElementById(sectionId);

//     if (section) {
//       const navbarHeight = 80;

//       const position =
//         section.getBoundingClientRect().top +
//         window.pageYOffset -
//         navbarHeight;

//       window.scrollTo({
//         top: position,
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <nav
//       className={`fixed top-0 w-full z-50 overflow-visible transition-all duration-300
//       px-[5vw] md:px-[7vw] lg:px-[20vw]
//       ${
//         isScrolled
//           ? "bg-[#050414]/40 backdrop-blur-xl border-b border-white/10 py-4"
//           : "bg-black/10 backdrop-blur-md border-b border-white/5 py-5"
//       }`}
//     >
//       <div className="relative z-20 flex items-center justify-between text-white">

//         {/* Logo */}
//         <div className="text-lg sm:text-xl font-semibold cursor-pointer">
//           <span className="text-[#b34bf4]">&lt;</span>
//           <span className="text-white"> Kanika</span>
//           <span className="text-[#b34bf4]"> /</span>
//           <span className="text-white"> Gupta </span>
//           <span className="text-[#b34bf4]">&gt;</span>
//         </div>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex items-center gap-8">
//           {menuItems.map((item) => (
//             <li key={item.id}>
//               <button
//                 onClick={() => handleMenuItemClick(item.id)}
//                 className={`transition duration-200 hover:text-[#b34bf4]
//                 ${
//                   activeSection === item.id
//                     ? "text-[#b34bf4]"
//                     : "text-gray-300"
//                 }`}
//               >
//                 {item.label}
//               </button>
//             </li>
//           ))}
//         </ul>

//         {/* Desktop Social */}
//         <div className="hidden md:flex gap-4">
//           <a
//             href="https://github.com/itsKanika"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-gray-300 hover:text-[#b34bf4]"
//           >
//             <FaGithub size={28} />
//           </a>

//           <a
//             href="https://www.linkedin.com/in/kanika-gupta369/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-gray-300 hover:text-[#b34bf4]"
//           >
//             <FaLinkedin size={26} />
//           </a>
//         </div>

//         {/* Mobile Toggle */}
//         <div className="md:hidden z-50">
//           {isOpen ? (
//             <FiX
//               size={32}
//               className="text-[#b34bf4] cursor-pointer"
//               onClick={() => setIsOpen(false)}
//             />
//           ) : (
//             <FiMenu
//               size={32}
//               className="text-[#b34bf4] cursor-pointer"
//               onClick={() => setIsOpen(true)}
//             />
//           )}
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div
//           className="
//             fixed
//             top-[75px]
//             left-1/2
//             -translate-x-1/2
//             w-[92%]
//             bg-[#140921]/95
//             backdrop-blur-xl
//             border
//             border-white/10
//             rounded-2xl
//             shadow-2xl
//             py-6
//             px-4
//             md:hidden
//             z-[9999]
//           "
//         >
//           <ul className="flex flex-col items-center gap-6">
//             {menuItems.map((item) => (
//               <li key={item.id}>
//                 <button
//                   onClick={() => handleMenuItemClick(item.id)}
//                   className={`text-lg font-medium transition duration-200
//                   ${
//                     activeSection === item.id
//                       ? "text-[#b34bf4]"
//                       : "text-gray-300"
//                   }
//                   hover:text-[#b34bf4]`}
//                 >
//                   {item.label}
//                 </button>
//               </li>
//             ))}

//             <div className="w-full h-px bg-white/10" />

//             <div className="flex gap-6 pt-2">
//               <a
//                 href="https://github.com/itsKanika"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-300 hover:text-[#b34bf4]"
//               >
//                 <FaGithub size={28} />
//               </a>

//               <a
//                 href="https://www.linkedin.com/in/kanika-gupta369/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-300 hover:text-[#b34bf4]"
//               >
//                 <FaLinkedin size={26} />
//               </a>
//             </div>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// // // };

// // // export default Navbar;

// // import React, { useState, useEffect } from "react";
// // import { FiMenu, FiX } from "react-icons/fi";
// // import { FaGithub, FaLinkedin } from "react-icons/fa";

// // const Navbar = () => {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [activeSection, setActiveSection] = useState("about");
// //   const [isScrolled, setIsScrolled] = useState(false);

// //   const menuItems = [
// //     { id: "about", label: "About" },
// //     { id: "skills", label: "Skills" },
// //     { id: "experience", label: "Experience" },
// //     { id: "work", label: "Work" },
// //     { id: "education", label: "Education" },
// //   ];

// //   // scroll spy
// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setIsScrolled(window.scrollY > 30);

// //       menuItems.forEach((item) => {
// //         const section = document.getElementById(item.id);

// //         if (section) {
// //           const top = section.offsetTop - 100;
// //           const bottom = top + section.offsetHeight;

// //           if (window.scrollY >= top && window.scrollY < bottom) {
// //             setActiveSection(item.id);
// //           }
// //         }
// //       });
// //     };

// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, []);

// //   // smooth scroll FIXED
// //   const handleMenuItemClick = (id) => {
// //     setIsOpen(false);

// //     const section = document.getElementById(id);

// //     if (section) {
// //       const offset = 85;

// //       window.scrollTo({
// //         top: section.offsetTop - offset,
// //         behavior: "smooth",
// //       });
// //     }
// //   };

// //   return (
// //     <nav
// //       className={`fixed top-0 w-full z-50 px-6 lg:px-20 transition-all duration-300
// //       ${
// //         isScrolled
// //           ? "bg-[#050414]/60 backdrop-blur-xl border-b border-white/10 py-4"
// //           : "bg-transparent py-5"
// //       }`}
// //     >
// //       <div className="flex items-center justify-between text-white">

// //         {/* Logo */}
// //         <div className="text-xl font-semibold">
// //           <span className="text-purple-500">&lt;</span>
// //           Kanika Gupta
// //           <span className="text-purple-500">/&gt;</span>
// //         </div>

// //         {/* Menu */}
// //         <ul className="hidden md:flex gap-8">
// //           {menuItems.map((item) => (
// //             <li key={item.id}>
// //               <button
// //                 onClick={() => handleMenuItemClick(item.id)}
// //                 className={`hover:text-purple-400 transition
// //                 ${
// //                   activeSection === item.id
// //                     ? "text-purple-500"
// //                     : "text-gray-300"
// //                 }`}
// //               >
// //                 {item.label}
// //               </button>
// //             </li>
// //           ))}
// //         </ul>

// //         {/* Social */}
// //         <div className="hidden md:flex gap-4">
// //           <a href="#" className="hover:text-purple-400">
// //             <FaGithub size={24} />
// //           </a>
// //           <a href="#" className="hover:text-purple-400">
// //             <FaLinkedin size={24} />
// //           </a>
// //         </div>

// //         {/* Mobile */}
// //         <div className="md:hidden">
// //           {isOpen ? (
// //             <FiX size={28} onClick={() => setIsOpen(false)} />
// //           ) : (
// //             <FiMenu size={28} onClick={() => setIsOpen(true)} />
// //           )}
// //         </div>
// //       </div>

// //       {/* Mobile menu */}
// //       {isOpen && (
// //         <div className="absolute top-16 left-0 w-full bg-[#140921] p-6 flex flex-col gap-4 md:hidden">
// //           {menuItems.map((item) => (
// //             <button
// //               key={item.id}
// //               onClick={() => handleMenuItemClick(item.id)}
// //               className="text-left text-white hover:text-purple-400"
// //             >
// //               {item.label}
// //             </button>
// //           ))}
// //         </div>
// //       )}
// //     </nav>
// //   );
// // };

// // export default Navbar;



import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Work" },
    { id: "education", label: "Education" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      menuItems.forEach((item) => {
        const section = document.getElementById(item.id);

        if (section) {
          const sectionTop = section.offsetTop - 120;
          const sectionHeight = section.offsetHeight;

          if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
          ) {
            setActiveSection(item.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setIsOpen(false);

    const section = document.getElementById(sectionId);

    if (section) {
      const navbarHeight =65;

      const position =
        section.getBoundingClientRect().top +
        window.pageYOffset -
        navbarHeight;

      window.scrollTo({
        top: position,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 overflow-visible transition-all duration-300
      px-[5vw] md:px-[7vw] lg:px-[20vw]
      ${
        isScrolled
          ? "bg-[#050414]/40 backdrop-blur-xl border-b border-white/10 py-4"
          : "bg-black/10 backdrop-blur-md border-b border-white/5 py-5"
      }`}
    >
      <div className="relative z-20 flex items-center justify-between text-white">

        {/* Logo */}
        <div className="text-lg sm:text-xl font-semibold cursor-pointer">
          <span className="text-[#b34bf4]">&lt;</span>
          <span className="text-white"> Kanika</span>
          <span className="text-[#b34bf4]"> /</span>
          <span className="text-white"> Gupta </span>
          <span className="text-[#b34bf4]">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleMenuItemClick(item.id)}
                className={`transition duration-200 hover:text-[#b34bf4]
                ${
                  activeSection === item.id
                    ? "text-[#b34bf4]"
                    : "text-gray-300"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop Social */}
        <div className="hidden md:flex gap-4">
          <a
            href="https://github.com/itsKanika"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#b34bf4]"
          >
            <FaGithub size={28} />
          </a>

          <a
            href="https://www.linkedin.com/in/kanika-gupta369/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#b34bf4]"
          >
            <FaLinkedin size={26} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden z-50">
          {isOpen ? (
            <FiX
              size={32}
              className="text-[#b34bf4] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              size={32}
              className="text-[#b34bf4] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="
            fixed
            top-[75px]
            left-1/2
            -translate-x-1/2
            w-[92%]
            bg-[#140921]/95
            backdrop-blur-xl
            border
            border-white/10
            rounded-2xl
            shadow-2xl
            py-6
            px-4
            md:hidden
            z-[9999]
          "
        >
          <ul className="flex flex-col items-center gap-6">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleMenuItemClick(item.id)}
                  className={`text-lg font-medium transition duration-200
                  ${
                    activeSection === item.id
                      ? "text-[#b34bf4]"
                      : "text-gray-300"
                  }
                  hover:text-[#b34bf4]`}
                >
                  {item.label}
                </button>
              </li>
            ))}

            <div className="w-full h-px bg-white/10" />

            <div className="flex gap-6 pt-2">
              <a
                href="https://github.com/itsKanika"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#b34bf4]"
              >
                <FaGithub size={28} />
              </a>

              <a
                href="https://www.linkedin.com/in/kanika-gupta369/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#b34bf4]"
              >
                <FaLinkedin size={26} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;