import React from "react";
import { Linkedin, Github, ArrowUp, Facebook, Youtube } from "lucide-react";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { icon: Linkedin, href: "www.linkedin.com/in/yashvi-nagda", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/YashviNagda20", label: "GitHub" },
    { icon: Facebook, href: "https://www.facebook.com/Yashvi20081999?mibextid=wwXIfr&rdid=k66fKLxEn16Dh73e&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F166bPfGhfv%2F%3Fmibextid%3DwwXIfr#", label: "Twitter" },
    { icon: Youtube, href: "https://www.youtube.com/@yashvinagda3408", label: "Email" },
  ];

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Journey", href: "#journey" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="w-full bg-navy border-t border-cyan/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 md:gap-16 mb-12">
          {/* Brand Section */}
          <div>
            <h3 className="font-heading text-2xl font-black text-off-white mb-2">
              Yashvi Nagda
            </h3>
            <p className="text-sm text-light-gray font-body">
              Business Analyst | Social Media Strategist
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-heading text-xs uppercase tracking-wider font-bold text-off-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-sm text-light-gray hover:text-cyan transition-colors duration-300 font-body"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-xs uppercase tracking-wider font-bold text-off-white mb-4">
              Contact
            </h4>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-light-gray font-body mb-1">Email</p>
                <a
                  href="mailto:yashvi.ringdase@gmail.com"
                  className="text-sm text-cyan hover:text-electric-blue transition-colors duration-300 font-body break-all"
                >
                  yashvinagda20@gmail.com
                </a>
              </div>
              <div>
                <p className="text-xs text-light-gray font-body mb-1">Phone</p>
                <a
                  href="tel:+18573337689"
                  className="text-sm text-cyan hover:text-electric-blue transition-colors duration-300 font-body"
                >
                  (857) 333-7689
                </a>
              </div>
              <div>
                <p className="text-xs text-light-gray font-body mb-1">Location</p>
                <p className="text-sm text-light-gray font-body">
                  Cambridge, MA
                </p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-heading text-xs uppercase tracking-wider font-bold text-off-white mb-4">
              Social
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social, i) => {
                const Icon = social.icon;
                return (
                  <a
                    key={i}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg bg-dark-gray/50 border border-cyan/20 hover:border-cyan hover:bg-dark-gray transition-all duration-300 flex items-center justify-center group"
                  >
                    <Icon className="w-5 h-5 text-light-gray group-hover:text-cyan transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-cyan/20 via-transparent to-transparent mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-xs text-light-gray font-body text-center sm:text-left">
            © 2025 Yashvi. All rights reserved.
          </p>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-lg bg-dark-gray/50 border border-cyan/20 hover:border-cyan hover:bg-dark-gray transition-all duration-300 flex items-center justify-center group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 text-light-gray group-hover:text-cyan transition-colors group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;