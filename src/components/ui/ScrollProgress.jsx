import React, { useEffect, useRef } from "react";

const ScrollProgress = () => {
  const ref = useRef(null);

  useEffect(() => {
    let rafId = null;

    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;

      if (ref.current) {
        ref.current.style.transform = `scaleX(${progress})`;
      }
      rafId = null;
    };

    const handleScroll = () => {
      if (!rafId) rafId = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 right-0 h-0.5 z-100 origin-left will-animate"
      style={{
        background: "linear-gradient(to right, var(--color-accent), var(--color-accent-soft))",
        transform: "scaleX(0)",
      }}
      aria-hidden="true"
    />
  );
};

export default ScrollProgress;