import React from "react";

const VARIANTS = {
  line: (
    <div className="w-full max-w-2xl mx-auto h-px" style={{ background: "linear-gradient(to right, transparent, var(--color-border), transparent)" }} />
  ),
  dots: (
    <div className="flex items-center justify-center gap-2">
      {[0, 1, 2].map((i) => (
        <span key={i} className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--color-accent)", opacity: 0.3 + i * 0.2 }} />
      ))}
    </div>
  ),
  wave: (
    <svg className="w-full max-w-2xl mx-auto" height="20" viewBox="0 0 200 20" fill="none" preserveAspectRatio="none">
      <path d="M0 10 Q 25 0, 50 10 T 100 10 T 150 10 T 200 10" stroke="var(--color-border)" strokeWidth="1" fill="none" />
    </svg>
  ),
};

const SectionDivider = ({ variant = "line", className = "" }) => {
  return <div className={`py-8 ${className}`}>{VARIANTS[variant] || VARIANTS.line}</div>;
};

export default SectionDivider;