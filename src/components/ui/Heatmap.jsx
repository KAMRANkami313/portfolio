import React from 'react';

const Heatmap = () => {
  const squares = Array.from({ length: 50 }, () => Math.floor(Math.random() * 4));

  return (
    <div className="mt-8">
      <p className="text-[10px] uppercase tracking-widest text-muted mb-3 font-bold">Contribution_Activity</p>
      <div className="flex flex-wrap gap-1">
        {squares.map((level, i) => (
          <div 
            key={i} 
            className={`w-3 h-3 rounded-sm ${
              level === 0 ? "bg-white/5" : 
              level === 1 ? "bg-accent/20" : 
              level === 2 ? "bg-accent/50" : "bg-accent"
            }`} 
          />
        ))}
      </div>
    </div>
  );
};

export default Heatmap;