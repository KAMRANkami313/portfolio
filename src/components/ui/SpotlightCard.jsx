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

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;
    x.set(mouseXPos / rect.width - 0.5);
    y.set(mouseYPos / rect.height - 0.5);
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
      style={{ rotateX, rotateY }}
      className={`relative rounded-3xl border border-white/6 bg-surface/30 backdrop-blur-md transition-all duration-500 overflow-hidden ${className}`}
    >
      {/* Spotlight glow — pointer-events-none so it never blocks clicks */}
      <div
        className="pointer-events-none absolute -inset-px transition duration-500 z-30"
        style={{
          background: `radial-gradient(500px circle at var(--mouse-x) var(--mouse-y), rgba(var(--color-accent-rgb, 99, 102, 241), 0.1), transparent 40%)`,
          opacity,
        }}
      />

      {/* Top gradient border effect */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-accent/20 to-transparent" />

      {/* ✅ Removed translateZ(40px) and preserve-3d — these broke pointer events */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default SpotlightCard;