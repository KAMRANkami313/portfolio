import React from 'react';
import { motion } from 'framer-motion';

const Aura = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none select-none">
      <motion.div
        animate={{
          scale: [1, 1.15, 1.05, 1.2, 1],
          x: [0, 80, 30, -40, 0],
          y: [0, 40, 80, 30, 0],
          opacity: [0.08, 0.15, 0.08]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-30%] left-[-15%] w-[70%] h-[70%] rounded-full bg-accent/20 blur-[180px] will-change-transform"
      />
      
      <motion.div
        animate={{
          scale: [1, 1.2, 1.1, 1.15, 1],
          x: [0, -60, -30, 50, 0],
          y: [0, -30, -70, -20, 0],
          opacity: [0.05, 0.12, 0.05]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-25%] right-[-15%] w-[60%] h-[60%] rounded-full blur-[180px] will-change-transform"
        style={{ backgroundColor: 'rgba(139, 92, 246, 0.12)' }}
      />

      <motion.div
        animate={{
          scale: [1, 1.1, 1.2, 1.05, 1],
          x: [0, 50, -30, -60, 0],
          y: [0, -40, 50, 20, 0],
          opacity: [0.03, 0.08, 0.03]
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-[30%] right-[10%] w-[40%] h-[40%] rounded-full blur-[160px] will-change-transform"
        style={{ backgroundColor: 'rgba(236, 72, 153, 0.08)' }}
      />

      <div className="absolute inset-0 bg-dark/30 backdrop-blur-[10px]" />
    </div>
  );
};

export default Aura;