


import React from "react";

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
    </div>
  );
};

export default App;