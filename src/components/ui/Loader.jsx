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
      
      <div className="relative mb-12">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="w-32 h-32 rounded-[2.5rem] border-2 border-accent/20 border-t-accent"
        />
        <div className="absolute inset-0 flex items-center justify-center">
           <span className="text-xl font-black font-mono">{percent}%</span>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl font-black tracking-[0.5em] text-white uppercase italic">
          KAMRAN_OS
        </h1>
        <div className="w-64 h-1 bg-white/5 rounded-full overflow-hidden relative">
          <motion.div 
            style={{ width: `${percent}%` }}
            className="absolute inset-y-0 left-0 bg-accent"
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
        <div className="font-mono text-[8px] text-muted space-y-1">
          <p>CORE: ARMV8-A</p>
          <p>MEMORY: 1024MB</p>
          <p>BUILD: 2025.03.STABLE</p>
        </div>
        <div className="text-right font-mono text-[8px] text-muted">
           <p>ESTABLISHING_SECURE_CONNECTION...</p>
           <p>LOCAL_HOST: 127.0.0.1</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Loader;