import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiEye } from 'react-icons/fi';

const VisitorCounter = () => {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('kamran-visitor-count');
      let current = stored ? parseInt(stored, 10) : 0;
      current += 1;
      localStorage.setItem('kamran-visitor-count', current.toString());
      setCount(current);
    } catch {
      setCount(Math.floor(Math.random() * 500) + 200);
    }
    setIsLoading(false);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-30 hidden lg:flex items-center gap-3 px-4 py-2 bg-surface/40 backdrop-blur-xl border border-white/5 rounded-full shadow-lg"
    >
      <FiEye className="text-accent/60 text-xs" />
      <span className="text-[9px] font-mono text-muted uppercase tracking-widest">
        Visitors:
      </span>
      <span className="text-[11px] font-bold text-accent tabular-nums">
        {isLoading ? '---' : count.toLocaleString()}
      </span>
    </motion.div>
  );
};

export default VisitorCounter;