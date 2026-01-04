import React from "react";
import { cn } from "../../lib/cn";

export function Pill({
  children,
  tone = "default",
  className,
}: {
  children: React.ReactNode;
  tone?: "default" | "gold" | "veg";
  className?: string;
}) {
  const styles =
    tone === "gold"
      ? "border-gold-500/40 bg-gold-500/10 text-sesame-900"
      : tone === "veg"
        ? "border-sesame-600/40 bg-sesame-600/10 text-sesame-900"
        : "border-sesame-900/20 bg-cream-50 text-sesame-900";

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-medium",
        styles,
        className,
      )}
    >
      {children}
    </span>
  );
}
