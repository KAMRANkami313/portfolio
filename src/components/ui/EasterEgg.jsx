import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiZap, FiStar } from 'react-icons/fi';

const KONAMI_CODE = [
  'ArrowUp', 'ArrowUp',
  'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight',
  'ArrowLeft', 'ArrowRight',
  'b', 'a',
];

const EasterEgg = () => {
  const [sequence, setSequence] = useState([]);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const handleKeyDown = useCallback((e) => {
    const key = e.key;
    
    setSequence((prev) => {
      const next = [...prev, key].slice(-KONAMI_CODE.length);
      
      if (next.length === KONAMI_CODE.length && 
          next.every((k, i) => k === KONAMI_CODE[i])) {
        setIsUnlocked(true);
        setTimeout(() => setIsUnlocked(false), 8000);
        return [];
      }
      
      return next;
    });
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Show hint after 30 seconds on page
  useEffect(() => {
    const timer = setTimeout(() => setShowHint(true), 30000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Subtle hint */}
      <AnimatePresence>
        {showHint && !isUnlocked && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.5 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 px-4 py-2 bg-surface/60 backdrop-blur-xl border border-white/5 rounded-full"
          >
            <p className="text-[9px] font-mono text-muted/40 uppercase tracking-[0.3em]">
              ↑↑↓↓←→←→BA — Try the Konami Code 🥚
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Unlocked overlay */}
      <AnimatePresence>
        {isUnlocked && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-200 flex items-center justify-center bg-dark/90 backdrop-blur-xl"
          >
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ x: 0, y: 0, scale: 0, opacity: 1 }}
                animate={{
                  x: (Math.random() - 0.5) * 800,
                  y: (Math.random() - 0.5) * 800,
                  scale: Math.random() * 2 + 0.5,
                  opacity: 0,
                  rotate: Math.random() * 720,
                }}
                transition={{ duration: 2 + Math.random() * 2, ease: "easeOut" }}
                className="absolute w-3 h-3 rounded-full"
                style={{
                  backgroundColor: [
                    'var(--color-accent)',
                    '#f59e0b',
                    '#10b981',
                    '#ec4899',
                    '#8b5cf6',
                  ][i % 5],
                }}
              />
            ))}

            <motion.div
              initial={{ scale: 0, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 10 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="relative text-center"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-20 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, transparent, var(--color-accent), transparent)',
                  opacity: 0.2,
                }}
              />

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="mb-8"
              >
                <div className="w-24 h-24 mx-auto rounded-3xl bg-accent/20 border border-accent/30 flex items-center justify-center">
                  <FiZap className="text-5xl text-accent" />
                </div>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-4"
              >
                SECRET <span className="text-gradient">UNLOCKED</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-xl text-accent font-bold uppercase tracking-[0.3em] mb-6"
              >
                Achievement Unlocked: The Explorer
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex items-center justify-center gap-2 text-muted"
              >
                <FiStar className="text-accent" />
                <span className="text-sm font-mono">You found the hidden easter egg! You're a true explorer.</span>
                <FiStar className="text-accent" />
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-8 text-[10px] font-mono text-muted/40 uppercase tracking-[0.4em]"
              >
                Disappearing in a few seconds...
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default EasterEgg;