import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, Calendar, Building2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Education: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Header animation
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 80%",
            },
          }
        );
      }

      // Education items animation
      itemsRef.current.forEach((item, i) => {
        if (item) {
          gsap.fromTo(
            item,
            { opacity: 0, x: -40, y: 30 },
            {
              opacity: 1,
              x: 0,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
              delay: i * 0.15,
              scrollTrigger: {
                trigger: item,
                start: "top 85%",
              },
            }
          );

          // Hover animation setup
          item.addEventListener("mouseenter", () => {
            gsap.to(item, {
              x: 10,
              duration: 0.3,
              overwrite: "auto",
            });
          });

          item.addEventListener("mouseleave", () => {
            gsap.to(item, {
              x: 0,
              duration: 0.3,
              overwrite: "auto",
            });
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const education = [
    {
      degree: "MSc, Business Analytics",
      institution: "Hult International Business School, Boston, USA",
      year: "2024-2025",
      highlight: true,
      icon: Award,
    },
    {
      degree: "MCom, Business Management",
      institution: "Somaiya University, Mumbai, India",
      year: "2020-2022",
      icon: Building2,
    },
    {
      degree: "MBA, Business Administration & Management",
      program: "Exchange Program",
      institution: "Saint Martin's University, Washington, USA",
      year: "2022",
      icon: Award,
    },
    {
      degree: "BCom, Financial Accounting & Auditing",
      institution: "Mumbai University, India",
      year: "2017-2020",
      icon: Building2,
    },
  ];

  return (
    <section
      id="education"
      ref={sectionRef}
      className="w-full px-4 sm:px-8 lg:px-20 py-16 md:py-24 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div ref={headerRef} className="mb-14 md:mb-18">
          <span className="font-body text-xs tracking-[0.3em] text-cyan uppercase mb-3 block">
            Academic Background
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl md:text-5xl font-bold text-navy mb-4">
            Education
          </h2>
          <div className="w-16 h-1 bg-cyan"></div>
        </div>

        {/* Education Timeline */}
        <div className="space-y-6 md:space-y-8">
          {education.map((edu, index) => {
            return (
              <div
                key={index}
                ref={(el) => (itemsRef.current[index] = el)}
                className={`relative pl-10 md:pl-12 border-l-2 pb-6 hover:border-opacity-100 transition-all duration-300 group cursor-pointer ${
                  edu.highlight ? "border-cyan" : "border-electric-blue/40"
                } hover:border-cyan`}
              >
                {/* Timeline Dot with Icon */}
                <div
                  className={`absolute -left-[13px] top-1 w-6 h-6 rounded-full flex items-center justify-center text-xs transition-all duration-300 ${
                    edu.highlight
                      ? "bg-cyan text-navy shadow-lg shadow-cyan/30"
                      : "bg-electric-blue text-white group-hover:bg-cyan group-hover:text-navy"
                  }`}
                >
                  <span className="font-bold">✓</span>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  {/* Degree */}
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-navy group-hover:text-cyan transition-colors duration-300">
                    {edu.degree}
                  </h3>

                  {/* Program (if exists) */}
                  {edu.program && (
                    <p className="font-body text-sm text-electric-blue italic">
                      {edu.program}
                    </p>
                  )}

                  {/* Institution */}
                  <div className="flex items-start gap-2">
                    <Building2 className="text-medium-gray flex-shrink-0 mt-1" size={18} />
                    <p className="font-body text-base text-steel-blue">
                      {edu.institution}
                    </p>
                  </div>

                  {/* Year Badge */}
                  <div className="flex items-center gap-2 pt-1">
                    <Calendar className="text-medium-gray" size={16} />
                    <span
                      className={`text-sm font-medium px-3 py-1 rounded-full border transition-all duration-300 ${
                        edu.highlight
                          ? "bg-cyan/10 text-cyan border-cyan/30 group-hover:bg-cyan/20"
                          : "bg-electric-blue/10 text-electric-blue border-electric-blue/30 group-hover:bg-electric-blue/20"
                      }`}
                    >
                      {edu.year}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div className="mt-14 md:mt-18 pt-8 border-t border-navy/10 text-center">
          <p className="font-body text-base text-medium-gray leading-relaxed">
            Specialized in <span className="text-cyan font-semibold">Business Analytics</span>,{" "}
            <span className="text-electric-blue font-semibold">Management</span>, and{" "}
            <span className="text-ice-blue font-semibold">Financial Strategy</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;