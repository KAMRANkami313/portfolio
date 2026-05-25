import React, { useEffect, useState } from "react";
import Lenis from "lenis";
import Navbar from "../components/sections/Navbar";
import { motion, useScroll, useSpring } from "framer-motion";

const Layout = ({ children }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy?.();
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const dot = document.createElement("div");

    dot.style.position = "fixed";
    dot.style.top = "0";
    dot.style.left = "0";
    dot.style.width = "8px";
    dot.style.height = "8px";
    dot.style.borderRadius = "50%";
    dot.style.background = "#ffffff";
    dot.style.pointerEvents = "none";
    dot.style.zIndex = "9999";
    dot.style.transform = "translate(-50%, -50%)";
    dot.style.transition = "transform 0.08s linear";

    document.body.appendChild(dot);

    const move = (e) => {
      dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
      dot.remove();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-dark text-white antialiased overflow-x-hidden">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-100 origin-left"
        style={{ scaleX }}
      />

      <div className="noise" />

      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.06), transparent 80%)`,
        }}
      />

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[30%] bg-blue-500/10 blur-[120px] rounded-full" />
      </div>

      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;