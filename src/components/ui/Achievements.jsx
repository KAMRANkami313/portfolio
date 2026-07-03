import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Award, Lock } from "lucide-react";
import { useAchievement } from "../../context/AchievementContext";

const Achievements = ({ isOpen, onClose }) => {
  const { unlocked, total, count, defs } = useAchievement();
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key !== "Escape") return;
      onClose();
    };

    const handleFocus = (e) => {
      if (!dialogRef.current?.contains(e.target)) {
        closeButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("focusin", handleFocus);
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", handleFocus);
      document.removeEventListener("focusin", handleFocus);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  const percentage = total > 0 ? Math.round((count / total) * 100) : 0;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-2000 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Achievements"
        >
          <motion.div
            ref={dialogRef}
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.2 }}
            className="glass-strong rounded-2xl shadow-lg w-full max-w-lg max-h-[80vh] overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent/10 border border-accent/20">
                  <Award className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white">Achievements</h2>
                  <p className="text-xs text-muted">
                    {count} of {total} unlocked · {percentage}%
                  </p>
                </div>
              </div>
              <button
                ref={closeButtonRef}
                onClick={onClose}
                className="p-2 text-muted hover:text-white transition-colors"
                aria-label="Close achievements"
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-4 border-b border-white/10">
              <div className="h-2 rounded-full bg-surface-light overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${percentage}%`,
                    background: "linear-gradient(to right, var(--color-accent), var(--color-accent-soft))",
                  }}
                />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto scrollbar-thin p-4 space-y-2">
              {Object.entries(defs).map(([key, def]) => {
                const isUnlocked = !!unlocked[key];
                const Icon = def.Icon;
                return (
                  <div
                    key={key}
                    className={`flex items-center gap-3 p-3 rounded-lg border transition-colors ${
                      isUnlocked
                        ? "bg-accent/5 border-accent/20"
                        : "bg-surface-light border-white/5 opacity-60"
                    }`}
                  >
                    <div
                      className={`flex items-center justify-center w-10 h-10 rounded-lg shrink-0 ${
                        isUnlocked ? "bg-accent/10 border border-accent/20" : "bg-surface border border-white/5"
                      }`}
                    >
                      {isUnlocked ? (
                        <Icon className="w-5 h-5 text-accent" />
                      ) : (
                        <Lock className="w-4 h-4 text-muted" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm font-semibold ${isUnlocked ? "text-white" : "text-muted"}`}>
                        {def.title}
                      </p>
                      <p className="text-xs text-muted">{def.desc}</p>
                    </div>
                    {isUnlocked && (
                      <span className="text-[10px] font-mono text-accent uppercase tracking-widest shrink-0">
                        Unlocked
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Achievements;