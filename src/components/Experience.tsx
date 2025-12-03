import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, Briefcase, Calendar, MapPin, ArrowRight } from "lucide-react";
import Exp1 from "../assets/img2.png";
import Exp2 from "../assets/img3.png";
import Exp3 from "../assets/img1.png";

gsap.registerPlugin(ScrollTrigger);

const Experience: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);
  const headerRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  
  // State for counter animations
  const [counters, setCounters] = useState({
    experience: 0,
    companies: 0,
    industries: 0,
    success: 0,
  });

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 60, rotateX: -20 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
          },
        }
      );

      // Card and image animations - staggered
      cardsRef.current.forEach((card, i) => {
        if (card) {
          const isEven = i % 2 === 0;
          
          // Card animation
          gsap.fromTo(
            card,
            {
              opacity: 0,
              x: isEven ? -80 : 80,
              rotateY: isEven ? 25 : -25,
              y: 40,
            },
            {
              opacity: 1,
              x: 0,
              rotateY: 0,
              y: 0,
              duration: 1,
              ease: "power3.out",
              delay: i * 0.2,
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
              },
            }
          );

          // Image animation
          const image = imagesRef.current[i];
          if (image) {
            gsap.fromTo(
              image,
              {
                opacity: 0,
                x: isEven ? 80 : -80,
                scale: 0.85,
                y: 40,
              },
              {
                opacity: 1,
                x: 0,
                scale: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                delay: i * 0.2 + 0.1,
                scrollTrigger: {
                  trigger: card,
                  start: "top 85%",
                },
              }
            );
          }

          // Card hover animation
          card.addEventListener("mouseenter", () => {
            gsap.to(card, {
              y: -12,
              boxShadow: "0 30px 60px rgba(0, 217, 255, 0.2)",
              duration: 0.3,
            });
          });

          card.addEventListener("mouseleave", () => {
            gsap.to(card, {
              y: 0,
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
              duration: 0.3,
            });
          });
        }
      });

      // Image hover animations
      imagesRef.current.forEach((image) => {
        if (image) {
          image.addEventListener("mouseenter", () => {
            gsap.to(image.querySelector("img"), {
              scale: 1.08,
              duration: 0.4,
            });
          });

          image.addEventListener("mouseleave", () => {
            gsap.to(image.querySelector("img"), {
              scale: 1,
              duration: 0.4,
            });
          });
        }
      });

      // Counter animations for stats
      if (statsRef.current) {
        gsap.to(
          { experience: 0, companies: 0, industries: 0, success: 0 },
          {
            experience: 6,
            companies: 3,
            industries: 4,
            success: 100,
            duration: 2.5,
            ease: "power2.out",
            onUpdate: function () {
              setCounters({
                experience: Math.floor(this.targets()[0].experience),
                companies: Math.floor(this.targets()[0].companies),
                industries: Math.floor(this.targets()[0].industries),
                success: Math.floor(this.targets()[0].success),
              });
            },
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 80%",
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const experiences = [
    {
      title: "Business Analyst",
      company: "Polymech Component Pvt. Ltd",
      location: "Mumbai, India",
      period: "April 2021 – August 2024",
      icon: Briefcase,
      image: Exp1,
      achievements: [
        "Led a cross-functional team, improving operational efficiency by 75% through data-driven process optimization.",
        "Managed dispatch operations with a 100% on-time delivery rate and enhanced interdepartmental communication.",
        "Utilized Tally Prime for financial tracking and accuracy, reducing billing errors.",
        "Conducted market analysis to align marketing initiatives with business goals, increasing product inquiries and engagement.",
      ],
      color: "cyan",
      accentGrad: "from-cyan/20",
    },
    {
      title: "Marketing Strategist",
      company: "Desi Detox",
      location: "Mumbai, India",
      period: "May 2022 – July 2022",
      icon: Award,
      image: Exp2,
      achievements: [
        "Designed and executed data-driven digital campaigns to boost brand visibility and retention.",
        "Created content and video marketing strategies informed by social media analytics.",
        "Supported email marketing and client database segmentation to increase conversion rates.",
      ],
      color: "electric-blue",
      accentGrad: "from-electric-blue/20",
    },
    {
      title: "Co-Founder",
      company: "Aquiaa Handcrafted Meraki",
      location: "India",
      period: "August 2018 – December 2020",
      icon: Briefcase,
      image: Exp3,
      achievements: [
        "Developed a product line of 50+ sulfate-free products, achieving an 85% sales increase within six months.",
        "Managed digital marketing campaigns using audience analytics to grow online reach and brand awareness.",
      ],
      color: "ice-blue",
      accentGrad: "from-ice-blue/20",
    },
  ];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="w-full bg-gradient-to-b from-navy via-dark-blue to-navy py-20 md:py-32 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 right-0 w-96 h-96 rounded-full blur-3xl bg-cyan/5"></div>
        <div className="absolute bottom-40 left-10 w-80 h-80 rounded-full blur-3xl bg-electric-blue/5"></div>
        <div className="absolute top-1/2 left-1/3 w-96 h-96 rounded-full blur-3xl bg-ice-blue/3"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className="mb-24 md:mb-32">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-gradient-to-b from-cyan to-electric-blue rounded-full"></div>
            <span className="font-body text-xs tracking-[0.4em] text-cyan uppercase font-semibold">
              Career Journey
            </span>
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl font-black text-off-white mb-6 leading-tight">
            Professional<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan via-electric-blue to-ice-blue">
              Experience
            </span>
          </h2>
          <p className="text-xl text-light-gray max-w-3xl font-light font-body">
            A journey of growth, innovation, and impact across diverse industries and roles
          </p>
        </div>

        {/* Experience Items */}
        <div className="space-y-24 md:space-y-32">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
              >
                {/* Card - Left on even, Right on odd */}
                <div
                  className={`order-1 ${!isEven && "lg:order-2"}`}
                  ref={(el) => (cardsRef.current[index] = el)}
                >
                  <div className="group relative h-full">
                    {/* Background decorative elements */}
                    <div
                      className={`absolute -inset-6 bg-gradient-to-br ${exp.accentGrad} to-transparent rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    ></div>

                    {/* Main Card */}
                    <div className="relative bg-gradient-to-br from-dark-gray/40 to-dark-gray/20 backdrop-blur-md border border-cyan/20 rounded-2xl p-8 md:p-10 hover:border-cyan/50 transition-all duration-300 overflow-hidden shadow-xl">
                      {/* Card accent gradient */}
                      <div
                        className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${exp.accentGrad} to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                      ></div>

                      <div className="relative z-10">
                        {/* Header with icon */}
                        <div className="flex items-start gap-4 mb-6">
                          <div className={`p-3 rounded-xl bg-${exp.color}/15 border border-${exp.color}/30 flex-shrink-0`}>
                            <Icon className={`w-6 h-6 text-${exp.color}`} />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-heading text-2xl md:text-4xl font-black text-off-white mb-2">
                              {exp.title}
                            </h3>
                            <p className={`font-body text-lg font-bold text-${exp.color}`}>
                              {exp.company}
                            </p>
                          </div>
                        </div>

                        {/* Meta Info with icons */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-8 text-sm text-light-gray font-body">
                          <div className="flex items-center gap-2">
                            <MapPin size={18} className={`text-${exp.color} flex-shrink-0`} />
                            {exp.location}
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar size={18} className={`text-${exp.color} flex-shrink-0`} />
                            {exp.period}
                          </div>
                        </div>

                        {/* Divider */}
                        <div className={`h-px bg-gradient-to-r ${exp.accentGrad} via-transparent to-transparent mb-8`}></div>

                        {/* Achievements */}
                        <div className="space-y-4">
                          {exp.achievements.map((achievement, i) => (
                            <div
                              key={i}
                              className="flex items-start gap-3 group/item"
                            >
                              <ArrowRight
                                size={18}
                                className={`flex-shrink-0 mt-1 text-${exp.color} group-hover/item:translate-x-1 transition-transform`}
                              />
                              <p className="font-body text-base text-light-gray leading-relaxed">
                                {achievement}
                              </p>
                            </div>
                          ))}
                        </div>

                        {/* Bottom accent line */}
                        <div
                          className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${exp.accentGrad} to-transparent w-0 group-hover:w-full transition-all duration-500`}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Image - Right on even, Left on odd */}
                <div
                  className={`order-2 ${!isEven && "lg:order-1"}`}
                  ref={(el) => (imagesRef.current[index] = el)}
                >
                  <div className="group relative">
                    {/* Image background glow */}
                    <div className={`absolute -inset-8 bg-gradient-to-br ${exp.accentGrad} to-transparent rounded-2xl blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`}></div>

                    {/* Image container */}
                    <div className="relative overflow-hidden rounded-2xl border-2 border-cyan/30 shadow-2xl group-hover:border-cyan/60 transition-all duration-300">
                      {/* Decorative corner accents */}
                      <div className="absolute -top-4 -right-4 w-28 h-28 border-2 border-cyan/40 rounded-lg opacity-40 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none z-10"></div>
                      <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-electric-blue/40 rounded-lg opacity-40 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none z-10"></div>

                      {/* Image */}
                      <img
                        src={exp.image}
                        alt={exp.title}
                        className="w-full h-[400px] md:h-[500px] object-cover group-hover:scale-100 scale-100 transition-transform duration-700"
                      />

                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      {/* Experience number badge */}
                      <div className={`absolute top-6 right-6 w-14 h-14 rounded-full bg-${exp.color}/20 border-2 border-${exp.color} flex items-center justify-center z-20 group-hover:scale-110 transition-transform duration-300`}>
                        <span className={`font-heading font-black text-${exp.color} text-xl`}>
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </div>

                    {/* Extra decorative element */}
                    <div className={`absolute inset-0 rounded-2xl border border-${exp.color}/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary Stats Section with Counter Animation */}
        <div ref={statsRef} className="mt-32 md:mt-40 pt-20 md:pt-24 border-t border-cyan/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { 
                label: "Years of Experience", 
                value: `${counters.experience}+`,
                color: "cyan" 
              },
              { 
                label: "Companies", 
                value: counters.companies.toString(),
                color: "electric-blue" 
              },
              { 
                label: "Industries", 
                value: `${counters.industries}+`,
                color: "ice-blue" 
              },
              { 
                label: "Success Rate", 
                value: `${counters.success}%`,
                color: "cyan" 
              },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="group text-center p-6 rounded-xl border border-light-gray/20 hover:border-cyan/40 bg-dark-gray/20 hover:bg-dark-gray/40 transition-all duration-300"
              >
                <div className={`text-3xl md:text-4xl font-black text-${stat.color} font-heading mb-2 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.value}
                </div>
                <p className="text-sm text-light-gray font-body">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;