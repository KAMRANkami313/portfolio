import React from 'react';

const Aura = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none select-none">
      <div className="absolute top-[-30%] left-[-15%] w-[70%] h-[70%] rounded-full bg-accent/20 blur-[180px] will-change-transform animate-aura-1" />

      <div
        className="absolute bottom-[-25%] right-[-15%] w-[60%] h-[60%] rounded-full blur-[180px] will-change-transform animate-aura-2"
        style={{ backgroundColor: 'rgba(139, 92, 246, 0.12)' }}
      />

      <div
        className="absolute top-[30%] right-[10%] w-[40%] h-[40%] rounded-full blur-[160px] will-change-transform animate-aura-3"
        style={{ backgroundColor: 'rgba(236, 72, 153, 0.08)' }}
      />

      <div className="absolute inset-0 bg-dark/30 backdrop-blur-[10px]" />
    </div>
  );
};

export default Aura;