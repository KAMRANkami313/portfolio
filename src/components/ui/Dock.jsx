import React from 'react';
import { motion } from 'framer-motion';
import { FiHome, FiCode, FiUser, FiMail, FiCpu } from 'react-icons/fi';

const Dock = () => {
  const items = [
    { icon: <FiHome />, href: "#hero" },
    { icon: <FiCpu />, href: "#skills" },
    { icon: <FiCode />, href: "#projects" },
    { icon: <FiUser />, href: "#experience" },
    { icon: <FiMail />, href: "#contact" },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="flex items-center gap-2 px-4 py-3 bg-surface/40 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl"
      >
        {items.map((item, i) => (
          <motion.a
            key={i}
            href={item.href}
            whileHover={{ scale: 1.2, y: -10 }}
            className="p-3 text-xl text-muted hover:text-accent transition-colors"
          >
            {item.icon}
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};

export default Dock;