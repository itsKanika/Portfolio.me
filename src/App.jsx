


// import React from "react";

// import Navbar from "./components/navbar/navbar";
// import About from "./components/About/About";
// import Contact from "./components/contact/Contact";
// import Education from "./components/education/education";
// import Experience from "./components/experience/experience";
// import Work from "./components/work/work";
// import Footer from "./components/footer/footer";
// import Skills from "./components/skills/skills";
// import StarsBackground from "./components/StarBackground/StarsBackground";

// import Hero from "./components/Hero/Hero";


// const App = () => {
//   return (
//     <div className="relative min-h-screen overflow-x-hidden">
//       <StarsBackground />
//       <Navbar />
//        <Hero />

//       <main className="relative z-10">
//         <About />
      
//         <Skills />
//         <Experience />
//         <Work />
//         <Education />
//         <Contact />
//         <Footer />
//       </main>
//     </div>
//   );
// };

// export default App;

import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/navbar/navbar";
import About from "./components/About/About";
import Contact from "./components/contact/Contact";
import Education from "./components/education/education";
import Experience from "./components/experience/experience";
import Work from "./components/work/work";
import Footer from "./components/footer/footer";
import Skills from "./components/skills/skills";
import StarsBackground from "./components/StarBackground/StarsBackground";
import Hero from "./components/Hero/Hero";

const App = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <StarsBackground />

      <Navbar />
      <Hero />

      <main className="relative z-10">
        <About />
        <Skills />
        <Experience />
        <Work />
        <Education />
        <Contact />
        <Footer />
      </main>

      {/* Global Toast Notifications */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="dark"
        style={{
          zIndex: 999999,
          top: "90px",
        }}
      />
    </div>
  );
};

export default App;