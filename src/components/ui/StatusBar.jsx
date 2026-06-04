import React, { useState, useEffect } from 'react';

const StatusBar = () => {
  const [statusIndex, setStatusIndex] = useState(0);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  const statuses = [
    "Optimizing_EventPulse_v2",
    "Refactoring_Socket_Logic",
    "Monitoring_System_Vitals",
    "Deploying_Microservices",
    "Compiling_Portfolio_Assets"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setStatusIndex((prev) => (prev + 1) % statuses.length);
    }, 4000);

    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      clearInterval(interval);
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [statuses.length]);

  return (
    <div className="fixed bottom-6 left-6 z-40 hidden lg:flex items-center gap-4 px-5 py-2.5 bg-surface/60 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">
      <div className="flex items-center gap-2 pr-4 border-r border-white/10">
        <div className="relative flex h-2 w-2">
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isOnline ? 'bg-green-400' : 'bg-red-400'}`}></span>
          <span className={`relative inline-flex rounded-full h-2 w-2 ${isOnline ? 'bg-green-500' : 'bg-red-500'}`}></span>
        </div>
        <span className="text-[9px] font-black font-mono uppercase tracking-widest text-white/70">
          {isOnline ? 'Network_Live' : 'Network_Lost'}
        </span>
      </div>
      
      <div className="flex items-center gap-3">
        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-accent font-bold">
          Current_Task:
        </span>
        <span className="text-[10px] font-mono text-white/50 lowercase tracking-tight">
          {statuses[statusIndex]}...
        </span>
      </div>
    </div>
  );
};

export default StatusBar;