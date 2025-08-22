import "./globals.css";
import type { Metadata } from "next";
import GlowOverlay from "./glow-overlay";

export const metadata: Metadata = {
  title: "My Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-[100svh] bg-slate-900 relative">
        {/* mouse-follow background glow (client component) */}
        <GlowOverlay />
        {children}
      </body>
    </html>
  );
}
