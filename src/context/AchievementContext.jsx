import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiAward, FiX } from 'react-icons/fi';

const AchievementContext = createContext();

const ACHIEVEMENT_DEFS = {
  first_visit: { title: 'Welcome Explorer', desc: 'You visited the portfolio!', icon: '🏠' },
  scrolled_half: { title: 'Deep Diver', desc: 'Scrolled past 50% of the page', icon: '🌊' },
  scrolled_full: { title: 'Completionist', desc: 'Scrolled to the very bottom', icon: '🏆' },
  used_chatbot: { title: 'AI Whisperer', desc: 'Had a conversation with KAMI_AI', icon: '🤖' },
  sent_message: { title: 'First Contact', desc: 'Sent a contact message', icon: '📨' },
  found_easter_egg: { title: 'The Explorer', desc: 'Discovered the Konami Code secret', icon: '🥚' },
  changed_theme: { title: 'Style Changer', desc: 'Changed the accent color theme', icon: '🎨' },
  used_command: { title: 'Power User', desc: 'Used the Command Palette (Ctrl+K)', icon: '⌨️' },
  viewed_projects: { title: 'Code Reviewer', desc: 'Viewed the projects section', icon: '👀' },
  visited_all_sections: { title: 'Full Scan', desc: 'Visited every section of the portfolio', icon: '📡' },
  used_preset: { title: 'Theme Master', desc: 'Applied a theme preset', icon: '🎭' },
};

export const AchievementProvider = ({ children }) => {
  const [unlocked, setUnlocked] = useState(() => {
    try {
      const saved = localStorage.getItem('kamran-achievements');
      return saved ? JSON.parse(saved) : {};
    } catch { return {}; }
  });

  const [popup, setPopup] = useState(null);
  const [popupQueue, setPopupQueue] = useState([]);

  useEffect(() => {
    localStorage.setItem('kamran-achievements', JSON.stringify(unlocked));
  }, [unlocked]);

  useEffect(() => {
    if (popup) {
      const timer = setTimeout(() => setPopup(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [popup]);

  useEffect(() => {
    if (!popup && popupQueue.length > 0) {
      const [next, ...rest] = popupQueue;
      setPopup(next);
      setPopupQueue(rest);
    }
  }, [popup, popupQueue]);

  const unlock = useCallback((key) => {
    if (unlocked[key]) return;
    const def = ACHIEVEMENT_DEFS[key];
    if (!def) return;
    setUnlocked((prev) => ({ ...prev, [key]: Date.now() }));
    if (popup) {
      setPopupQueue((prev) => [...prev, { key, ...def }]);
    } else {
      setPopup({ key, ...def });
    }
  }, [unlocked, popup]);

  const isUnlocked = useCallback((key) => !!unlocked[key], [unlocked]);

  const total = Object.keys(ACHIEVEMENT_DEFS).length;
  const count = Object.keys(unlocked).length;

  return (
    <AchievementContext.Provider value={{ unlock, isUnlocked, unlocked, total, count, defs: ACHIEVEMENT_DEFS }}>
      {children}
      <AnimatePresence>
        {popup && (
          <motion.div
            initial={{ y: -80, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -80, opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-1000 flex items-center gap-4 px-6 py-4 bg-surface/95 backdrop-blur-2xl border border-accent/20 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
          >
            <div className="text-3xl animate-badge-pop">{popup.icon}</div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <FiAward className="text-accent text-xs" />
                <span className="text-[9px] font-black text-accent uppercase tracking-[0.3em]">Achievement_Unlocked</span>
              </div>
              <p className="text-sm font-bold text-white mt-0.5">{popup.title}</p>
              <p className="text-[11px] text-white/50">{popup.desc}</p>
            </div>
            <button
              onClick={() => setPopup(null)}
              className="ml-4 p-1.5 text-white/20 hover:text-white transition-colors"
              aria-label="Dismiss achievement"
            >
              <FiX size={14} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </AchievementContext.Provider>
  );
};

export const useAchievement = () => useContext(AchievementContext);