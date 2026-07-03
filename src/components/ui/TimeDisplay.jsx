import React, { useState, useEffect } from "react";
import { Clock } from "lucide-react";

const TimeDisplay = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          timeZone: "Asia/Karachi",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="hidden lg:flex items-center gap-1.5 px-2 py-1 text-xs font-mono text-muted"
      title="Local time in Karachi, Pakistan"
    >
      <Clock size={12} />
      <span>{time}</span>
    </div>
  );
};

export default TimeDisplay;