"use client";
import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Sidebar() {
  const [active, setActive] = useState(SECTIONS[0].id);

  useEffect(() => {
    const opts: IntersectionObserverInit = {
      root: null,
      rootMargin: "-35% 0px -55% 0px",
      threshold: [0, 0.25, 0.5, 0.75, 1],
    };
    const io = new IntersectionObserver((entries) => {
      const top = entries
        .filter((e) => e.isIntersecting)
        .sort(
          (a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0)
        )[0];
      if (top?.target?.id) setActive(top.target.id);
    }, opts);

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    // Desktop-only sticky sidebar
    <aside className="hidden lg:flex sticky top-0 h-screen flex-col justify-between py-10">
      {/* hero block (name + tagline) */}
      <header>
        <h1 className="mt-20 text-5xl font-bold text-slate-100">
          Ryan Wilkins
        </h1>
        <p className="mt-2 text-slate-400 max-w-xs">
          Designing and developing digital experiences that are intuitive,
          accessible, and built to last.
        </p>
      </header>

      {/* nav */}
      <nav aria-label="Section navigation" className="mt-10">
        <ul className="space-y-3 text-sm">
          {SECTIONS.map(({ id, label }) => {
            const isActive = active === id;
            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={[
                    "inline-flex items-center gap-3 transition-colors",
                    isActive
                      ? "text-emerald-400"
                      : "text-slate-400 hover:text-slate-200",
                  ].join(" ")}
                >
                  <span
                    className={[
                      "h-px w-10 rounded",
                      isActive ? "bg-emerald-400" : "bg-slate-700",
                    ].join(" ")}
                  />
                  <span className="tracking-wide">{label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <footer className="text-xs text-slate-500">
        © {new Date().getFullYear()} Your Name
      </footer>
    </aside>
  );
}
