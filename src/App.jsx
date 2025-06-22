import React from "react";
import Navbar from "./components/Navbar/NavbarSection";
import Hero from "./components/Hero/HeroSection";
import About from "./components/About/AboutSection";
import Education from "./components/Education/EducationSection";
import Certificate from "./components/Certificate/CertificateSection";
import Contact from "./components/Contact/ContactSection";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Certificate />
      <Contact />
    </div>
  );
};

export default App;
