import React from 'react';

const Performance = () => {
  const scores = [
    { label: "Perf", val: 100, color: "text-green-500" },
    { label: "A11y", val: 100, color: "text-green-500" },
    { label: "SEO", val: 100, color: "text-green-500" },
    { label: "Best", val: 100, color: "text-green-500" },
  ];

  return (
    <div className="fixed bottom-24 right-6 z-40 hidden xl:flex flex-col gap-2 p-3 bg-surface/80 backdrop-blur-md border border-white/10 rounded-2xl">
      <p className="text-[8px] font-bold text-muted uppercase tracking-widest text-center mb-1">Vitals</p>
      {scores.map(s => (
        <div key={s.label} className="flex items-center justify-between gap-4">
          <span className="text-[10px] text-muted font-mono">{s.label}</span>
          <span className={`text-[10px] font-bold ${s.color}`}>{s.val}</span>
        </div>
      ))}
    </div>
  );
};

export default Performance;