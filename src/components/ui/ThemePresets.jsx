import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme, THEME_PRESETS } from '../../context/ThemeContext';
import { useAchievement } from '../../context/AchievementContext';
import { LuPalette } from 'react-icons/lu';

const ThemePresets = () => {
  const { accent, setAccent, activePreset, applyPreset } = useTheme();
  const { unlock } = useAchievement();
  const [isOpen, setIsOpen] = useState(false);

  const handlePreset = (preset) => {
    applyPreset(preset.id);
    if (preset.id !== 'default') {
      unlock('used_preset');
    }
    unlock('changed_theme');
  };

  const handleCustomColor = (hex) => {
    setAccent(hex);
    unlock('changed_theme');
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-surface/50 backdrop-blur-md text-muted hover:text-white hover:border-accent/30 transition-all"
        aria-label="Change theme color"
      >
        <LuPalette size={12} />
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
            className="absolute top-full mt-2 right-0 p-3 bg-surface/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl z-50 w-64"
          >
            <p className="text-[9px] font-black text-accent uppercase tracking-[0.3em] mb-3">Theme_Presets</p>
            <div className="grid grid-cols-5 gap-2 mb-3">
              {THEME_PRESETS.map((preset) => (
                <button
                  key={preset.id}
                  onClick={() => handlePreset(preset)}
                  className="group relative flex flex-col items-center gap-1 p-1.5 rounded-xl hover:bg-white/5 transition-colors"
                  title={preset.name}
                  aria-label={`Apply ${preset.name} theme`}
                >
                  <div
                    style={{ backgroundColor: preset.accent }}
                    className={`w-6 h-6 rounded-lg transition-all duration-200 group-hover:scale-110 shadow-md ${
                      activePreset === preset.id
                        ? "ring-2 ring-white/30 ring-offset-2 ring-offset-surface scale-110"
                        : "opacity-60 hover:opacity-100"
                    }`}
                  />
                  <span className="text-[7px] font-bold text-muted uppercase">{preset.name.slice(0, 4)}</span>
                </button>
              ))}
            </div>

            <div className="border-t border-white/5 pt-3">
              <p className="text-[9px] font-black text-muted uppercase tracking-[0.3em] mb-2">Custom_Accent</p>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={accent}
                  onChange={(e) => handleCustomColor(e.target.value)}
                  className="w-8 h-8 rounded-lg border border-white/10 cursor-pointer bg-transparent"
                  aria-label="Pick custom accent color"
                />
                <span className="text-[10px] font-mono text-muted uppercase">{accent}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemePresets;