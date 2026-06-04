import React from 'react';
import { useDevMode } from '../../context/DevModeContext';
import { useAudio } from '../../hooks/useAudio';

const DevToggle = () => {
  const { isDevMode, setIsDevMode } = useDevMode();
  const { playClick } = useAudio();

  const handleToggle = () => {
    playClick();
    setIsDevMode(!isDevMode);
  };

  return (
    <button 
      onClick={handleToggle}
      className={`relative group flex items-center gap-3 px-4 py-1.5 rounded-full border transition-all duration-300 ${
        isDevMode 
          ? "bg-accent/10 border-accent text-accent shadow-[0_0_15px_rgba(59,130,246,0.3)]" 
          : "bg-white/5 border-white/10 text-muted hover:border-white/20"
      }`}
    >
      <div className={`w-1.5 h-1.5 rounded-full ${isDevMode ? "bg-accent animate-pulse" : "bg-white/20"}`} />
      <span className="text-[9px] font-black font-mono uppercase tracking-[0.2em]">
        Debug: {isDevMode ? "Active" : "Static"}
      </span>
      <div className={`w-6 h-3 rounded-full border border-current relative transition-all ${isDevMode ? "opacity-100" : "opacity-30"}`}>
        <div className={`absolute top-0.5 h-1.5 w-1.5 rounded-full bg-current transition-all ${isDevMode ? "left-3.5" : "left-0.5"}`} />
      </div>
    </button>
  );
};

export default DevToggle;