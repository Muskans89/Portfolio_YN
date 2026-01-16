import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ApproachImproved: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current) return;

    // Animate all children on scroll
    gsap.fromTo(
      contentRef.current.children,
      { opacity: 0, y: 40 },
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
      id="approach"
      ref={sectionRef}
      className="w-full px-4 sm:px-8 lg:px-20 py-20 md:py-32 bg-gradient-to-b from-black via-dark-blue to-black"
    >
      <div ref={contentRef} className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="mb-16 md:mb-20">
          <span className="font-body text-xs tracking-[0.3em] text-cyan uppercase">
            My Approach
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-6xl font-bold text-off-white mt-4 mb-6">
            From Data to Impact
          </h2>
          <div className="w-20 h-1 bg-cyan"></div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 mb-16 md:mb-24">
          {/* Left: Visual Elements (Icons) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {/* Card 1 */}
            <div className="bg-dark-gray/30 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-cyan/20 hover:border-cyan hover:bg-dark-gray/50 transition-all duration-300">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-cyan/10 rounded-full flex items-center justify-center mb-4 md:mb-6">
                <svg className="w-7 h-7 md:w-8 md:h-8 text-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-heading text-base md:text-lg font-bold text-off-white mb-2">Data Analysis</h3>
              <p className="font-body text-xs md:text-sm text-light-gray">Transforming raw data into actionable insights</p>
            </div>

            {/* Card 2 */}
            <div className="bg-dark-gray/30 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-electric-blue/20 hover:border-electric-blue hover:bg-dark-gray/50 transition-all duration-300 sm:mt-8">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-electric-blue/10 rounded-full flex items-center justify-center mb-4 md:mb-6">
                <svg className="w-7 h-7 md:w-8 md:h-8 text-electric-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
              <h3 className="font-heading text-base md:text-lg font-bold text-off-white mb-2">Social Strategy</h3>
              <p className="font-body text-xs md:text-sm text-light-gray">Creating campaigns that connect and engage</p>
            </div>

            {/* Card 3 */}
            <div className="bg-dark-gray/30 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-ice-blue/20 hover:border-ice-blue hover:bg-dark-gray/50 transition-all duration-300">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-ice-blue/10 rounded-full flex items-center justify-center mb-4 md:mb-6">
                <svg className="w-7 h-7 md:w-8 md:h-8 text-ice-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="font-heading text-base md:text-lg font-bold text-off-white mb-2">Growth Focused</h3>
              <p className="font-body text-xs md:text-sm text-light-gray">Driving measurable business results</p>
            </div>

            {/* Card 4 */}
            <div className="bg-dark-gray/30 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-cyan/20 hover:border-cyan hover:bg-dark-gray/50 transition-all duration-300 sm:mt-8">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-cyan/10 rounded-full flex items-center justify-center mb-4 md:mb-6">
                <svg className="w-7 h-7 md:w-8 md:h-8 text-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-heading text-base md:text-lg font-bold text-off-white mb-2">Strategic Thinking</h3>
              <p className="font-body text-xs md:text-sm text-light-gray">Bridging data with marketing goals</p>
            </div>
          </div>

          {/* Right: Intro Text */}
          <div className="flex flex-col justify-center">
            <p className="font-body text-lg sm:text-xl md:text-2xl leading-relaxed text-light-gray mb-6">
              It all begins with <span className="font-bold text-cyan">insights</span>. Maybe you want to grow your business,
              optimize your campaigns, or turn data into meaningful strategy.
            </p>
            <p className="font-body text-lg sm:text-xl md:text-2xl leading-relaxed text-light-gray">
              Whatever it is, the way you use data to understand, engage, and
              inspire can make all the difference — and that's where I step in.
            </p>
          </div>
        </div>

        {/* Bottom: Dream It + Build It */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 lg:gap-20">
          {/* Dream It */}
          <div className="group">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-cyan rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-black font-heading font-bold text-base md:text-lg">01</span>
              </div>
              <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-off-white">
                DREAM IT
              </h3>
            </div>
            <p className="font-body text-base md:text-lg text-light-gray leading-relaxed">
              Turn your ideas into action, your data into stories, and your
              campaigns into results. I help brands understand their audience,
              make smarter decisions, and grow — combining creativity with
              analytics to build strategies that work in the real world.
            </p>
          </div>

          {/* Build It */}
          <div className="group">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-electric-blue rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-black font-heading font-bold text-base md:text-lg">02</span>
              </div>
              <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-off-white">
                BUILD IT
              </h3>
            </div>
            <p className="font-body text-base md:text-lg text-light-gray leading-relaxed">
              Start where you are. I turn data into action, campaigns into growth,
              and insights into meaningful impact. Your story — and your strategy —
              evolves, adapts, and grows. And that is exactly how progress happens.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachImproved;