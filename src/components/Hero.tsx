import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Download} from "lucide-react";
import resumePDF from "../assets/YASHVI_MEHUL_NAGDA_Resume.pdf";

const HeroAlternative: React.FC = () => {
  const nameRef = useRef<HTMLHeadingElement>(null);
  const titleRef = useRef<HTMLParagraphElement>(null);
  const locationRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const letterRef = useRef<HTMLDivElement>(null);
  const shapesRef = useRef<(HTMLDivElement | null)[]>([]);
  const floatingElementsRef = useRef<(HTMLDivElement | null)[]>([]);
  const bgElementsRef = useRef<(HTMLDivElement | null)[]>([]);

  const handleResumeDownload = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const link = document.createElement("a");
    link.href = resumePDF;
    link.download = "Yashvi_Nagda_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const tl = gsap.timeline();

    // Animate large decorative icon background
    if (letterRef.current) {
      gsap.fromTo(
        letterRef.current,
        { opacity: 0, scale: 0.5, rotation: -15 },
        { opacity: 0.05, scale: 1, rotation: 0, duration: 1.5, ease: "power3.out" }
      );

      gsap.to(letterRef.current, {
        y: "+=20",
        rotation: "+=5",
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
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

    // Animate location
    if (locationRef.current) {
      tl.fromTo(
        locationRef.current,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" },
        "-=0.4"
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

    // Animate floating background elements
    floatingElementsRef.current.forEach((element, i) => {
      if (element) {
        gsap.fromTo(
          element,
          { opacity: 0 },
          { opacity: 0.3 + Math.random() * 0.3, duration: 2 + i * 0.3 }
        );

        gsap.to(element, {
          y: `+=${30 + i * 8}`,
          x: `+=${15 - i * 8}`,
          rotation: `+=${25 + i * 15}`,
          duration: 10 + i * 3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
    });

    // Animate background elements
    bgElementsRef.current.forEach((element, i) => {
      if (element) {
        gsap.to(element, {
          y: `+=${15 + i * 5}`,
          rotation: `+=${10 + i * 5}`,
          duration: 6 + i * 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
    });
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-dark-bg via-navy to-dark-blue flex items-center px-4 sm:px-6 md:px-20 overflow-hidden">
      {/* Enhanced Multi-layer Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan/8 via-transparent to-electric-blue/8" />
        <div className="absolute inset-0 bg-gradient-to-tl from-purple/5 via-transparent to-pink-500/5" />

        {/* Animated Gradient Orbs - Creates Depth */}
        <div className="absolute -top-40 -right-40 w-80 h-80 sm:w-96 sm:h-96 rounded-full blur-3xl bg-electric-blue/15 animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 sm:w-96 sm:h-96 rounded-full blur-3xl bg-cyan/15 animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 right-1/4 w-60 h-60 sm:w-80 sm:h-80 rounded-full blur-3xl bg-purple/10 animate-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-1/3 left-1/3 w-64 h-64 sm:w-72 sm:h-72 rounded-full blur-3xl bg-pink-500/8 animate-pulse" style={{ animationDelay: "1.5s" }} />

        {/* Floating Tech Elements - Code & Symbols */}
        <div
          ref={(el) => (floatingElementsRef.current[0] = el)}
          className="absolute top-10 left-2 sm:top-20 sm:left-10 text-cyan/70 text-5xl sm:text-8xl font-bold select-none drop-shadow-[0_0_20px_rgba(34,211,238,0.4)]"
        >
          &lt;/&gt;
        </div>

        <div
          ref={(el) => (floatingElementsRef.current[1] = el)}
          className="absolute bottom-32 right-10 sm:right-20 w-20 h-20 sm:w-28 sm:h-28 border-3 border-electric-blue/60 rounded-lg select-none drop-shadow-[0_0_15px_rgba(0,200,255,0.3)]"
          style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
        />

        <div
          ref={(el) => (floatingElementsRef.current[2] = el)}
          className="hidden sm:block absolute top-1/3 right-1/4 w-40 h-40 rounded-full border-3 border-cyan/50 select-none drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]"
        />

        {/* Data/Analytics Symbols */}
        <div
          ref={(el) => (floatingElementsRef.current[3] = el)}
          className="absolute bottom-1/4 left-1/3 text-electric-blue/60 text-5xl sm:text-7xl select-none drop-shadow-[0_0_15px_rgba(0,200,255,0.3)]"
        >
          ◈
        </div>

        <div
          ref={(el) => (floatingElementsRef.current[4] = el)}
          className="hidden sm:block absolute top-1/2 left-1/4 text-cyan/40 text-8xl select-none font-bold drop-shadow-[0_0_15px_rgba(34,211,238,0.2)]"
        >
          →
        </div>

        {/* Floating Shapes - Layer 2 */}
        <div
          ref={(el) => (bgElementsRef.current[0] = el)}
          className="hidden sm:block absolute top-1/4 right-1/3 w-16 h-16 rounded-full border-2 border-pink-500/40 drop-shadow-[0_0_10px_rgba(236,72,153,0.2)]"
        />

        <div
          ref={(el) => (bgElementsRef.current[1] = el)}
          className="absolute bottom-1/3 right-1/4 w-12 h-12 border-2 border-purple/50 drop-shadow-[0_0_10px_rgba(168,85,247,0.2)]"
          style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
        />

        <div
          ref={(el) => (bgElementsRef.current[2] = el)}
          className="hidden md:block absolute top-2/3 left-1/3 w-20 h-20 rounded-full border-2 border-cyan/40 drop-shadow-[0_0_10px_rgba(34,211,238,0.2)]"
        />

        {/* Chart/Graph & Analytics Elements */}
        <div
          ref={(el) => (bgElementsRef.current[3] = el)}
          className="hidden md:block absolute top-1/3 left-1/4 text-electric-blue/40 text-6xl select-none drop-shadow-[0_0_15px_rgba(0,200,255,0.2)]"
        >
          📊
        </div>

        <div
          ref={(el) => (bgElementsRef.current[4] = el)}
          className="absolute bottom-1/4 right-1/3 text-cyan/30 text-5xl sm:text-7xl select-none drop-shadow-[0_0_15px_rgba(34,211,238,0.2)]"
        >
          ⟡
        </div>

        {/* Additional Geometric Elements */}
        <div className="hidden sm:block absolute top-2/3 right-1/3 w-10 h-10 border-2 border-dashed border-cyan/20 rounded-full" />
        <div className="absolute bottom-1/2 left-1/4 w-8 h-8 border-2 border-electric-blue/15" style={{ clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)" }} />

        {/* Animated Lines/Connections */}
        <svg
          className="absolute inset-0 w-full h-full opacity-10"
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="10%" y1="20%" x2="40%" y2="60%" stroke="cyan" strokeWidth="1" opacity="0.5" />
          <line x1="60%" y1="30%" x2="90%" y2="70%" stroke="electric-blue" strokeWidth="1" opacity="0.5" />
          <line x1="20%" y1="80%" x2="70%" y2="40%" stroke="purple" strokeWidth="1" opacity="0.4" />
          <circle cx="25%" cy="45%" r="2" fill="cyan" opacity="0.6" />
          <circle cx="75%" cy="55%" r="2" fill="electric-blue" opacity="0.6" />
          <circle cx="45%" cy="60%" r="1.5" fill="purple" opacity="0.5" />
        </svg>

        {/* Glowing Particles */}
        <div className="absolute top-20 right-1/3 w-2 h-2 rounded-full bg-cyan/50 blur-sm animate-pulse" />
        <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 rounded-full bg-electric-blue/40 blur-sm animate-pulse" style={{ animationDelay: "0.5s" }} />
        <div className="absolute top-1/2 right-1/4 w-2 h-2 rounded-full bg-purple/40 blur-sm animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/3 left-1/2 w-1 h-1 rounded-full bg-pink-500/30 blur-sm animate-pulse" style={{ animationDelay: "1.5s" }} />
      </div>

      {/* Large Decorative Icon Background */}
      <div
        ref={letterRef}
        className="hidden sm:block absolute -right-20 sm:right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none drop-shadow-2xl"
      >
        <svg className="w-64 h-64 sm:w-96 sm:h-96 text-cyan drop-shadow-[0_0_30px_rgba(34,211,238,0.4)]" fill="currentColor" viewBox="0 0 24 24">
          {/* Analytics/Data Chart Icon */}
          <rect x="2" y="11" width="3" height="9" opacity="1" />
          <rect x="7" y="6" width="3" height="14" opacity="1" />
          <rect x="12" y="3" width="3" height="17" opacity="1" />
          <rect x="17" y="8" width="3" height="12" opacity="1" />
          <circle cx="4" cy="10.5" r="0.5" fill="white" opacity="0.6" />
          <circle cx="9" cy="5.5" r="0.5" fill="white" opacity="0.6" />
          <circle cx="14" cy="2.5" r="0.5" fill="white" opacity="0.6" />
          <circle cx="19" cy="7.5" r="0.5" fill="white" opacity="0.6" />
        </svg>
      </div>

      {/* Geometric Shapes */}
      <div
        ref={(el) => (shapesRef.current[0] = el)}
        className="absolute top-24 left-1/3 w-16 h-16 sm:w-20 sm:h-20 border-3 sm:border-4 border-cyan/60"
        style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
      />
      <div
        ref={(el) => (shapesRef.current[1] = el)}
        className="hidden sm:block absolute top-32 right-1/3 w-16 h-16 border-4 border-electric-blue/60"
        style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)", transform: "rotate(180deg)" }}
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-3xl w-full pt-16 sm:pt-0 pr-16 sm:pr-0">
        {/* Name */}
        <h1
          ref={nameRef}
          className="font-heading text-3xl sm:text-5xl md:text-6xl font-black text-off-white mb-3 sm:mb-6 leading-tight"
        >
          Yashvi Nagda
        </h1>

        {/* Title */}
        <p
          ref={titleRef}
          className="font-body text-sm sm:text-lg md:text-2xl text-light-gray mb-4 sm:mb-8 italic"
        >
          Business Analyst | Social Media Strategist
        </p>
        <p
  ref={nameRef}
  className="
    font-body 
    text-xs 
    sm:text-base 
    md:text-lg 
    font-normal 
    text-light-gray/80 
    leading-5 
    sm:leading-relaxed 
    mb-4 
    sm:mb-7 
    max-w-full 
    sm:max-w-xl
  "
>
  Turning data into insights and ideas into impact. Helping brands grow
  through analytics-driven decisions and strategic digital presence.
</p>

      
        {/* CTA Buttons */}
        <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
          {/* Contact Button */}
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 sm:gap-3 px-4 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-cyan-500 to-electric-blue text-white font-body font-bold text-xs sm:text-lg rounded-lg hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/60 transition-all duration-300 group cursor-pointer active:scale-95 border border-cyan-400/30 hover:border-cyan-300"
          >
            <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="hidden sm:inline">Contact</span>
          </a>

          {/* Resume Button */}
          <a
            ref={ctaRef}
            onClick={handleResumeDownload}
            href={resumePDF}
            className="inline-flex items-center gap-1.5 sm:gap-3 px-4 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-red-500 via-red-600 to-orange-500 text-white font-body font-bold text-xs sm:text-lg rounded-lg hover:scale-110 hover:shadow-2xl hover:shadow-red-500/70 transition-all duration-300 group cursor-pointer active:scale-95 border border-red-400/30 hover:border-red-300"
          >
            <span>Resume</span>
            <Download className="w-4 h-4 sm:w-6 sm:h-6 group-hover:-translate-y-1 group-hover:scale-110 transition-all duration-300" />
          </a>
        </div>
      </div>

      {/* Social Icons - Right Side - Responsive */}
      <div className="fixed right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3 sm:gap-5 md:gap-7 z-50">
        {/* GitHub */}
        <a
          href="https://github.com/YashviNagda20"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full border-2 border-cyan/70 flex items-center justify-center text-cyan hover:bg-cyan/20 hover:border-cyan hover:scale-125 hover:shadow-lg hover:shadow-cyan/60 transition-all duration-300 drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]"
          aria-label="GitHub"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/yashvi-nagda"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full border-2 border-electric-blue/70 flex items-center justify-center text-electric-blue hover:bg-electric-blue/20 hover:border-electric-blue hover:scale-125 hover:shadow-lg hover:shadow-electric-blue/60 transition-all duration-300 drop-shadow-[0_0_15px_rgba(0,200,255,0.3)]"
          aria-label="LinkedIn"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/yashu_nagda?igsh=NHhuOXYzOWs4dHd4"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full border-2 border-pink-500/70 flex items-center justify-center text-pink-500 hover:bg-pink-500/20 hover:border-pink-500 hover:scale-125 hover:shadow-lg hover:shadow-pink-500/60 transition-all duration-300 drop-shadow-[0_0_15px_rgba(236,72,153,0.3)]"
          aria-label="Instagram"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/Yashvi20081999"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full border-2 border-blue-600/70 flex items-center justify-center text-blue-600 hover:bg-blue-600/20 hover:border-blue-600 hover:scale-125 hover:shadow-lg hover:shadow-blue-600/60 transition-all duration-300 drop-shadow-[0_0_15px_rgba(37,99,235,0.3)]"
          aria-label="Facebook"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </a>

        {/* Email */}
        <a
          href="mailto:yashvinagda20@gmail.com"
          className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full border-2 border-ice-blue/70 flex items-center justify-center text-ice-blue hover:bg-ice-blue/20 hover:border-ice-blue hover:scale-125 hover:shadow-lg hover:shadow-ice-blue/60 transition-all duration-300 drop-shadow-[0_0_15px_rgba(173,216,230,0.3)]"
          aria-label="Email"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="font-body text-xs sm:text-sm text-medium-gray">Scroll</span>
        <div className="w-6 h-10 border-2 border-cyan rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-cyan rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroAlternative;