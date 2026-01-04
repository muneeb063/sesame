import React from "react";
import { Header } from "./SiteHeader";
import { Footer } from "./SiteFooter";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-cream-100 text-sesame-900">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gold-500/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-24 h-[520px] w-[520px] rounded-full bg-sesame-600/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-32 h-[420px] w-[420px] rounded-full bg-sesame-900/10 blur-3xl" />
      </div>

      <Header />
      <main className="bg-grain">{children}</main>
      <Footer />
    </div>
  );
}
