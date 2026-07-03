import React, { useState, useEffect, useRef } from "react";
import { Palette, Check } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { useAchievement } from "../../context/AchievementContext";
import { useAudio } from "../../hooks/useAudio";

const ThemePresets = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const { accent, activePreset, applyPreset, setAccent, presets } = useTheme();
  const { unlock } = useAchievement();
  const { playClick } = useAudio();

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const handlePresetClick = (presetId) => {
    playClick();
    applyPreset(presetId);
    unlock("used_preset");
    setIsOpen(false);
  };

  const handleCustomColor = (e) => {
    playClick();
    setAccent(e.target.value);
    unlock("changed_theme");
  };

  return (
    <div ref={containerRef} className="relative">
      <button
        onClick={() => {
          playClick();
          setIsOpen(!isOpen);
        }}
        className="p-2 text-muted hover:text-white transition-colors"
        aria-label="Open theme presets"
        aria-expanded={isOpen}
      >
        <Palette size={18} />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-56 glass-strong rounded-xl shadow-lg p-3 z-50 animate-fade-in-down">
          <p className="text-[10px] font-mono text-muted uppercase tracking-widest mb-2 px-1">
            Accent Color
          </p>
          <div className="grid grid-cols-4 gap-2">
            {presets.map((preset) => (
              <button
                key={preset.id}
                onClick={() => handlePresetClick(preset.id)}
                className="relative aspect-square rounded-lg transition-transform hover:scale-110"
                style={{ backgroundColor: preset.accent }}
                aria-label={`Apply ${preset.name} theme`}
                title={preset.name}
              >
                {activePreset === preset.id && (
                  <Check size={14} className="absolute inset-0 m-auto text-white" />
                )}
              </button>
            ))}
          </div>
          <div className="mt-3 pt-3 border-t border-white/10">
            <p className="text-[10px] font-mono text-muted uppercase tracking-widest mb-2 px-1">
              Custom
            </p>
            <div className="flex items-center gap-2">
              <input
                type="color"
                value={accent}
                onChange={handleCustomColor}
                className="w-8 h-8 rounded cursor-pointer bg-transparent border border-white/10"
                aria-label="Pick custom accent color"
              />
              <span className="text-xs text-muted font-mono">{accent}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemePresets;