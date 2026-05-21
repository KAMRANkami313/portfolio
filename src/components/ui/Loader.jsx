import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = ({ finishLoading }) => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => (prev < 100 ? prev + 1 : 100));
    }, 20);
    if (percent === 100) setTimeout(finishLoading, 500);
    return () => clearInterval(interval);
  }, [percent, finishLoading]);

  return (
    <motion.div 
      exit={{ y: "-100vh" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-dark"
    >
      <div className="relative overflow-hidden mb-4">
        <motion.h1 
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          className="text-4xl font-bold tracking-tighter"
        >
          MUHAMMAD KAMRAN
        </motion.h1>
      </div>
      <div className="w-48 h-0.5 bg-white/10 relative">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${percent}%` }}
          className="absolute inset-y-0 left-0 bg-accent"
        />
      </div>
      <span className="mt-4 text-xs font-mono text-muted uppercase tracking-[0.2em]">
        Initializing Engineering Environment... {percent}%
      </span>
    </motion.div>
  );
};

export default Loader;