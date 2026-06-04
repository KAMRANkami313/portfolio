import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { NAV_LINKS } from '../../constants';
import TimeDisplay from '../ui/TimeDisplay';
import DevToggle from '../ui/DevToggle';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      className="fixed top-0 left-0 right-0 z-100 flex items-center justify-center p-4 transition-all duration-500"
    >
      <div className={`flex items-center justify-between w-full max-w-7xl px-6 py-3 rounded-4xl transition-all duration-500 border ${
        isScrolled 
          ? "bg-surface/70 backdrop-blur-xl border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]" 
          : "bg-transparent border-transparent"
      }`}>
        <div className="flex items-center gap-8">
           <div className="text-2xl font-black tracking-tighter bg-linear-to-r from-white to-white/40 bg-clip-text text-transparent">
             MK.
           </div>
           
           <div className="hidden md:flex gap-6">
             {NAV_LINKS.map((link) => (
               <a 
                 key={link.label} 
                 href={link.href} 
                 className="text-xs text-muted hover:text-white transition-all font-bold uppercase tracking-widest hover:scale-105"
               >
                 {link.label}
               </a>
             ))}
           </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden lg:flex items-center gap-6 pr-6 border-r border-white/10">
            <DevToggle />
            <TimeDisplay />
          </div>

          <a 
            href="#contact" 
            className="hidden md:block px-6 py-2.5 text-xs bg-white text-black rounded-full font-black uppercase tracking-widest hover:bg-accent hover:text-white transition-all duration-300"
          >
            Hire Me
          </a>

          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white text-2xl"
          >
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-4 right-4 p-8 bg-surface/95 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] md:hidden z-100 shadow-2xl"
          >
            <div className="flex flex-col gap-8 items-center text-center">
              {NAV_LINKS.map((link) => (
                <a 
                  key={link.label} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xl font-black uppercase tracking-tighter text-white hover:text-accent transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="w-full h-px bg-white/5 my-2" />
              <div className="flex flex-col gap-6 items-center">
                <DevToggle />
                <a 
                  href="#contact" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-10 py-4 bg-accent text-white rounded-full font-black uppercase tracking-widest"
                >
                  Hire Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;