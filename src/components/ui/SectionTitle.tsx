import React from "react";
import { cn } from "../../lib/cn";

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("space-y-2", align === "center" && "text-center")}>
      {eyebrow ? (
        <div className="text-xs font-semibold tracking-[0.22em] text-gold-600">{eyebrow}</div>
      ) : null}
      <h2 className="font-display text-4xl leading-[1.05] tracking-[-0.02em] text-sesame-900 sm:text-5xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="max-w-2xl text-base leading-relaxed text-sesame-900/75">{subtitle}</p>
      ) : null}
    </div>
  );
}
