import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

const navItems = ["home", "about", "journey", "projects", "contact"];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const headerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const logoSpanRef = useRef<HTMLSpanElement>(null);
  const navContainerRef = useRef<HTMLDivElement>(null);
  const navLinksRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const underlineRef = useRef<(HTMLSpanElement | null)[]>([]);
  const mobileLinksRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const menuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  /* ============ GSAP INITIAL LOAD ANIMATIONS ============ */
  useEffect(() => {
    const tl = gsap.timeline();

    // Logo animation
    if (logoRef.current) {
      tl.fromTo(
        logoRef.current,
        { x: -30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        0
      );
    }

    // Logo glow effect on load
    if (logoSpanRef.current) {
      tl.to(
        logoSpanRef.current,
        {
          textShadow: "0 0 20px rgba(0, 255, 255, 0.5), 0 0 40px rgba(0, 255, 255, 0.2)",
          duration: 0.6,
        },
        0.3
      );
    }

    // Nav links animation
    const navLinks = navLinksRef.current.filter(
      (link): link is HTMLAnchorElement => link !== null
    );
    if (navLinks.length > 0) {
      tl.fromTo(
        navLinks,
        { opacity: 0, y: -15 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.12,
        },
        0.2
      );
    }

    // CTA button animation
    if (ctaRef.current) {
      tl.fromTo(
        ctaRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.6, ease: "back.out" },
        0.4
      );
    }

    return () => {
      tl.kill();
    };
  }, []);

  /* ============ ENHANCED SCROLL EFFECT ============ */
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;

      if (headerRef.current) {
        const header = headerRef.current as HTMLElement;
        gsap.to(header, {
          backgroundColor: isScrolled
            ? "rgba(10, 10, 15, 0.98)"
            : "rgba(10, 10, 15, 0.6)",
          backdropFilter: isScrolled ? "blur(16px)" : "blur(8px)",
          boxShadow: isScrolled
            ? "0 8px 32px rgba(0, 255, 255, 0.1)"
            : "0 0 0 rgba(0, 0, 0, 0)",
          duration: 0.4,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ============ MOBILE MENU ANIMATION ============ */
  useEffect(() => {
    if (!menuRef.current) return;

    const menu = menuRef.current as HTMLElement;

    if (isOpen) {
      gsap.to(menu, {
        height: "auto",
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      });

      const mobileLinks = mobileLinksRef.current.filter(
        (link): link is HTMLAnchorElement => link !== null
      );
      if (mobileLinks.length > 0) {
        gsap.fromTo(
          mobileLinks,
          { opacity: 0, x: -20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.4,
            stagger: 0.1,
            delay: 0.1,
            ease: "power2.out",
          }
        );
      }
    } else {
      gsap.to(menu, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.inOut",
      });
    }
  }, [isOpen]);

  /* ============ ACTIVE NAV HIGHLIGHT ON SCROLL ============ */
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((id) => {
        const el = document.getElementById(id);
        if (!el) return { id, top: 9999 };

        return {
          id,
          top: el.getBoundingClientRect().top,
        };
      });

      // Find the section closest to the top of viewport
      let visible = sections.reduce((closest, current) => {
        const closestDistance = Math.abs(closest.top);
        const currentDistance = Math.abs(current.top);
        return currentDistance < closestDistance ? current : closest;
      });

      // If we're at the very top (within 300px), always show "home" as active
      if (window.scrollY < 300) {
        visible = sections.find(s => s.id === "home") || visible;
      }

      if (visible && visible.top < 9999) {
        setActiveSection(visible.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ============ DESKTOP NAV LINK HOVER EFFECTS ============ */
  const handleNavHover = (index: number) => {
    // Scale up the active link
    if (navLinksRef.current[index]) {
      gsap.to(navLinksRef.current[index], {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  const handleNavHoverLeave = (index: number) => {
    if (activeSection !== navItems[index]) {
      if (navLinksRef.current[index]) {
        gsap.to(navLinksRef.current[index], {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    }
  };

  /* ============ CTA BUTTON HOVER ANIMATION ============ */
  const handleCtaHover = () => {
    if (ctaRef.current) {
      gsap.to(ctaRef.current, {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out",
      });

      const ctaBg = ctaRef.current.querySelector(".cta-bg") as HTMLElement;
      if (ctaBg) {
        gsap.to(ctaBg, {
          opacity: 1,
          duration: 0.3,
        });
      }

      const ctaShine = ctaRef.current.querySelector(".cta-shine") as HTMLElement;
      if (ctaShine) {
        gsap.to(ctaShine, {
          x: 200,
          duration: 0.6,
          ease: "power2.in",
        });
      }
    }
  };

  const handleCtaHoverLeave = () => {
    if (ctaRef.current) {
      gsap.to(ctaRef.current, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });

      const ctaBg = ctaRef.current.querySelector(".cta-bg") as HTMLElement;
      if (ctaBg) {
        gsap.to(ctaBg, {
          opacity: 0.6,
          duration: 0.3,
        });
      }
    }
  };

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 w-full backdrop-blur-md border-b border-white/5 z-50 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-12 py-4 md:py-6">
        
        {/* ============ LOGO ============ */}
        <a
          ref={logoRef}
          href="#home"
          className="flex items-center gap-2 font-heading font-black cursor-pointer select-none group relative"
          aria-label="Home"
        >
          <div className="relative flex items-center justify-center">
            {/* Background glow effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan/20 via-electric-blue/10 to-transparent blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>

            <span
              ref={logoSpanRef}
              className="text-2xl md:text-3xl text-white font-black tracking-tighter relative z-10"
            >
              YN
            </span>

            {/* Bottom underline on hover */}
            <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan via-electric-blue to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-x-0 group-hover:scale-x-100 origin-left"></div>
          </div>
        </a>

        {/* ============ DESKTOP NAV ============ */}
        <nav
          ref={navContainerRef}
          className="hidden md:flex items-center gap-14 xl:gap-16"
        >
          {navItems.map((item, i) => (
            <a
              key={item}
              href={`#${item}`}
              ref={(el) => (navLinksRef.current[i] = el)}
              onMouseEnter={() => {
                handleNavHover(i);
                setHoveredItem(item);
              }}
              onMouseLeave={() => {
                handleNavHoverLeave(i);
                setHoveredItem(null);
              }}
              className={`
                relative capitalize text-sm font-medium font-body tracking-wide transition-colors duration-300 py-2 px-1
                ${
                  activeSection === item
                    ? "text-white"
                    : "text-white/50 hover:text-white/80"
                }
              `}
            >
              {item}

              {/* Animated underline - shows on hover or active */}
              <span
                ref={(el) => (underlineRef.current[i] = el)}
                className={`
                  absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan via-electric-blue to-transparent
                  transition-all duration-300
                  ${
                    activeSection === item || hoveredItem === item
                      ? "w-full opacity-100"
                      : "w-0 opacity-0"
                  }
                `}
              ></span>
            </a>
          ))}
        </nav>

        {/* ============ DESKTOP CTA BUTTON ============ */}
        <a
          ref={ctaRef}
          href="#contact"
          onMouseEnter={handleCtaHover}
          onMouseLeave={handleCtaHoverLeave}
          className="
            hidden md:flex px-8 py-3 text-sm font-body font-bold tracking-wide
            text-black bg-white
            border border-white/50
            transition-all duration-300
            group relative overflow-hidden
            hover:shadow-lg hover:shadow-white/30
            rounded-lg
          "
        >
          {/* Animated background */}
          <div
            className="cta-bg absolute inset-0 bg-gradient-to-r from-white via-white to-white opacity-60 transition-opacity duration-300"
          ></div>

          {/* Shine effect */}
          <div
            className="cta-shine absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
            style={{ width: "100%", transform: "translateX(-200px)" }}
          ></div>

          {/* Text */}
          <span className="relative z-10">Get in touch</span>

          {/* Arrow icon */}
          <svg
            className="w-4 h-4 ml-2 relative z-10 group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </a>

        {/* ============ MOBILE HAMBURGER ============ */}
        <button
          ref={hamburgerRef}
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10 group"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-[8px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-[8px]" : ""
            }`}
          />
        </button>
      </div>

      {/* ============ MOBILE MENU ============ */}
      <div
        ref={menuRef}
        className="md:hidden overflow-hidden opacity-0 h-0 backdrop-blur-md border-t border-white/5"
      >
        <div className="px-6 py-8 space-y-3">
          {navItems.map((item, i) => (
            <a
              key={item}
              href={`#${item}`}
              ref={(el) => (mobileLinksRef.current[i] = el)}
              onClick={() => setIsOpen(false)}
              className={`
                block py-3.5 px-4 text-sm capitalize font-body font-medium transition-all duration-300 rounded-lg
                border transition-all duration-300
                ${
                  activeSection === item
                    ? "text-white bg-gradient-to-r from-cyan/20 to-electric-blue/20 border-white/30"
                    : "text-white/70 hover:text-white border-white/10 hover:border-white/20 hover:bg-white/5"
                }
              `}
            >
              {item}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="
              block mt-6 text-center px-6 py-3.5 text-sm font-body font-bold
              text-black bg-white border border-white
              transition-all duration-300 rounded-lg
              hover:shadow-lg hover:shadow-white/30 active:scale-95
            "
          >
            Get in touch
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;