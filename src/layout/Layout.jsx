import React, { useEffect } from "react";
import Lenis from "lenis";
import Navbar from "../components/sections/Navbar";

const Layout = ({ children }) => {
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
    <div className="relative min-h-screen bg-dark text-white antialiased">
      <div className="noise" />

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