import React from 'react';

const StatusBar = () => {
  return (
    <div className="fixed bottom-6 left-6 z-40 hidden lg:flex items-center gap-3 px-4 py-2 bg-surface/80 backdrop-blur-md border border-white/10 rounded-full shadow-2xl">
      <div className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
      </div>
      <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted">
        Currently: Optimizing EventPulse
      </span>
    </div>
  );
};

export default StatusBar;