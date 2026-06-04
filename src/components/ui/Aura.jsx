import React from 'react';
import { motion } from 'framer-motion';

const Aura = () => {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none select-none">
      <motion.div
        animate={{
          scale: [1, 1.1, 1.2, 1.1, 1],
          x: [0, 100, 50, -50, 0],
          y: [0, 50, 100, 50, 0],
          opacity: [0.15, 0.25, 0.15]
        }}
        transition={{ 
          duration: 25, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="absolute top-[-20%] left-[-10%] w-[80%] h-[80%] rounded-full bg-accent/30 blur-[140px] will-change-transform"
      />
      
      <motion.div
        animate={{
          scale: [1, 1.2, 1.1, 1.3, 1],
          x: [0, -100, -50, 50, 0],
          y: [0, -50, -100, -50, 0],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ 
          duration: 30, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] rounded-full bg-blue-600/20 blur-[140px] will-change-transform"
      />

      <div className="absolute inset-0 bg-dark/20 backdrop-blur-[20px]" />
    </div>
  );
};

export default Aura;