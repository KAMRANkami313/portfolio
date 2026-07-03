import React from "react";
import { Mail } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "../ui/BrandIcons";
import { CONTACT, HERO_CONTENT } from "../../constants";

const SOCIAL_ICONS = {
  GitHub: Github,
  LinkedIn: Linkedin,
};

const TECH_STACK = ["React", "Vite", "Tailwind CSS", "Framer Motion", "Lenis"];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-10 mt-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <a
                href="#hero"
                className="flex items-center gap-2 font-bold text-lg mb-2"
                aria-label="Muhammad Kamran — Home"
              >
                <span className="text-gradient">MK</span>
                <span className="text-muted">.</span>
              </a>
              <p className="text-sm text-muted max-w-sm">
                {HERO_CONTENT.role} building production-grade web applications.
              </p>
            </div>

            <div className="flex items-center gap-2">
              {CONTACT.socials.map((social) => {
                const Icon = SOCIAL_ICONS[social.name];
                if (!Icon) return null;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 text-muted hover:text-white transition-colors"
                    aria-label={`Visit my ${social.name} profile`}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
              <a
                href={`mailto:${CONTACT.email}`}
                className="p-2.5 text-muted hover:text-white transition-colors"
                aria-label="Send me an email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/5 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <p className="text-xs text-muted">
              © {currentYear} {HERO_CONTENT.name}. All rights reserved.
            </p>

            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <span className="text-xs text-muted">Built with</span>
              {TECH_STACK.map((tech, i) => (
                <span key={tech} className="text-xs text-muted flex items-center gap-2">
                  <span className="text-white/80">{tech}</span>
                  {i < TECH_STACK.length - 1 && <span className="text-muted/40">·</span>}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;