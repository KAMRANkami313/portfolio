import React from 'react';
import { motion } from 'framer-motion';
import { FiMusic } from 'react-icons/fi';

const MusicWidget = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 2 }}
      className="fixed bottom-6 right-6 z-40 hidden lg:flex items-center gap-3 px-4 py-2.5 bg-surface/60 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl group hover:border-accent/30 transition-all cursor-default"
    >
      <div className="flex items-center gap-0.5">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              height: [4, 12 + Math.random() * 8, 4],
            }}
            transition={{
              duration: 0.6 + Math.random() * 0.4,
              repeat: Infinity,
              delay: i * 0.15,
              ease: "easeInOut",
            }}
            className="w-[2px] bg-accent rounded-full origin-bottom"
          />
        ))}
      </div>
      <div className="flex flex-col">
        <span className="text-[8px] font-black text-accent uppercase tracking-widest">Currently Vibing</span>
        <span className="text-[10px] font-bold text-white/70">Lo-fi & Code</span>
      </div>
      <FiMusic size={10} className="text-accent/50" />
    </motion.div>
  );
};

export default MusicWidget;