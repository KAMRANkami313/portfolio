import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [accent, setAccent] = useState(() => {
    return localStorage.getItem('kamran-ui-accent') || '#3b82f6';
  });

  useEffect(() => {
    document.documentElement.style.setProperty('--color-accent', accent);
    localStorage.setItem('kamran-ui-accent', accent);
    
    const r = parseInt(accent.slice(1, 3), 16);
    const g = parseInt(accent.slice(3, 5), 16);
    const b = parseInt(accent.slice(5, 7), 16);
    document.documentElement.style.setProperty('--color-accent-rgb', `${r}, ${g}, ${b}`);
  }, [accent]);

  return (
    <ThemeContext.Provider value={{ accent, setAccent }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);