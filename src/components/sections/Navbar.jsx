import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { NAV_LINKS } from '../../constants';
import TimeDisplay from '../ui/TimeDisplay';
import DevToggle from '../ui/DevToggle';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-4 transition-all duration-300"
    >
      <div className={`flex items-center justify-between w-full max-w-7xl px-6 py-3 rounded-full transition-all duration-300 border ${
        isScrolled 
          ? "bg-surface/80 backdrop-blur-md border-white/10 shadow-xl" 
          : "bg-transparent border-transparent"
      }`}>
        <div className="text-xl font-bold tracking-tighter">MK.</div>
        
        <div className="hidden md:flex gap-8">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              className="text-sm text-muted hover:text-white transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden lg:flex items-center gap-4">
            <DevToggle />
            <TimeDisplay />
          </div>
          <a 
            href="#contact" 
            className="px-5 py-2 text-sm bg-white text-black rounded-full font-bold hover:scale-105 transition-transform"
          >
            Hire Me
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;