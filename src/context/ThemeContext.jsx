import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from "react";

const ThemeContext = createContext();

export const THEME_PRESETS = [
  { id: "indigo", name: "Indigo", accent: "#6366f1" },
  { id: "violet", name: "Violet", accent: "#8b5cf6" },
  { id: "blue", name: "Blue", accent: "#3b82f6" },
  { id: "cyan", name: "Cyan", accent: "#06b6d4" },
  { id: "emerald", name: "Emerald", accent: "#10b981" },
  { id: "rose", name: "Rose", accent: "#f43f5e" },
  { id: "amber", name: "Amber", accent: "#f59e0b" },
  { id: "pink", name: "Pink", accent: "#ec4899" },
];

const isValidHex = (hex) => /^#[0-9a-fA-F]{6}$/.test(hex);

const normalizeHex = (hex) => {
  if (typeof hex !== "string") return "#6366f1";
  if (/^#[0-9a-fA-F]{3}$/.test(hex)) {
    return "#" + hex.slice(1).split("").map((c) => c + c).join("").toLowerCase();
  }
  if (isValidHex(hex)) return hex.toLowerCase();
  return "#6366f1";
};

const hexToRgb = (hex) => {
  const normalized = normalizeHex(hex);
  const r = parseInt(normalized.slice(1, 3), 16);
  const g = parseInt(normalized.slice(3, 5), 16);
  const b = parseInt(normalized.slice(5, 7), 16);
  return `${r}, ${g}, ${b}`;
};

const getPresetIdByAccent = (accent) => {
  const preset = THEME_PRESETS.find((p) => p.accent.toLowerCase() === accent.toLowerCase());
  return preset ? preset.id : "custom";
};

export const ThemeProvider = ({ children }) => {
  const [accent, setAccentRaw] = useState(() => {
    return normalizeHex(localStorage.getItem("kamran-ui-accent") || "#6366f1");
  });

  const [activePreset, setActivePreset] = useState(() => {
    return localStorage.getItem("kamran-ui-preset") || "indigo";
  });

  useEffect(() => {
    const normalized = normalizeHex(accent);
    document.documentElement.style.setProperty("--color-accent", normalized);
    document.documentElement.style.setProperty("--color-accent-rgb", hexToRgb(normalized));
    localStorage.setItem("kamran-ui-accent", normalized);
  }, [accent]);

  useEffect(() => {
    localStorage.setItem("kamran-ui-preset", activePreset);
  }, [activePreset]);

  const setAccent = useCallback((hex) => {
    const normalized = normalizeHex(hex);
    setAccentRaw(normalized);
    setActivePreset(getPresetIdByAccent(normalized));
  }, []);

  const applyPreset = useCallback((presetId) => {
    const preset = THEME_PRESETS.find((p) => p.id === presetId);
    if (preset) {
      setAccentRaw(preset.accent);
      setActivePreset(presetId);
    }
  }, []);

  const value = useMemo(
    () => ({ accent, setAccent, activePreset, applyPreset, presets: THEME_PRESETS }),
    [accent, setAccent, activePreset, applyPreset]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);