import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub } from 'react-icons/fi';

const GithubStats = () => {
  const [stats, setStats] = useState({ repos: "00", followers: "00", loading: true });

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
          loading: false 
        });
      })
      .catch(() => {
        setStats({ repos: "15", followers: "05", loading: false });
      }); 
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5, borderColor: "rgba(59, 130, 246, 0.4)" }}
      className="p-6 bg-surface/40 backdrop-blur-2xl border border-white/10 rounded-3xl flex items-center gap-8 shadow-2xl transition-colors group"
    >
      <div className="text-4xl text-accent group-hover:scale-110 transition-transform duration-500">
        <FiGithub />
      </div>
      
      <div className="flex gap-8">
        <div className="flex flex-col">
          <span className="text-[9px] font-black uppercase tracking-[0.3em] text-muted mb-1">Repositories</span>
          <span className="text-2xl font-mono font-bold text-white tracking-tighter">
            {stats.loading ? "..." : stats.repos}
          </span>
        </div>

        <div className="w-px h-10 bg-white/10 self-center" />

        <div className="flex flex-col">
          <span className="text-[9px] font-black uppercase tracking-[0.3em] text-muted mb-1">Engine_Status</span>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-bold text-green-400 uppercase tracking-tighter">Active</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default GithubStats;