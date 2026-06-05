import React from 'react';

const SectionDivider = ({ variant = 'wave' }) => {
  const variants = {
    wave: (
      <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
        <path
          d="M0 30 C360 60 720 0 1080 30 C1260 45 1380 35 1440 30"
          stroke="rgba(var(--color-accent-rgb), 0.1)"
          strokeWidth="1"
          fill="none"
          strokeDasharray="10 10"
          style={{ animation: 'divider-flow 3s linear infinite' }}
        />
        <path
          d="M0 30 C360 0 720 60 1080 30 C1260 15 1380 25 1440 30"
          stroke="rgba(var(--color-accent-rgb), 0.05)"
          strokeWidth="1"
          fill="none"
          strokeDasharray="6 6"
          style={{ animation: 'divider-flow 5s linear infinite reverse' }}
        />
      </svg>
    ),
    dots: (
      <div className="flex items-center justify-center gap-2 py-8">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="w-1 h-1 rounded-full bg-accent/20"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
        <div className="w-8 h-px bg-accent/10 mx-2" />
        {[...Array(5)].map((_, i) => (
          <div
            key={i + 5}
            className="w-1 h-1 rounded-full bg-accent/10"
            style={{ animationDelay: `${(i + 5) * 0.2}s` }}
          />
        ))}
      </div>
    ),
    line: (
      <div className="relative py-8 flex items-center justify-center">
        <div className="w-full max-w-3xl h-px bg-linear-to-r from-transparent via-accent/10 to-transparent" />
        <div className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 border border-accent/20 bg-dark" />
      </div>
    ),
  };

  return (
    <div className="w-full overflow-hidden select-none pointer-events-none" aria-hidden="true">
      {variants[variant] || variants.wave}
    </div>
  );
};

export default SectionDivider;