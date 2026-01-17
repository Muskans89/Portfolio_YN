import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  ExternalLink,
  Code2,
  Zap,
  Sparkles,
} from "lucide-react";
import WorldHappinessImg from "../assets/project1.jpg";
import H1BDashboardImg from "../assets/project2.jpg";

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
      title: "World Happiness Index Dashboard",
      subtitle: "Interactive Global Wellbeing Analytics",
      description:
        "Built a comprehensive Power BI dashboard analyzing 9 years of World Happiness Report data across 171 countries and 11 regions. This project transforms complex global wellbeing data into actionable insights through interactive visualizations, predictive analytics, and geospatial mapping.",
      image: WorldHappinessImg,
      role: "Data Analyst & Dashboard Developer",
      year: "2024",
      technologies: ["Microsoft Power BI", "DAX", "Power Query", "Data Analysis"],
      achievements: [
        "Created 5-page interactive dashboard covering overview, geographic, analytics, forecasting, and tabular views",
        "Analyzed 171 countries across 11 major regions from 2015-2023 with 7 key KPIs",
        "Implemented predictive models forecasting happiness scores to stabilize at 5.5 by 2028",
        "Designed correlation analysis revealing wealth paradox and regional development patterns",
      ],
      primaryColor: "cyan",
      stats: ["171 Countries", "11 Regions", "2015-2023"],
      links: [
        { icon: ExternalLink, label: "Live Dashboard", href: "https://ukulele-fife-8zz7.squarespace.com/portfolio-2/project-one-ephnc-lkt8b" },
        { icon: Code2, label: "Details", href: "#" },
      ],
    },
    {
      id: 2,
      title: "H1B Job Data Analysis 2024",
      subtitle: "Employment Trends & Wage Analytics Dashboard",
      description:
        "Developed a comprehensive Power BI analytics platform analyzing H1B visa employment trends across the United States for 2024. This project provides actionable insights into job market patterns, wage distributions, geographic opportunities, and strategic workforce planning intelligence for employers and job seekers.",
      image: H1BDashboardImg,
      role: "Business Intelligence Developer",
      year: "2024",
      technologies: ["Microsoft Power BI", "DAX", "Power Query", "SQL"],
      achievements: [
        "Analyzed 561,040 H1B applications from 65,910 unique employers across all 55 US states and territories",
        "Implemented wage forecasting models predicting steady growth through 2030 with 99.55K median wage",
        "Created interactive state-level analysis revealing California dominance with 102,108 applications (18.2%)",
        "Built comprehensive employer directory with searchable company database and contact information",
        "Designed dynamic filtering by job title, pay unit (Bi-Weekly/Hourly/Monthly/Weekly/Year), and location",
      ],
      primaryColor: "electric-blue",
      stats: ["561K Applications", "65.9K Employers", "55 States"],
      links: [
        { icon: ExternalLink, label: "View Project", href: "https://ukulele-fife-8zz7.squarespace.com/portfolio-2/project-two-llrgk-rtzma" },
        { icon: Code2, label: "Dashboard", href: "#" },
      ],
    },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="w-full bg-gradient-to-b from-navy via-dark-blue to-navy py-16 sm:py-20 md:py-32 relative overflow-hidden px-4 sm:px-6"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 rounded-full blur-3xl bg-cyan/5"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 rounded-full blur-3xl bg-electric-blue/5"></div>
        <div className="absolute top-1/2 left-1/3 w-80 h-80 rounded-full blur-3xl bg-ice-blue/3"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div ref={headerRef} className="mb-16 sm:mb-20 md:mb-28">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <Sparkles className="text-cyan w-4 h-4 sm:w-5 sm:h-5" />
            <span className="font-body text-xs sm:text-sm tracking-[0.4em] text-cyan uppercase font-semibold">
              Portfolio
            </span>
          </div>

          <div className="max-w-3xl">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-off-white mb-4 sm:mb-6 leading-tight">
              Featured Projects
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-light-gray font-light font-body">
              A collection of data-driven projects showcasing technical expertise in business intelligence, analytics, and visualization. Each project represents innovative solutions that transform complex data into actionable insights.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group"
            >
              {/* Main Card Container */}
              <div className="relative h-full flex flex-col  overflow-hidden border border-cyan/20 hover:border-cyan/50 transition-all duration-300 bg-gradient-to-br from-dark-gray/40 to-dark-gray/10 backdrop-blur-md shadow-xl hover:shadow-2xl hover:shadow-cyan/10">
                {/* Image Section */}
                <div className="relative w-full h-48 sm:h-64 md:h-80 overflow-hidden bg-dark-gray">
                  {/* Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Overlay */}
                  <div className="overlay absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent opacity-0 transition-opacity duration-300 flex flex-col justify-end p-4 sm:p-6">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <ExternalLink className="text-cyan w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="text-cyan font-body font-semibold text-xs sm:text-sm">
                        Explore Project
                      </span>
                    </div>
                  </div>

                  {/* Top Badge */}
                  <div
                    className={`absolute top-3 sm:top-4 right-3 sm:right-4 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-${project.primaryColor}/20 border border-${project.primaryColor}/40 z-20 flex items-center gap-2`}
                  >
                    <Zap
                      className={`text-${project.primaryColor} w-3 h-3 sm:w-4 sm:h-4`}
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
                <div className="flex-grow flex flex-col p-4 sm:p-6 md:p-8">
                  {/* Title & Subtitle */}
                  <div className="mb-4 sm:mb-6">
                    <h3
                      className={`font-heading text-xl sm:text-2xl md:text-3xl font-black text-off-white mb-1 sm:mb-2 group-hover:text-${project.primaryColor} transition-colors duration-300 line-clamp-2`}
                    >
                      {project.title}
                    </h3>
                    <p
                      className={`font-body text-sm sm:text-base font-semibold text-${project.primaryColor}`}
                    >
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-light-gray text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 font-body line-clamp-4">
                    {project.description}
                  </p>

                  {/* Role & Year */}
                  <div className="flex items-center gap-2 mb-4 sm:mb-6 text-xs sm:text-sm text-light-gray font-body">
                    <Code2 className={`text-${project.primaryColor} w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0`} />
                    <span className="line-clamp-1">{project.role}</span>
                  </div>

                  {/* Stats - Horizontal */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4 sm:mb-6 py-3 sm:py-4 border-y border-cyan/20">
                    {project.stats.map((stat, i) => (
                      <div key={i} className="text-center">
                        <div
                          className={`text-sm sm:text-lg font-black text-${project.primaryColor} font-heading`}
                        >
                          {stat.split(" ")[0]}
                        </div>
                        <p className="text-xs text-light-gray font-body mt-0.5 sm:mt-1 line-clamp-1">
                          {stat.split(" ").slice(1).join(" ")}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Achievements */}
                  <div className="mb-4 sm:mb-6">
                    <h4 className="font-heading text-xs uppercase tracking-wider text-off-white mb-2 sm:mb-3 font-semibold">
                      Key Highlights
                    </h4>
                    <ul className="space-y-1.5 sm:space-y-2">
                      {project.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-xs sm:text-sm text-light-gray font-body"
                        >
                          <ArrowRight
                            className={`text-${project.primaryColor} w-2.5 h-2.5 sm:w-3 sm:h-3 flex-shrink-0 mt-0.5 sm:mt-1`}
                          />
                          <span className="line-clamp-3">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-4 sm:mb-6">
                    <h4 className="font-heading text-xs uppercase tracking-wider text-off-white mb-2 sm:mb-3 font-semibold">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className={`px-2 sm:px-3 py-0.5 sm:py-1 text-xs font-semibold rounded-lg bg-${project.primaryColor}/10 text-${project.primaryColor} border border-${project.primaryColor}/30 font-body hover:bg-${project.primaryColor}/20 transition-all duration-300 line-clamp-1`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons - Auto margin top for sticky bottom */}
                  <div className="mt-auto pt-3 sm:pt-4 flex gap-2 sm:gap-3">
                    {project.links.map((link, i) => {
                      const Icon = link.icon;
                      return (
                        <a
                          key={i}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex-1 flex items-center justify-center gap-1 sm:gap-2 py-2 sm:py-3 rounded-lg bg-${project.primaryColor}/10 border border-${project.primaryColor}/30 text-${project.primaryColor} font-body font-semibold text-xs sm:text-sm hover:bg-${project.primaryColor}/20 hover:border-${project.primaryColor}/60 transition-all duration-300`}
                        >
                          <Icon className="w-3 h-3 sm:w-4 sm:h-4" />
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
        <div className="mt-16 sm:mt-24 md:mt-32 pt-12 sm:pt-20 md:pt-24 border-t border-cyan/20">
          <div className="max-w-3xl">
            <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-black text-off-white mb-4 sm:mb-6">
              Have an Idea?
            </h3>
            <p className="font-body text-base sm:text-lg text-light-gray mb-6 sm:mb-8 leading-relaxed">
              Whether you're looking to build data solutions, create powerful dashboards, or transform business data into insights, I'm ready to collaborate. Let's create something impactful together.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-4 rounded-lg sm:rounded-xl font-heading font-bold text-xs sm:text-sm md:text-base text-navy bg-cyan hover:bg-electric-blue transition-all duration-300 group shadow-lg hover:shadow-2xl hover:shadow-cyan/20"
            >
              Get In Touch
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;