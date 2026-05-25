import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub } from 'react-icons/fi';

const GithubStats = () => {
  const [stats, setStats] = useState({ repos: 0 });

  useEffect(() => {
    fetch('https://api.github.com/users/KAMRANkami313')
      .then(res => res.json())
      .then(data => setStats({ repos: data.public_repos || 0 }))
      .catch(() => setStats({ repos: 12 })); 
  }, []);

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="p-4 bg-surface/50 backdrop-blur-md border border-white/10 rounded-2xl flex items-center gap-6"
    >
      <div className="text-3xl text-accent"><FiGithub /></div>
      <div className="flex gap-4">
        <div>
          <p className="text-[10px] uppercase tracking-widest text-muted">Public Repos</p>
          <p className="text-xl font-bold">{stats.repos}</p>
        </div>
        <div className="w-px h-10 bg-white/10" />
        <div>
          <p className="text-[10px] uppercase tracking-widest text-muted">Status</p>
          <p className="text-xl font-bold text-green-400">Active</p>
        </div>
      </div>
    </motion.div>
  );
};

export default GithubStats;