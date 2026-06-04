import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { motion } from 'framer-motion';

const colors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

const ColorPicker = () => {
  const { accent, setAccent } = useTheme();

  return (
    <div className="flex flex-col gap-4 p-3 bg-surface/60 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl">
      <p className="text-[8px] font-black text-muted uppercase tracking-[0.3em] text-center">UI_Tone</p>
      <div className="flex flex-col gap-3">
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => {
              setAccent(color);
              document.documentElement.style.setProperty('--color-accent-rgb', color);
            }}
            className="relative flex items-center justify-center group"
          >
            <div 
              style={{ backgroundColor: color }}
              className={`w-5 h-5 rounded-lg transition-all duration-300 group-hover:scale-125 cursor-pointer shadow-lg ${
                accent === color ? "scale-125 ring-2 ring-white/20 ring-offset-4 ring-offset-dark" : "opacity-40"
              }`}
            />
            {accent === color && (
              <motion.div 
                layoutId="active-color"
                className="absolute -left-4 w-1 h-3 bg-white rounded-full"
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;