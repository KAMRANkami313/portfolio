import React, { useState, useEffect } from 'react';
import { useDevMode } from '../../context/DevModeContext';
import { motion, AnimatePresence } from 'framer-motion';

const Performance = () => {
  const { isDevMode } = useDevMode();
  const [fps, setFps] = useState(0);

  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    let requestId;

    const loop = () => {
      frameCount++;
      const now = performance.now();
      if (now - lastTime >= 1000) {
        setFps(Math.round((frameCount * 1000) / (now - lastTime)));
        frameCount = 0;
        lastTime = now;
      }
      requestId = requestAnimationFrame(loop);
    };

    if (isDevMode) {
      requestId = requestAnimationFrame(loop);
    }

    return () => cancelAnimationFrame(requestId);
  }, [isDevMode]);

  const stats = [
    { label: "FPS", val: fps, color: fps > 55 ? "text-green-500" : "text-red-500" },
    { label: "DOM", val: document.querySelectorAll('*').length, color: "text-blue-500" },
    { label: "MEM", val: "LOW", color: "text-green-500" },
    { label: "LOAD", val: "0.8s", color: "text-accent" },
  ];

  return (
    <AnimatePresence>
      {isDevMode && (
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          className="fixed bottom-24 right-6 z-50 flex flex-col gap-2 p-4 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl min-w-30"
        >
          <div className="flex items-center gap-2 mb-2 pb-2 border-b border-white/5">
            <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-[10px] font-bold text-muted uppercase tracking-widest">Dev_Metrics</span>
          </div>
          
          {stats.map(s => (
            <div key={s.label} className="flex items-center justify-between gap-6">
              <span className="text-[10px] text-muted font-mono uppercase">{s.label}</span>
              <span className={`text-[10px] font-bold font-mono ${s.color}`}>{s.val}</span>
            </div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Performance;