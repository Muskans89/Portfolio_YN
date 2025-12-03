import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  ExternalLink,
  Github,
  Code2,
  Zap,
  Sparkles,
} from "lucide-react";
import Project1 from "../assets/project1.jpg";
import Project2 from "../assets/project2.jpg";

gsap.registerPlugin(ScrollTrigger);

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
          },
        }
      );

      // Card animations with stagger
      cardsRef.current.forEach((card, i) => {
        if (card) {
          gsap.fromTo(
            card,
            {
              opacity: 0,
              y: 80,
              rotateX: 20,
            },
            {
              opacity: 1,
              y: 0,
              rotateX: 0,
              duration: 1,
              ease: "power3.out",
              delay: i * 0.2,
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
              },
            }
          );

          // Image hover effect
          const img = card.querySelector("img");
          if (img) {
            card.addEventListener("mouseenter", () => {
              gsap.to(img, {
                scale: 1.1,
                duration: 0.5,
                ease: "power2.out",
              });
              gsap.to(card.querySelector(".overlay"), {
                opacity: 1,
                duration: 0.3,
              });
            });

            card.addEventListener("mouseleave", () => {
              gsap.to(img, {
                scale: 1,
                duration: 0.5,
                ease: "power2.out",
              });
              gsap.to(card.querySelector(".overlay"), {
                opacity: 0,
                duration: 0.3,
              });
            });
          }
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const projects = [
    {
      id: 1,
      title: "Project Alpha",
      subtitle: "Industrial IoT Solution",
      description:
        "Designed and developed a comprehensive solution for real-time monitoring and data collection. This project demonstrates proficiency in full-stack development with cloud integration, real-time synchronization, and scalable architecture.",
      image: Project1,
      role: "Lead Developer",
      year: "2024",
      technologies: ["Technology One", "Technology Two", "Technology Three"],
      achievements: [
        "Achievement 1 with measurable impact",
        "Achievement 2 demonstrating technical skills",
        "Achievement 3 showing innovation",
      ],
      primaryColor: "cyan",
      stats: ["1000+ Daily", "99.8% Uptime", "Real-time"],
      links: [
        { icon: ExternalLink, label: "Live Demo", href: "#" },
        { icon: Code2, label: "Documentation", href: "#" },
      ],
    },
    {
      id: 2,
      title: "Project Beta",
      subtitle: "Analytics & Visualization Platform",
      description:
        "Built a comprehensive platform for data analysis and visualization. This project showcases expertise in creating user-friendly interfaces, advanced data processing, and interactive dashboards that drive business insights.",
      image: Project2,
      role: "Full Stack Developer",
      year: "2024",
      technologies: ["Technology Four", "Technology Five", "Technology Six"],
      achievements: [
        "Achievement A with proven results",
        "Achievement B showing scalability",
        "Achievement C demonstrating user impact",
      ],
      primaryColor: "electric-blue",
      stats: ["50+ Users", "500+ Reports", "2.3s Speed"],
      links: [
        { icon: ExternalLink, label: "View Project", href: "#" },
        { icon: Github, label: "Source Code", href: "#" },
      ],
    },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="w-full bg-gradient-to-b from-navy via-dark-blue to-navy py-20 md:py-32 relative overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 rounded-full blur-3xl bg-cyan/5"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 rounded-full blur-3xl bg-electric-blue/5"></div>
        <div className="absolute top-1/2 left-1/3 w-80 h-80 rounded-full blur-3xl bg-ice-blue/3"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div ref={headerRef} className="mb-20 md:mb-28">
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="text-cyan w-5 h-5" />
            <span className="font-body text-s tracking-[0.4em] text-cyan uppercase font-semibold">
              Portfolio
            </span>
          </div>

          <div className="max-w-3xl">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-off-white mb-6 leading-tight">
              Showcase
            </h2>
            <p className="text-xl text-light-gray font-light font-body">
              A collection of projects that showcase technical expertise, creative problem-solving, and impact-driven development. Each project represents a unique challenge solved with innovation and precision.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-10">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group"
            >
              {/* Main Card Container */}
              <div className="relative h-full flex flex-col rounded-3xl overflow-hidden border border-cyan/20 hover:border-cyan/50 transition-all duration-300 bg-gradient-to-br from-dark-gray/40 to-dark-gray/10 backdrop-blur-md shadow-xl hover:shadow-2xl hover:shadow-cyan/10">
                {/* Image Section */}
                <div className="relative w-full h-64 md:h-80 overflow-hidden bg-dark-gray">
                  {/* Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Overlay */}
                  <div className="overlay absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent opacity-0 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <div className="flex items-center gap-3">
                      <ExternalLink className="text-cyan w-5 h-5" />
                      <span className="text-cyan font-body font-semibold text-sm">
                        Explore Project
                      </span>
                    </div>
                  </div>

                  {/* Top Badge */}
                  <div
                    className={`absolute top-4 right-4 px-4 py-2 rounded-full bg-${project.primaryColor}/20 border border-${project.primaryColor}/40 z-20 flex items-center gap-2`}
                  >
                    <Zap
                      className={`text-${project.primaryColor} w-4 h-4`}
                    />
                    <span
                      className={`text-${project.primaryColor} text-xs font-bold font-body`}
                    >
                      {project.year}
                    </span>
                  </div>

                  {/* Corner accent */}
                  <div
                    className={`absolute -bottom-2 -right-2 w-32 h-32 border-2 border-${project.primaryColor}/20 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300`}
                  ></div>
                </div>

                {/* Content Section */}
                <div className="flex-grow flex flex-col p-6 md:p-8">
                  {/* Title & Subtitle */}
                  <div className="mb-6">
                    <h3
                      className={`font-heading text-2xl md:text-3xl font-black text-off-white mb-2 group-hover:text-${project.primaryColor} transition-colors duration-300`}
                    >
                      {project.title}
                    </h3>
                    <p
                      className={`font-body text-base font-semibold text-${project.primaryColor}`}
                    >
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-light-gray text-sm leading-relaxed mb-6 font-body">
                    {project.description}
                  </p>

                  {/* Role & Year */}
                  <div className="flex items-center gap-2 mb-6 text-xs text-light-gray font-body">
                    <Code2 className={`text-${project.primaryColor} w-4 h-4`} />
                    <span>{project.role}</span>
                  </div>

                  {/* Stats - Horizontal */}
                  <div className="grid grid-cols-3 gap-3 mb-6 py-4 border-y border-cyan/20">
                    {project.stats.map((stat, i) => (
                      <div key={i} className="text-center">
                        <div
                          className={`text-lg font-black text-${project.primaryColor} font-heading`}
                        >
                          {stat.split(" ")[0]}
                        </div>
                        <p className="text-xs text-light-gray font-body mt-1">
                          {stat.split(" ").slice(1).join(" ")}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="font-heading text-xs uppercase tracking-wider text-off-white mb-3 font-semibold">
                      Key Highlights
                    </h4>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-xs text-light-gray font-body"
                        >
                          <ArrowRight
                            className={`text-${project.primaryColor} w-3 h-3 flex-shrink-0 mt-1`}
                          />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-heading text-xs uppercase tracking-wider text-off-white mb-3 font-semibold">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className={`px-3 py-1 text-xs font-semibold rounded-lg bg-${project.primaryColor}/10 text-${project.primaryColor} border border-${project.primaryColor}/30 font-body hover:bg-${project.primaryColor}/20 transition-all duration-300`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons - Auto margin top for sticky bottom */}
                  <div className="mt-auto pt-4 flex gap-3">
                    {project.links.map((link, i) => {
                      const Icon = link.icon;
                      return (
                        <a
                          key={i}
                          href={link.href}
                          className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-${project.primaryColor}/10 border border-${project.primaryColor}/30 text-${project.primaryColor} font-body font-semibold text-sm hover:bg-${project.primaryColor}/20 hover:border-${project.primaryColor}/60 transition-all duration-300`}
                        >
                          <Icon className="w-4 h-4" />
                          <span className="hidden sm:inline">{link.label}</span>
                        </a>
                      );
                    })}
                  </div>

                  {/* Bottom accent line */}
                  <div
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-${project.primaryColor} to-transparent w-0 group-hover:w-full transition-all duration-500`}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-24 md:mt-32 pt-20 md:pt-24 border-t border-cyan/20">
          <div className="max-w-3xl">
            <h3 className="font-heading text-3xl md:text-4xl font-black text-off-white mb-6">
              Have an Idea?
            </h3>
            <p className="font-body text-lg text-light-gray mb-8 leading-relaxed">
              Whether you're looking to build something innovative, optimize existing systems, or explore new possibilities, I'm ready to collaborate. Let's create something impactful together.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-heading font-bold text-navy bg-cyan hover:bg-electric-blue transition-all duration-300 group shadow-lg hover:shadow-2xl hover:shadow-cyan/20"
            >
              Get In Touch
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;