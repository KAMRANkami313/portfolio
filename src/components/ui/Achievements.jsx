import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAchievement } from '../../context/AchievementContext';
import { FiAward, FiX } from 'react-icons/fi';

const Achievements = ({ isOpen, onClose }) => {
  const { unlocked, total, count, defs } = useAchievement();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-200 flex items-center justify-center bg-dark/80 backdrop-blur-md"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Achievements"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg mx-4 bg-surface/95 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-[0_32px_64px_rgba(0,0,0,0.8)] overflow-hidden"
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/5">
              <div className="flex items-center gap-3">
                <FiAward className="text-accent text-xl" />
                <div>
                  <h3 className="text-lg font-black text-white">Achievements</h3>
                  <p className="text-[10px] font-mono text-muted">{count}/{total} Unlocked</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-muted hover:text-white hover:bg-white/5 rounded-xl transition-all"
                aria-label="Close achievements"
              >
                <FiX />
              </button>
            </div>

            <div className="p-6 max-h-[60vh] overflow-y-auto scrollbar-thin">
              <div className="mb-6">
                <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-linear-to-r from-accent/60 to-accent rounded-full transition-all duration-500"
                    style={{ width: `${(count / total) * 100}%` }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {Object.entries(defs).map(([key, def]) => {
                  const isDone = !!unlocked[key];
                  return (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex items-center gap-4 p-4 rounded-2xl border transition-all ${
                        isDone
                          ? 'bg-accent/5 border-accent/20'
                          : 'bg-white/2 border-white/5 opacity-50'
                      }`}
                    >
                      <span className="text-2xl">{def.icon}</span>
                      <div className="flex-1">
                        <p className={`text-sm font-bold ${isDone ? 'text-white' : 'text-muted'}`}>
                          {def.title}
                        </p>
                        <p className="text-[11px] text-muted">{def.desc}</p>
                      </div>
                      {isDone && (
                        <div className="px-2 py-1 bg-accent/10 rounded-lg">
                          <span className="text-[9px] font-black text-accent uppercase">Unlocked</span>
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Achievements;