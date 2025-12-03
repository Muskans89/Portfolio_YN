import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const HeroAlternative: React.FC = () => {
  const nameRef = useRef<HTMLHeadingElement>(null);
  const titleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const letterRef = useRef<HTMLDivElement>(null);
  const shapesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const tl = gsap.timeline();

    // Animate large decorative icon background
    if (letterRef.current) {
      gsap.fromTo(
        letterRef.current,
        { opacity: 0, scale: 0.5, rotation: -15 },
        { opacity: 0.08, scale: 1, rotation: 0, duration: 1.5, ease: "power3.out" }
      );
    }

    // Animate name
    if (nameRef.current) {
      tl.fromTo(
        nameRef.current,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 1, ease: "power3.out" }
      );
    }

    // Animate title
    if (titleRef.current) {
      tl.fromTo(
        titleRef.current,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" },
        "-=0.5"
      );
    }

    // Animate CTA button
    if (ctaRef.current) {
      tl.fromTo(
        ctaRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" },
        "-=0.3"
      );
    }

    // Animate geometric shapes
    shapesRef.current.forEach((shape, i) => {
      if (shape) {
        gsap.fromTo(
          shape,
          { opacity: 0, y: -30, rotation: -45 },
          {
            opacity: 1,
            y: 0,
            rotation: 0,
            duration: 1,
            ease: "elastic.out(1, 0.5)",
            delay: i * 0.2,
          }
        );

        // Floating animation
        gsap.to(shape, {
          y: "+=15",
          rotation: "+=10",
          duration: 3 + i * 0.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
    });
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-dark-bg via-navy to-dark-blue flex items-center px-6 md:px-20 overflow-hidden">
      {/* Large Decorative Icon Background - Data Analytics Themed */}
      <div
        ref={letterRef}
        className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none"
      >
        <svg className="w-96 h-96 text-cyan" fill="currentColor" viewBox="0 0 24 24">
          {/* Analytics/Data Chart Icon */}
          <rect x="2" y="11" width="3" height="9" />
          <rect x="7" y="6" width="3" height="14" />
          <rect x="12" y="3" width="3" height="17" />
          <rect x="17" y="8" width="3" height="12" />
          <circle cx="4" cy="10.5" r="0.5" fill="white" opacity="0.3" />
          <circle cx="9" cy="5.5" r="0.5" fill="white" opacity="0.3" />
          <circle cx="14" cy="2.5" r="0.5" fill="white" opacity="0.3" />
          <circle cx="19" cy="7.5" r="0.5" fill="white" opacity="0.3" />
        </svg>
      </div>

      {/* Geometric Shapes - Like Reference */}
      <div
        ref={(el) => (shapesRef.current[0] = el)}
        className="absolute top-24 left-1/3 w-20 h-20 border-4 border-cyan"
        style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
      />
      <div
        ref={(el) => (shapesRef.current[1] = el)}
        className="absolute top-32 right-1/3 w-16 h-16 border-4 border-electric-blue"
        style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)", transform: "rotate(180deg)" }}
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-3xl">
        {/* Name */}
        <h1
          ref={nameRef}
          className="font-heading text-3xl md:text-7xl font-black text-off-white mb-6 leading-none"
        >
          Yashvi Nagda
        </h1>

        {/* Title */}
        <p
          ref={titleRef}
          className="font-body text-lg md:text-3xl text-light-gray mb-12 italic"
        >
          Business Analyst | Social Media Strategist
        </p>

        {/* CTA Button - Coral/Red like reference */}
        {/* CTA Button */}
      <a
          ref={ctaRef}
          href="#about"
          className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white font-body font-bold text-lg rounded-lg hover:scale-105 hover:shadow-2xl hover:shadow-red-500/50 transition-all duration-300 group"
        >
          Resume 
          <svg
            className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>

      {/* Social Icons - Right Side */}
      <div className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 md:gap-6 z-50">
        
        {/* GitHub */}
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-cyan/50 flex items-center justify-center text-cyan hover:bg-cyan/10 hover:border-cyan hover:scale-110 transition-all duration-300"
          aria-label="GitHub"
        >
          <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-electric-blue/50 flex items-center justify-center text-electric-blue hover:bg-electric-blue/10 hover:border-electric-blue hover:scale-110 transition-all duration-300"
          aria-label="LinkedIn"
        >
          <svg className="w-4 h-4 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>

        {/* Instagram */}
        <a
          href="https://instagram.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-pink-500/50 flex items-center justify-center text-pink-500 hover:bg-pink-500/10 hover:border-pink-500 hover:scale-110 transition-all duration-300"
          aria-label="Instagram"
        >
          <svg className="w-4 h-4 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </a>

        {/* Facebook */}
        <a
          href="https://facebook.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-blue-600/50 flex items-center justify-center text-blue-600 hover:bg-blue-600/10 hover:border-blue-600 hover:scale-110 transition-all duration-300"
          aria-label="Facebook"
        >
          <svg className="w-4 h-4 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </a>

        {/* Email */}
        <a
          href="mailto:your@email.com"
          className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-ice-blue/50 flex items-center justify-center text-ice-blue hover:bg-ice-blue/10 hover:border-ice-blue hover:scale-110 transition-all duration-300"
          aria-label="Email"
        >
          <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="font-body text-sm text-medium-gray">Scroll</span>
        <div className="w-6 h-10 border-2 border-cyan rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-cyan rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroAlternative;