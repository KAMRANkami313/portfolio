import React from "react";
import profile400 from "../../assets/profile-400w.webp";
import profile800 from "../../assets/profile-800w.webp";

const ProfileImage = () => {
  return (
    <div className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64">
      <div
        className="absolute -inset-1 rounded-full opacity-60 blur-md"
        style={{
          background: "conic-gradient(from 0deg, var(--color-accent), var(--color-accent-soft), var(--color-accent))",
          animation: "spin 8s linear infinite",
        }}
        aria-hidden="true"
      />

      <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-surface">
        <img
          src={profile400}
          srcSet={`${profile400} 400w, ${profile800} 800w`}
          sizes="(max-width: 768px) 192px, 256px"
          alt="Muhammad Kamran"
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute bottom-2 right-2 flex items-center justify-center w-7 h-7 rounded-full bg-surface border-2 border-success">
        <span className="w-3 h-3 rounded-full bg-success" />
      </div>
    </div>
  );
};

export default ProfileImage;