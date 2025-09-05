// components/SectionNav.tsx
"use client";
import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function SectionNav() {
  const [active, setActive] = useState<string>(SECTIONS[0].id);

  useEffect(() => {
    const opts: IntersectionObserverInit = {
      root: null,
      rootMargin: "-40% 0px -50% 0px",
      threshold: [0, 0.25, 0.5, 0.75, 1],
    };
    const obs = new IntersectionObserver((entries) => {
      const top = entries
        .filter((e) => e.isIntersecting)
        .sort(
          (a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0)
        )[0];
      if (top?.target?.id) setActive(top.target.id);
    }, opts);

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    // Mobile-only sticky section nav. Use either this OR Header, not both.
    <nav className="lg:hidden sticky top-14 z-40 border-b border-slate-800 bg-slate-900/85 backdrop-blur">
      <ul className="mx-auto max-w-5xl px-4 sm:px-6 h-10 flex items-center gap-4 text-sm overflow-x-auto">
        {SECTIONS.map(({ id, label }) => {
          const isActive = active === id;
          return (
            <li key={id} className="shrink-0">
              <a
                href={`#${id}`}
                className={[
                  "pb-1.5 transition-colors",
                  isActive
                    ? "text-emerald-400 border-b-2 border-emerald-400"
                    : "text-slate-400 supports-[hover]:hover:text-slate-200",
                ].join(" ")}
              >
                {label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
