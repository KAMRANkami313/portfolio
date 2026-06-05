import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiCommand, FiArrowRight, FiGithub, FiFileText, FiMail, FiLayers } from 'react-icons/fi';
import { useAchievement } from '../../context/AchievementContext';

const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);
  const { unlock } = useAchievement();

  const actions = [
    { id: 'eventpulse', label: 'View EventPulse Source', icon: <FiLayers />, action: () => window.open('https://github.com/KAMRANkami313', '_blank'), category: 'Projects' },
    { id: 'resume', label: 'Download Resume PDF', icon: <FiFileText />, action: () => window.open('/resume.pdf', '_blank'), category: 'System' },
    { id: 'contact', label: 'Send Direct Message', icon: <FiMail />, action: () => { setIsOpen(false); window.location.href = '#contact'; }, category: 'Contact' },
    { id: 'github', label: 'Open GitHub Profile', icon: <FiGithub />, action: () => window.open('https://github.com/KAMRANkami313', '_blank'), category: 'Social' },
  ];

  const filteredActions = actions.filter(a => 
    a.label.toLowerCase().includes(query.toLowerCase()) || 
    a.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const down = (e) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((open) => !open);
        unlock('used_command');
      }
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, [unlock]);

  useEffect(() => {
    if (isOpen) {
      setSelectedIndex(0);
      setQuery("");
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filteredActions.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredActions.length) % filteredActions.length);
    } else if (e.key === 'Enter') {
      filteredActions[selectedIndex]?.action();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          className="fixed inset-0 z-200 flex items-start justify-center pt-[15vh] px-4 bg-dark/80 backdrop-blur-md"
          onClick={() => setIsOpen(false)}
        >
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl bg-surface/90 border border-white/10 rounded-3xl shadow-[0_32px_64px_rgba(0,0,0,0.8)] overflow-hidden backdrop-blur-2xl"
          >
            <div className="flex items-center gap-4 p-6 border-b border-white/5">
              <FiSearch className="text-accent text-xl" />
              <input 
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type a command or search..." 
                aria-label="Search commands"
                className="bg-transparent border-none outline-none text-white w-full text-lg font-medium placeholder:text-muted"
              />
              <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black text-muted uppercase tracking-widest">
                <FiCommand /> K
              </div>
            </div>

            <div className="p-3 max-h-[60vh] overflow-y-auto">
              {filteredActions.length > 0 ? (
                <div className="space-y-1">
                  {filteredActions.map((item, index) => (
                    <button 
                      key={item.id}
                      onMouseEnter={() => setSelectedIndex(index)}
                      onClick={item.action}
                      className={`w-full text-left p-4 rounded-2xl transition-all duration-200 flex items-center justify-between group ${
                        selectedIndex === index ? "bg-accent text-white" : "hover:bg-white/5 text-muted"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <span className={`text-xl ${selectedIndex === index ? "text-white" : "text-accent"}`}>
                          {item.icon}
                        </span>
                        <div>
                          <p className={`text-sm font-bold ${selectedIndex === index ? "text-white" : "text-white"}`}>
                            {item.label}
                          </p>
                          <p className={`text-[10px] uppercase font-black tracking-widest ${selectedIndex === index ? "text-white/70" : "text-muted"}`}>
                            {item.category}
                          </p>
                        </div>
                      </div>
                      {selectedIndex === index && (
                        <motion.div layoutId="arrow">
                          <FiArrowRight />
                        </motion.div>
                      )}
                    </button>
                  ))}
                </div>
              ) : (
                <div className="p-12 text-center">
                  <p className="text-muted text-sm font-mono uppercase tracking-widest">No matching commands found.</p>
                </div>
              )}
            </div>

            <div className="p-4 bg-black/40 border-t border-white/5 flex items-center justify-between px-8">
              <div className="flex gap-4">
                <div className="flex items-center gap-1.5 text-[9px] font-black text-muted uppercase tracking-tighter">
                  <span className="px-1.5 py-0.5 bg-white/5 border border-white/10 rounded">ESC</span> Close
                </div>
                <div className="flex items-center gap-1.5 text-[9px] font-black text-muted uppercase tracking-tighter">
                  <span className="px-1.5 py-0.5 bg-white/5 border border-white/10 rounded">↵</span> Select
                </div>
              </div>
              <p className="text-[9px] font-black text-accent uppercase tracking-[0.3em]">System_Interface_v3</p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;