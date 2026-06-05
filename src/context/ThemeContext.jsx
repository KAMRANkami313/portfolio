import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const THEME_PRESETS = [
  { id: 'default', name: 'Indigo', accent: '#6366f1', rgb: '99, 102, 241' },
  { id: 'cyberpunk', name: 'Cyberpunk', accent: '#f0e744', rgb: '240, 231, 68' },
  { id: 'matrix', name: 'Matrix', accent: '#00ff41', rgb: '0, 255, 65' },
  { id: 'ocean', name: 'Ocean', accent: '#06b6d4', rgb: '6, 182, 212' },
  { id: 'sunset', name: 'Sunset', accent: '#f97316', rgb: '249, 115, 22' },
  { id: 'cherry', name: 'Cherry', accent: '#ef4444', rgb: '239, 68, 68' },
  { id: 'violet', name: 'Violet', accent: '#8b5cf6', rgb: '139, 92, 246' },
  { id: 'pink', name: 'Pink', accent: '#ec4899', rgb: '236, 72, 153' },
  { id: 'emerald', name: 'Emerald', accent: '#10b981', rgb: '16, 185, 129' },
  { id: 'amber', name: 'Amber', accent: '#f59e0b', rgb: '245, 158, 11' },
];

export const ThemeProvider = ({ children }) => {
  const [accent, setAccent] = useState(() => {
    return localStorage.getItem('kamran-ui-accent') || '#6366f1';
  });

  const [activePreset, setActivePreset] = useState(() => {
    return localStorage.getItem('kamran-ui-preset') || 'default';
  });

  useEffect(() => {
    document.documentElement.style.setProperty('--color-accent', accent);
    localStorage.setItem('kamran-ui-accent', accent);

    const r = parseInt(accent.slice(1, 3), 16);
    const g = parseInt(accent.slice(3, 5), 16);
    const b = parseInt(accent.slice(5, 7), 16);
    document.documentElement.style.setProperty('--color-accent-rgb', `${r}, ${g}, ${b}`);
  }, [accent]);

  const applyPreset = (presetId) => {
    const preset = THEME_PRESETS.find(p => p.id === presetId);
    if (preset) {
      setAccent(preset.accent);
      setActivePreset(presetId);
      localStorage.setItem('kamran-ui-preset', presetId);
    }
  };

  return (
    <ThemeContext.Provider value={{ accent, setAccent, activePreset, applyPreset, presets: THEME_PRESETS }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);