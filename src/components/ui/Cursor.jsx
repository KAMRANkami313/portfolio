import React, { useEffect, useState, useRef, useCallback } from 'react';

const Cursor = () => {
  const dotRef = useRef(null);
  const posRef = useRef({ x: -100, y: -100 });
  const targetRef = useRef({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const rafRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  // Smooth following — uses transform only (GPU composited, no reflow)
  useEffect(() => {
    const ease = 0.15;

    const animate = () => {
      posRef.current.x += (targetRef.current.x - posRef.current.x) * ease;
      posRef.current.y += (targetRef.current.y - posRef.current.y) * ease;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${posRef.current.x}px, ${posRef.current.y}px, 0)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  // Detect hover on interactive elements (debounced)
  useEffect(() => {
    let mounted = true;

    const attachListeners = () => {
      if (!mounted) return;
      document.querySelectorAll('a, button, [role="button"], input, textarea, select').forEach(el => {
        el.addEventListener('mouseenter', () => mounted && setIsHovering(true));
        el.addEventListener('mouseleave', () => mounted && setIsHovering(false));
      });
    };

    attachListeners();
    const interval = setInterval(attachListeners, 5000);

    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed top-0 left-0 z-9999 hidden md:block">
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none will-animate"
        style={{
          width: isHovering ? 40 : isClicking ? 12 : 8,
          height: isHovering ? 40 : isClicking ? 12 : 8,
          backgroundColor: isHovering ? 'rgba(99, 102, 241, 0.1)' : isClicking ? 'var(--color-accent)' : 'rgba(99, 102, 241, 0.8)',
          border: isHovering ? '1px solid rgba(99, 102, 241, 0.4)' : 'none',
          borderRadius: '50%',
          marginLeft: isHovering ? -20 : isClicking ? -6 : -4,
          marginTop: isHovering ? -20 : isClicking ? -6 : -4,
          transition: 'width 0.3s, height 0.3s, background-color 0.3s, border 0.3s, margin 0.3s',
        }}
      />
    </div>
  );
};

export default Cursor;