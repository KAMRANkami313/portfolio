import React, { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ArrowUp,
  ArrowDown,
  CornerDownLeft,
  Mail,
  Award,
  Palette,
  ExternalLink,
} from "lucide-react";
import { GithubIcon as Github } from "./BrandIcons";
import { useAchievement } from "../../context/AchievementContext";
import { HERO_CONTENT } from "../../constants";

const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  const { unlock } = useAchievement();

  const actions = useMemo(
    () => [
      { id: "projects", label: "View Projects", icon: ExternalLink, action: () => (window.location.href = "#projects"), section: "Navigate" },
      { id: "about", label: "View About", icon: ExternalLink, action: () => (window.location.href = "#about"), section: "Navigate" },
      { id: "skills", label: "View Skills", icon: ExternalLink, action: () => (window.location.href = "#skills"), section: "Navigate" },
      { id: "contact", label: "View Contact", icon: Mail, action: () => (window.location.href = "#contact"), section: "Navigate" },
      { id: "github", label: "Open GitHub Profile", icon: Github, action: () => window.open(HERO_CONTENT.githubLink, "_blank"), section: "Social" },
      { id: "linkedin", label: "Open LinkedIn Profile", icon: ExternalLink, action: () => window.open(HERO_CONTENT.linkedinLink, "_blank"), section: "Social" },
      { id: "resume", label: "Download Resume", icon: ExternalLink, action: () => window.open(HERO_CONTENT.resumeLink, "_blank"), section: "Actions" },
      { id: "themes", label: "Browse Theme Presets", icon: Palette, action: () => document.querySelector('[aria-label="Open theme presets"]')?.click(), section: "Actions" },
    ],
    []
  );

  const filteredActions = useMemo(() => {
    if (!query.trim()) return actions;
    const q = query.toLowerCase();
    return actions.filter((a) => a.label.toLowerCase().includes(q) || a.section.toLowerCase().includes(q));
  }, [actions, query]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelectedIndex(0);
      unlock("used_command");
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen, unlock]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    if (!isOpen || filteredActions.length === 0) return;

    const handleKeyDown = (e) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % filteredActions.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredActions.length) % filteredActions.length);
      } else if (e.key === "Enter") {
        e.preventDefault();
        const action = filteredActions[selectedIndex];
        if (action) {
          action.action();
          setIsOpen(false);
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filteredActions, selectedIndex]);

  const groupedActions = useMemo(() => {
    const groups = {};
    filteredActions.forEach((a) => {
      if (!groups[a.section]) groups[a.section] = [];
      groups[a.section].push(a);
    });
    return groups;
  }, [filteredActions]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-2000 flex items-start justify-center pt-[15vh] px-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
          onClick={() => setIsOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Command palette"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -10 }}
            transition={{ duration: 0.15 }}
            className="glass-strong rounded-2xl shadow-lg w-full max-w-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10">
              <Search className="w-4 h-4 text-muted shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search commands..."
                className="flex-1 bg-transparent text-sm text-white placeholder:text-muted outline-none"
                aria-label="Search commands"
                autoComplete="off"
              />
              <kbd className="text-[10px] font-mono text-muted px-1.5 py-0.5 rounded border border-white/10">
                ESC
              </kbd>
            </div>

            <div className="max-h-[50vh] overflow-y-auto scrollbar-thin p-2">
              {filteredActions.length === 0 ? (
                <div className="py-8 text-center text-sm text-muted">No commands found</div>
              ) : (
                Object.entries(groupedActions).map(([section, items]) => (
                  <div key={section} className="mb-2">
                    <p className="text-[10px] font-mono text-muted uppercase tracking-widest px-2 py-1.5">
                      {section}
                    </p>
                    {items.map((action) => {
                      const globalIndex = filteredActions.indexOf(action);
                      const isSelected = globalIndex === selectedIndex;
                      return (
                        <button
                          key={action.id}
                          onClick={() => {
                            action.action();
                            setIsOpen(false);
                          }}
                          onMouseEnter={() => setSelectedIndex(globalIndex)}
                          className={`w-full flex items-center gap-3 px-2 py-2 rounded-lg text-left transition-colors ${
                            isSelected ? "bg-accent/10" : "hover:bg-surface-light"
                          }`}
                        >
                          <action.icon className="w-4 h-4 text-muted shrink-0" />
                          <span className={`text-sm flex-1 ${isSelected ? "text-white" : "text-muted"}`}>
                            {action.label}
                          </span>
                          {isSelected && <CornerDownLeft className="w-3 h-3 text-muted" />}
                        </button>
                      );
                    })}
                  </div>
                ))
              )}
            </div>

            <div className="flex items-center gap-4 px-4 py-2 border-t border-white/10 text-[10px] text-muted">
              <span className="flex items-center gap-1">
                <ArrowUp className="w-3 h-3" />
                <ArrowDown className="w-3 h-3" />
                Navigate
              </span>
              <span className="flex items-center gap-1">
                <CornerDownLeft className="w-3 h-3" />
                Select
              </span>
              <span className="ml-auto">Ctrl+K</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;