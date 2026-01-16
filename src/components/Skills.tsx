import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    categoriesRef.current.forEach((category, i) => {
      if (category) {
        gsap.fromTo(
          category,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            delay: i * 0.15,
            scrollTrigger: {
              trigger: category,
              start: "top 85%",
            },
          }
        );
      }
    });
  }, []);

  const skillCategories = [
    {
      title: "Technical",
      color: "cyan",
      skills: [
        "SQL",
        "Python",
        "R",
        "Power BI",
        "Tableau",
        "Microsoft Excel",
        "Tally Prime",
        "R Shiny",
      ],
    },
    {
      title: "Marketing",
      color: "electric-blue",
      skills: [
        "Google Analytics",
        "SEO",
        "Campaign Optimization",
        "Data Storytelling",
      ],
    },
    {
      title: "Core Competencies",
      color: "ice-blue",
      skills: [
        "Analytical Thinking",
        "Collaboration",
        "Performance Reporting",
        "Strategic Planning",
      ],
    },
  ];

  const languages = [
    { name: "English", level: "Native" },
    { name: "Hindi", level: "Native" },
    { name: "Marathi", level: "Fluent" },
    { name: "Gujarati", level: "Fluent" },
    { name: "Sanskrit", level: "Basic" },
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="w-full px-4 sm:px-8 lg:px-20 py-20 md:py-32 bg-gradient-to-b from-dark-blue via-black to-dark-blue"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 md:mb-20 text-center">
          <span className="font-body text-xs tracking-[0.3em] text-ice-blue uppercase">
            Expertise
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-off-white mt-4 mb-6">
            Skills & Languages
          </h2>
          <div className="w-20 h-1 bg-ice-blue mx-auto"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              ref={(el) => (categoriesRef.current[index] = el)}
              className={`bg-dark-gray/30 backdrop-blur-sm border ${
                category.color === "cyan"
                  ? "border-cyan/20 hover:border-cyan"
                  : category.color === "electric-blue"
                  ? "border-electric-blue/20 hover:border-electric-blue"
                  : "border-ice-blue/20 hover:border-ice-blue"
              } rounded-xl p-6 md:p-8 hover:bg-dark-gray/50 transition-all duration-300`}
            >
              {/* Category Icon */}
              <div
                className={`w-14 h-14 ${
                  category.color === "cyan"
                    ? "bg-cyan/10"
                    : category.color === "electric-blue"
                    ? "bg-electric-blue/10"
                    : "bg-ice-blue/10"
                } rounded-full flex items-center justify-center mb-6`}
              >
                <svg
                  className={`w-7 h-7 ${
                    category.color === "cyan"
                      ? "text-cyan"
                      : category.color === "electric-blue"
                      ? "text-electric-blue"
                      : "text-ice-blue"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {category.title === "Technical" && (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  )}
                  {category.title === "Marketing" && (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                    />
                  )}
                  {category.title === "Core Competencies" && (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  )}
                </svg>
              </div>

              {/* Category Title */}
              <h3
                className={`font-heading text-xl md:text-2xl font-bold mb-6 ${
                  category.color === "cyan"
                    ? "text-cyan"
                    : category.color === "electric-blue"
                    ? "text-electric-blue"
                    : "text-ice-blue"
                }`}
              >
                {category.title}
              </h3>

              {/* Skills List */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg ${
                      category.color === "cyan"
                        ? "bg-cyan/10 text-cyan border border-cyan/30"
                        : category.color === "electric-blue"
                        ? "bg-electric-blue/10 text-electric-blue border border-electric-blue/30"
                        : "bg-ice-blue/10 text-ice-blue border border-ice-blue/30"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Languages Section */}
        <div
          ref={(el) => (categoriesRef.current[3] = el)}
          className="bg-dark-gray/20 backdrop-blur-sm border border-cyan/20 rounded-xl p-6 md:p-10"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 bg-cyan/10 rounded-full flex items-center justify-center">
              <svg
                className="w-7 h-7 text-cyan"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                />
              </svg>
            </div>
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-cyan">
              Languages
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {languages.map((lang, i) => (
              <div
                key={i}
                className="text-center p-4 bg-dark-gray/30 rounded-lg border border-cyan/10 hover:border-cyan/30 transition-colors duration-300"
              >
                <div className="font-heading text-lg font-bold text-off-white mb-1">
                  {lang.name}
                </div>
                <div className="font-body text-xs text-light-gray">
                  {lang.level}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Summary */}
        <div className="mt-12 md:mt-16 text-center">
          <p className="font-body text-sm md:text-base text-light-gray max-w-3xl mx-auto">
            Combining <span className="text-cyan font-semibold">technical expertise</span> with{" "}
            <span className="text-electric-blue font-semibold">marketing strategy</span> and{" "}
            <span className="text-ice-blue font-semibold">analytical thinking</span> to deliver
            data-driven results.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;