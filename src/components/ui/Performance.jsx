import React, { useState, useEffect, useRef } from 'react';
import { useDevMode } from '../../context/DevModeContext';

const Performance = () => {
  const { isDevMode } = useDevMode();
  const [fps, setFps] = useState(0);
  const [domNodes, setDomNodes] = useState(0);
  const frameCountRef = useRef(0);
  const lastTimeRef = useRef(performance.now());

  useEffect(() => {
    let requestId;

    const loop = () => {
      frameCountRef.current++;
      const now = performance.now();
      if (now - lastTimeRef.current >= 1000) {
        setFps(Math.round((frameCountRef.current * 1000) / (now - lastTimeRef.current)));
        setDomNodes(document.querySelectorAll('*').length);
        frameCountRef.current = 0;
        lastTimeRef.current = now;
      }
      requestId = requestAnimationFrame(loop);
    };

    if (isDevMode) {
      requestId = requestAnimationFrame(loop);
    }

    return () => cancelAnimationFrame(requestId);
  }, [isDevMode]);

  const stats = [
    { label: "FPS", val: fps, color: fps > 55 ? "text-green-500" : fps > 30 ? "text-yellow-500" : "text-red-500" },
    { label: "DOM", val: domNodes, color: "text-blue-500" },
    { label: "MEM", val: "LOW", color: "text-green-500" },
    { label: "LOAD", val: "0.8s", color: "text-accent" },
  ];

  return (
    <div
      className={`fixed bottom-24 right-6 z-50 flex flex-col gap-2 p-4 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl min-w-30 transition-all duration-300 will-animate ${
        isDevMode
          ? 'opacity-100 translate-x-0'
          : 'opacity-0 translate-x-5 pointer-events-none'
      }`}
    >
      <div className="flex items-center gap-2 mb-2 pb-2 border-b border-white/5">
        <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
        <span className="text-[10px] font-bold text-muted uppercase tracking-widest">Dev_Metrics</span>
      </div>

      {stats.map(s => (
        <div key={s.label} className="flex items-center justify-between gap-6">
          <span className="text-[10px] text-muted font-mono uppercase">{s.label}</span>
          <span className={`text-[10px] font-bold font-mono ${s.color}`}>{s.val}</span>
        </div>
      ))}
    </div>
  );
};

export default Performance;