// components/Header.tsx
"use client";
import Link from "next/link";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="lg:hidden fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-slate-800">
      <nav className="mx-auto max-w-5xl px-4 sm:px-6 h-14 flex items-center justify-between">
        <Link href="#" className="font-semibold text-emerald-400">
          RW
        </Link>
        <ul className="flex items-center gap-4 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-slate-300 supports-[hover]:hover:text-emerald-400 transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
