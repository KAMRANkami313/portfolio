import React, { useState } from "react";
import { motion } from "framer-motion";
import { SKILLS } from "../../constants";

const TechMarquee = () => {
  const [isPaused, setIsPaused] = useState(false);
  const doubledSkills = [...SKILLS, ...SKILLS];

  return (
    <div
      className="overflow-hidden py-8 mask-radial"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <motion.div
        className="flex gap-3 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        style={{ animationPlayState: isPaused ? "paused" : "running" }}
      >
        {doubledSkills.map((skill, i) => (
          <div
            key={`${skill.name}-${i}`}
            className="flex items-center gap-2 px-4 py-2 card whitespace-nowrap"
          >
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-sm font-medium text-white">{skill.name}</span>
            <span className="text-xs text-muted font-mono">{skill.proficiency}%</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default TechMarquee;