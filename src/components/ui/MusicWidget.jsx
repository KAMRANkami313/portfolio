import React from 'react';
import { FiMusic } from 'react-icons/fi';

const MusicWidget = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 hidden lg:flex items-center gap-3 px-4 py-2.5 bg-surface/60 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl group hover:border-accent/30 transition-all cursor-default animate-fade-in-right-delayed">
      <div className="flex items-center gap-0.5">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="w-0.5 bg-accent rounded-full origin-bottom animate-music-bar"
            style={{
              animationDelay: `${i * 0.15}s`,
              animationDuration: `${0.6 + Math.random() * 0.4}s`,
            }}
          />
        ))}
      </div>
      <div className="flex flex-col">
        <span className="text-[8px] font-black text-accent uppercase tracking-widest">Currently Vibing</span>
        <span className="text-[10px] font-bold text-white/70">Lo-fi & Code</span>
      </div>
      <FiMusic size={10} className="text-accent/50" />
    </div>
  );
};

export default MusicWidget;