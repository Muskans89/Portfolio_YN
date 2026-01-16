import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutWithHighlights: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current) return;

    // Animate all children elements
    gsap.fromTo(
      contentRef.current.children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      }
    );
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen bg-black flex items-center justify-center px-6 md:px-20 py-20"
    >
      <div ref={contentRef} className="max-w-6xl w-full">
        {/* Main Introduction */}
        <div className="mb-16">
         

          <p className="font-body text-xl md:text-2xl text-light-gray leading-relaxed max-w-4xl">
            A <span className="text-off-white font-semibold">Business Analyst</span> passionate 
            about <span className="text-cyan">social media marketing</span> and creating a bridge 
            between <span className="text-electric-blue">data</span> and{" "}
            <span className="text-electric-blue">marketing strategy</span>. I use analytical tools 
            and insights to help businesses grow by transforming raw data into meaningful marketing actions.
          </p>
        </div>

        {/* Highlight Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1: Social Media Marketing */}
          <div className="bg-dark-gray/30 backdrop-blur-sm border border-cyan/20 rounded-xl p-6 hover:border-cyan hover:bg-dark-gray/50 transition-all duration-300">
            <div className="w-14 h-14 bg-cyan/10 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
            </div>
            <h3 className="font-heading text-xl font-bold text-off-white mb-2">
              Social Media Marketing
            </h3>
            <p className="font-body text-sm text-light-gray">
              Crafting data-driven social media strategies that engage audiences and drive business growth.
            </p>
          </div>

          {/* Card 2: Data Analysis */}
          <div className="bg-dark-gray/30 backdrop-blur-sm border border-electric-blue/20 rounded-xl p-6 hover:border-electric-blue hover:bg-dark-gray/50 transition-all duration-300">
            <div className="w-14 h-14 bg-electric-blue/10 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-electric-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="font-heading text-xl font-bold text-off-white mb-2">
              Data Analysis
            </h3>
            <p className="font-body text-sm text-light-gray">
              Transforming raw data into actionable insights using advanced analytical tools and techniques.
            </p>
          </div>

          {/* Card 3: Marketing Strategy */}
          <div className="bg-dark-gray/30 backdrop-blur-sm border border-ice-blue/20 rounded-xl p-6 hover:border-ice-blue hover:bg-dark-gray/50 transition-all duration-300">
            <div className="w-14 h-14 bg-ice-blue/10 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-ice-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="font-heading text-xl font-bold text-off-white mb-2">
              Marketing Strategy
            </h3>
            <p className="font-body text-sm text-light-gray">
              Bridging data and marketing to create comprehensive strategies that deliver real results.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center md:text-left">
        
        </div>
      </div>
      
    </section>
  );
};

export default AboutWithHighlights;