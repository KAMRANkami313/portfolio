import React, { createContext, useContext, useState } from 'react';

const DevModeContext = createContext();

export const DevModeProvider = ({ children }) => {
  const [isDevMode, setIsDevMode] = useState(false);
  
  return (
    <DevModeContext.Provider value={{ isDevMode, setIsDevMode }}>
      <div className={isDevMode ? "debug-screens" : ""}>
        {isDevMode && (
          <div className="fixed inset-0 z-150 pointer-events-none opacity-20 overflow-hidden">
            <div className="absolute inset-0 grid grid-cols-12 gap-6 px-6 h-full">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="h-full bg-accent/5 border-x border-accent/10 relative">
                   <span className="absolute top-4 left-1/2 -translate-x-1/2 text-[8px] font-mono text-accent">COL_{i+1}</span>
                </div>
              ))}
            </div>
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_39px,rgba(59,130,246,0.05)_40px)] bg-size-[100%_40px]" />
          </div>
        )}
        {children}
      </div>
    </DevModeContext.Provider>
  );
};

export const useDevMode = () => useContext(DevModeContext);