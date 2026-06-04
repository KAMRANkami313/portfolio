import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const SpotlightCard = ({ children, className = "" }) => {
  const ref = useRef(null);
  const [opacity, setOpacity] = useState(0);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 20 };
  const mouseX = useSpring(x, springConfig);
  const mouseY = useSpring(y, springConfig);

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;

    const xPct = mouseXPos / rect.width - 0.5;
    const yPct = mouseYPos / rect.height - 0.5;

    x.set(xPct);
    y.set(yPct);

    ref.current.style.setProperty("--mouse-x", `${mouseXPos}px`);
    ref.current.style.setProperty("--mouse-y", `${mouseYPos}px`);
  };

  const handleMouseEnter = () => setOpacity(1);
  
  const handleMouseLeave = () => {
    setOpacity(0);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: "1000px"
      }}
      className={`relative rounded-4xl border border-white/10 bg-surface/40 backdrop-blur-md transition-all duration-500 overflow-hidden ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px transition duration-500 z-30"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(var(--color-accent-rgb, 59, 130, 246), 0.15), transparent 40%)`,
          opacity,
        }}
      />

      <div
        style={{ 
          transform: "translateZ(50px)",
          transformStyle: "preserve-3d" 
        }}
        className="relative z-10"
      >
        {children}
      </div>
    </motion.div>
  );
};

export default SpotlightCard;