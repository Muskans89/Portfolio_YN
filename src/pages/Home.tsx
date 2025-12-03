import React, { useState } from "react";
import TypingText from "../components/Typing";
import Header from "../components/Header";
import About from "../components/Hero";
import About2 from "../components/About2";
import About3 from "../components/About3";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import JourneySection from "../components/JourneySection";
import Projects from "../components/Project";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
const Home: React.FC = () => {
  const [typingDone, setTypingDone] = useState(false);

  if (!typingDone) {
    // Show only typing intro fullscreen
    return (
      <section className="min-h-screen flex items-center justify-center bg-black text-white">
        <TypingText
          text="Yashvi Nagda"
          speed={180}
          onComplete={() => setTypingDone(true)}
        />
      </section>
    );
  }

  // After typing done, show Header + About + main content
  return (
    <>
      <Header />
      <main className="pt-20 bg-black text-white min-h-screen px-6 md:px-20">
        <About />
        <About2/>
        <About3/>
        <Education/>
        <Experience/>
        <Skills/>
         <JourneySection/>
         <Projects/>
         <Contact/>
       <Footer/>

        
        
        {/* Add other sections like Projects, Contact here */}
      </main>
    </>
  );
};

export default Home;
