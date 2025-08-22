// components/ProjectCard.tsx
"use client";
import { useState } from "react";

export default function ProjectCard({
  title,
  description,
  tags,
  link,
}: {
  title: string;
  description: string;
  tags: string[];
  link?: string;
}) {
  const [pos, setPos] = useState({ x: -9999, y: -9999 });

  return (
    <a
      href={link ?? "#"}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
      }}
      className="
        group relative block rounded-xl p-5
        border border-transparent   /* no outline by default */
        bg-transparent              /* no bg by default      */
        shadow-none                 /* no shadow by default  */
        transition-colors transition-shadow duration-300
        focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60
      "
    >
      {/* mouse-follow glow (only visible on hover) */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 rounded-xl"
        style={{
          background: `radial-gradient(500px circle at ${pos.x}px ${pos.y}px, rgba(16,185,129,0.12), transparent 70%)`,
        }}
        aria-hidden
      />

      {/* on-hover visuals */}
      <div
        className="
          rounded-xl
          group-hover:bg-slate-800/70
          group-hover:border-slate-700
          group-hover:shadow-lg group-hover:shadow-emerald-500/20
          transition-colors transition-shadow duration-300
          relative
        "
      >
        <h3 className="text-slate-100 font-medium">{title}</h3>
        <p className="mt-2 text-slate-400 text-sm">{description}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {tags.map((t) => (
            <li
              key={t}
              className="text-xs text-emerald-300/90 bg-emerald-400/10 px-2 py-1 rounded"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </a>
  );
}
