import React, { useState, useEffect, useRef } from 'react';
import { FiMenu, FiX, FiAward } from 'react-icons/fi';
import { NAV_LINKS } from '../../constants';
import TimeDisplay from '../ui/TimeDisplay';
import DevToggle from '../ui/DevToggle';
import ThemePresets from '../ui/ThemePresets';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const navRef = useRef(null);

  // Slide-in animation on mount
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = NAV_LINKS.map(link => link.href.replace('#', ''));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-80px 0px -50% 0px' }
    );

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-100 flex items-center justify-center p-3 md:p-4 transition-all duration-500 ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      <div className={`flex items-center justify-between w-full max-w-7xl px-5 py-2.5 rounded-3xl transition-all duration-500 border ${
        isScrolled
          ? "bg-surface/80 backdrop-blur-2xl border-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.5)]"
          : "bg-transparent border-transparent"
      }`}>
        <div className="flex items-center gap-6">
           <a href="#hero" className="text-xl font-black tracking-tighter bg-linear-to-r from-white to-white/50 bg-clip-text text-transparent hover:from-accent hover:to-accent/60 transition-all" aria-label="Go to top">
             MK<span className="text-accent">.</span>
           </a>

           <div className="hidden lg:flex gap-0.5">
             {NAV_LINKS.map((link) => {
               const sectionId = link.href.replace('#', '');
               const isActive = activeSection === sectionId;
               return (
                 <a
                   key={link.label}
                   href={link.href}
                   className={`relative px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-widest transition-all rounded-lg ${
                     isActive
                       ? "text-white bg-accent/10"
                       : "text-muted hover:text-white hover:bg-white/5"
                   }`}
                 >
                   {link.label}
                   {isActive && (
                     <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-0.5 bg-accent rounded-full transition-all duration-300" />
                   )}
                 </a>
               );
             })}
           </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-4 pr-4 border-r border-white/10">
            <ThemePresets />
            <DevToggle />
            <TimeDisplay />
          </div>

          <a
            href="#contact"
            className="hidden md:block px-5 py-2 text-[11px] bg-accent text-white rounded-full font-black uppercase tracking-widest hover:shadow-[0_0_20px_rgba(var(--color-accent-rgb),0.4)] transition-all duration-300"
          >
            Hire Me
          </a>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white text-xl"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile menu — CSS transition */}
      <div
        className={`absolute top-20 left-3 right-3 p-6 bg-surface/95 backdrop-blur-2xl border border-white/10 rounded-3xl lg:hidden z-100 shadow-2xl transition-all duration-300 origin-top ${
          isMobileMenuOpen
            ? 'opacity-100 scale-100 translate-y-0'
            : 'opacity-0 scale-95 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-5 items-center text-center">
          {NAV_LINKS.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-lg font-black uppercase tracking-tighter transition-colors ${
                  isActive ? "text-accent" : "text-white hover:text-accent"
                }`}
              >
                {link.label}
                {isActive && <span className="ml-2 text-[8px] text-accent">●</span>}
              </a>
            );
          })}
          <div className="w-full h-px bg-white/5 my-1" />
          <div className="flex items-center gap-4">
            <ThemePresets />
            <DevToggle />
          </div>
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="px-8 py-3 bg-accent text-white rounded-full font-black uppercase tracking-widest transition-all"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;