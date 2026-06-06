import React, { useRef, useEffect, useState } from 'react';

const Reveal = ({ children, width = "fit-content" }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.1, rootMargin: '-50px' }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ position: "relative", width, overflow: "hidden" }} ref={ref}>
      <div
        className={isVisible ? 'animate-reveal-in will-animate' : 'opacity-0'}
        style={{ opacity: isVisible ? undefined : 0 }}
      >
        {children}
      </div>

      <div
        className={`absolute inset-y-0 left-0 right-0 bg-accent z-20 pointer-events-none opacity-20 ${
          isVisible ? 'animate-reveal-overlay' : ''
        }`}
      />
    </div>
  );
};

export default Reveal;