import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import { LuPalette } from 'react-icons/lu'; // Changed from FiPalette to LuPalette

const themes = [
  { hex: '#6366f1', name: 'Indigo' },
  { hex: '#3b82f6', name: 'Blue' },
  { hex: '#06b6d4', name: 'Cyan' },
  { hex: '#10b981', name: 'Emerald' },
  { hex: '#f59e0b', name: 'Amber' },
  { hex: '#ef4444', name: 'Rose' },
  { hex: '#8b5cf6', name: 'Violet' },
  { hex: '#ec4899', name: 'Pink' },
];

const ColorPicker = () => {
  const { accent, setAccent } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-surface/50 backdrop-blur-md text-muted hover:text-white hover:border-accent/30 transition-all"
      >
        <LuPalette size={12} /> {/* Updated icon */}
        <span className="text-[9px] font-black uppercase tracking-widest hidden sm:inline">Theme</span>
        <div
          className="w-2.5 h-2.5 rounded-full border border-white/20"
          style={{ backgroundColor: accent }}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 5, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full mt-2 right-0 p-2.5 bg-surface/90 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl z-50"
          >
            <div className="grid grid-cols-4 gap-2">
              {themes.map((theme) => (
                <button
                  key={theme.hex}
                  onClick={() => {
                    setAccent(theme.hex);
                    setIsOpen(false);
                  }}
                  className="group relative flex flex-col items-center gap-1 p-1.5 rounded-xl hover:bg-white/5 transition-colors"
                  title={theme.name}
                >
                  <div
                    style={{ backgroundColor: theme.hex }}
                    className={`w-6 h-6 rounded-lg transition-all duration-200 group-hover:scale-110 shadow-md ${
                      accent === theme.hex
                        ? "ring-2 ring-white/30 ring-offset-2 ring-offset-surface scale-110"
                        : "opacity-60 hover:opacity-100"
                    }`}
                  />
                  <span className="text-[7px] font-bold text-muted uppercase">{theme.name}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ColorPicker;