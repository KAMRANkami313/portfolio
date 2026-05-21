import React from 'react';
import { STATS } from '../../constants';

const Stats = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-12 border-y border-white/5 bg-surface/30 backdrop-blur-sm">
      {STATS.map((stat, index) => (
        <div key={index} className="text-center">
          <h4 className="text-3xl font-bold text-white">{stat.value}</h4>
          <p className="text-muted text-sm uppercase tracking-widest">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Stats;