import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiCommand } from 'react-icons/fi';

const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const down = (e) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((open) => !open);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          className="fixed inset-0 z-200 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-xl bg-surface border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="flex items-center gap-3 p-4 border-b border-white/5">
              <FiSearch className="text-muted" />
              <input 
                autoFocus
                placeholder="Search projects, skills, or contact..." 
                className="bg-transparent border-none outline-none text-white w-full text-sm"
              />
              <div className="flex items-center gap-1 px-2 py-1 bg-white/5 rounded text-[10px] text-muted">
                <FiCommand /> K
              </div>
            </div>
            <div className="p-2 max-h-80 overflow-y-auto">
                <p className="p-3 text-[10px] uppercase tracking-widest text-muted font-bold">Quick Actions</p>
                <button 
                    onClick={() => window.open('https://github.com/KAMRANkami313', '_blank')}
                    className="w-full text-left p-3 hover:bg-white/5 rounded-xl text-sm transition-colors flex items-center gap-3"
                >
                    <span>📁</span> View EventPulse Source
                </button>
                <button 
                    onClick={() => window.open('/resume.pdf', '_blank')}
                    className="w-full text-left p-3 hover:bg-white/5 rounded-xl text-sm transition-colors flex items-center gap-3"
                >
                    <span>📄</span> Download Resume PDF
                </button>
                <button 
                    onClick={() => {
                        setIsOpen(false);
                        window.location.href = '#contact';
                    }}
                    className="w-full text-left p-3 hover:bg-white/5 rounded-xl text-sm transition-colors flex items-center gap-3"
                >
                    <span>📧</span> Send Message
                </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;