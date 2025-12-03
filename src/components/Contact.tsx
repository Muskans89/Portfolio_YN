import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Facebook,
  MailIcon,
  Send,
  CheckCircle,
  Zap,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success">(
    "idle"
  );
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

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

      // Form animation
      gsap.fromTo(
        formRef.current,
        { opacity: 0, x: -80, y: 40 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 85%",
          },
        }
      );

      // Info cards animation
      gsap.fromTo(
        infoRef.current?.querySelectorAll(".info-card"),
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: infoRef.current,
            start: "top 85%",
          },
        }
      );

      // Form inputs animation
      gsap.fromTo(
        formRef.current?.querySelectorAll("input, textarea"),
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "back.out(1.5)",
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("loading");

    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset after 3 seconds
      setTimeout(() => {
        setFormStatus("idle");
      }, 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "yashvinagda20@gmail.com",
      href: "mailto:yashvinagda20@gmail.com",
      color: "cyan",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "(857) 328-2316",
      href: "tel:+18573282416",
      color: "electric-blue",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "10 Education Cir, Cambridge, MA 02141",
      href: "#",
      color: "ice-blue",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: "#",
      label: "LinkedIn",
      color: "cyan",
    },
    {
      icon: Github,
      href: "#",
      label: "GitHub",
      color: "electric-blue",
    },
    {
      icon: Facebook,
      href: "#",
      label: "Twitter",
      color: "ice-blue",
    },
    {
      icon: MailIcon,
      href: "#",
      label: "Twitter",
      color: "ice-blue",
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="w-full bg-gradient-to-b from-off-white via-white to-off-white py-20 md:py-32 relative overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 right-0 w-96 h-96 rounded-full blur-3xl bg-cyan/5"></div>
        <div className="absolute bottom-40 left-10 w-80 h-80 rounded-full blur-3xl bg-electric-blue/5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div ref={headerRef} className="mb-20 md:mb-28 max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-gradient-to-b from-cyan to-electric-blue rounded-full"></div>
            <span className="font-body text-xs tracking-[0.4em] text-cyan uppercase font-semibold">
              Get In Touch
            </span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-black text-navy mb-6 leading-tight">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-electric-blue">Connect</span>
          </h2>
          <p className="text-xl text-medium-gray font-light font-body">
            Have a project in mind or want to discuss opportunities? I'd love to
            hear from you. Get in touch and let's create something amazing.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Contact Form - 2 columns on desktop */}
          <div ref={formRef} className="lg:col-span-2">
            <div className="bg-white/70 backdrop-blur-sm border border-light-gray/40 rounded-3xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-all duration-300">
              {formStatus === "success" ? (
                <div className="flex flex-col items-center justify-center py-12">
                  <div className="w-20 h-20 rounded-full bg-cyan/20 border-2 border-cyan flex items-center justify-center mb-6 animate-pulse">
                    <CheckCircle className="w-10 h-10 text-cyan" />
                  </div>
                  <h3 className="font-heading text-2xl md:text-3xl font-black text-navy mb-3">
                    Message Sent!
                  </h3>
                  <p className="text-center text-medium-gray font-body">
                    Thank you for reaching out. I'll get back to you as soon as
                    possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Input */}
                  <div>
                    <label className="block text-sm font-heading font-bold text-navy mb-3">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      required
                      className="w-full px-6 py-3 rounded-xl bg-off-white border border-light-gray/30 text-navy placeholder-medium-gray focus:outline-none focus:border-cyan focus:ring-2 focus:ring-cyan/20 transition-all duration-300 font-body"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-sm font-heading font-bold text-navy mb-3">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      required
                      className="w-full px-6 py-3 rounded-xl bg-off-white border border-light-gray/30 text-navy placeholder-medium-gray focus:outline-none focus:border-cyan focus:ring-2 focus:ring-cyan/20 transition-all duration-300 font-body"
                    />
                  </div>

                  {/* Subject Input */}
                  <div>
                    <label className="block text-sm font-heading font-bold text-navy mb-3">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Project Discussion"
                      required
                      className="w-full px-6 py-3 rounded-xl bg-off-white border border-light-gray/30 text-navy placeholder-medium-gray focus:outline-none focus:border-cyan focus:ring-2 focus:ring-cyan/20 transition-all duration-300 font-body"
                    />
                  </div>

                  {/* Message Input */}
                  <div>
                    <label className="block text-sm font-heading font-bold text-navy mb-3">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or ideas..."
                      required
                      rows={5}
                      className="w-full px-6 py-3 rounded-xl bg-off-white border border-light-gray/30 text-navy placeholder-medium-gray focus:outline-none focus:border-cyan focus:ring-2 focus:ring-cyan/20 transition-all duration-300 font-body resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={formStatus === "loading"}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan to-electric-blue text-navy font-heading font-bold flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed group"
                  >
                    {formStatus === "loading" ? (
                      <>
                        <div className="w-5 h-5 border-2 border-navy border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="group-hover:translate-x-1 transition-transform w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Information - 1 column on desktop */}
          <div ref={infoRef} className="lg:col-span-1 space-y-6">
            {/* Contact Cards */}
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <a
                  key={index}
                  href={info.href}
                  className="info-card group"
                >
                  <div className="bg-white/60 backdrop-blur-sm border border-light-gray/40 hover:border-cyan/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:bg-white/80">
                    <div className="flex items-start gap-4">
                      <div
                        className={`p-3 rounded-lg bg-${info.color}/15 border border-${info.color}/30 flex-shrink-0 group-hover:scale-110 transition-transform`}
                      >
                        <Icon className={`w-6 h-6 text-${info.color}`} />
                      </div>
                      <div className="flex-grow min-w-0">
                        <h4 className="font-heading text-sm font-bold text-navy mb-1">
                          {info.label}
                        </h4>
                        <p className="text-sm text-medium-gray font-body break-all hover:text-cyan transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              );
            })}

            {/* Social Links */}
            <div className="pt-4">
              <h4 className="font-heading text-sm font-bold text-navy mb-4">
                Connect On
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={index}
                      href={link.href}
                      aria-label={link.label}
                      className="group relative"
                    >
                      <div
                        className={`w-12 h-12 rounded-lg bg-${link.color}/15 border border-${link.color}/30 flex items-center justify-center hover:bg-${link.color}/25 hover:border-${link.color}/60 transition-all duration-300 group-hover:scale-110`}
                      >
                        <Icon className={`w-5 h-5 text-${link.color}`} />
                      </div>
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-navy text-off-white text-xs font-body px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        {link.label}
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Response Message */}
            <div className="mt-8 pt-8 border-t border-light-gray/30">
              <div className="bg-cyan/10 border border-cyan/30 rounded-2xl p-6">
                <div className="flex gap-3">
                  <Zap className="text-cyan w-5 h-5 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-heading text-sm font-bold text-navy mb-1">
                      Quick Response
                    </h4>
                    <p className="text-sm text-medium-gray font-body">
                      I aim to respond within 24 hours. Let's discuss your ideas!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Message */}
        
      </div>
    </section>
  );
};

export default Contact;