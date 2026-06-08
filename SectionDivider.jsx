import React from "react";

const SectionDivider = () => {
  return (
    <div className="relative w-full h-24 overflow-hidden">
      
      {/* Base background continuation */}
      <div
        className="absolute inset-0"
        style={{
          background: "#050414",
        }}
      />

      {/* Soft glow (same vibe as your blobs) */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 50% 0%, rgba(130,69,236,0.18), transparent 60%),
            radial-gradient(circle at 20% 50%, rgba(0,180,255,0.10), transparent 55%),
            radial-gradient(circle at 80% 50%, rgba(255,255,255,0.05), transparent 60%)
          `,
          filter: "blur(40px)",
        }}
      />

      {/* Constellation-like divider line */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="10%"
          y1="60%"
          x2="30%"
          y2="40%"
          stroke="white"
          strokeWidth="1"
        />
        <line
          x1="30%"
          y1="40%"
          x2="50%"
          y2="65%"
          stroke="white"
          strokeWidth="1"
        />
        <line
          x1="50%"
          y1="65%"
          x2="70%"
          y2="45%"
          stroke="white"
          strokeWidth="1"
        />
        <line
          x1="70%"
          y1="45%"
          x2="90%"
          y2="60%"
          stroke="white"
          strokeWidth="1"
        />

        {/* small stars */}
        <circle cx="10%" cy="60%" r="2" fill="white" />
        <circle cx="30%" cy="40%" r="2" fill="white" />
        <circle cx="50%" cy="65%" r="2" fill="white" />
        <circle cx="70%" cy="45%" r="2" fill="white" />
        <circle cx="90%" cy="60%" r="2" fill="white" />
      </svg>

      {/* Fade effect into next section */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(5,4,20,1), rgba(5,4,20,0))",
        }}
      />
    </div>
  );
};

export default SectionDivider;