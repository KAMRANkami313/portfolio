import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [accent, setAccent] = useState('#3b82f6');

  useEffect(() => {
    document.documentElement.style.setProperty('--color-accent', accent);
  }, [accent]);

  return (
    <ThemeContext.Provider value={{ accent, setAccent }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);