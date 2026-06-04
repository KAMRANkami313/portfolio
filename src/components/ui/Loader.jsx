import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Loader = ({ finishLoading }) => {
  const [percent, setPercent] = useState(0);
  const [status, setStatus] = useState("Initializing_Kernel");
  const finishTimeoutRef = useRef(null);

  const statuses = [
    "Loading_Assets",
    "Configuring_DOM",
    "Injecting_Style_Nodes",
    "Synchronizing_Realtime_Pipes",
    "Booting_System"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) return 100;
        const next = prev + Math.floor(Math.random() * 5) + 1;
        return next > 100 ? 100 : next;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setStatus(statuses[Math.floor((percent / 100) * (statuses.length - 1))]);

    if (percent === 100) {
      finishTimeoutRef.current = setTimeout(finishLoading, 800);
    }

    return () => {
      if (finishTimeoutRef.current) {
        clearTimeout(finishTimeoutRef.current);
      }
    };
  }, [percent, finishLoading]);

  return (
    <motion.div 
      exit={{ y: "-100vh" }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-200 flex flex-col items-center justify-center bg-dark"
    >
      <div className="absolute inset-0 grid-bg opacity-20" />
      
      <div className="relative mb-16">
        {/* Outer spinning ring */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="w-36 h-36 rounded-full border-2 border-accent/10 border-t-accent"
        />
        {/* Inner spinning ring - opposite direction */}
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          className="absolute inset-3 rounded-full border border-white/5 border-b-accent/40"
        />
        {/* Center content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <span className="text-3xl font-black font-mono bg-linear-to-r from-accent to-violet-400 bg-clip-text text-transparent">{percent}%</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-5">
        <h1 className="text-3xl font-black tracking-[0.6em] text-white uppercase italic">
          KAMRAN<span className="text-accent">_</span>OS
        </h1>
        
        <div className="w-72 h-0.5 bg-white/5 rounded-full overflow-hidden relative">
          <motion.div 
            style={{ width: `${percent}%` }}
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-accent via-violet-400 to-fuchsia-400 rounded-full"
          />
        </div>
        
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span className="text-[10px] font-mono text-muted uppercase tracking-[0.3em]">
            {status}...
          </span>
        </div>
      </div>

      <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end">
        <div className="font-mono text-[8px] text-muted/50 space-y-1">
          <p>CORE: ARMV8-A</p>
          <p>MEMORY: 1024MB</p>
          <p>BUILD: 2025.03.STABLE</p>
        </div>
        <div className="text-right font-mono text-[8px] text-muted/50">
           <p>ESTABLISHING_SECURE_CONNECTION...</p>
           <p>LOCAL_HOST: 127.0.0.1</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Loader;