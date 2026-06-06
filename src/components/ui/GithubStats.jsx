import React, { useEffect, useState, useRef, useMemo } from 'react';
import { FiGithub } from 'react-icons/fi';

const GithubStats = () => {
  const [stats, setStats] = useState({ repos: "00", followers: "00", following: "00", loading: true });
  const [contributionLevel, setContributionLevel] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  // Memoize heatmap data so it doesn't regenerate on every render
  const heatmapData = useMemo(() =>
    Array.from({ length: 64 }, () => Math.floor(Math.random() * 4))
  , []);

  // IntersectionObserver for entrance animation
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
      { threshold: 0.1 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    fetch('https://api.github.com/users/KAMRANkami313')
      .then(res => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then(data => {
        setStats({
          repos: data.public_repos.toString().padStart(2, '0'),
          followers: data.followers.toString().padStart(2, '0'),
          following: data.following.toString().padStart(2, '0'),
          loading: false
        });
        setContributionLevel(Math.min(data.public_repos * 5, 100));
      })
      .catch(() => {
        setStats({ repos: "15", followers: "05", following: "03", loading: false });
        setContributionLevel(75);
      });
  }, []);

  return (
    <div
      ref={ref}
      className={`p-6 bg-surface/40 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl transition-all duration-500 group hover:border-blue-500/40 hover:-translate-y-1 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
      }`}
      style={{ willChange: 'transform, opacity' }}
    >
      <div className="flex items-center justify-between mb-6">
        <div className="text-4xl text-accent group-hover:scale-110 transition-transform duration-500">
          <FiGithub />
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[9px] font-black text-green-400 uppercase tracking-wider">Active</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="flex flex-col">
          <span className="text-[8px] font-black uppercase tracking-[0.3em] text-muted mb-1">Repos</span>
          <span className="text-xl font-mono font-bold text-white tracking-tighter">
            {stats.loading ? "..." : stats.repos}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-[8px] font-black uppercase tracking-[0.3em] text-muted mb-1">Followers</span>
          <span className="text-xl font-mono font-bold text-white tracking-tighter">
            {stats.loading ? "..." : stats.followers}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-[8px] font-black uppercase tracking-[0.3em] text-muted mb-1">Following</span>
          <span className="text-xl font-mono font-bold text-white tracking-tighter">
            {stats.loading ? "..." : stats.following}
          </span>
        </div>
      </div>

      {/* Mini contribution bar */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-[8px] font-black uppercase tracking-[0.3em] text-muted">Contribution_Power</span>
          <span className="text-[8px] font-mono font-bold text-accent">{contributionLevel}%</span>
        </div>
        <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
          <div
            className="h-full bg-linear-to-r from-accent/40 to-accent rounded-full transition-all duration-1000"
            style={{ width: isVisible ? `${contributionLevel}%` : '0%' }}
          />
        </div>
      </div>

      {/* Mini heatmap */}
      <div ref={ref} className="grid grid-cols-8 gap-1 mt-4">
        {heatmapData.map((level, i) => (
          <div
            key={i}
            className={`aspect-square rounded-xs ${
              level === 0 ? "bg-white/5" :
              level === 1 ? "bg-accent/20" :
              level === 2 ? "bg-accent/50" : "bg-accent/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default GithubStats;