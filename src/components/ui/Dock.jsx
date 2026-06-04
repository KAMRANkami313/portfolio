import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiHome, FiCode, FiUser, FiMail, FiCpu } from 'react-icons/fi';
import { useAudio } from '../../hooks/useAudio';

const Dock = () => {
  const { playHover, playClick } = useAudio();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  const items = [
    { icon: <FiHome />, href: "#hero", label: "Home" },
    { icon: <FiCpu />, href: "#skills", label: "Skills" },
    { icon: <FiCode />, href: "#projects", label: "Projects" },
    { icon: <FiUser />, href: "#experience", label: "Experience" },
    { icon: <FiMail />, href: "#contact", label: "Contact" },
  ];

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-100 px-4 md:px-0 w-full max-w-fit">
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
        className="flex items-center gap-3 px-4 py-3 bg-surface/40 backdrop-blur-3xl border border-white/10 rounded-4xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
      >
        {items.map((item, i) => (
          <div key={i} className="relative group">
            <AnimatePresence>
              {hoveredIndex === i && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.8 }}
                  animate={{ opacity: 1, y: -45, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.8 }}
                  className="absolute left-1/2 -translate-x-1/2 px-3 py-1 bg-accent text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-lg shadow-xl pointer-events-none whitespace-nowrap"
                >
                  {item.label}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-accent" />
                </motion.div>
              )}
            </AnimatePresence>

            <motion.a
              href={item.href}
              onMouseEnter={() => {
                setHoveredIndex(i);
                playHover();
              }}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={playClick}
              whileHover={{ 
                scale: 1.4, 
                y: -10,
                backgroundColor: "rgba(255, 255, 255, 0.1)" 
              }}
              whileTap={{ scale: 0.9 }}
              className="relative p-4 text-2xl text-muted hover:text-white rounded-2xl transition-colors flex items-center justify-center"
            >
              {item.icon}
              {hoveredIndex === i && (
                <motion.div 
                  layoutId="dock-dot"
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent rounded-full"
                />
              )}
            </motion.a>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Dock;