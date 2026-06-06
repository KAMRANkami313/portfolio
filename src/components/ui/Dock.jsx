import React, { useState } from 'react';
import { FiHome, FiCode, FiUser, FiMail, FiCpu, FiMessageSquare, FiAward } from 'react-icons/fi';
import { useAudio } from '../../hooks/useAudio';

const Dock = ({ onAchievementsClick }) => {
  const { playHover, playClick } = useAudio();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const items = [
    { icon: <FiHome />, href: "#hero", label: "Home" },
    { icon: <FiCpu />, href: "#skills", label: "Skills" },
    { icon: <FiCode />, href: "#projects", label: "Projects" },
    { icon: <FiUser />, href: "#experience", label: "Experience" },
    { icon: <FiMessageSquare />, href: "#testimonials", label: "Reviews" },
    { icon: <FiAward />, href: null, label: "Badges", onClick: onAchievementsClick },
    { icon: <FiMail />, href: "#contact", label: "Contact" },
  ];

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-100 px-4 md:px-0 w-full max-w-fit opacity-0 animate-dock-in will-animate">
      <div className="flex items-center gap-1 sm:gap-3 px-4 py-3 bg-surface/40 backdrop-blur-3xl border border-white/10 rounded-4xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        {items.map((item, i) => {
          const isLink = !!item.href;
          const Tag = isLink ? 'a' : 'button';
          const props = isLink
            ? { href: item.href }
            : { onClick: item.onClick, type: 'button' };

          return (
            <div key={i} className="relative group">
              {/* Tooltip */}
              <div className={`absolute left-1/2 -translate-x-1/2 px-3 py-1 bg-accent text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-lg shadow-xl pointer-events-none whitespace-nowrap transition-all duration-200 ${
                hoveredIndex === i
                  ? 'opacity-100 -translate-y-11 scale-100'
                  : 'opacity-0 translate-y-2 scale-75'
              }`}>
                {item.label}
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-accent" />
              </div>

              <Tag
                {...props}
                onMouseEnter={() => {
                  setHoveredIndex(i);
                  playHover();
                }}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={(e) => {
                  playClick();
                  if (!isLink && item.onClick) item.onClick(e);
                }}
                className={`relative p-3 sm:p-4 text-xl sm:text-2xl text-muted hover:text-white rounded-2xl transition-all duration-200 flex items-center justify-center ${
                  hoveredIndex === i ? '-translate-y-2.5 scale-140 bg-white/10' : 'scale-100'
                }`}
                style={{ willChange: 'transform' }}
                aria-label={item.label}
              >
                {item.icon}
                {hoveredIndex === i && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent rounded-full" />
                )}
              </Tag>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dock;