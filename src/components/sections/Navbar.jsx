import React, { useState, useEffect, useRef } from "react";
import { Menu, X, Award } from "lucide-react";
import { NAV_LINKS } from "../../constants";
import ThemePresets from "../ui/ThemePresets";
import TimeDisplay from "../ui/TimeDisplay";
import { useAudio } from "../../hooks/useAudio";

const Navbar = ({ onAchievementsClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const mobileMenuRef = useRef(null);
  const mobileToggleRef = useRef(null);
  const { playClick, playHover } = useAudio();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px -50% 0px" }
    );

    const sectionIds = NAV_LINKS.map((link) => link.href.replace("#", ""));
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleKeyDown = (e) => {
      if (e.key !== "Escape") return;
      setIsMobileMenuOpen(false);
      mobileToggleRef.current?.focus();
    };

    const handleFocus = (e) => {
      if (!mobileMenuRef.current?.contains(e.target) && !mobileToggleRef.current?.contains(e.target)) {
        mobileMenuRef.current?.querySelector("a, button")?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("focusin", handleFocus);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("focusin", handleFocus);
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleLinkClick = () => {
    playClick();
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-100 transition-all duration-300"
      style={{
        paddingTop: isScrolled ? "0.5rem" : "1rem",
        paddingBottom: isScrolled ? "0.5rem" : "1rem",
      }}
    >
      <div className="container mx-auto px-6">
        <div
          className={`flex items-center justify-between rounded-2xl transition-all duration-300 ${
            isScrolled ? "glass-strong shadow-md px-4 py-2.5" : "px-1 py-1"
          }`}
        >
          <a
            href="#hero"
            onClick={playClick}
            className="flex items-center gap-2 font-bold text-lg"
            aria-label="Muhammad Kamran — Home"
          >
            <span className="text-gradient">MK</span>
            <span className="text-muted">.</span>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={playClick}
                  onMouseEnter={playHover}
                  aria-current={isActive ? "page" : undefined}
                  className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
                    isActive ? "text-white" : "text-muted hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <ThemePresets />
            <TimeDisplay />
            <button
              onClick={() => {
                playClick();
                onAchievementsClick();
              }}
              className="hidden md:flex btn-ghost p-2"
              aria-label="View achievements"
              title="Achievements"
            >
              <Award size={18} />
            </button>
            <a
              href="#contact"
              onClick={playClick}
              onMouseEnter={playHover}
              className="hidden md:inline-flex btn-primary"
            >
              Hire Me
            </a>
            <button
              ref={mobileToggleRef}
              onClick={() => {
                playClick();
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }}
              className="lg:hidden p-2 text-white"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            className="lg:hidden mt-2 glass-strong rounded-2xl p-4 animate-fade-in-down"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={handleLinkClick}
                    onMouseEnter={playHover}
                    aria-current={isActive ? "page" : undefined}
                    className={`px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                      isActive ? "text-white bg-accent/10" : "text-muted hover:text-white hover:bg-surface-light"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>

            <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
              <ThemePresets />
              <button
                onClick={() => {
                  handleLinkClick();
                  onAchievementsClick();
                }}
                className="flex items-center gap-2 px-3 py-2 text-sm text-muted hover:text-white transition-colors"
                aria-label="View achievements"
              >
                <Award size={16} />
                <span>Achievements</span>
              </button>
            </div>

            <a
              href="#contact"
              onClick={handleLinkClick}
              onMouseEnter={playHover}
              className="mt-3 inline-flex btn-primary w-full justify-center"
            >
              Hire Me
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;