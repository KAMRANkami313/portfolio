import React, { useState, useEffect } from 'react';

const TimeDisplay = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const pakistanTime = time.toLocaleTimeString('en-US', {
    timeZone: 'Asia/Karachi',
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <div className="flex items-center gap-4 text-xs font-mono">
      <div className="flex flex-col items-end">
        <span className="text-muted uppercase tracking-tighter text-[9px]">Local Time (PK)</span>
        <span className="text-white font-bold">{pakistanTime}</span>
      </div>
      <div className="h-8 w-px bg-white/10" />
      <div className="flex flex-col">
        <span className="text-muted uppercase tracking-tighter text-[9px]">Current Location</span>
        <span className="text-white font-bold">Islamabad, PK</span>
      </div>
    </div>
  );
};

export default TimeDisplay;