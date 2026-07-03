import React, { createContext, useContext, useState, useEffect, useCallback, useRef, useMemo } from "react";
import { Home, Compass, Trophy, Send, Palette, Command, Eye, Map, Sparkles, Award, X } from "lucide-react";

const AchievementContext = createContext();

const ACHIEVEMENT_DEFS = {
  first_visit: { title: "Welcome Explorer", desc: "You visited the portfolio!", Icon: Home },
  scrolled_half: { title: "Deep Diver", desc: "Scrolled past 50% of the page", Icon: Compass },
  scrolled_full: { title: "Completionist", desc: "Scrolled to the very bottom", Icon: Trophy },
  sent_message: { title: "First Contact", desc: "Sent a contact message", Icon: Send },
  changed_theme: { title: "Style Changer", desc: "Changed the accent color with the custom color picker", Icon: Palette },
  used_command: { title: "Power User", desc: "Used the Command Palette (Ctrl+K)", Icon: Command },
  viewed_projects: { title: "Code Reviewer", desc: "Viewed the projects section", Icon: Eye },
  visited_all_sections: { title: "Full Scan", desc: "Visited every section of the portfolio", Icon: Map },
  used_preset: { title: "Theme Master", desc: "Applied a theme preset", Icon: Sparkles },
};

const VALID_KEYS = Object.keys(ACHIEVEMENT_DEFS);

const cleanStaleEntries = (obj) => {
  const cleaned = {};
  VALID_KEYS.forEach((key) => {
    if (obj[key]) cleaned[key] = obj[key];
  });
  return cleaned;
};

export const AchievementProvider = ({ children }) => {
  const [unlocked, setUnlocked] = useState(() => {
    try {
      const saved = localStorage.getItem("kamran-achievements");
      if (!saved) return {};
      const parsed = JSON.parse(saved);
      return cleanStaleEntries(parsed);
    } catch {
      return {};
    }
  });

  const [popup, setPopupState] = useState(null);
  const [popupQueue, setPopupQueue] = useState([]);
  const [isExiting, setIsExiting] = useState(false);

  const unlockedRef = useRef(unlocked);
  const popupRef = useRef(null);
  const outerTimerRef = useRef(null);
  const innerTimerRef = useRef(null);

  useEffect(() => {
    unlockedRef.current = unlocked;
    localStorage.setItem("kamran-achievements", JSON.stringify(unlocked));
  }, [unlocked]);

  const setPopup = useCallback((nextPopup) => {
    popupRef.current = nextPopup;
    setPopupState(nextPopup);
  }, []);

  const clearPopup = useCallback(() => {
    popupRef.current = null;
    setPopupState(null);
  }, []);

  useEffect(() => {
    if (!popup && popupQueue.length > 0) {
      const [next, ...rest] = popupQueue;
      setPopup(next);
      setPopupQueue(rest);
    }
  }, [popup, popupQueue, setPopup]);

  useEffect(() => {
    if (popup) {
      setIsExiting(false);
      outerTimerRef.current = setTimeout(() => {
        setIsExiting(true);
        innerTimerRef.current = setTimeout(() => {
          clearPopup();
          setIsExiting(false);
        }, 400);
      }, 4000);
      return () => {
        if (outerTimerRef.current) clearTimeout(outerTimerRef.current);
        if (innerTimerRef.current) clearTimeout(innerTimerRef.current);
      };
    }
  }, [popup, clearPopup]);

  const unlock = useCallback((key) => {
    if (unlockedRef.current[key]) return;
    const def = ACHIEVEMENT_DEFS[key];
    if (!def) return;

    const newUnlocked = { ...unlockedRef.current, [key]: Date.now() };
    unlockedRef.current = newUnlocked;
    setUnlocked(newUnlocked);

    if (popupRef.current) {
      setPopupQueue((q) => [...q, { key, ...def }]);
    } else {
      setPopup({ key, ...def });
    }
  }, [setPopup]);

  const isUnlocked = useCallback((key) => !!unlocked[key], [unlocked]);

  const dismissPopup = useCallback(() => {
    setIsExiting(true);
    if (outerTimerRef.current) clearTimeout(outerTimerRef.current);
    innerTimerRef.current = setTimeout(() => {
      clearPopup();
      setIsExiting(false);
    }, 400);
  }, [clearPopup]);

  const total = VALID_KEYS.length;
  const count = VALID_KEYS.filter((key) => unlocked[key]).length;

  const value = useMemo(
    () => ({ unlock, isUnlocked, unlocked, total, count, defs: ACHIEVEMENT_DEFS }),
    [unlock, isUnlocked, unlocked, count]
  );

  return (
    <AchievementContext.Provider value={value}>
      {children}
      {popup && (
        <div
          className={`fixed top-6 left-1/2 -translate-x-1/2 z-1000 flex items-center gap-4 px-6 py-4 glass-strong rounded-2xl shadow-lg will-animate ${
            isExiting ? "opacity-0 -translate-y-5 scale-95" : "animate-scale-in"
          }`}
          style={{ transition: isExiting ? "all 0.3s ease-in" : undefined }}
          role="alert"
          aria-live="polite"
        >
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent/10 border border-accent/20">
            <popup.Icon className="w-5 h-5 text-accent" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <Award className="w-3 h-3 text-accent" />
              <span className="text-[9px] font-black text-accent uppercase tracking-[0.3em]">
                Achievement Unlocked
              </span>
            </div>
            <p className="text-sm font-bold text-white mt-0.5">{popup.title}</p>
            <p className="text-[11px] text-muted">{popup.desc}</p>
          </div>
          <button
            onClick={dismissPopup}
            className="ml-4 p-1.5 text-white/20 hover:text-white transition-colors"
            aria-label="Dismiss achievement"
          >
            <X size={14} />
          </button>
        </div>
      )}
    </AchievementContext.Provider>
  );
};

export const useAchievement = () => useContext(AchievementContext);