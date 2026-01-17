import React, { useEffect, useRef } from 'react';
import Img from "../assets/pic2.jpg"; 
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase, Globe, Heart, Camera, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const JourneySection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const passionsRef = useRef<HTMLDivElement>(null);
  const communityRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 80%',
          },
        }
      );

      // Image animation
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 80%',
          },
        }
      );

      // Content animation
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: contentRef.current,
              start: 'top 80%',
            },
          }
        );
      }

      // Education timeline
      if (educationRef.current) {
        gsap.fromTo(
          educationRef.current.querySelectorAll('.edu-item'),
          { opacity: 0, x: -40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: educationRef.current,
              start: 'top 80%',
            },
          }
        );
      }

      // Passions animation
      if (passionsRef.current) {
        gsap.fromTo(
          passionsRef.current.children,
          { opacity: 0, scale: 0.8, y: 30 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.12,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: passionsRef.current,
              start: 'top 80%',
            },
          }
        );
      }

      // Community Service animation
      if (communityRef.current) {
        gsap.fromTo(
          communityRef.current,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: communityRef.current,
              start: 'top 85%',
            },
          }
        );
      }

      // Quote animation
      if (quoteRef.current) {
        const quoteElements = quoteRef.current.querySelectorAll('.quote-line, .quote-text');
        gsap.fromTo(
          quoteElements,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: quoteRef.current,
              start: 'top 80%',
            },
          }
        );
      }

      // Values animation
      if (valuesRef.current) {
        gsap.fromTo(
          valuesRef.current.children,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: valuesRef.current,
              start: 'top 80%',
            },
          }
        );

        // Animate individual value icons with a hover-like effect on scroll
        valuesRef.current.querySelectorAll('.value-item').forEach((item) => {
          gsap.set(item, { y: 0 });
          item.addEventListener('mouseenter', () => {
            gsap.to(item, { y: -5, duration: 0.3 });
          });
          item.addEventListener('mouseleave', () => {
            gsap.to(item, { y: 0, duration: 0.3 });
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="journey"
      ref={sectionRef}
      className="w-full bg-white py-16 md:py-24"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16 md:mb-20">
          <span className="font-body text-xs tracking-[0.3em] text-cyan uppercase mb-3 block">
            My Story
          </span>
          <h1 className="font-heading text-2xl sm:text-4xl md:text-4xl font-bold text-navy mb-4">
            MY JOURNEY
          </h1>
          <div className="w-16 h-1 bg-cyan mx-auto"></div>
        </div>

        {/* Introduction */}
        <div className="mb-24 md:mb-32">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Image */}
            <div ref={imageRef}>
              <div className="w-full h-[350px] md:h-[450px] overflow-hidden shadow-lg">
                <img
                  src={Img}
                  alt="Yashvi"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Content */}
            <div ref={contentRef} className="space-y-5">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy">
                Hi, I'm <span className="text-cyan">Yashvi!</span>
              </h2>

              <p className="font-body text-lg text-steel-blue leading-relaxed">
                I'm a <span className="font-bold text-navy">Business Analyst</span> who believes every great strategy begins with insight. My passion lies in bridging the gap between data and marketing.
              </p>

              <p className="font-body text-base text-medium-gray leading-relaxed">
                With expertise in <span className="font-semibold text-navy">SQL, Python, R, Power BI, Tableau, and Google Analytics</span>, I transform complex data into meaningful stories that drive business decisions.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-4 py-2 text-navy text-sm font-medium border border-cyan rounded-lg hover:bg-cyan hover:text-white transition-all duration-300">
                  Data Analytics
                </span>
                <span className="px-4 py-2 text-navy text-sm font-medium border border-cyan rounded-lg hover:bg-cyan hover:text-white transition-all duration-300">
                  Marketing
                </span>
                <span className="px-4 py-2 text-navy text-sm font-medium border border-cyan rounded-lg hover:bg-cyan hover:text-white transition-all duration-300">
                  Strategy
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Education */}
       
        {/* Beyond Analytics */}
        <div className="mb-24 md:mb-32">
          <div className="flex items-center gap-3 mb-10 edu-item">
            <Heart className="text-cyan" size={32} />
            <div>
              <h2 className="font-heading text-2xl md:text-4xl font-bold text-navy">Beyond Analytics</h2>
              <p className="text-medium-gray text-xs mt-1">Personal Passions</p>
            </div>
          </div>

          <p className="font-body text-lg text-steel-blue leading-relaxed mb-10 max-w-3xl edu-item">
            Passionate about <span className="font-semibold text-navy">cooking, traveling, photography, and networking</span>. Visited <span className="font-semibold text-cyan">5+ countries</span>, exploring how cultures connect.
          </p>

          {/* Passions Grid */}
          <div ref={passionsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
            <div className="group cursor-pointer text-center">
              <div className="flex justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                <Camera className="text-cyan" size={32} />
              </div>
              <span className="text-navy font-semibold text-sm">Photography</span>
              <div className="h-0.5 w-0 bg-cyan mx-auto mt-2 group-hover:w-full transition-all duration-300"></div>
            </div>
            <div className="group cursor-pointer text-center">
              <div className="flex justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                <Globe className="text-electric-blue" size={32} />
              </div>
              <span className="text-navy font-semibold text-sm">Travel</span>
              <div className="h-0.5 w-0 bg-electric-blue mx-auto mt-2 group-hover:w-full transition-all duration-300"></div>
            </div>
            <div className="group cursor-pointer text-center">
              <div className="flex justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                <Heart className="text-ice-blue" size={32} />
              </div>
              <span className="text-navy font-semibold text-sm">Cooking</span>
              <div className="h-0.5 w-0 bg-ice-blue mx-auto mt-2 group-hover:w-full transition-all duration-300"></div>
            </div>
            <div className="group cursor-pointer text-center">
              <div className="flex justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                <Users className="text-cyan" size={32} />
              </div>
              <span className="text-navy font-semibold text-sm">Networking</span>
              <div className="h-0.5 w-0 bg-cyan mx-auto mt-2 group-hover:w-full transition-all duration-300"></div>
            </div>
          </div>

          {/* Community Service - Minimal Design */}
          <div ref={communityRef} className="py-8 border-l-4 border-electric-blue pl-6 mb-12 hover:pl-8 transition-all duration-300">
            <div className="flex items-start gap-3">
              <Users className="text-electric-blue flex-shrink-0 mt-1 transition-transform duration-300 hover:scale-110" size={24} />
              <div>
                <h3 className="font-heading text-xl font-bold text-navy mb-2">
                  Community Service
                </h3>
                <p className="font-body text-base text-medium-gray leading-relaxed">
                  Active member of <span className="text-navy font-semibold">Lions Club International</span> — proudly serving as <span className="text-navy font-semibold">Leo Lion Yashvi Nagda</span> with the Lions Club of Bombay Hilltop and Leo Club of Bombay Garodia Nagar.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* What Inspires Me */}
        <div>
          <div className="flex items-center gap-3 mb-10 edu-item">
            <Globe className="text-cyan" size={32} />
            <div>
              <h2 className="font-heading text-2xl md:text-4xl font-bold text-navy">What Inspires Me</h2>
              <p className="text-medium-gray text-xs mt-1">Philosophy & Values</p>
            </div>
          </div>

          {/* Quote - Minimal Design */}
          <div ref={quoteRef} className="py-10 mb-14 border-t-2 border-b-2 border-cyan border-opacity-30">
            <p className="quote-line font-heading text-2xl md:text-3xl font-bold text-navy leading-relaxed mb-4">
              I believe in the power of blending <span className="text-cyan">data</span>, <span className="text-electric-blue">creativity</span>, and <span className="text-ice-blue">empathy</span>
            </p>
            <p className="quote-text font-body text-base text-medium-gray leading-relaxed max-w-3xl">
              Every number tells a story, every connection creates an opportunity, and every idea has the potential to grow into something impactful.
            </p>
          </div>

          {/* Values - Clean Design */}
          <div ref={valuesRef} className="grid md:grid-cols-3 gap-10">
            <div className="value-item group">
              <div className="flex items-center gap-3 mb-3">
                <Briefcase className="text-cyan transition-all duration-300" size={28} />
                <h4 className="font-heading text-lg font-bold text-navy">Data-Driven</h4>
              </div>
              <p className="text-medium-gray text-sm leading-relaxed">Actionable insights that drive informed business decisions and measurable impact.</p>
            </div>

            <div className="value-item group">
              <div className="flex items-center gap-3 mb-3">
                <Heart className="text-electric-blue transition-all duration-300" size={28} />
                <h4 className="font-heading text-lg font-bold text-navy">Creative</h4>
              </div>
              <p className="text-medium-gray text-sm leading-relaxed">Art meets science to create compelling narratives from complex information.</p>
            </div>

            <div className="value-item group">
              <div className="flex items-center gap-3 mb-3">
                <Users className="text-ice-blue transition-all duration-300" size={28} />
                <h4 className="font-heading text-lg font-bold text-navy">Empathetic</h4>
              </div>
              <p className="text-medium-gray text-sm leading-relaxed">Meaningful connections built on understanding and genuine human interaction.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;