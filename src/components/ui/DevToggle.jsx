import React from 'react';
import { useDevMode } from '../../context/DevModeContext';

const DevToggle = () => {
  const { isDevMode, setIsDevMode } = useDevMode();
  return (
    <button 
      onClick={() => setIsDevMode(!isDevMode)}
      className={`text-[10px] font-mono px-3 py-1 rounded-full border transition-all cursor-pointer ${
        isDevMode 
          ? "bg-accent text-white border-accent shadow-[0_0_10px_rgba(59,130,246,0.5)]" 
          : "bg-transparent text-muted border-white/10 hover:border-white/20"
      }`}
    >
      {isDevMode ? "SYSTEM_DEBUG: ON" : "SYSTEM_DEBUG: OFF"}
    </button>
  );
};

export default DevToggle;