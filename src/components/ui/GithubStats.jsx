import React, { useState, useEffect, useRef, useMemo } from "react";
import { motion } from "framer-motion";
import { Users, GitFork, Loader2, AlertCircle,} from "lucide-react";
import { GithubIcon } from "./BrandIcons";

const GITHUB_USERNAME = "KAMRANkami313";
const CACHE_KEY = "kamran-github-stats";
const CACHE_TTL = 6 * 60 * 60 * 1000;

const getCachedStats = () => {
  try {
    const cached = localStorage.getItem(CACHE_KEY);
    if (!cached) return null;
    const { data, timestamp } = JSON.parse(cached);
    if (Date.now() - timestamp > CACHE_TTL) return null;
    return { ...data, fromCache: true };
  } catch {
    return null;
  }
};

const getStaleCachedStats = () => {
  try {
    const cached = localStorage.getItem(CACHE_KEY);
    if (!cached) return null;
    const { data } = JSON.parse(cached);
    return { ...data, fromCache: true, stale: true };
  } catch {
    return null;
  }
};

const setCachedStats = (data) => {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({ data, timestamp: Date.now() }));
  } catch {}
};

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

    const cached = getCachedStats();
    if (cached) {
      setStats(cached);
      setStatus("success");
      return;
    }

    const controller = new AbortController();

    const fetchStats = async () => {
      setStatus("loading");
      try {
        const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
          signal: controller.signal,
          headers: { Accept: "application/vnd.github.v3+json" },
        });

        if (res.status === 403) {
          const stale = getStaleCachedStats();
          if (stale) {
            setStats(stale);
            setStatus("success");
          } else {
            setStatus("rate-limited");
          }
          return;
        }

        if (!res.ok) throw new Error("Failed to fetch");

        const data = await res.json();
        const cleanData = {
          repos: data.public_repos,
          followers: data.followers,
          following: data.following,
        };
        setCachedStats(cleanData);
        setStats(cleanData);
        setStatus("success");
      } catch (err) {
        if (err.name === "AbortError") return;
        const stale = getStaleCachedStats();
        if (stale) {
          setStats(stale);
          setStatus("success");
        } else {
          setStatus("error");
        }
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

  const showCachedNote = stats?.fromCache;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="glass rounded-xl p-4 max-w-xs"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <GithubIcon size={16} className="text-accent" />
          <span className="text-xs font-mono text-muted uppercase tracking-widest">GitHub</span>
        </div>
        {showCachedNote && (
          <span className="text-[9px] font-mono text-muted" title="Cached data">
            {stats.stale ? "cached*" : "cached"}
          </span>
        )}
      </div>

      {status === "loading" && (
        <div className="grid grid-cols-3 gap-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className="text-center">
              <div className="w-3.5 h-3.5 mx-auto mb-1 rounded bg-surface-light animate-pulse" />
              <div className="h-5 w-8 mx-auto rounded bg-surface-light animate-pulse" />
              <div className="h-2 w-10 mx-auto mt-1 rounded bg-surface-light animate-pulse" />
            </div>
          ))}
        </div>
      )}

      {(status === "error" || status === "rate-limited") && (
        <div className="flex flex-col items-center gap-2 py-3">
          <AlertCircle size={16} className="text-muted" />
          <span className="text-xs text-muted text-center">
            {status === "rate-limited" ? "Rate limited by GitHub" : "Stats unavailable"}
          </span>
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] text-accent hover:text-accent-soft transition-colors"
          >
            View profile →
          </a>
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