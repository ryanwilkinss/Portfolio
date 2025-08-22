"use client";
import { useEffect, useState } from "react";

export default function GlowOverlay() {
  const [pos, setPos] = useState({ x: -9999, y: -9999 }); // start offscreen

  useEffect(() => {
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10"
      style={{
        // adjust size/opacity to taste
        background: `radial-gradient(600px circle at ${pos.x}px ${pos.y}px, rgba(16,185,129,0.12), transparent 80%)`,
        transition: "background 150ms ease-out",
      }}
    />
  );
}
