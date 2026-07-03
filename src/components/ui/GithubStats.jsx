import React, { useState, useEffect, useRef, useMemo } from "react";
import { motion } from "framer-motion";
import { Star, Users, GitFork, Loader2, AlertCircle } from "lucide-react";
import { GithubIcon } from "./BrandIcons";

const GITHUB_USERNAME = "KAMRANkami313";

const GithubStats = () => {
  const [stats, setStats] = useState(null);
  const [status, setStatus] = useState("idle");
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const controller = new AbortController();

    const fetchStats = async () => {
      setStatus("loading");
      try {
        const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
          signal: controller.signal,
        });
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setStats({
          repos: data.public_repos,
          followers: data.followers,
          following: data.following,
        });
        setStatus("success");
      } catch (err) {
        if (err.name === "AbortError") return;
        setStatus("error");
      }
    };

    fetchStats();
    return () => controller.abort();
  }, [isVisible]);

  const statItems = useMemo(() => {
    if (!stats) return [];
    return [
      { label: "Repos", value: stats.repos, Icon: GithubIcon },
      { label: "Followers", value: stats.followers, Icon: Users },
      { label: "Following", value: stats.following, Icon: GitFork },
    ];
  }, [stats]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="glass rounded-xl p-4 max-w-xs"
    >
      <div className="flex items-center gap-2 mb-3">
        <GithubIcon size={16} className="text-accent" />
        <span className="text-xs font-mono text-muted uppercase tracking-widest">GitHub</span>
      </div>

      {status === "loading" && (
        <div className="flex items-center justify-center py-4">
          <Loader2 className="w-5 h-5 text-muted animate-spin" />
        </div>
      )}

      {status === "error" && (
        <div className="flex items-center gap-2 py-3 text-xs text-muted">
          <AlertCircle size={14} />
          <span>Stats unavailable</span>
        </div>
      )}

      {status === "success" && stats && (
        <div className="grid grid-cols-3 gap-2">
          {statItems.map((item) => (
            <div key={item.label} className="text-center">
              <item.Icon size={14} className="text-muted mx-auto mb-1" />
              <p className="text-lg font-bold text-white">{item.value}</p>
              <p className="text-[10px] text-muted uppercase tracking-wider">{item.label}</p>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default GithubStats;