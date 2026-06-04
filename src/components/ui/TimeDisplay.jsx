import React, { useState, useEffect } from 'react';

const TimeDisplay = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatPKTime = (date) => {
    return date.toLocaleTimeString('en-GB', {
      timeZone: 'Asia/Karachi',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });
  };

  return (
    <div className="flex items-center gap-6 font-mono select-none">
      <div className="flex flex-col items-end">
        <div className="flex items-center gap-2">
          <span className="text-[9px] font-black text-accent uppercase tracking-[0.2em]">Local_Node</span>
          <div className="w-1 h-1 rounded-full bg-accent animate-pulse" />
        </div>
        <span className="text-sm font-bold text-white tabular-nums tracking-wider">
          {formatPKTime(time)} <span className="text-[10px] text-muted">PKT</span>
        </span>
      </div>

      <div className="h-8 w-px bg-white/10" />

      <div className="flex flex-col items-start">
        <span className="text-[9px] font-black text-muted uppercase tracking-[0.2em]">Coordinates</span>
        <span className="text-sm font-bold text-white tracking-tight uppercase">
          ISB / <span className="text-muted">33.68N</span>
        </span>
      </div>
    </div>
  );
};

export default TimeDisplay;