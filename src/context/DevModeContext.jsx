import React, { createContext, useContext, useState } from 'react';

const DevModeContext = createContext();

export const DevModeProvider = ({ children }) => {
  const [isDevMode, setIsDevMode] = useState(false);
  return (
    <DevModeContext.Provider value={{ isDevMode, setIsDevMode }}>
      <div className={isDevMode ? "debug-screens" : ""}>
        {isDevMode && (
          <div className="fixed inset-0 z-150 pointer-events-none border border-accent/20 grid grid-cols-12 gap-4 px-6 opacity-30">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="h-full bg-accent/5 border-x border-accent/10" />
            ))}
          </div>
        )}
        {children}
      </div>
    </DevModeContext.Provider>
  );
};

export const useDevMode = () => useContext(DevModeContext);