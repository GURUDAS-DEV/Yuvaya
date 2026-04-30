"use client";

import React from "react";
import { motion } from "framer-motion";

const reels = [
  { url: "https://www.instagram.com/reel/DXBYh0UPBF5/", id: "DXBYh0UPBF5" },
  { url: "https://www.instagram.com/reel/DVG8WERAuJj/", id: "DVG8WERAuJj" },
  { url: "https://www.instagram.com/reel/DVYlhIqAtnZ/", id: "DVYlhIqAtnZ" },
  { url: "https://www.instagram.com/reel/DU7KmA5AtB-/", id: "DU7KmA5AtB-" },
  { url: "https://www.instagram.com/reel/DUCz2Logm9i/", id: "DUCz2Logm9i" },
  { url: "https://www.instagram.com/reel/DUFyM3Fgi7T/", id: "DUFyM3Fgi7T" },
  { url: "https://www.instagram.com/reel/DU4jlITgo-j/", id: "DU4jlITgo-j" },
  { url: "https://www.instagram.com/reel/DUanJECAuhA/", id: "DUanJECAuhA" },
  { url: "https://www.instagram.com/reel/DXWmp-Fgl4N/", id: "DXWmp-Fgl4N" },
  { url: "https://www.instagram.com/reel/DU23jLxApzv/", id: "DU23jLxApzv" },
];

/* ── 200×200px placeholder card ── */
const ReelCard = ({ reel }: { reel: (typeof reels)[number] }) => {
  return (
    <a
      href={reel.url}
      target="_blank"
      rel="noopener noreferrer"
      className="relative block shrink-0 overflow-hidden rounded-[10px] transition-transform duration-300 hover:scale-[1.02]"
      style={{
        width: "200px",
        height: "200px",
        backgroundColor: "#bbbbbb",
      }}
    >
      {/* Instagram gradient border overlay on hover */}
      <div
        className="absolute inset-0 z-10 opacity-0 transition-opacity duration-300 hover:opacity-100"
        style={{
          background: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
          padding: "2px",
          borderRadius: "10px",
        }}
      >
        <div className="h-full w-full rounded-[8px] bg-neutral-900" />
      </div>

      {/* Placeholder icon */}
      <div className="relative z-0 flex h-full w-full items-center justify-center">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="1.5">
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="17.5" cy="6.5" r="1" fill="#888" stroke="none" />
        </svg>
      </div>
    </a>
  );
};

/* ── One vertical column ── */
interface ColumnProps {
  items: typeof reels;
  direction: "up" | "down";
  duration: number;
}

const ScrollingColumn = ({ items, direction, duration }: ColumnProps) => {
  const duplicated = [...items, ...items];

  const fromY = direction === "up" ? "0%" : "-50%";
  const toY = direction === "up" ? "-50%" : "0%";

  return (
    <div
      className="relative overflow-clip"
      style={{
        width: "200px",
        height: "600px",
      }}
    >
      <motion.div
        className="flex flex-col"
        style={{ gap: "10px", willChange: "transform" }}
        animate={{ y: [fromY, toY] }}
        transition={{
          y: {
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            duration: duration,
          },
        }}
      >
        {duplicated.map((reel, index) => (
          <ReelCard key={`${reel.id}-${index}`} reel={reel} />
        ))}
      </motion.div>
    </div>
  );
};

/* ── Main section ── */
const InstagramReelsScroller = () => {
  /* 6 columns with alternating directions */
  const columns = [
    { items: [reels[0], reels[5], reels[2], reels[7], reels[4]], direction: "up" as const, duration: 30 },
    { items: [reels[1], reels[6], reels[3], reels[8], reels[9]], direction: "down" as const, duration: 35 },
    { items: [reels[2], reels[7], reels[0], reels[5], reels[3]], direction: "up" as const, duration: 28 },
    { items: [reels[3], reels[8], reels[1], reels[6], reels[0]], direction: "down" as const, duration: 32 },
    { items: [reels[4], reels[9], reels[2], reels[7], reels[5]], direction: "up" as const, duration: 26 },
    { items: [reels[5], reels[0], reels[4], reels[9], reels[1]], direction: "down" as const, duration: 38 },
  ];

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "#fffdf2" }}
    >
      {/* ── Columns grid ── */}
      <div
        className="relative mx-auto flex flex-row items-start justify-center"
        style={{
          gap: "10px",
          overflow: "clip",
        }}
      >
        {columns.map((col, i) => (
          <div
            key={i}
            className={`${i >= 3 ? "hidden lg:block" : i >= 2 ? "hidden md:block" : i >= 1 ? "hidden sm:block" : ""}`}
          >
            <ScrollingColumn
              items={col.items}
              direction={col.direction}
              duration={col.duration}
            />
          </div>
        ))}
      </div>

      {/* ── Oval fog vignette overlay ── */}
      <div
        className="pointer-events-none absolute inset-0 z-20"
        style={{
          background: "radial-gradient(ellipse 75% 90% at 50% 50%, transparent 25%, #fffdf2 65%)",
        }}
      />
    </section>
  );
};

export default InstagramReelsScroller;
